import { useEffect } from "react";
import { useRouter } from "@/routing/navigation";

export default function Signup() {
  const router = useRouter();

  useEffect(() => {
    router.push("/open-account");
  }, [router]);

  return null;
}