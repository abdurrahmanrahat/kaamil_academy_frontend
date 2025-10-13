import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { BarChart2, BookOpen, Globe, GraduationCap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: "সহজবোধ্য ইসলামিক শিক্ষা",
      description:
        "আমাদের পাঠ্যক্রম এমনভাবে তৈরি, যাতে যেকোনো বয়সের ও পটভূমির শিক্ষার্থী সহজে কুরআন, হাদীস, ফিকহ ও সিরাহসহ গুরুত্বপূর্ণ ইসলামিক বিষয়সমূহ অনলাইনে শিখতে পারে।",
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "সকলের জন্য উন্মুক্ত",
      description:
        "যেহেতু সম্পূর্ণ অনলাইনভিত্তিক, তাই আপনি পৃথিবীর যেকোনো প্রান্ত থেকে নির্দিষ্ট সময় ছাড়াই শেখা শুরু করতে পারেন।",
    },
    {
      icon: <GraduationCap className="h-7 w-7" />,
      title: "মাদ্রাসা ও সাধারণ শিক্ষার্থীদের জন্য",
      description:
        "চাই আপনি মাদ্রাসার শিক্ষার্থী হন, চাই জেনারেল শিক্ষার, আমাদের কোর্সসমূহে সবাই নিজের জ্ঞান ও আত্মশুদ্ধির পথে এগিয়ে যেতে পারবেন।",
    },
    {
      icon: <BarChart2 className="h-7 w-7" />,
      title: "গুণগত মান ও আধুনিকতা",
      description:
        "আমরা সর্বোচ্চ মান বজায় রেখে আধুনিক প্রযুক্তির মাধ্যমে পাঠদান নিশ্চিত করি, যাতে আপনি ঘরে বসেই পান এক অনন্য ইসলামী শিক্ষার অভিজ্ঞতা।",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle text="আমাদের উদ্দেশ্য ও প্রতিশ্রুতি" />

        <div className="mt-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-md bg-white p-6 shadow-cardLightShadow transition-transform hover:scale-105 duration-300"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-primary">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
