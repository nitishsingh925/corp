import scaleImg from "../../../public/scale.jpg";
import Hero from "@/components/hero";
const ScalePage = () => {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="steel factory"
      title="Scale your app to infinity"
    />
  );
};

export default ScalePage;
