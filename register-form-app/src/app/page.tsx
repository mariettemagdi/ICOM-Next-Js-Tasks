import RegisterForm from "@/components/RegisterForm";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen flex items-center justify-center bg-gray-50">
    <RegisterForm />
   </main>
  );
}
