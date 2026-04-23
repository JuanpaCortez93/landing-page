import type { IPropsSection } from "../../shared/interfaces/props.interface";
import Hero from "../features/Hero/Hero";
import Services from "../features/Services/Services";


const sectionComponents: Record<string, React.FC<IPropsSection>> = {
    "hero": Hero,
    "services": Services
};


const AppRender = ( {section} : IPropsSection ) => {   
    const SectionComponent = sectionComponents[section.id];
    if (!SectionComponent) return null;
    return <SectionComponent section={section} />;
}

export default AppRender