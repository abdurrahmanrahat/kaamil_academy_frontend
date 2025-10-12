import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, FileText, Laptop, Type, Users, Video } from "lucide-react";
import Image from "next/image";

const CourseOverview = () => {
  const courseDetails = [
    {
      icon: Users,
      title: "উন্মুক্ত সকলের জন্য",
      value: "ছেলে-মেয়ে উভয়ের জন্য",
    },
    {
      icon: Type,
      title: "শেখানো হবে",
      value: "একদম বেসিক থেকে (হরফ থেকে)",
    },
    {
      icon: FileText,
      title: "মোট ক্লাস",
      value: "২০টি",
    },
    {
      icon: Clock,
      title: "কোর্সের মেয়াদ",
      value: "দেড় মাস",
    },
    {
      icon: Laptop,
      title: "ক্লাসের মাধ্যম",
      value: "Zoom App",
    },
    {
      icon: Video,
      title: "রেকর্ড সুবিধা",
      value: "প্রত্যেক লাইভ ক্লাসের রেকর্ড প্রদান করা হবে",
    },
  ];

  return (
    <section className="py-14 md:py-20 px-4 bg-gradient-soft transition-colors duration-500">
      <Container>
        <div className="grid lg:grid-cols-3 lg:place-items-center gap-12">
          {/* Instructor Section */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 dark:bg-primary/10 backdrop-blur-xl border border-primary/40 dark:border-primary/30 shadow-lg hover:shadow-primary/30 transition-all duration-500 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-40 h-40 mx-auto mb-5 rounded-xl overflow-hidden shadow-lg ring-2 ring-primary/30">
                  <Image
                    src="https://i.ibb.co/fdnN8Hcc/FB-IMG-1705805240523.jpg"
                    alt="Instructor"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <Badge className="bg-primary text-white dark:bg-primary/80 mb-3 px-3 py-1">
                  পরিচালক
                </Badge>
                <h3 className="font-bold text-2xl text-primary dark:text-primary/80 mb-1">
                  ইয়াসিন আরাফাত
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  আন্তর্জাতিক ইসলামী বিশ্ববিদ্যালয় চট্টগ্রাম
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Course Details Section */}
          <div className="lg:col-span-2">
            <SectionTitle text="কোর্স সম্পর্কে" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseDetails.map((detail, index) => (
                <div
                  key={index}
                  className="group bg-white/70 dark:bg-primary/10 border border-primary/20 dark:border-primary/10 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <detail.icon className="w-7 h-7 text-primary dark:text-primary/80" />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300 tracking-wide">
                      {detail.title}
                    </h3>
                    <p className="text-gray-900 dark:text-gray-100 font-medium leading-relaxed">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseOverview;
