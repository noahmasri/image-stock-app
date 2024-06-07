import { Inter } from "next/font/google"
import Celebration from "@/components/Celebration";

const inter = Inter({ subsets: ["latin"] })
import dynamic from "next/dynamic";

const DynamicCelebration = dynamic(
  () => import("@/components/Celebration"),
  {
    ssr: false,
  }
);

export default function Congratulations() {
  return (
    <div>
      <DynamicCelebration/>
    </div>
  );
}