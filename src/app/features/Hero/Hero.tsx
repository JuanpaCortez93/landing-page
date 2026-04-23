import { IPropsSection } from "../../../shared/interfaces/index";

import "./Hero.css";

const Hero = ({ section }: IPropsSection) => {
  return (
    <div className="hero">
      <h1 className="whitespace-pre-line hero__title">{section.title}</h1>
      <p className="hero__description">{section.subtitle}</p>
    </div>
  );
};

export default Hero;
