import Image from "next/image";
import HeaderSection from "@/components/HeaderSection";
import PropertiesSection from "@/components/PropertiesSection";
export default function Home() {
  return (
    <main className="min-h-screen">
         <HeaderSection />
         <PropertiesSection />
    </main>
  
  );
}
