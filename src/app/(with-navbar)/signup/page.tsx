import Container from "@/components/shared/Ui/Container";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import SignupForm from "./_components/SignupForm";

export default function SignUp() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Container className="max-w-md">
        <div className="flex flex-col justify-center space-y-6 shadow-cardLightShadow rounded-md p-6 md:p-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Kaamil Academy</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              Create an account
            </h1>
            <p className="text-muted-foreground">
              Enter your details to sign up for an account
            </p>
          </div>

          {/* form here */}
          <SignupForm />

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:text-primary/90">
              Sign in
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
