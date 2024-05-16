import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#00008B",
        animation: "colorChange 5s infinite",
      }}
      className="flex min-h-screen flex-col items-center justify-center p-48 h-screen"
    >
      <div className="flex flex-col space-y-8">
        <Button className="text-lg py-8 px-16">Sign Up</Button>
        <Button className="text-lg py-8 px-16">Login</Button>
      </div>
    </main>
  );
}
