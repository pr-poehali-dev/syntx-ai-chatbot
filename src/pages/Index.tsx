import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutPlatform from "@/components/AboutPlatform";
import TelegramBot from "@/components/TelegramBot";
import PricingDetails from "@/components/PricingDetails";
import FreeAccess from "@/components/FreeAccess";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Learning from "@/components/Learning";
import TechnicalFeatures from "@/components/TechnicalFeatures";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ai-dark via-slate-900 to-ai-dark text-white font-open-sans">
      <Header />
      <HeroSection />
      <AboutPlatform />
      <TelegramBot />
      <PricingDetails />
      <FreeAccess />
      <Features />
      <Pricing />
      <Learning />
      <TechnicalFeatures />
      <Reviews />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;