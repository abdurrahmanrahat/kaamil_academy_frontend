import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { CheckCircle2 } from "lucide-react";

const WhoCanJoin = () => {
  const eligibility = [
    "যারা একদম হরফ থেকে কুরআন শিখতে চান",
    "যারা আগে শিখেও মনে রাখতে পারেননি",
    "যারা পড়তে পারেন, কিন্তু ভুল হয়",
    "যারা ব্যস্ততার কারণে কোথাও গিয়ে শেখার সুযোগ পাচ্ছেন না",
    "যাদের বয়স ১৬ থেকে ৫০ বছরের মধ্যে",
  ];

  return (
    <section className="bg-gradient-soft">
      <Container className="py-14 md:py-20 ">
        <div className="relative w-full max-w-4xl mx-auto z-10">
          <SectionTitle text="এই কোর্সটি যাদের জন্য" />

          <div className="grid md:grid-cols-2 gap-6">
            {eligibility.map((item, index) => (
              <div
                key={index}
                className="group bg-white/70 dark:bg-primary/10 border border-primary/20 dark:border-primary/10 rounded-xl p-5 shadow-sm hover:shadow-md hover:shadow-primary/20 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 dark:bg-primary/20 p-2.5 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-5 h-5 text-primary dark:text-primary/80" />
                  </div>
                  <p className="text-gray-900 dark:text-gray-100 leading-relaxed pt-1 font-medium">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhoCanJoin;
