import Link from "next/link";
import React from "react";

const header = () => {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Link href={"/performance"}>Performance</Link>
      <Link href={"/reliability"}>Reliability</Link>
      <Link href={"/scale"}>Scale</Link>
    </div>
  );
};

export default header;
