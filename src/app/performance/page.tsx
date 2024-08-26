import Hero from "@/components/hero";
import performaceImg from "../../../public/performance.jpg";
const PerformancePage = () => {
  return (
    <Hero
      imgData={performaceImg}
      imgAlt="welding"
      title="We serve high performance aapplications"
    />
  );
};

export default PerformancePage;
