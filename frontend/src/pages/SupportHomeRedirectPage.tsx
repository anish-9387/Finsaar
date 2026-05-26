import { useEffect } from "react";
import { useRouter } from "@/routing/navigation";

export default function SupportHomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("/support");
  }, [router]);

  return null;
}