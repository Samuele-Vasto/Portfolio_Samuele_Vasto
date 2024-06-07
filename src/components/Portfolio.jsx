import cardImg1 from "../assets/card1.webp";
import cardImg2 from "../assets/card2.webp";
import cardImg3 from "../assets/card3.webp";
import cardImg4 from "../assets/card4.webp";
import cardImg5 from "../assets/card5.webp";
import cardImg6 from "../assets/card6.webp";
// animazione card 1

function handleCard1() {
  const cardImg1 = document.getElementById("cardImg1");
  const cardHover1 = document.getElementById("cardHover1");

  cardImg1.classList.add("scale-110");
  cardHover1.classList.remove("hidden");
}

function leaveCard1() {
  const cardImg1 = document.getElementById("cardImg1");
  const cardHover1 = document.getElementById("cardHover1");

  cardImg1.classList.remove("scale-110");
  cardHover1.classList.add("hidden");
}

// animazione card 2

function handleCard2() {
  const cardImg2 = document.getElementById("cardImg2");
  const cardHover2 = document.getElementById("cardHover2");

  cardImg2.classList.add("scale-110");
  cardHover2.classList.remove("hidden");
}

function leaveCard2() {
  const cardImg2 = document.getElementById("cardImg2");
  const cardHover2 = document.getElementById("cardHover2");

  cardImg2.classList.remove("scale-110");
  cardHover2.classList.add("hidden");
}

// animazione card 3

function handleCard3() {
  const cardImg3 = document.getElementById("cardImg3");
  const cardHover3 = document.getElementById("cardHover3");

  cardImg3.classList.add("scale-110");
  cardHover3.classList.remove("hidden");
}

function leaveCard3() {
  const cardImg3 = document.getElementById("cardImg3");
  const cardHover3 = document.getElementById("cardHover3");

  cardImg3.classList.remove("scale-110");
  cardHover3.classList.add("hidden");
}

// animazione card 4

function handleCard4() {
  const cardImg4 = document.getElementById("cardImg4");
  const cardHover4 = document.getElementById("cardHover4");

  cardImg4.classList.add("scale-110");
  cardHover4.classList.remove("hidden");
}

function leaveCard4() {
  const cardImg4 = document.getElementById("cardImg4");
  const cardHover4 = document.getElementById("cardHover4");

  cardImg4.classList.remove("scale-110");
  cardHover4.classList.add("hidden");
}

// animazione card 5

function handleCard5() {
  const cardImg5 = document.getElementById("cardImg5");
  const cardHover5 = document.getElementById("cardHover5");

  cardImg5.classList.add("scale-110");
  cardHover5.classList.remove("hidden");
}

function leaveCard5() {
  const cardImg5 = document.getElementById("cardImg5");
  const cardHover = document.getElementById("cardHover5");

  cardImg5.classList.remove("scale-110");
  cardHover5.classList.add("hidden");
}

// animazione card 6

function handleCard6() {
  const cardImg6 = document.getElementById("cardImg6");
  const cardHover6 = document.getElementById("cardHover6");

  cardImg6.classList.add("scale-110");
  cardHover6.classList.remove("hidden");
}

function leaveCard6() {
  const cardImg6 = document.getElementById("cardImg6");
  const cardHover6 = document.getElementById("cardHover6");

  cardImg6.classList.remove("scale-110");
  cardHover6.classList.add("hidden");
}

