import Hero from "@/components/hero";
import homeImg from "../../public/home.jpg";
export default function Home() {
  return (
    <main>
      <Hero
        imgData={homeImg}
        imgAlt="Car Factory"
        title="Professional Cloud Hosting"
      />
    </main>
  );
}
