import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// icon animation

function handleIcon5() {
  const whatsapp = document.getElementById("whatsapp2");
  const slack = document.getElementById("slack2");
  const instagram = document.getElementById("instagram2");
  const linkedin = document.getElementById("linkedin2");
  const spWhatsapp = document.getElementById("spWhatsapp2");
  const spSlack = document.getElementById("spSlack2");
  const spInstagram = document.getElementById("spInstagram2");
  const spLinkedin = document.getElementById("spLinkedin2");

  whatsapp.classList.add("w-12", "justify-center");
  whatsapp.classList.add("w-32", "justify-evenly");
  spWhatsapp.classList.remove("hidden");
  slack.classList.remove("justify-evenly", "w-32");
  slack.classList.add("justify-center", "w-12");
  spSlack.classList.add("hidden");
  instagram.classList.remove("justify-evenly", "w-32");
  instagram.classList.add("justify-center", "w-12");
  spInstagram.classList.add("hidden");
  linkedin.classList.remove("justify-evenly", "w-32");
  linkedin.classList.add("justify-center", "w-12");
  spLinkedin.classList.add("hidden");
}

function handleIcon6() {
  const whatsapp = document.getElementById("whatsapp2");
  const slack = document.getElementById("slack2");
  const instagram = document.getElementById("instagram2");
  const linkedin = document.getElementById("linkedin2");
  const spWhatsapp = document.getElementById("spWhatsapp2");
  const spSlack = document.getElementById("spSlack2");
  const spInstagram = document.getElementById("spInstagram2");
  const spLinkedin = document.getElementById("spLinkedin2");

  slack.classList.add("w-12", "justify-center");
  slack.classList.add("w-32", "justify-evenly");
  spSlack.classList.remove("hidden");
  whatsapp.classList.remove("justify-evenly", "w-32");
  whatsapp.classList.add("justify-center", "w-12");
  spWhatsapp.classList.add("hidden");
  instagram.classList.remove("justify-evenly", "w-32");
  instagram.classList.add("justify-center", "w-12");
  spInstagram.classList.add("hidden");
  linkedin.classList.remove("justify-evenly", "w-32");
  linkedin.classList.add("justify-center", "w-12");
  spLinkedin.classList.add("hidden");
}

function handleIcon7() {
  const whatsapp = document.getElementById("whatsapp2");
  const slack = document.getElementById("slack2");
  const instagram = document.getElementById("instagram2");
  const linkedin = document.getElementById("linkedin2");
  const spWhatsapp = document.getElementById("spWhatsapp2");
  const spSlack = document.getElementById("spSlack2");
  const spInstagram = document.getElementById("spInstagram2");
  const spLinkedin = document.getElementById("spLinkedin2");

  instagram.classList.add("w-12", "justify-center");
  instagram.classList.add("w-32", "justify-evenly");
  spInstagram.classList.remove("hidden");
  whatsapp.classList.remove("justify-evenly", "w-32");
  whatsapp.classList.add("justify-center", "w-12");
  spWhatsapp.classList.add("hidden");
  slack.classList.remove("justify-evenly", "w-32");
  slack.classList.add("justify-center", "w-12");
  spSlack.classList.add("hidden");
  linkedin.classList.remove("justify-evenly", "w-32");
  linkedin.classList.add("justify-center", "w-12");
  spLinkedin.classList.add("hidden");
}

function handleIcon8() {
  const whatsapp = document.getElementById("whatsapp2");
  const slack = document.getElementById("slack2");
  const instagram = document.getElementById("instagram2");
  const linkedin = document.getElementById("linkedin2");
  const spWhatsapp = document.getElementById("spWhatsapp2");
  const spSlack = document.getElementById("spSlack2");
  const spInstagram = document.getElementById("spInstagram2");
  const spLinkedin = document.getElementById("spLinkedin2");

  linkedin.classList.add("w-12", "justify-center");
  linkedin.classList.add("w-32", "justify-evenly");
  spLinkedin.classList.remove("hidden");
  whatsapp.classList.remove("justify-evenly", "w-32");
  whatsapp.classList.add("justify-center", "w-12");
  spWhatsapp.classList.add("hidden");
  slack.classList.remove("justify-evenly", "w-32");
  slack.classList.add("justify-center", "w-12");
  spSlack.classList.add("hidden");
  instagram.classList.remove("justify-evenly", "w-32");
  instagram.classList.add("justify-center", "w-12");
  spInstagram.classList.add("hidden");
}

