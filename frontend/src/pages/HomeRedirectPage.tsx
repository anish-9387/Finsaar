import { useEffect } from "react";
import { useRouter } from "@/routing/navigation";

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return null;
}