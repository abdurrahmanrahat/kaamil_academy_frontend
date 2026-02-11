import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, PlayCircle } from "lucide-react";

const dates = [
  {
    icon: Calendar,
    title: "রেজিস্ট্রেশনের শেষ তারিখ",
    date: "২১ই ফেব্রুয়ারি",
    time: "সন্ধ্যা পর্যন্ত",
  },
  {
    icon: PlayCircle,
    title: "উদ্বোধনী ক্লাস",
    date: "২২ই ফেব্রুয়ারি",
    time: "নির্ধারিত সময়ে",
  },
];

const ImportantDates = () => {
  return (
    <section className="py-14 md:py-20 bg-gradient-soft">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle text="গুরুত্বপূর্ণ তারিখসমূহ" />

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {dates.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="border border-primary/25 bg-white/70 dark:bg-primary/5 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl"
                >
                  <CardContent className="p-8 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20">
                        <Icon
                          className="w-6 h-6 text-primary dark:text-primary/80"
                          strokeWidth={2}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {item.title}
                      </h3>

                      <div>
                        <p className="text-3xl font-bold text-primary dark:text-primary/80">
                          {item.date}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ImportantDates;
