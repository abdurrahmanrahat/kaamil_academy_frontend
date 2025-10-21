import Container from "@/components/shared/Ui/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Calendar,
  CheckCircle,
  Info,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import UnAuthorizedUi from "./_components/UnAuthorizedUi";

type TQuranLCBasicSuccessProps = {
  verificationToken: string;
};

const QuranLCBasicRegistrationSuccessPage = async (props: {
  searchParams: Promise<TQuranLCBasicSuccessProps>;
}) => {
  const searchParams = await props?.searchParams;

  // const isExpire = isTokenExpired(searchParams.verificationToken);

  if (
    !searchParams.verificationToken ||
    searchParams.verificationToken !== process.env.NEXT_PUBLIC_JWT_SECRET
  ) {
    return <UnAuthorizedUi />;
  }

  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl border-green-200 shadow-cardLightShadow overflow-hidden p-0 m-0">
          {/* Success Banner */}
          <div className="bg-green-600 text-white py-6 px-4 md:px-8 text-center relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="w-full h-full bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat-space"></div>
            </div>
            <div className="relative z-10">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold">
                আপনার রেজিষ্ট্রেশন সম্পন্ন হয়েছে
              </h1>
              <p className="text-green-100 mt-1">জাযাকাল্লাহু খাইর</p>
            </div>
          </div>

          <CardContent className="py-6 px-4 md:px-8 m-0">
            {/* Welcome Message */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                কুরআনের ভুবনে আপনাকে স্বাগতম
              </h2>
              <p className="text-gray-600">
                সার্বক্ষণিক উস্তাজদের সহযোগিতা পেতে এবং সকল দিকনির্দেশনা জানতে
                আমাদের WhatsApp গ্রুপে যুক্ত হোন।
              </p>
            </div>

            {/* WhatsApp Groups */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="border-green-100 shadow-cardLightShadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-medium text-gray-800">
                      ছেলেদের WhatsApp গ্রুপ
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    ছেলেদের জন্য নির্ধারিত WhatsApp গ্রুপে যোগ দিন এবং আপডেট পান
                  </p>
                  <Link
                    href="https://chat.whatsapp.com/LTObJmj2frw9C5rkgqRwbP"
                    target="_blank"
                  >
                    <Button className="w-full cursor-pointer">
                      গ্রুপে যোগ দিন
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-green-100 shadow-cardLightShadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-medium text-gray-800">
                      মেয়েদের WhatsApp গ্রুপ
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    মেয়েদের জন্য নির্ধারিত WhatsApp গ্রুপে যোগ দিন এবং আপডেট
                    পান
                  </p>
                  <Link
                    href="https://chat.whatsapp.com/DDu0ZumSLML0vVmsDApAxy"
                    target="_blank"
                  >
                    <Button className="w-full cursor-pointer">
                      গ্রুপে যোগ দিন
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Important Information */}
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-amber-50 border border-amber-100 rounded-lg">
                <Calendar className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-700">ক্লাস শুরু</h4>
                  <p className="text-amber-600">১ নভেম্বর ২০২৫</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <Info className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-700">
                    গুরুত্বপূর্ণ তথ্য
                  </h4>
                  <p className="text-blue-600">
                    পরবর্তী দিকনির্দেশনা WhatsApp গ্রুপে জানানো হবে ইনশাআল্লাহ
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-green-50 border border-green-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-700">
                    কোর্স সম্পর্কে
                  </h4>
                  <p className="text-green-600">
                    এই কোর্সে আপনি কুরআন শিক্ষার মৌলিক বিষয়গুলো শিখতে পারবেন
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default QuranLCBasicRegistrationSuccessPage;
