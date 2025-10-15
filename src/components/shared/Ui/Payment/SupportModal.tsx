import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircle, Phone, PhoneCall } from "lucide-react";

const SupportModal = () => {
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <button className="font-medium text-primary hover:text-primary/90 hover:underline transition-colors cursor-pointer">
          সাপোর্ট
        </button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="max-w-[480px] rounded-2xl border border-gray-200 bg-white/90 shadow-lg backdrop-blur-md">
        <DialogHeader className="space-y-3 text-center">
          <DialogTitle className="text-2xl font-semibold text-[#007F00]">
            Need Support?
          </DialogTitle>

          <DialogDescription className="text-gray-600 leading-relaxed text-[15px]">
            অনুগ্রহ করে আরও বিস্তারিত তথ্যের জন্য অথবা যেকোনো সহায়তা পেতে নিচের
            যেকোনো মাধ্যম ব্যবহার করুন। আমরা আপনার প্রশ্নের উত্তর দিতে সদা
            প্রস্তুত! 💬
          </DialogDescription>
        </DialogHeader>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* WhatsApp */}
          <a
            href="https://wa.me/8801788880835"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-full bg-[#20b858] hover:bg-[#25D366] text-white font-medium flex items-center gap-2 transition-all duration-300">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp এ যোগাযোগ করুন</span>
            </Button>
          </a>

          {/* Phone Call */}
          <a href="tel:01788880835" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full border-[#007F00] text-[#007F00] hover:bg-[#007F00]/10 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>কল করুন</span>
            </Button>
          </a>
        </div>

        <DialogFooter className="mt-4 flex sm:justify-center">
          <div className="flex items-center justify-center text-gray-700 text-sm">
            <PhoneCall className="w-5 h-5" /> <span>+880 1788-880835</span>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SupportModal;
