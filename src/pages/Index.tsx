import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <main>
        <HeroSection />
        <MarqueeSection />
        <WorkSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
