"use client";

import KADatePicker from "@/components/shared/Forms/KADatePicker";
import KAForm from "@/components/shared/Forms/KAForm";
import KAInput from "@/components/shared/Forms/KAInput";
import KASelect from "@/components/shared/Forms/KASelect";
import { LoaderSpinner } from "@/components/shared/Ui/LoaderSpinner";
import { Button } from "@/components/ui/button";
import { useAddQuranLCBasicStudentMutation } from "@/redux/api/quran-lc-basicApi";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const quranLCBasicRegistrationSchema = z.object({
  userName: z.string().min(1, "আপনার নাম আবশ্যক"),
  userGender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "জেন্ডার নির্বাচন করুন" }),
  }),
  dateOfBirth: z.string().min(1, "জন্ম তারিখ আবশ্যক"),
  profession: z.string().min(1, "পেশা আবশ্যক"),
  address: z.string().min(1, "ঠিকানা আবশ্যক"),
  phoneNumber: z.string().min(11, "সঠিক মোবাইল নাম্বার দিন").max(14),
  whatsAppNumber: z.string().min(11, "সঠিক হোয়াটসঅ্যাপ নাম্বার দিন").max(14),
  paymentMethod: z.enum(["bkash", "nagad", "bank"], {
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

const QuranLCBasicRegistration = () => {
  const router = useRouter();

  // redux api
  const [
    addQuranLCBasicStudentRegistration,
    { isLoading: isQuranLCBasicStudentRegistrationLoading },
  ] = useAddQuranLCBasicStudentMutation();

  const handleQuranLCBasicRegistration = async (values: FieldValues) => {
    try {
      const newStudent = { ...values, batch: "batch-01" };
      const res = await addQuranLCBasicStudentRegistration(newStudent).unwrap();

      if (res.success) {
        toast.success(res.message);

        // navigate user
        router.push(
          `/quran-lc-basic/success?secret=${process.env.NEXT_PUBLIC_SECRET_URL_KEY}`
        );
      }
    } catch (error: any) {
      toast.error(
        error?.data?.errorSources[0].message || "Something went wrong!"
      );
    }
  };

  return (
    <div className="min-h-screen">
      <h2 className="mt-10 text-xl md:text-2xl font-semibold text-center">
        কুরআন শিক্ষা কোর্স
      </h2>
      <div className="max-w-[980px] mx-auto my-12 px-4">
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
              <KAInput name="userName" className="" placeholder="" />
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
                  { value: "male", label: "মেইল" },
                  { value: "female", label: "ফিমেইল" },
                ]}
                placeholder=""
                className=""
              />
            </div>

            {/* date of birth */}
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-start font-medium mb-[2px]"
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
              <KAInput name="profession" className="" placeholder="" />
            </div>

            {/* address */}
            <div>
              <label
                htmlFor="address"
                className="block text-start font-medium mb-[2px]"
              >
                ঠিকানা <span className="text-red-600 font-semibold">*</span>
              </label>
              <KAInput name="address" className="" placeholder="" />
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
              <KAInput
                name="phoneNumber"
                type="number"
                className=""
                placeholder=""
              />
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
              <KAInput
                name="whatsAppNumber"
                type="number"
                className=""
                placeholder=""
              />
            </div>
          </div>

          <div className="mt-14">
            <h2 className=" text-lg md:text-xl font-medium text-center mb-8">
              আপনি এই{" "}
              <span className="italic text-primary font-semibold">
                01788880835
              </span>{" "}
              নাম্বারে রেজিষ্ট্রেশন ফি{" "}
              <span className="italic text-primary font-semibold">২৫০</span>{" "}
              টাকা বিকাশ/নগদ থেকে সেন্ড মানি করুন
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
                  ]}
                  placeholder=""
                  className=""
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
                  className=""
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
              disabled={isQuranLCBasicStudentRegistrationLoading}
            >
              {isQuranLCBasicStudentRegistrationLoading ? (
                <span className="flex gap-2">
                  <LoaderSpinner /> <span>Processing...</span>
                </span>
              ) : (
                "Registration"
              )}
            </Button>
          </div>
        </KAForm>
      </div>
    </div>
  );
};

export default QuranLCBasicRegistration;
