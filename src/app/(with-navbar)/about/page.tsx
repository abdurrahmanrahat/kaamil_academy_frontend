import { Metadata } from "next";
import AboutSection from "./_components/AboutSection";
import Features from "./_components/Features";

export const metadata: Metadata = {
  title: "About | Kaamil Academy",
  description: "We provide Quran learning opportunities for general students",
};

const AboutPage = () => {
  return (
    <div>
      <AboutSection />
      <Features />
    </div>
  );
};

export default AboutPage;
