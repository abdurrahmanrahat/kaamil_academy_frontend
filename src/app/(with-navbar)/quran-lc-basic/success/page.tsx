"use client";

import Container from "@/components/shared/Ui/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  BookOpen,
  Calendar,
  CheckCircle,
  Info,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const QuranLCBasicRegistrationSuccessPage = () => {
  const searchParams = useSearchParams();
  const secret = searchParams.get("secret");

  // Manual secret key check - hardcoded for simplicity
  const isValidSecret = secret === process.env.NEXT_PUBLIC_SECRET_URL_KEY;

  if (!isValidSecret) {
    return (
      <Container>
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl border-red-200 shadow-xl">
            <CardHeader className="text-center pb-2">
              <div className="bg-red-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-12 h-12 text-red-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-red-700">
                অননুমোদিত অ্যাক্সেস
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6 pt-4">
              <div className="space-y-3 px-4">
                <p className="text-lg font-medium text-gray-800">
                  দুঃখিত, আপনি এই পৃষ্ঠাটি দেখার অনুমতি পাননি।
                </p>
                <p className="text-gray-600">
                  আপনি যদি কুরআন শিক্ষা কোর্সে রেজিস্ট্রেশন করে থাকেন, তাহলে
                  সঠিক লিংক ব্যবহার করুন অথবা আমাদের সাথে যোগাযোগ করুন।
                </p>
              </div>
              {/* <div className="bg-red-50 border border-red-100 rounded-lg p-4 mx-auto max-w-md">
                <p className="text-red-600 text-sm">
                  যদি আপনি মনে করেন এটি একটি ত্রুটি, অনুগ্রহ করে আমাদের সাথে
                  যোগাযোগ করুন।
                </p>
              </div> */}
            </CardContent>
          </Card>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl border-green-200 shadow-cardLightShadow overflow-hidden p-0">
          {/* Success Banner */}
          <div className="bg-green-600 text-white py-6 px-8 text-center relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="w-full h-full bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat-space"></div>
            </div>
            <div className="relative z-10">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold">
                আপনার রেজিষ্ট্রেশন সম্পন্ন হয়েছে
              </h1>
              <p className="text-green-100 mt-1">জাযাকাল্লাহু খাইর</p>
            </div>
          </div>

          <CardContent className="p-8">
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
                    href="https://chat.whatsapp.com/L6AwvQkar2yE1wXOjyE1sy"
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
                    href="https://chat.whatsapp.com/I12CDhv0aSwLk6p7qpYVyz"
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
                  <p className="text-amber-600">১লা জুলাই থেকে</p>
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