// animazione scroll
window.addEventListener('scroll', () =>{
  const titleContact = document.getElementById('titleContact')
  const form = document.getElementById('form')
  const contact = document.getElementById('lgContact')
  const scrollY = window.scrollY
  const width = window.innerWidth

  if(scrollY >= 4700 && width >= 375 && width < 425){
    titleContact.classList.remove('opacity-0')
    titleContact.classList.remove('translate-y-28')

    if(scrollY >= 4900){
      form.classList.remove('opacity-0')
      form.classList.remove('-translate-y-28')
    }

    if(scrollY >= 5400){
      contact.classList.remove('opacity-0')
      contact.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 4600 && width >= 425 && width < 640){
    titleContact.classList.remove('opacity-0')
    titleContact.classList.remove('translate-y-28')

    if(scrollY >= 4800){
      form.classList.remove('opacity-0')
      form.classList.remove('-translate-y-28')
    }

    if(scrollY >= 5300){
      contact.classList.remove('opacity-0')
      contact.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 5300 && width >= 640 && width < 768){
    titleContact.classList.remove('opacity-0')
    titleContact.classList.remove('translate-y-28')

    if(scrollY >= 5500){
      form.classList.remove('opacity-0')
      form.classList.remove('-translate-y-28')
    }

    if(scrollY >= 6000){
      contact.classList.remove('opacity-0')
      contact.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 3600 && width >= 768 && width < 1024){
    titleContact.classList.remove('opacity-0')
    titleContact.classList.remove('translate-y-28')

    if(scrollY >= 3800){
      form.classList.remove('opacity-0')
      form.classList.remove('-translate-y-28')
    }

    if(scrollY >= 4300){
      contact.classList.remove('opacity-0')
      contact.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 2800 && width >= 1024 && width < 1536){
    titleContact.classList.remove('opacity-0')
    titleContact.classList.remove('translate-y-28')

    if(scrollY >= 3000){
      form.classList.remove('opacity-0')
      form.classList.remove('-translate-y-28')
      contact.classList.remove('opacity-0')
      contact.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 2600 && width >= 1536 && width < 1920){
    titleContact.classList.remove('opacity-0')
    titleContact.classList.remove('translate-y-28')

    if(scrollY >= 2800){
      form.classList.remove('opacity-0')
      form.classList.remove('-translate-y-28')
      contact.classList.remove('opacity-0')
      contact.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 2400 && width >= 1920 && width < 2560){
    titleContact.classList.remove('opacity-0')
    titleContact.classList.remove('translate-y-28')

    if(scrollY >= 2600){
      form.classList.remove('opacity-0')
      form.classList.remove('-translate-y-28')
      contact.classList.remove('opacity-0')
      contact.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 2000 && width >= 2560){
    titleContact.classList.remove('opacity-0')
    titleContact.classList.remove('translate-y-28')

    if(scrollY >= 2200){
      form.classList.remove('opacity-0')
      form.classList.remove('-translate-y-28')
      contact.classList.remove('opacity-0')
      contact.classList.remove('translate-y-28')
    }
  }
})

function Contact() {
  const [state, handleSubmit] = useForm("xqkroknd");
  if (state.succeeded) {
    return (
      <div className="w-full h-[590px] bg-[#070D1B] flex items-center justify-center ps-[10.5px] pe-[10.5px] lg:ps-3 lg:pe-3">
        <div className="bg-[#101624] h-2/4 w-full flex flex-col justify-center items-center md:ms-6 md:me-6 lg:ms-8 lg:me-8 xl:ms-[70px] xl:me-[70px] min-[1440px]:ms-[150px] min-[1440px]:me-[150px] 2xl:ms-[198px] 2xl:me-[198px] min-[1850px]:ms-[390px] min-[1850px]:me-[390px] min-[2560px]:ms-[710px] min-[2560px]:me-[710px]">
          <h3 className="text-white text-3xl mb-5">Thanks!</h3>
          <p className="text-sm text-[#535a69] mb-5 lg:text-base">
            The form was submitted successfully.
          </p>
          <a href="../main.jsx" className="text-sm text-[#FEC544] lg:text-base">
            Go Back
          </a>
        </div>
      </div>
    );
  }
  return (
    <section id="Contact" className="bg-[#070D1B]">
      <div className="h-20 lg:h-[100px]"></div>
      <div id="titleContact" className="h-24 opacity-0 translate-y-28 ease">
        <div className="flex justify-center items-center">
          <h2 className="text-[#FEC544] text-2xl font-medium mb-2.5 z-10">
            CONTACT
          </h2>
          <h2 className="hidden w-full text-[#151b2980] text-[90px] font-bold absolute text-center lg:inline">
            CONTACT
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="w-[170px] h-0.5 bg-[#3f4551] z-10"></div>
          <div className="bg-[#FEC544] w-[70px] h-0.5 absolute z-10"></div>
        </div>
        <div className="h-6"></div>
      </div>

      {/* form contact */}

      <div className="grid sm:ms-[50px] sm:me-[50px] md:ms-6 md:me-6 lg:grid-cols-2 lg:me-8 lg:ms-8 xl:ms-[70px] xl:me-[70px] min-[1440px]:ms-[150px] min-[1440px]:me-[150px] 2xl:ms-[198px] 2xl:me-[198px] min-[1850px]:ms-[390px] min-[1850px]:me-[390px] min-[2560px]:ms-[710px] min-[2560px]:me-[710px]">
        <div id="form" className="ps-[10.5px] pe-[10.5px] opacity-0 -translate-y-28 ease delay-500 duration-[800ms] lg:ps-3 lg:pe-3">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h3 className="text-3xl font-normal mb-[22px] text-white">
              Write to Me
            </h3>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="mb-[30px] w-full h-[52px] pt-3 pb-3 ps-5 pe-5 placeholder-[#3F4551] bg-[#101624] border border-[#232935] rounded-[7px] text-sm outline-none focus:border-[#FEC544] ease2 lg:text-base"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="mb-[30px] w-full h-[52px] pt-3 pb-3 ps-5 pe-5 placeholder-[#3F4551] bg-[#101624] border border-[#232935] rounded-[7px] text-sm outline-none focus:border-[#FEC544] ease2 lg:text-base"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Your Subject"
              required
              className="mb-[30px] w-full h-[52px] pt-3 pb-3 ps-5 pe-5 bg-[#101624] placeholder-[#3F4551] border border-[#232935] rounded-[7px] text-sm outline-none focus:border-[#FEC544] ease2 lg:text-base"
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="mb-[30px] w-full pt-3 pb-3 ps-5 pe-5 placeholder-[#3F4551] bg-[#101624] border border-[#232935] rounded-[7px] text-sm outline-none focus:border-[#FEC544] ease2 lg:text-base"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="text-slate-950 w-[170px] text-sm font-semibold bg-[#FEC544] pt-3 pb-3 ps-8 pe-8 rounded-3xl btn ease2 lg:pt-3 lg:pb-3 lg:ps-6 lg:pe-6 lg:text-base"
            >
              Send Message
            </button>
          </form>
          <div className="h-[70px] lg:hidden"></div>
        </div>

        {/* icon contact */}

        <div id="lgContact" className="ps-[10.5px] pe-[10.5px] opacity-0 translate-y-28 ease delay-500 duration-[800ms] lg:ps-3 lg:pe-3">
          <h3 className="text-3xl font-normal mb-[22px] text-white">
            Contact Info
          </h3>
          <p className="text-sm mb-[23px] lg:text-base">
            For any questions, job offers or simply to exchange ideas, do not
            hesitate to contact me. <span className="lg:hidden xl:inline">I am always available for new collaborations.</span>
          </p>
          {/* icon 1 */}
          <div className="flex items-center mb-6">
            <div className="me-5">
              <a
                href="mailto:vastosamuelejob@gmail.com"
                className="bg-[#070D1B] rounded-full w-12 h-12 border border-[#3f4551] flex items-center justify-center hover:border-[#FEC544] ease2 lg:w-[50px] lg:h-[50px]"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  style={{ color: "#a9adb8" }}
                />
              </a>
            </div>

            <div>
              <h4 className="text-xl text-white mb-0.5 font-normal">Email</h4>
              <a
                href="mailto:vastosamuelejob@gmail.com"
                className="text-sm hover:text-[#FEC544] easeText lg:text-base"
              >
                vastosamuelejob@gmail.com
              </a>
            </div>
          </div>

          {/* icon 2 */}
          <div className="flex items-center mb-6">
            <div className="me-5">
              <a
                href="tel: +39 3770892475"
                className="bg-[#070D1B] rounded-full w-12 h-12 border border-[#3f4551] flex items-center justify-center hover:border-[#FEC544] ease2 lg:w-[50px] lg:h-[50px]"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  size="lg"
                  style={{ color: "#a9adb8" }}
                />
              </a>
            </div>

            <div>
              <h4 className="text-xl text-white mb-0.5 font-normal">Phone</h4>
              <a
                href="tel: +39 3770892475"
                className="text-sm hover:text-[#FEC544] easeText lg:text-base"
              >
                +39 377 089 2475
              </a>
            </div>
          </div>

          {/* icon 3 */}
          <div className="flex items-center mb-[30px]">
            <div className="me-5">
              <a
                href="https://maps.app.goo.gl/RZQN3TvYLsuUKf4DA"
                rel="nofollow"
                target="_blank"
                className="bg-[#070D1B] rounded-full w-12 h-12 border border-[#3f4551] flex items-center justify-center hover:border-[#FEC544] ease2 lg:w-[50px] lg:h-[50px]"
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="lg"
                  style={{ color: "#a9adb8" }}
                />
              </a>
            </div>

            <div>
              <h4 className="text-xl text-white mb-0.5 font-normal">Address</h4>
              <a
                href="https://maps.app.goo.gl/RZQN3TvYLsuUKf4DA"
                rel="nofollow"
                target="_blank"
                className="text-sm hover:text-[#FEC544] easeText lg:text-base"
              >
                Taranto, TA, 74121, Italy, IT
              </a>
            </div>
          </div>

          <p className="text-xl mb-[25px] pt-[5px] font-medium">
            Visite my social profile and get connected
          </p>

          <div className="flex">
            <a
              href="https://wa.me/+393770892475"
              rel="nofollow"
              target="_blank"
              id="whatsapp2"
              onMouseEnter={handleIcon5}
              className="bg-[#070D1B] rounded-full w-32 h-12 border border-[#3f4551] me-5 flex items-center justify-evenly ease2"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="xl"
                style={{ color: "#a9adb8" }}
              />
              <span id="spWhatsapp2" className="text-white font-semibold">
                Whatsapp
              </span>
            </a>
            <a
              href="https://samuelevasto.slack.com/team/U075VMMPAKA"
              rel="nofollow"
              target="_blank"
              id="slack2"
              onMouseEnter={handleIcon6}
              className="bg-[#070D1B] rounded-full w-12 h-12 border border-[#3f4551] me-5 flex items-center justify-center ease2"
            >
              <FontAwesomeIcon
                icon={faSlack}
                size="xl"
                style={{ color: "#a9adb8" }}
              />
              <span id="spSlack2" className="hidden text-white font-semibold">
                Slack
              </span>
            </a>
            <a
              href="https://www.instagram.com/samuele_vasto"
              rel="nofollow"
              target="_blank"
              id="instagram2"
              onMouseEnter={handleIcon7}
              className="bg-[#070D1B] rounded-full w-12 h-12 border border-[#3f4551] me-5 flex items-center justify-center ease2"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="xl"
                style={{ color: "#a9adb8" }}
              />
              <span
                id="spInstagram2"
                className="hidden text-white font-semibold"
              >
                Instagram
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/samuele-vasto-419154310"
              rel="nofollow"
              target="_blank"
              id="linkedin2"
              onMouseEnter={handleIcon8}
              className="bg-[#070D1B] rounded-full w-12 h-12 border border-[#3f4551]  flex items-center justify-center ease2"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                style={{ color: "#a9adb8" }}
              />{" "}
              <span
                id="spLinkedin2"
                className="hidden text-white font-semibold"
              >
                Linkedin
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="h-20 lg:h-[100px]"></div>
    </section>
  );
}

export default Contact;