// animazione scroll
window.addEventListener('scroll', () =>{
  const titlePortfolio = document.getElementById('titlePortfolio')
  const card1 = document.getElementById('card1')
  const card2 = document.getElementById('card2')
  const card3 = document.getElementById('card3')
  const card4 = document.getElementById('card4')
  const card5 = document.getElementById('card5')
  const card6 = document.getElementById('card6')
  const scrollY = window.scrollY
  const width = window.innerWidth

  if(scrollY >= 2550 && width >= 375 && width < 640){
    titlePortfolio.classList.remove('opacity-0')
    titlePortfolio.classList.remove('translate-y-28')

    if(scrollY >= 2650){
      card1.classList.remove('opacity-0')
      card1.classList.remove('scale-[1.3]')
      card1.classList.remove('translate-y-28')
    }
    
    if(scrollY >= 2950){
      card2.classList.remove('opacity-0')
      card2.classList.remove('scale-[1.3]')
      card2.classList.remove('translate-y-28')
    }

    if(scrollY >= 3250){
      card3.classList.remove('opacity-0')
      card3.classList.remove('scale-[1.3]')
      card3.classList.remove('translate-y-28')
    }

    if(scrollY >= 3550){
      card4.classList.remove('opacity-0')
      card4.classList.remove('scale-[1.3]')
      card4.classList.remove('translate-y-28')
    }

    if(scrollY >= 3850){
      card5.classList.remove('opacity-0')
      card5.classList.remove('scale-[1.3]')
      card5.classList.remove('translate-y-28')
    }

    if(scrollY >= 4200){
      card6.classList.remove('opacity-0')
      card6.classList.remove('scale-[1.3]')
      card6.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 2350 && width >= 640 && width < 768){
    titlePortfolio.classList.remove('opacity-0')
    titlePortfolio.classList.remove('translate-y-28')

    if(scrollY >= 2450){
      card1.classList.remove('opacity-0')
      card1.classList.remove('scale-[1.3]')
      card1.classList.remove('translate-y-28')
    }
    
    if(scrollY >= 2850){
      card2.classList.remove('opacity-0')
      card2.classList.remove('scale-[1.3]')
      card2.classList.remove('translate-y-28')
    }

    if(scrollY >= 3350){
      card3.classList.remove('opacity-0')
      card3.classList.remove('scale-[1.3]')
      card3.classList.remove('translate-y-28')
    }

    if(scrollY >= 3850){
      card4.classList.remove('opacity-0')
      card4.classList.remove('scale-[1.3]')
      card4.classList.remove('translate-y-28')
    }

    if(scrollY >= 4250){
      card5.classList.remove('opacity-0')
      card5.classList.remove('scale-[1.3]')
      card5.classList.remove('translate-y-28')
    }

    if(scrollY >= 4800){
      card6.classList.remove('opacity-0')
      card6.classList.remove('scale-[1.3]')
      card6.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 2350 && width >= 768 && width < 1024){
    titlePortfolio.classList.remove('opacity-0')
    titlePortfolio.classList.remove('translate-y-28')

    if(scrollY >= 2450){
      card1.classList.remove('opacity-0')
      card1.classList.remove('scale-[1.3]')
      card1.classList.remove('translate-y-28')
      card2.classList.remove('opacity-0')
      card2.classList.remove('scale-[1.3]')
      card2.classList.remove('translate-y-28')
    }
    
    if(scrollY >= 2850){
      card3.classList.remove('opacity-0')
      card3.classList.remove('scale-[1.3]')
      card3.classList.remove('translate-y-28')
      card4.classList.remove('opacity-0')
      card4.classList.remove('scale-[1.3]')
      card4.classList.remove('translate-y-28')
    }

    if(scrollY >= 3150){
      card5.classList.remove('opacity-0')
      card5.classList.remove('scale-[1.3]')
      card5.classList.remove('translate-y-28')
      card6.classList.remove('opacity-0')
      card6.classList.remove('scale-[1.3]')
      card6.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 1950 && width >= 1024 && width < 1440){
    titlePortfolio.classList.remove('opacity-0')
    titlePortfolio.classList.remove('translate-y-28')

    if(scrollY >= 2050){
      card1.classList.remove('opacity-0')
      card1.classList.remove('scale-[1.3]')
      card1.classList.remove('translate-y-28')
      card2.classList.remove('opacity-0')
      card2.classList.remove('scale-[1.3]')
      card2.classList.remove('translate-y-28')
      card3.classList.remove('opacity-0')
      card3.classList.remove('scale-[1.3]')
      card3.classList.remove('translate-y-28')
    }
    
    if(scrollY >= 2250){
      card4.classList.remove('opacity-0')
      card4.classList.remove('scale-[1.3]')
      card4.classList.remove('translate-y-28')
      card5.classList.remove('opacity-0')
      card5.classList.remove('scale-[1.3]')
      card5.classList.remove('translate-y-28')
      card6.classList.remove('opacity-0')
      card6.classList.remove('scale-[1.3]')
      card6.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 1850 && width >= 1440 && width < 1536){
    titlePortfolio.classList.remove('opacity-0')
    titlePortfolio.classList.remove('translate-y-28')

    if(scrollY >= 1950){
      card1.classList.remove('opacity-0')
      card1.classList.remove('scale-[1.3]')
      card1.classList.remove('translate-y-28')
      card2.classList.remove('opacity-0')
      card2.classList.remove('scale-[1.3]')
      card2.classList.remove('translate-y-28')
      card3.classList.remove('opacity-0')
      card3.classList.remove('scale-[1.3]')
      card3.classList.remove('translate-y-28')
    }
    
    if(scrollY >= 2150){
      card4.classList.remove('opacity-0')
      card4.classList.remove('scale-[1.3]')
      card4.classList.remove('translate-y-28')
      card5.classList.remove('opacity-0')
      card5.classList.remove('scale-[1.3]')
      card5.classList.remove('translate-y-28')
      card6.classList.remove('opacity-0')
      card6.classList.remove('scale-[1.3]')
      card6.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 1650 && width >= 1536 && width < 1920){
    titlePortfolio.classList.remove('opacity-0')
    titlePortfolio.classList.remove('translate-y-28')

    if(scrollY >= 1750){
      card1.classList.remove('opacity-0')
      card1.classList.remove('scale-[1.3]')
      card1.classList.remove('translate-y-28')
      card2.classList.remove('opacity-0')
      card2.classList.remove('scale-[1.3]')
      card2.classList.remove('translate-y-28')
      card3.classList.remove('opacity-0')
      card3.classList.remove('scale-[1.3]')
      card3.classList.remove('translate-y-28')
    }
    
    if(scrollY >= 2050){
      card4.classList.remove('opacity-0')
      card4.classList.remove('scale-[1.3]')
      card4.classList.remove('translate-y-28')
      card5.classList.remove('opacity-0')
      card5.classList.remove('scale-[1.3]')
      card5.classList.remove('translate-y-28')
      card6.classList.remove('opacity-0')
      card6.classList.remove('scale-[1.3]')
      card6.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 1450 && width >= 1920 && width < 2560){
    titlePortfolio.classList.remove('opacity-0')
    titlePortfolio.classList.remove('translate-y-28')

    if(scrollY >= 1550){
      card1.classList.remove('opacity-0')
      card1.classList.remove('scale-[1.3]')
      card1.classList.remove('translate-y-28')
      card2.classList.remove('opacity-0')
      card2.classList.remove('scale-[1.3]')
      card2.classList.remove('translate-y-28')
      card3.classList.remove('opacity-0')
      card3.classList.remove('scale-[1.3]')
      card3.classList.remove('translate-y-28')
    }
    
    if(scrollY >= 1850){
      card4.classList.remove('opacity-0')
      card4.classList.remove('scale-[1.3]')
      card4.classList.remove('translate-y-28')
      card5.classList.remove('opacity-0')
      card5.classList.remove('scale-[1.3]')
      card5.classList.remove('translate-y-28')
      card6.classList.remove('opacity-0')
      card6.classList.remove('scale-[1.3]')
      card6.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 1050 && width >= 2560){
    titlePortfolio.classList.remove('opacity-0')
    titlePortfolio.classList.remove('translate-y-28')

    if(scrollY >= 1250){
      card1.classList.remove('opacity-0')
      card1.classList.remove('scale-[1.3]')
      card1.classList.remove('translate-y-28')
      card2.classList.remove('opacity-0')
      card2.classList.remove('scale-[1.3]')
      card2.classList.remove('translate-y-28')
      card3.classList.remove('opacity-0')
      card3.classList.remove('scale-[1.3]')
      card3.classList.remove('translate-y-28')
    }
    
    if(scrollY >= 1450){
      card4.classList.remove('opacity-0')
      card4.classList.remove('scale-[1.3]')
      card4.classList.remove('translate-y-28')
      card5.classList.remove('opacity-0')
      card5.classList.remove('scale-[1.3]')
      card5.classList.remove('translate-y-28')
      card6.classList.remove('opacity-0')
      card6.classList.remove('scale-[1.3]')
      card6.classList.remove('translate-y-28')
    }
  }
})

function Portfolio() {
  return (
    <section id="Portfolio" className="bg-[#0A101E]">
      <div className="h-20 lg:h-[100px]"></div>
      <div id="titlePortfolio" className="h-24 opacity-0 translate-y-28 ease">
        <div className="flex justify-center items-center">
          <h2 className="text-[#FEC544] text-2xl font-medium mb-2.5 z-10">
            PORTFOLIO
          </h2>
          <h2 className="hidden w-full text-[#151b2980] text-[90px] font-bold absolute text-center lg:inline">
            PORTFOLIO
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="w-[170px] h-0.5 bg-[#3f4551] z-10"></div>
          <div className="bg-[#FEC544] w-[70px] h-0.5 absolute z-10"></div>
        </div>
        <div className="h-6"></div>
      </div>

      {/* CARD */}

      <div className=" grid sm:ms-[50px] sm:me-[50px] md:grid-cols-2 overflow-hidden md:ms-6 md:me-6 lg:grid-cols-3 lg:ms-8 lg:me-8 xl:ms-[70px] xl:me-[70px] min-[1440px]:ms-[150px] min-[1440px]:me-[150px] 2xl:ms-[198px] 2xl:me-[198px] min-[1850px]:ms-[390px] min-[1850px]:me-[390px] min-[2560px]:ms-[710px] min-[2560px]:me-[710px]">
        {/* card 1 */}

        <div
          id="card1"
          className="w-full h-[287px] relative ps-[10.5px] pe-[10.5px] shrink-0 mb-[30px] flex justify-center items-center overflow-hidden cursor-pointer opacity-0 scale-[1.3] translate-y-28 ease duration-500 delay-200 sm:h-[421px] md:h-[285px] lg:ps-3 lg:pe-3 lg:h-60 xl:h-[289px]"
          onMouseEnter={handleCard1}
          onMouseLeave={leaveCard1}
        >
          <img
            src={cardImg1}
            alt="Progetto Tailwind"
            id="cardImg1"
            width='' height=''
            loading="lazy"
            className="w-full h-full transition-all duration-300 ease-in"
          />
          <div className="w-full h-full flex justify-center items-center hover:bg-[#3f4551] opacity-85 absolute transition-all duration-300 ease-in">
            <div
              id="cardHover1"
              className="hidden w-[90%] h-[90%] border border-[#fdfeff] flex flex-col justify-center items-center relative transition-all duration-300 ease-in"
            >
              <a href="../../Progetti_Portfolio/progetto_tailwind/index.html" rel="nofollow" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="border border-[#3f4551] w-[50px] h-[50px] rounded-full bg-[#fec544] text-[#151b29]"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                  ></path>
                </svg>
              </a>

              <h3 className="absolute bottom-[37px] text-xl font-medium text-[#fdfeff] z-50">
                Portfolio Site
              </h3>
              <p className="absolute bottom-[14px] text-sm">
                Design / Tailwind
              </p>
            </div>
          </div>
        </div>

        {/* card 2 */}

        <div
        id="card2"
          className="w-full h-[287px] relative ps-[10.5px] pe-[10.5px] shrink-0 mb-[30px] flex justify-center items-center overflow-hidden cursor-pointer opacity-0 scale-[1.3] translate-y-28 ease duration-500 delay-300 sm:h-[421px] md:h-[285px] lg:ps-3 lg:pe-3 lg:h-60 xl:h-[289px]"
          onMouseEnter={handleCard2}
          onMouseLeave={leaveCard2}
        >
          <img
            src={cardImg2}
            alt="Landing Page CSS"
            id="cardImg2"
            width='' height=''
            loading="lazy"
            className="w-full h-full transition-all duration-300 ease-in"
          />
          <div className="w-full h-full flex justify-center items-center hover:bg-[#3f4551] opacity-85 absolute transition-all duration-300 ease-in">
            <div
              id="cardHover2"
              className="hidden w-[90%] h-[90%] border border-[#fdfeff] flex flex-col justify-center items-center relative transition-all duration-300 ease-in"
            >
              <a href="../../Progetti_Portfolio/landing_page_css/index.html" rel="nofollow" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="border border-[#3f4551] w-[50px] h-[50px] rounded-full bg-[#fec544] text-[#151b29]"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                  ></path>
                </svg>
              </a>

              <h3 className="absolute bottom-[37px] text-xl font-medium text-[#fdfeff] z-50">
                Landing Page
              </h3>
              <p className="absolute bottom-[14px] text-sm">
                Portfolio / CSS
              </p>
            </div>
          </div>
        </div>

        {/* card 3 */}

        <div
        id="card3"
          className="w-full h-[287px] relative ps-[10.5px] pe-[10.5px] shrink-0 mb-[30px] flex justify-center items-center overflow-hidden cursor-pointer opacity-0 scale-[1.3] translate-y-28 ease duration-500 delay-[400ms] sm:h-[421px] md:h-[285px] lg:ps-3 lg:pe-3 lg:h-60 xl:h-[289px]"
          onMouseEnter={handleCard3}
          onMouseLeave={leaveCard3}
        >
          <img
            src={cardImg3}
            alt="Modulo sondaggio"
            id="cardImg3"
            width='' height=''
            loading="lazy"
            className="w-full h-full transition-all duration-300 ease-in"
          />
          <div className="w-full h-full flex justify-center items-center hover:bg-[#3f4551] opacity-85 absolute transition-all duration-300 ease-in">
            <div
              id="cardHover3"
              className="hidden w-[90%] h-[90%] border border-[#fdfeff] flex flex-col justify-center items-center relative transition-all duration-300 ease-in"
            >
              <a href="../../Progetti_Portfolio/modulo_sondaggio/index.html" rel="nofollow" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="border border-[#3f4551] w-[50px] h-[50px] rounded-full bg-[#fec544] text-[#151b29]"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                  ></path>
                </svg>
              </a>

              <h3 className="absolute bottom-[37px] text-xl font-medium text-[#fdfeff] z-50">
                Modulo Sondaggio
              </h3>
              <p className="absolute bottom-[14px] text-sm">
                HTML / CSS
              </p>
            </div>
          </div>
        </div>

        {/* card 4 */}

        <div
        id="card4"
          className="w-full h-[287px] relative ps-[10.5px] pe-[10.5px] shrink-0 mb-[30px] flex justify-center items-center overflow-hidden cursor-pointer opacity-0 scale-[1.3] translate-y-28 ease duration-500 delay-500 sm:h-[421px] md:h-[285px] lg:ps-3 lg:pe-3 lg:h-60 lg:mb-0 xl:h-[289px]"
          onMouseEnter={handleCard4}
          onMouseLeave={leaveCard4}
        >
          <img
            src={cardImg4}
            alt="Progetto Pokedex"
            id="cardImg4"
            width='' height=''
            loading="lazy"
            className="w-full h-full transition-all duration-300 ease-in"
          />
          <div className="w-full h-full flex justify-center items-center hover:bg-[#3f4551] opacity-85 absolute transition-all duration-300 ease-in">
            <div
              id="cardHover4"
              className="hidden w-[90%] h-[90%] border border-[#fdfeff] flex flex-col justify-center items-center relative transition-all duration-300 ease-in"
            >
              <a href="../../Progetti_Portfolio/Progetto_js_pokedex/index.html" rel="nofollow" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="border border-[#3f4551] w-[50px] h-[50px] rounded-full bg-[#fec544] text-[#151b29]"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                  ></path>
                </svg>
              </a>

              <h3 className="absolute bottom-[37px] text-xl font-medium text-[#fdfeff] z-50">
                Interactive Pokedex
              </h3>
              <p className="absolute bottom-[14px] text-sm">
                Design / JavaScript
              </p>
            </div>
          </div>
        </div>

        {/* card 5 */}

        <div
        id="card5"
          className="w-full h-[287px] relative ps-[10.5px] pe-[10.5px] shrink-0 mb-[30px] flex justify-center items-center overflow-hidden cursor-pointer opacity-0 scale-[1.3] translate-y-28 ease duration-500 delay-[600ms] sm:h-[421px] md:h-[285px] md:mb-0 lg:ps-3 lg:pe-3 lg:h-60 xl:h-[289px]"
          onMouseEnter={handleCard5}
          onMouseLeave={leaveCard5}
        >
          <img
            src={cardImg5}
            alt="Card Interattiva"
            id="cardImg5"
            width='' height=''
            loading="lazy"
            className="w-full h-full transition-all duration-300 ease-in"
          />
          <div className="w-full h-full flex justify-center items-center hover:bg-[#3f4551] opacity-85 absolute transition-all duration-300 ease-in">
            <div
              id="cardHover5"
              className="hidden w-[90%] h-[90%] border border-[#fdfeff] flex flex-col justify-center items-center relative transition-all duration-300 ease-in"
            >
              <a href="../../Progetti_Portfolio/Progetto_js_card_interattiva/index.html" rel="nofollow" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="border border-[#3f4551] w-[50px] h-[50px] rounded-full bg-[#fec544] text-[#151b29]"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                  ></path>
                </svg>
              </a>

              <h3 className="absolute bottom-[37px] text-xl font-medium text-[#fdfeff] z-50">
                Card Interattiva
              </h3>
              <p className="absolute bottom-[14px] text-sm">
                Design / JavaScript
              </p>
            </div>
          </div>
        </div>

        {/* card 6 */}

        <div
        id="card6"
          className="w-full h-[287px] relative ps-[10.5px] pe-[10.5px] shrink-0 flex justify-center items-center overflow-hidden cursor-pointer opacity-0 scale-[1.3] translate-y-28 ease duration-500 delay-700 sm:h-[421px] md:h-[285px] lg:ps-3 lg:pe-3 lg:h-60 xl:h-[289px]"
          onMouseEnter={handleCard6}
          onMouseLeave={leaveCard6}
        >
          <img
            loading="lazy"
            src={cardImg6}
            alt="Progetto Bootstrap"
            id="cardImg6"
            width='' height=''
            className="w-full h-full transition-all duration-300 ease-in"
          />
          <div className="w-full h-full flex justify-center items-center hover:bg-[#3f4551] opacity-85 absolute transition-all duration-300 ease-in">
            <div
              id="cardHover6"
              className="hidden w-[90%] h-[90%] border border-[#fdfeff] flex flex-col justify-center items-center relative transition-all duration-300 ease-in"
            >
              <a href="../../Progetti_Portfolio/Progetti_bootstrap/index.html" rel="nofollow" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="border border-[#3f4551] w-[50px] h-[50px] rounded-full bg-[#fec544] text-[#151b29]"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                  ></path>
                </svg>
              </a>

              <h3 className="absolute bottom-[37px] text-xl font-medium text-[#fdfeff] z-50">
                Restaurant Site
              </h3>
              <p className="absolute bottom-[14px] text-sm">
                Design / Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20 lg:h-[100px]"></div>
    </section>
  );
}

export default Portfolio;