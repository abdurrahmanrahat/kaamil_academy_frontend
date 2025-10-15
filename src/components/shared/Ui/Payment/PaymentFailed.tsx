import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, HelpCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import SupportModal from "./SupportModal";

const PaymentFailed = ({ url }: { url: string }) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 via-white to-emerald-50 p-6">
      <Card className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-200/50 bg-white/70 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-[1.01]">
        {/* Header */}
        <div className="border-b border-gray-100 p-8 text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 ring-4 ring-red-200">
            <AlertCircle className="h-10 w-10 text-red-600" />
          </div>

          <h1 className="mb-2 text-2xl font-bold text-gray-900">
            পেমেন্ট ব্যর্থ হয়েছে
          </h1>
          <p className="text-gray-600">
            আপনার বিকাশ পেমেন্ট সম্পন্ন হয়নি। দয়া করে আবার চেষ্টা করুন।
          </p>
        </div>

        {/* Content */}
        <div className="pb-10 px-8">
          {/* <div className="my-6 flex items-center justify-center">
            <div className="relative h-12 w-36">
              <Image
                src={IMAGES.icon.BkashIcon}
                alt="bKash Logo"
                fill
                className="object-contain"
              />
            </div>
          </div> */}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>হোমে ফিরে যান</span>
              </Button>
            </Link>

            <Link href={url}>
              <Button className="flex items-center justify-center gap-2 bg-[#E2136E] text-white hover:bg-[#c11060] transition-all duration-300 shadow-md hover:shadow-lg">
                <RefreshCw className="h-4 w-4 animate-spin-slow" />
                <span>আবার চেষ্টা করুন</span>
              </Button>
            </Link>
          </div>

          {/* Support */}
          <div className="mt-8 flex items-center justify-center gap-1 text-sm text-gray-500">
            <HelpCircle className="h-4 w-4 text-[#007F00]" />
            <span>সাহায্য প্রয়োজন?</span>
            <SupportModal />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PaymentFailed;
