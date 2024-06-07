import NavLink from "./NavLink";
import logo from "../loghi/logo_pc_rita_webp.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { defaults } from "autoprefixer";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

// animazione menu
window.onscroll = () => {
  let top = window.scrollY;
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const skills = document.getElementById("skills");
  const portfolio = document.getElementById("portfolio");
  const contact = document.getElementById("contact");

  if (top > 0 && top < 700) {
    home.classList.add("lg:text-yellow-400");
    about.classList.contains("text-yellow-400")
      ? about.classList.remove("text-yellow-400")
      : "";
    skills.classList.contains("text-yellow-400")
      ? skills.classList.remove("text-yellow-400")
      : "";
    portfolio.classList.contains("text-yellow-400")
      ? portfolio.classList.remove("text-yellow-400")
      : "";
    contact.classList.contains("text-yellow-400")
      ? contact.classList.remove("text-yellow-400")
      : "";
  }

  if (top > 700 && top < 1400) {
    about.classList.add("text-yellow-400");
    about.classList.remove("lg:text-neutral-100");
    home.classList.contains("lg:text-yellow-400")
      ? home.classList.remove("lg:text-yellow-400")
      : "";
    skills.classList.contains("text-yellow-400")
      ? skills.classList.remove("text-yellow-400")
      : "";
    portfolio.classList.contains("text-yellow-400")
      ? portfolio.classList.remove("text-yellow-400")
      : "";
    contact.classList.contains("text-yellow-400")
      ? contact.classList.remove("text-yellow-400")
      : "";
  }

  if (top > 1400 && top < 2100) {
    skills.classList.add("text-yellow-400");
    skills.classList.remove("lg:text-neutral-100");
    home.classList.contains("lg:text-yellow-400")
      ? home.classList.remove("lg:text-yellow-400")
      : "";
    about.classList.contains("text-yellow-400")
      ? about.classList.remove("text-yellow-400")
      : "";
    portfolio.classList.contains("text-yellow-400")
      ? portfolio.classList.remove("text-yellow-400")
      : "";
    contact.classList.contains("text-yellow-400")
      ? contact.classList.remove("text-yellow-400")
      : "";
  }
  if (top > 2100 && top < 2800) {
    portfolio.classList.add("text-yellow-400");
    portfolio.classList.remove("lg:text-neutral-100");
    home.classList.contains("lg:text-yellow-400")
      ? home.classList.remove("lg:text-yellow-400")
      : "";
    about.classList.contains("text-yellow-400")
      ? about.classList.remove("text-yellow-400")
      : "";
    skills.classList.contains("text-yellow-400")
      ? skills.classList.remove("text-yellow-400")
      : "";
    contact.classList.contains("text-yellow-400")
      ? contact.classList.remove("text-yellow-400")
      : "";
  }
  if (top > 2800 && top < 3500) {
    contact.classList.add("text-yellow-400");
    contact.classList.remove("lg:text-neutral-100");
    home.classList.contains("lg:text-yellow-400")
      ? home.classList.remove("lg:text-yellow-400")
      : "";
    about.classList.contains("text-yellow-400")
      ? about.classList.remove("text-yellow-400")
      : "";
    skills.classList.contains("text-yellow-400")
      ? skills.classList.remove("text-yellow-400")
      : "";
    portfolio.classList.contains("text-yellow-400")
      ? portfolio.classList.remove("text-yellow-400")
      : "";
  }
};

// animazione scroll menu
window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  nav.classList.toggle("lg:bg-[#070d1be6]", window.scrollY > 80);
  nav.classList.toggle("bg-[#070d1be6]", window.scrollY > 80);
});

// animazione burger menu
function handleClick() {
  const burger_1 = document.getElementById("burger-1");
  const burger_2 = document.getElementById("burger-2");
  const burger_3 = document.getElementById("burger-3");
  const mobile_menu = document.getElementById("mobile-menu");

  !burger_1.classList.contains("rotate-45")
    ? burger_1.classList.add("rotate-45", "relative", "top-2")
    : burger_1.classList.remove("rotate-45");

  if (!burger_1.classList.contains("rotate-45")) {
    setTimeout(function () {
      burger_1.classList.remove("relative", "top-2");
    }, 655);
  }

  burger_2.classList.toggle("opacity-0");

  !burger_3.classList.contains("rotate-[-45deg]")
    ? burger_3.classList.add("rotate-[-45deg]", "relative", "bottom-2")
    : burger_3.classList.remove("rotate-[-45deg]");

  if (!burger_3.classList.contains("rotate-[-45deg]")) {
    setTimeout(function () {
      burger_3.classList.remove("relative", "bottom-2");
    }, 655);
  }

  mobile_menu.classList.contains("hidden")
    ? mobile_menu.classList.remove("hidden")
    : mobile_menu.classList.add("hidden");
}

