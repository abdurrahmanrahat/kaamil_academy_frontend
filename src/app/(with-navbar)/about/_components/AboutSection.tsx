import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle text="আমাদের সম্পর্কে" />

          <p className="mb-8 text-lg text-gray-700">
            বর্তমান শিক্ষাব্যবস্থায় অনেকেই দ্বিধায় ভোগেন—জেনারেল শিক্ষা, না
            দ্বীনি শিক্ষা? বাংলাদেশের শিক্ষাব্যবস্থা মূলত দুই ভাগে বিভক্ত:
            সাধারণ শিক্ষা (স্কুল, কলেজ, বিশ্ববিদ্যালয়) এবং ধর্মীয় শিক্ষা
            (মাদ্রাসা, হেফজখানা ইত্যাদি)।
          </p>
          <p className="mb-8 text-lg text-gray-700">
            এই বিভাজনের কারণে একজন শিক্ষার্থী হয় আধুনিক জ্ঞান অর্জন করে দ্বীনের
            গভীরতা থেকে বঞ্চিত হয়, নয়তো দ্বীনি শিক্ষা নিতে গিয়ে জেনারেল
            পড়াশোনায় পিছিয়ে পড়ে। ঠিক এই জায়গাতেই আমরা তৈরি করেছি
            &quot;কামিল একাডেমি&quot;– একটি আধুনিক প্রযুক্তিনির্ভর ইসলামিক
            অনলাইন শিক্ষা প্ল্যাটফর্ম, যা সাধারণ শিক্ষিত ভাই-বোনদের ঘরে বসেই
            দ্বীনি জ্ঞানে সমৃদ্ধ হওয়ার সুযোগ করে দেয়।
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
