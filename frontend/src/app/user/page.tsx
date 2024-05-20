import React from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const userPage = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div>
      <h1>User Page</h1>
      <p>If you can see this, you are logged in!</p>
      <Link href="/page2">Page 2</Link>
    </div>
  );
};

export default userPage;
