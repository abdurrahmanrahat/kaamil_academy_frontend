import GoogleAuthWrapper from "@/app/(with-navbar)/login/_components/GoogleAuthWrapper";
import Container from "@/components/shared/Ui/Container";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import LoginForm from "./_components/LoginForm";

export default function LoginPage() {
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
              Welcome back
            </h1>
            <p className="text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>

          {/* login form */}
          <LoginForm />

          <GoogleAuthWrapper />

          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:text-primary/90">
              Sign up
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
