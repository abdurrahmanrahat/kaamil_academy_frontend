import Container from "@/components/shared/Ui/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Calendar,
  Clock,
  Star,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CourseDetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-cyan-50 to-emerald-100 relative overflow-hidden">
      <div className="relative z-10">
        {/* Header with Islamic Design */}
        <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 relative overflow-hidden">
          {/* Decorative Islamic Border */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500"></div>
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500"></div>

          <div className="container mx-auto px-4 py-12 text-center relative">
            {/* Allah in Arabic */}
            <div className="text-white/80 text-2xl mb-4 font-arabic">الله</div>

            {/* Main Title Circle */}
            <div className="relative inline-block">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-white/90 to-cyan-50/90 rounded-full flex items-center justify-center shadow-2xl border-8 border-white/50">
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-800 mb-2">
                    কুরআন
                  </div>
                  <div className="text-4xl font-bold text-teal-800 mb-4">
                    শিক্ষা
                  </div>
                  <div className="text-5xl font-bold text-emerald-600 mb-4">
                    কোর্স
                  </div>
                  <BookOpen className="w-16 h-16 text-teal-600 mx-auto" />
                </div>
              </div>

              {/* Decorative Diamond */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rotate-45 shadow-cardLightShadow"></div>
            </div>

            {/* Batch Information */}
            <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/30">
                <h3 className="text-2xl font-bold mb-4 text-amber-200">
                  ব্যাচ-১
                </h3>
                <p className="text-lg mb-2">বাংলাদেশ সময় রাত ৭:১৫ থেকে</p>
                <p className="text-base">শনি, সোম, বুধ (শুধু বোনদের জন্য)</p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/30">
                <h3 className="text-2xl font-bold mb-4 text-amber-200">
                  ব্যাচ-২
                </h3>
                <p className="text-lg mb-2">বাংলাদেশ সময় সকাল ১০টা থেকে</p>
                <p className="text-base">
                  রবি, মঙ্গল, জুম্মা (শুধু ভাইদের জন্য)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Container className="py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Instructor */}
            <div className="lg:col-span-1">
              <Card className="bg-white/80 backdrop-blur-sm border-2 border-teal-200 shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-40 mx-auto mb-4 rounded-md overflow-hidden">
                    <Image
                      src="https://i.ibb.co/fdnN8Hcc/FB-IMG-1705805240523.jpg"
                      alt="Instructor"
                      width={128}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge className="bg-primary text-white mb-2">পরিচালক</Badge>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    ইয়াসিন আরাফাত
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">অধ্যয়নরত</p>
                  <p className="text-xs text-gray-500">
                    আন্তর্জাতিক ইসলামী বিশ্ববিদ্যালয় চট্টগ্রাম
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {/* Course Info Cards */}
                <Card className="bg-white/90 backdrop-blur-sm border-2 border-cyan-200 shadow-cardLightShadow transition-shadow">
                  <CardContent className="px-6 py-2 text-center">
                    <BookOpen className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      মোট ক্লাস- ১৮টি
                    </h3>
                    <p className="text-sm text-gray-600">
                      কোর্সটি ছেলে-মেয়ে উভয়ের জন্য।
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-2 border-emerald-200 shadow-cardLightShadow transition-shadow">
                  <CardContent className="px-6 py-2 text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      ৳২৫০
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      রেজিস্ট্রেশন ফি
                    </h3>
                    <p className="text-sm text-gray-600">
                      আর কোন অতিরিক্ত ফি নাই।
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-pink-50 to-rose-100 border-2 border-rose-200 shadow-cardLightShadow transition-shadow">
                  <CardContent className="px-6 py-2 text-center">
                    <Award className="w-12 h-12 text-rose-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg text-rose-700 mb-2">
                      একদম বেসিক থেকে
                    </h3>
                    <p className="text-sm text-rose-600">
                      পড়ানো হবে (হরফ থেকে)
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-2 border-blue-200 shadow-cardLightShadow transition-shadow">
                  <CardContent className="px-6 py-2 text-center">
                    <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      রেজিস্ট্রেশন শেষ তারিখ
                    </h3>
                    <p className="text-sm text-blue-600 font-semibold">
                      ২৬ই জুন ২০২৫ সন্ধ্যা পর্যন্ত
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm border-2 border-purple-200 shadow-cardLightShadow transition-shadow">
                  <CardContent className="px-6 py-2 text-center">
                    <Video className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      ক্লাসের মাধ্যম- Zoom App
                    </h3>
                    <p className="text-sm text-purple-600">
                      প্রতিটা ক্লাসের রেকর্ড দেওয়া হবে।
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-emerald-200 shadow-cardLightShadow transition-shadow">
                  <CardContent className="px-6 py-2 text-center">
                    <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                    <h3 className="font-bold text-lg text-emerald-700 mb-2">
                      উদ্বোধনী ক্লাস
                    </h3>
                    <p className="text-sm text-emerald-600 font-semibold">
                      ২৭ই জুন (নির্ধারিত সময়)
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Sidebar - Enrollment */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-2xl sticky top-6">
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="text-4xl font-bold mb-2">৳২৫০</div>
                  <p className="text-emerald-100">রেজিস্ট্রেশন ফি</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Link href={`/quran-lc-basic/registration`} className="block">
                    <Button className="w-full h-11">
                      <span>রেজিস্ট্রেশন করুন</span> <ArrowUpRight />
                    </Button>
                  </Link>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
                      <span>মোট ক্লাস:</span>
                      <span className="font-bold">১৮টি</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/20 rounded-lg p-3">
                      <span>শিক্ষার্থী:</span>
                      <span className="font-bold">৩১৬+</span>
                    </div>
                  </div>

                  <div className="text-center text-emerald-100 text-sm">
                    <p className="mb-2">আসসালামু আলাইকুম</p>
                    <p>রেজিস্ট্রেশন সম্পন্ন হলে WhatsApp গ্রুপে যুক্ত হবেন</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>

        {/* Footer */}
        {/* <div className="bg-gradient-to-r from-teal-800 to-emerald-800 py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <h3 className="text-2xl font-bold">Kaamil Academy</h3>
                <p className="text-emerald-200 text-sm">
                  কুরআন সুন্নাহর এক অনন্য প্রাতিষ্ঠান
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
