import { quranLCBasicPaymentAction } from "@/app/actions/quran-lc-basic";
import PaymentModalContent from "@/components/shared/Ui/Payment/PaymentModalContent";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

type TQuranLCBasicPaymentModalProps = {
  showQuranLCBasicPaymentModal: boolean;
  setShowQuranLCBasicPaymentModal: (open: boolean) => void;
  studentRegisterId: string;
};

const QuranLCBasicPaymentModal = ({
  showQuranLCBasicPaymentModal,
  setShowQuranLCBasicPaymentModal,
  studentRegisterId,
}: TQuranLCBasicPaymentModalProps) => {
  const handleMakePayment = async (paymentMethod: string) => {
    try {
      const paymentData = {
        amount: 350,
        // amount: 1,
        paymentForId: studentRegisterId,
        paymentSuccessURL: `/quran-lc-basic/success`,
        paymentFailedURL: `/quran-lc-basic/fail`,
        paymentMethod,
      };

      const res = await quranLCBasicPaymentAction(paymentData);
      console.log("res from payment", res);

      if (res.success) {
        window.location.href = res.data;
      } else {
        toast.error(res?.message || "Something went wrong!");
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong!");
    }
  };

  return (
    <Dialog
      open={showQuranLCBasicPaymentModal}
      onOpenChange={setShowQuranLCBasicPaymentModal}
    >
      <DialogTrigger asChild>
        {/* <Trash2 className="text-red-700 cursor-pointer" /> */}
      </DialogTrigger>
      <PaymentModalContent onMakePayment={handleMakePayment} />
    </Dialog>
  );
};

export default QuranLCBasicPaymentModal;
