import React from "react";
import Link from "next/link";

const userPage = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Link href="/page2">Page 2</Link>
    </div>
  );
};

export default userPage;
