"use client";

import { loginUser } from "@/app/actions/loginUser";
import { registerUser } from "@/app/actions/registerUser";
import KAForm from "@/components/shared/Forms/KAForm";
import KAInput from "@/components/shared/Forms/KAInput";
import { LoaderSpinner } from "@/components/shared/Ui/LoaderSpinner";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/reducers/authSlice";
import { storeUserInfo } from "@/services/auth.services";
import { decodedToken } from "@/utils/jwt";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const userSignUpSchema = z.object({
  name: z.string().min(1, "Enter name"),
  email: z.string().email("Enter email"),
  password: z.string().min(1, "Enter password"),
});
const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleSignUp = async (values: FieldValues) => {
    setIsLoading(true);
    try {
      const res = await registerUser(values);

      if (res.success) {
        // auto login after user register
        const userRes = await loginUser({
          email: values.email,
          password: values.password,
        });

        if (userRes.success) {
          const accessToken = userRes.data.accessToken;

          const user = decodedToken(accessToken);

          dispatch(setUser({ user, token: accessToken }));
          storeUserInfo({ accessToken });

          toast.success(userRes.message);

          setIsLoading(false);
          router.push("/");
        }
      } else {
        toast.error(res.message || "Something went wrong!");

        setIsLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(
        error?.data?.errorSources[0].message || "Something went wrong!"
      );

      setIsLoading(false);
    }
  };

  return (
    <KAForm
      onSubmit={handleSignUp}
      schema={userSignUpSchema}
      defaultValues={{
        name: "",
        email: "",
        password: "",
      }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>

            <KAInput name="name" />
          </div>

          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>

            <KAInput
              name="email"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <KAInput name="password" type="password" />
          </div>
        </div>

        <div className="mt-2 w-full">
          <Button className="h-11 cursor-pointer w-full" type="submit">
            {isLoading ? (
              <span className="space-x-2 flex items-center">
                <LoaderSpinner /> <span>Signing...</span>
              </span>
            ) : (
              "Sign Up"
            )}
          </Button>
        </div>
      </div>
    </KAForm>
  );
};

export default SignupForm;
