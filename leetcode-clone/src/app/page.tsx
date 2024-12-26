import SignIn from "@/components/sign-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Link href="/sign-in"> {/* Wrap the Button inside Link */}
        <Button>Login</Button>
      </Link>
    </div>
  );
}
