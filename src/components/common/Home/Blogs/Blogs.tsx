import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { BlogCard } from "./BlogCard";

const blogs = [
  {
    _id: "1",
    title: "ট্রান্সজেন্ডার হওয়া কি জন্মগত বিষয়?",
    image: "https://i.ibb.co/zW2HQnR0/blog1.jpg",
    description:
      "গুরুত্বপূর্ণ বিষয় হচ্ছে—ট্রান্সজেন্ডার শনাক্তকরণে কোনো মেডিক্যাল পরীক্ষানিরীক্ষা নেই (যেমন: ডায়াবেটিস পরীক্ষার মতো), কেননা এটি মনের ইচ্ছাধীন (self-identified) এবং কিছু প্রশ্নমালার (Questionnaire) ওপর জরিপ করে শনাক্ত করা হয়।",
  },
  {
    _id: "2",
    title: "কোরআন তিলাওয়াতের আদব ও শিষ্টাচার।",
    image: "https://i.ibb.co/PZhLj1Nx/blog2.jpg",
    description:
      "কোরআন মহান আল্লাহর পাক কালাম বা পবিত্র বাণী। কোরআন শব্দের অর্থ যা পাঠ করা হয়, পাঠযোগ্য ও বারবার পাঠের উপযুক্ত। কোরআন অর্থ যা নিকটে পৌঁছে দেয় বা নৈকট্য অর্জনের মাধ্যম। কোরআন তিলাওয়াতের মাধ্যমে আল্লাহ তা’আলার নৈকট্য অর্জন করা যায় বলেই এই নামকরণ।",
  },
  {
    _id: "3",
    title: "যৌবন খাহেশাতের শিল্প নয় নেকির সৌন্দর্য।",
    image: "https://i.ibb.co/WNfW3DBK/blog3.jpg",
    description:
      "মানুষের জীবনের প্রতিটি ধাপই গুরুত্বপূর্ণ। শৈশব, কৈশোর, যৌবন, পৌঢ়ত্ব বা বার্ধক্য- জীবনের কোনো পর্যায়ই মূলত এমন নয় যে, সে সময়ে জীবনকে পরিশীলিত ও সুন্দর রাখার প্রয়োজন নেই; যে কোনো রকম খেয়াল খুশি ও প্রবৃত্তিজাত স্রাতের মধ্যে ছেড়ে দেওয়া যায়। তবে এসবের মধ্যেও কৈশোরে-যৌবনে জীবনের শক্তি, গতি ও প্রাচুর্য থাকে সবচেয়ে বেশি। এর সঙ্গে থাকে জীবন ও জগতের অনুদ্ঘাটিত, এমনকি অপরিমিত আকাক্সক্ষার বিচিত্র হাতছানি।",
  },
];

const Blogs = () => {
  return (
    <Container className="py-16 lg:py-24">
      <SectionTitle text="ইসলামিক ব্লগ" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </Container>
  );
};

export default Blogs;
