import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { paragraph } from "../../constants";
import Text from './Text';


const AboutSection = () => {

  return (
    <section
      className="relative text-white py-2 md:py-10 px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      <Text text={paragraph} />
    </section>
  );
};

export default AboutSection;