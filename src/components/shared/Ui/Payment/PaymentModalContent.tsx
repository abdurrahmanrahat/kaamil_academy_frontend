import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IMAGES } from "@/image-data";
import Image from "next/image";

const PaymentModalContent = ({
  onMakePayment,
}: {
  onMakePayment: (paymentMethod: string) => void;
}) => {
  return (
    <DialogContent className="w-full max-w-[480px]!">
      <DialogHeader>
        <DialogTitle className="text-xl md:text-2xl">পেমেন্ট করুন</DialogTitle>
        <DialogDescription className="pt-2 text-black text-sm sm:text-base">
          আপনার রেজিস্ট্রেশনটি সম্পূর্ণ হয়েছে। এখন আপনার পেমেন্টটি বিকাশ এর
          মাধ্যমে সম্পন্ন করুন।
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-3 md:space-y-0 md:flex justify-center items-center gap-3 mt-4">
        <DialogClose asChild onClick={() => onMakePayment("bkash")}>
          <div className="border border-primary/20 rounded-md flex gap-1 justify-center items-center px-3 cursor-pointer hover:bg-gray-100 transition-all duration-300">
            <span>Pay with</span>{" "}
            <Image
              src={IMAGES.icon.BkashIcon}
              alt="bkash"
              width={60}
              height={20}
            />
          </div>
        </DialogClose>
        {/* <DialogClose asChild onClick={() => onMakePayment("nagad")}>
          <div className="border rounded-md flex gap-1 justify-center items-center px-3 cursor-pointer hover:bg-gray-100 transition-all duration-300">
            <span>Pay with</span>{" "}
            <Image
              src={IMAGES.icon.NagadIcon}
              alt="nagad"
              width={60}
              height={20}
            />
          </div>
        </DialogClose> */}
      </div>
      <DialogFooter></DialogFooter>
    </DialogContent>
  );
};

export default PaymentModalContent;
// অথবা নগদ
