import Section01Banner from "@/components/sections/section01Banner";
import Section02Banner from "@/components/sections/section02Abbout";
import Section03Differentiators from "@/components/sections/section03Differentiators";
import Section04Features from "@/components/sections/section04Features";
import Section05Details from "@/components/sections/section05Details";
import Section06Audicence from "@/components/sections/section06Audience";
import Section07Payment from "@/components/sections/section07Payment";
import Section08Creator from "@/components/sections/section08Creator";

export default function Home() {

  return (
    <main>
      <Section01Banner />
      <Section02Banner />
      <Section03Differentiators />
      <Section04Features />
      <Section05Details />
      <Section06Audicence />
      <Section07Payment />
      <Section08Creator />
    </main>
  );
}
