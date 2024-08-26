import Hero from "@/components/hero";
import homeImg from "../../public/home.jpg"; // Correctly imported image
export default function Home() {
  return (
    <main>
      This is Home
      <Hero
        // imgData={"/home.jpg"}
        imgData={homeImg}
        imgAlt="Car Factory"
        title="Professional Cloud Hosting"
      />
    </main>
  );
}
