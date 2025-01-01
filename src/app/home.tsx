import { cookies } from "next/headers";
import HomeUI from "./_components/home-ui";

export default async function Home() {
  const cookieStore = await cookies();
  const scramble = cookieStore.get("web:asad:scramble")?.value;

  return <HomeUI defaultScramble={scramble} />;
}
