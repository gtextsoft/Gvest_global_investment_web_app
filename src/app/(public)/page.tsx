import CTA from "@/components/features/about/CTA";
import Hero from "@/components/features/home/Hero";
import InvestorsTestimonies from "@/components/features/home/InvestorsTestimonies";
import PreviousROI from "@/components/features/home/PreviousROI";
import Subsidaries from "@/components/features/home/Subsidaries";
import WhyChooseGvest from "@/components/features/home/WhyChooseGvest";
import InvestmentPlans from "@/components/features/InvestmentPlans";

export default function Home() {
  return (
    <>
      <Hero />
      <Subsidaries />
      <WhyChooseGvest />
      <InvestmentPlans />
      <PreviousROI />
      <InvestorsTestimonies />
      <CTA />
    </>
  );
}
