import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import QuoteSection from "@/components/sections/QuoteSection";
import WhyRimalSection from "@/components/sections/WhyRimalSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <WhyRimalSection />
      <PartnersSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
