import Container from "@/components/shared/Ui/Container";
import { BookOpen } from "lucide-react";

const CourseHero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Decorative subtle stars & moon */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute top-10 left-10 text-7xl text-white/60 dark:text-white/30">
          ☪
        </div>
        <div className="absolute bottom-10 right-10 text-7xl text-white/60 dark:text-white/30">
          ☪
        </div>
        <div className="absolute top-1/3 right-1/4 text-5xl text-white/60 dark:text-white/30">
          ✦
        </div>
        <div className="absolute top-1/2 left-1/4 text-5xl text-white/60 dark:text-white/30">
          ✦
        </div>
      </div>

      <Container className="relative py-16 sm:py-24 text-center z-10">
        {/* Arabic word */}
        <div className="text-white/90 dark:text-white/80 text-2xl mb-4 font-arabic">
          الله
        </div>

        {/* Main circular badge */}
        <div className="relative w-72 sm:w-80 h-72 sm:h-80 mx-auto bg-gradient-to-br from-white/90 to-emerald-50/90 dark:from-white/20 dark:to-emerald-900/20 rounded-full flex flex-col items-center justify-center shadow-2xl border-[10px] border-white/40 dark:border-white/10 backdrop-blur-sm animate-scale-in">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-emerald-900 dark:text-emerald-100 mb-1">
              কুরআন
            </h2>
            <h2 className="text-4xl font-extrabold text-emerald-900 dark:text-emerald-100 mb-1">
              শিক্ষা
            </h2>
            <h1 className="text-5xl font-extrabold text-primary mb-3">কোর্স</h1>
            <BookOpen className="w-14 h-14 text-emerald-700 dark:text-emerald-400 mx-auto" />
          </div>

          {/* Soft glow ring effect */}
          <div className="absolute inset-0 rounded-full ring-8 ring-white/30 dark:ring-emerald-400/10 blur-xl"></div>
        </div>

        {/* Batch info card */}
        <div className="mt-10 max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
          <div className="w-full bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 text-white shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              ব্যাচ–০৩ (মেয়ে)
            </h3>
            <p className="text-lg mb-1">বাংলাদেশ সময় রাত ৮.৩০টা থেকে</p>
            <p className="text-base opacity-90">শনিবার, সোমবার ও বুধবার</p>
          </div>
          <div className="w-full bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 text-white shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              ব্যাচ–০৪ (ছেলে)
            </h3>
            <p className="text-lg mb-1">বাংলাদেশ সময় রাত ১০টা থেকে</p>
            <p className="text-base opacity-90">শনিবার, সোমবার ও বুধবার</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseHero;
