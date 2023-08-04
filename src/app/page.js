import MobileCard from "@/components/mobileCard";
import Card from "../components/card";
import "next/font/google";

export default function Home() {
  return (
    <main className="flex min-h-screen desktop:justify-center flex-col items-center desktop:p-24">
      <MobileCard />
      <Card />
    </main>
  );
}
