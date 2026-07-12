# Template Social Media Pro — Landing Page

Página de vendas do infoproduto **Template Social Media Pro**, do estúdio [OnzeOnze](https://www.instagram.com/studio.onzeonze?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==).

Landing page estática de conversão, com 9 seções e integração direta ao checkout da Hotmart.

🔗 **Produção:** [templatesocialmediapro.com.br](https://templatesocialmediapro.com.br)

---

## Stack

| Tecnologia | Uso |
|---|---|
| **Next.js 16** | Framework React com App Router e SSG |
| **TypeScript** | Tipagem estrita |
| **Tailwind CSS v4** | Estilização |
| **shadcn/ui** | Componentes base |
| **lucide-react** | Ícones |
| **Cloudflare Pages** | Hospedagem e CDN |

---

## Rodando localmente

```bash
# 1. Clone o repositório
git clone https://github.com/PedroHammes/onzeonze-lp-tsmp.git
cd onzeonze-lp-tsmp

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev
```

O projeto ficará disponível em [http://localhost:3000](http://localhost:3000).

---

## Build de produção

```bash
npm run build
```

O output estático é gerado na pasta `out/`.

---

## Desafios e soluções técnicas

### Deploy no Cloudflare Pages com Next.js 16

O caminho documentado para hospedar Next.js no Cloudflare Pages é o adapter `@cloudflare/next-on-pages`. Ao configurá-lo, encontrei três problemas:

1. **Conflito de peer dependencies**: o adapter exige `@cloudflare/workers-types@4`, enquanto o `wrangler@4` exige a versão 5.

2. **Recursão de build**: o `next-on-pages` chama `vercel build` internamente, que por sua vez chama `npm run build`. Com o script `build` apontando para o próprio adapter, o processo entrava em loop infinito.

3. **Adapter deprecado**: o log de build na Cloudflare mostrou que o `@cloudflare/next-on-pages` foi descontinuado e atualizado para o OpenNext.

**Solução:** em vez de contornar os conflitos com flags (`--legacy-peer-deps`, `overrides`), reavaliei a necessidade do adapter.

O projeto é uma landing page **puramente estática** — sem rotas dinâmicas, sem API routes, sem Server Actions. Não há nada que exija runtime no servidor. O adapter existe para dar suporte a recursos que este projeto simplesmente não usa.

A solução foi remover o adapter e usar o **static export nativo do Next.js**:

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};
```

O `images.unoptimized` é necessário porque o otimizador de imagens do Next.js depende de um servidor — inexistente em export estático.

O build passou a gerar HTML/CSS/JS puro na pasta `out/`, servido diretamente pelo Cloudflare Pages. Sem adapter, sem conflito de dependências, sem camadas intermediárias.

**Aprendizado:** nem todo problema de build precisa de mais ferramenta. Às vezes a solução é remover a ferramenta que não deveria estar ali.