function Navbar() {
  return (
    <nav
      id="nav"
      className="w-full bg-[#070D1B] sticky top-0 z-50 lg:h-20 lg:bg-[#0A101E]"
    >
      <div className="flex flex-row justify-between pb-6 pt-6 ps-2.5 pe-2.5 lg:ps-11 lg:pe-11 xl:ps-[82px] xl:pe-[82px] min-[1440px]:ps-24 min-[1440px]:pe-24 min-[1440px]:pb-4 min-[1440px]:pt-4 min-[1440px]:justify-evenly 2xl:ms-12 2xl:me-12 min-[1850px]:ms-[245px] min-[1850px]:me-[245px] min-[2560px]:ms-[560px] min-[2560px]:me-[560px]">
        <div>
          <img
            src={logo}
            alt="logo"
            width="0px"
            height="0px"
            className="w-48 min-[1440px]:w-64"
          />
        </div>

        <div className="hidden lg:flex lg:items-center xl:w-[800px] xl:justify-between">
          <div>
            <ul className="lg:flex lg:justify-between lg:w-[550px] min-[1440px]:flex min-[1440px]:flex-row min-[1440px]:justify-between ">
              <li>
                <a
                  href="#"
                  id="home"
                  className="text-gray-400 hover:text-[#959697] easeText lg:text-yellow-400"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  id="about"
                  className="text-gray-400 hover:text-[#959697] easeText lg:text-neutral-100"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#Skills"
                  id="skills"
                  className="text-gray-400 hover:text-[#959697] easeText lg:text-neutral-100"
                >
                  SKILLS
                </a>
              </li>
              <li>
                <a
                  href="#Portfolio"
                  id="portfolio"
                  className="text-gray-400 hover:text-[#959697] easeText lg:text-neutral-100"
                >
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  id="contact"
                  className="text-gray-400 hover:text-[#959697] easeText lg:text-neutral-100"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white sm:hidden xl:block">|</p>
          </div>

          <div className="sm:hidden xl:block">
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />
            <a
              href="tel: +39 3770892475"
              className="text-[#FEC544] font-semibold ps-4"
            >
              +39 377 089 2475
            </a>
          </div>
        </div>

        <div className="flex items-center lg:hidden" onClick={handleClick}>
          <div>
            <div
              className="w-7 h-0.5 mb-1.5 bg-stone-500 transition-all duration-1000 ease-in-out"
              id="burger-1"
            ></div>
            <div
              className="w-7 h-0.5 mb-1.5 bg-stone-500 transition-all duration-1000 ease-in-out"
              id="burger-2"
            ></div>
            <div
              className="w-7 h-0.5 bg-stone-500 transition-all duration-1000 ease-in-out"
              id="burger-3"
            ></div>
          </div>
        </div>
      </div>

      <div className="hidden" id="mobile-menu">
        <ul className="border-t border-t-slate-900">
          <li className="font-semibold text-[15px] pt-5 pb-2 ps-5 pe-5">
            <NavLink id="#Home" name="Home"></NavLink>
          </li>
          <li className="font-semibold text-[15px] pt-2 pb-2 ps-5 pe-5">
            <NavLink id="#About" name="About"></NavLink>
          </li>
          <li className="font-semibold text-[15px] pt-2 pb-2 ps-5 pe-5">
            <NavLink id="#Skills" name="Skills"></NavLink>
          </li>
          <li className="font-semibold text-[15px] pt-2 pb-2 ps-5 pe-5">
            <NavLink id="#Portfolio" name="Portfolio"></NavLink>
          </li>
          <li className="font-semibold text-[15px] pt-2 pb-5 ps-5 pe-5">
            <NavLink id="#Contact" name="Contact"></NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
