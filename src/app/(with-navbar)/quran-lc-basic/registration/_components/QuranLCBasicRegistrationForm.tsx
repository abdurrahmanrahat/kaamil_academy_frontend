"use client";

import { addQuranLCBasicStudentToDB } from "@/app/actions/quran-lc-basic";
import KADatePicker from "@/components/shared/Forms/KADatePicker";
import KAForm from "@/components/shared/Forms/KAForm";
import KAInput from "@/components/shared/Forms/KAInput";
import KASelect from "@/components/shared/Forms/KASelect";
import { LoaderSpinner } from "@/components/shared/Ui/LoaderSpinner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const quranLCBasicRegistrationSchema = z.object({
  userName: z.string().min(1, "আপনার নাম আবশ্যক"),
  userGender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "জেন্ডার নির্বাচন করুন" }),
  }),
  dateOfBirth: z.string().min(1, "জন্ম তারিখ আবশ্যক"),
  profession: z.string().min(1, "পেশা আবশ্যক"),
  address: z.string().min(1, "ঠিকানা আবশ্যক"),
  phoneNumber: z.string().min(11, "সঠিক মোবাইল নাম্বার দিন"),
  whatsAppNumber: z.string().min(11, "সঠিক হোয়াটসঅ্যাপ নাম্বার দিন"),
  paymentMethod: z.enum(["bkash", "nagad", "rocket"], {
    errorMap: () => ({ message: "পেমেন্ট মাধ্যম নির্বাচন করুন" }),
  }),
  RegFeeNumber: z.string().min(6, "কমপক্ষে ৬ ডিজিট দিন"),
});

const quranLCBasicRegistrationDefaultValues = {
  userName: "",
  userGender: "",
  dateOfBirth: "",
  profession: "",
  address: "",
  phoneNumber: "",
  whatsAppNumber: "",
  paymentMethod: "",
  RegFeeNumber: "",
};

const QuranLCBasicRegistrationForm = () => {
  // const [showQuranLCBasicPaymentModal, setShowQuranLCBasicPaymentModal] =
  //   useState(false);
  // const [studentRegisterId, setStudentRegisterId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleQuranLCBasicRegistration = async (values: FieldValues) => {
    setIsLoading(true);

    try {
      const studentData = {
        ...values,
        batch: values?.userGender === "male" ? "batch-04" : "batch-03",
      };
      const res = await addQuranLCBasicStudentToDB(studentData);

      console.log("res", res);

      if (res.success) {
        toast.success(res.message);

        router.push(
          `/quran-lc-basic/success?verificationToken=${process.env.NEXT_PUBLIC_JWT_SECRET}`
        );

        // setStudentRegisterId(res?.data?._id);
        // setShowQuranLCBasicPaymentModal(true);
      } else {
        toast.error(res?.message || "Something went wrong!");
      }

      setIsLoading(false);
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong!");

      setIsLoading(false);
    }
  };
  return (
    <div>
      <KAForm
        onSubmit={handleQuranLCBasicRegistration}
        defaultValues={quranLCBasicRegistrationDefaultValues}
        schema={quranLCBasicRegistrationSchema}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* name */}
          <div>
            <label
              htmlFor="userName"
              className="block text-start font-medium mb-[2px]"
            >
              আপনার নাম <span className="text-red-600 font-semibold">*</span>
            </label>
            <KAInput name="userName" placeholder="" />
          </div>

          {/* gander */}
          <div>
            <label
              htmlFor="userGender"
              className="block text-start font-medium mb-[2px]"
            >
              জেন্ডার <span className="text-red-600 font-semibold">*</span>
            </label>
            <KASelect
              name="userGender"
              options={[
                { value: "male", label: "মেইল (ছেলে)" },
                { value: "female", label: "ফিমেইল (মেয়ে)" },
              ]}
              placeholder=""
            />
          </div>

          {/* date of birth */}
          <div>
            <label
              htmlFor="dateOfBirth"
              className="block text-start font-medium mb-[0px]"
            >
              জন্ম তারিখ <span className="text-red-600 font-semibold">*</span>
            </label>
            <KADatePicker
              placeholder="Pick Your Birthday"
              name="dateOfBirth"
              className="rounded"
            />
          </div>

          {/* profession */}
          <div>
            <label
              htmlFor="profession"
              className="block text-start font-medium mb-[2px]"
            >
              পেশা <span className="text-red-600 font-semibold">*</span>
            </label>
            <KAInput name="profession" placeholder="" />
          </div>

          {/* address */}
          <div>
            <label
              htmlFor="address"
              className="block text-start font-medium mb-[2px]"
            >
              ঠিকানা <span className="text-red-600 font-semibold">*</span>
            </label>
            <KAInput name="address" placeholder="" />
          </div>

          {/*"phoneNumber */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-start font-medium mb-[2px]"
            >
              মেবাইল নাম্বার{" "}
              <span className="text-red-600 font-semibold">*</span>
            </label>
            <KAInput name="phoneNumber" type="number" placeholder="" />
          </div>

          {/* WhatsAppNumber */}
          <div>
            <label
              htmlFor="whatsAppNumber"
              className="block text-start font-medium mb-[2px]"
            >
              হোয়াটসঅ্যাপ নাম্বার{" "}
              <span className="text-red-600 font-semibold">*</span>
            </label>
            <KAInput name="whatsAppNumber" type="number" placeholder="" />
          </div>
        </div>

        <div className="mt-14">
          <h2 className="md:text-lg font-medium text-center mb-8">
            আপনি এই{" "}
            <span className="italic text-primary font-semibold">
              01788880835
            </span>{" "}
            নাম্বারে রেজিষ্ট্রেশন ফি{" "}
            <span className="italic text-primary font-semibold">২৫০</span> টাকা
            বিকাশ/নগদ/রকেট থেকে সেন্ড মানি করুন
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {/* gander */}
            <div>
              <label
                htmlFor="paymentMethod"
                className="block text-start font-medium mb-[2px]"
              >
                আপনি কোন মাধ্যমে ফি পাঠিয়েছেন?{" "}
                <span className="text-red-600 font-semibold">*</span>
              </label>
              <KASelect
                name="paymentMethod"
                options={[
                  { value: "bkash", label: "বিকাশ" },
                  { value: "nagad", label: "নগদ" },
                  { value: "rocket", label: "রকেট" },
                ]}
                placeholder="সিলেক্ট করুন"
              />
            </div>

            {/*"phoneNumber */}
            <div>
              <label
                htmlFor="RegFeeNumber"
                className="block text-start font-medium mb-[2px]"
              >
                যে নাম্বার থেকে রেজি. ফি পাঠিয়েছেন সেই নাম্বার টি লিখুন{" "}
                <span className="text-red-600 font-semibold">*</span>
              </label>
              <KAInput
                name="RegFeeNumber"
                //   type="number"
                placeholder=""
              />
            </div>
          </div>
        </div>

        {/* submit button */}
        <div className="mt-8 flex justify-center items-center">
          <Button
            className="h-11 cursor-pointer"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="space-x-2 flex items-center">
                <LoaderSpinner /> <span>Processing...</span>
              </span>
            ) : (
              "Registration"
            )}
          </Button>
        </div>
      </KAForm>

      {/* <QuranLCBasicPaymentModal
        showQuranLCBasicPaymentModal={showQuranLCBasicPaymentModal}
        setShowQuranLCBasicPaymentModal={setShowQuranLCBasicPaymentModal}
        studentRegisterId={studentRegisterId}
      /> */}
    </div>
  );
};

export default QuranLCBasicRegistrationForm;
