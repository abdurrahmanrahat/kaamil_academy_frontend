import Container from "@/components/shared/Ui/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const UnAuthorizedUi = () => {
  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl border-red-200 shadow-cardLightShadow">
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
                আপনি যদি কুরআন শিক্ষা কোর্সে রেজিস্ট্রেশন করে থাকেন, তাহলে সঠিক
                লিংক ব্যবহার করুন অথবা আমাদের সাথে যোগাযোগ করুন।
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
};

export default UnAuthorizedUi;
