import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
function Header() {
  const [links, setLinks] = useState(["Features", "Team", "Signin"]);
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#1e293b";
        headerRef.current.style.padding = "15px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "50px 0";
      }
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className="pt-[50px] fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div className="container flex justify-between items-center gap-6 sm:gap-0 flex-col sm:flex-row">
        <Link to="/">
          <img
            src="/src/assets/images/logo.svg"
            alt="logo-img"
            className="w-[160px]  h-auto object-contain"
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className="text-white opacity-90 hover:opacity-100 font-medium hover:underline hover:text-primary transition-all duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;