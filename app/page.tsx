import Announcement from "@/components/announcement-section";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="">
      <div className="container">
        <HeroSection />
        <Announcement />
      </div>
    </div>
  );
}
