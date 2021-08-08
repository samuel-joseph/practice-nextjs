import { useEffect } from "react";
import { useRouter } from "next/router";

//Here you would return the user
const useUser = () => ({ user: null, loading: false });

export default function Authentication() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!(user || loading)) {
      router.push("/login");
    }
  }, [user, loading]);

  return <p>Redirecting...</p>;
}
