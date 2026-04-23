import { useLanguage } from "../../../shared/hooks/useLanguage";

const Navbar = () => {
  const { toggleLanguage, currentLang } = useLanguage();
  return (
    <nav>
      <button onClick={toggleLanguage}>
        {currentLang === "en" ? "EN" : "ES"}
      </button>
    </nav>
  );
};

export default Navbar;
