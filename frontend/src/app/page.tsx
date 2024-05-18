import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#4B0082",
        animation: "colorChange 5s infinite",
      }}
      className="flex min-h-screen flex-col items-center justify-center p-48 h-screen"
    >
      <h1 className="text-6xl font-bold text-white mb-8">AccessAble</h1>
      <p className="text-white text-lg mb-8">
        AccessAble is a platform dedicated to empowering individuals with
        disabilities by connecting them with job opportunities and providing
        resources to enhance their skills. Our mission is to level the playing
        field and create an inclusive workforce where everyone has the chance to
        succeed.
      </p>
      <div className="flex flex-col space-y-8">
        <Link href="/register"><Button className="w-full text-lg py-8 px-16">Sign Up</Button></Link>
        <Link href="/login"><Button className="w-full text-lg py-8 px-16">Login</Button></Link>
      </div>
    </main>
  );
}
