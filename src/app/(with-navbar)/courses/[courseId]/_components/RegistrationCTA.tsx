import Container from "@/components/shared/Ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const RegistrationCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-soft">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-2xl bg-primary text-white dark:text-white shadow-xl p-10 sm:p-14 animate-scale-in">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full  -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-10 translate-y-10"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-6 flex justify-center">
                <div className="bg-white/20 p-3 rounded-full">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-2 leading-snug">
                আজই শুরু করুন আপনার কুরআন শিক্ষার যাত্রা
              </h2>

              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                সীমিত সিট — দেরি না করে এখনই রেজিস্ট্রেশন সম্পন্ন করুন
              </p>

              <div className="mb-6">
                <h4 className="flex items-center justify-center gap-2">
                  <span className="text-4xl font-bold">৳২৫০</span>{" "}
                  <span className="text-emerald-100 text-sm">
                    (রেজিস্ট্রেশন ফি)
                  </span>
                </h4>
              </div>

              <Link href="/quran-lc-basic/registration">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-bold text-base px-10 py-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300 group"
                >
                  এখনই রেজিস্ট্রেশন করুন
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <p className="mt-4 text-sm text-white/80">
                রেজিস্ট্রেশন সংক্রান্ত যেকোনো প্রশ্নের জন্য আমাদের সাথে যোগাযোগ
                করুন: 01788880835
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RegistrationCTA;
