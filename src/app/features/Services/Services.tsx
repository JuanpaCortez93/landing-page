import { IPropsSection } from "../../../shared/interfaces"

const Services = ({section}: IPropsSection) => {
  return (
    <div>
      <h1 className="text-3xl text-blue-500">{section.title}</h1>
      <p className="text-lg text-gray-700">{section.subtitle}</p>
    </div>
  )
}

export default Services
