import { getServerSession } from "next-auth";
import { option } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

async function Member() {
  const session = await getServerSession(option);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/Member");
  }

  return (
    <div>
      <h1>Member Server Session</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
}

export default Member;
