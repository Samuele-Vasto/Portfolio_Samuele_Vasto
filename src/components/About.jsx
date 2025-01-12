import aboutImg from "../assets/aboutImg.webp";
import CV_SAMUELE from '../assets/CV_Samuele_Vasto_Dev.pdf'

// animazione comparsa
window.addEventListener('scroll', () => {
  const titleAbout = document.getElementById('titleAbout')
  const immg = document.getElementById('immg')
  const text = document.getElementById('text')
  const scrollY = window.scrollY

  if(scrollY >= 100 && window.innerWidth >= 375 && window.innerWidth < 768){
    titleAbout.classList.remove('opacity-0')
    titleAbout.classList.remove('translate-y-28')

    if(scrollY >= 200){
      immg.classList.remove('opacity-0')
      immg.classList.remove('translate-x-[-150px]')
    }

    if(scrollY >= 750){
      text.classList.remove('opacity-0')
      text.classList.remove('scale-50')}
  }else if(scrollY >= 150 && window.innerWidth >= 768 && window.innerWidth < 1024){
    titleAbout.classList.remove('opacity-0')
    titleAbout.classList.remove('translate-y-28')

    if(scrollY >= 250){
      immg.classList.remove('opacity-0')
      immg.classList.remove('translate-x-[-150px]')
    }

    if(scrollY >= 850){
      text.classList.remove('opacity-0')
      text.classList.remove('scale-50')}
  }else if(scrollY >= 350 && window.innerWidth >= 1024 && window.innerWidth < 1440){
    titleAbout.classList.remove('opacity-0')
    titleAbout.classList.remove('translate-y-28')

    if(scrollY >= 420){
      immg.classList.remove('opacity-0')
      immg.classList.remove('translate-x-[-150px]')
      text.classList.remove('opacity-0')
      text.classList.remove('scale-50')
    }
  }else if(scrollY >= 300 && window.innerWidth >= 1440 && window.innerWidth < 1536){
    titleAbout.classList.remove('opacity-0')
    titleAbout.classList.remove('translate-y-28')

    if(scrollY >= 400){
      immg.classList.remove('opacity-0')
      immg.classList.remove('translate-x-[-150px]')
      text.classList.remove('opacity-0')
      text.classList.remove('scale-50')
    }
  }else if(scrollY >= 100 && window.innerWidth >= 1536 && window.innerWidth < 1920){
    titleAbout.classList.remove('opacity-0')
    titleAbout.classList.remove('translate-y-28')

    if(scrollY >= 150){
      immg.classList.remove('opacity-0')
      immg.classList.remove('translate-x-[-150px]')
      text.classList.remove('opacity-0')
      text.classList.remove('scale-50')
    }
  }
})

window.addEventListener('load', ()=>{
  const titleAbout = document.getElementById('titleAbout')
  const immg = document.getElementById('immg')
  const text = document.getElementById('text')
  const scrollY = window.scrollY

  if(scrollY >= 0 && window.innerWidth >= 1920){
    titleAbout.classList.remove('opacity-0')
    titleAbout.classList.remove('translate-y-28')
    immg.classList.remove('opacity-0')
    immg.classList.remove('translate-x-[-150px]')
    text.classList.remove('opacity-0')
    text.classList.remove('scale-50')
  }
})

function About() {
  return (
    <section id="About" className="bg-[#0A101E]">
      <div className="h-20 lg:h-[100px]"></div>
      <div id="titleAbout" className="h-24 opacity-0 translate-y-28 ease">
        <div className="flex justify-center items-center">
          <h2 className="text-[#FEC544] text-2xl font-medium mb-2.5 z-10">
            ABOUT ME
          </h2>
          <h2 className="hidden w-full text-[#151b2980] text-[90px] font-bold absolute text-center lg:inline">
            ABOUT ME
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="w-[170px] h-0.5 bg-[#3f4551] z-10"></div>
          <div className="bg-[#FEC544] w-[70px] h-0.5 absolute z-10"></div>
        </div>
        <div className="h-6"></div>
      </div>

      <div className="overflow-hidden lg:grid lg:grid-cols-2 lg:ms-2 lg:me-2 xl:ms-[46px] xl:me-[46px] min-[1440px]:ps-[119px] min-[1440px]:pe-[119px] 2xl:ms-14 2xl:me-14 min-[1850px]:ms-[248px] min-[1850px]:me-[248px] min-[2560px]:ms-[568px] min-[2560px]:me-[568px]">
        <div className="ps-[10.5px] pe-[10.5px] sm:ms-[50px] sm:me-[50px] md:ms-6 md:me-6 lg:pe-3 lg:me-[30px]">
          <img
          id="immg"
            src={aboutImg}
            alt="Immagine di Samuele Vasto"
            width='' height=''
            className="w-full h-[550px] object-cover opacity-0 translate-x-[-150px] ease"
          />
          <div className="h-[30px] lg:hidden"></div>
        </div>

        <div id="text" className="ps-[10.5px] pe-[10.5px] opacity-0 scale-50 ease delay-500 duration-1000 sm:ms-[50px] sm:me-[50px] md:ms-6 md:me-6 lg:ms-0 lg:ps-3">
          <h2 className="text-4xl text-white mb-[18px]">
            Hi There! I'm Samuel Vasto
          </h2>
          <h3 className="text-[#FEC544] text-2xl mb-[18px]">Web Developer</h3>
          <p className="text-sm mb-[18px] lg:text-base">
            I am a 21-year-old front-end developer born in Taranto, Italy, with
            a strong passion for technology and an infectious enthusiasm for
            learning. Collaborative and problem-solving oriented, I am able to
            work effectively in teams to achieve common goals.
          </p>
          <ul>
            <li className="text-sm mb-[14px] lg:text-base">
              <span className="w-[108px] inline-block">Birthday</span>:{" "}
              <span className="ms-[7px]">March 08, 2003</span>
            </li>
            <li className="text-sm mb-[14px] lg:text-base">
              <span className="w-[108px] inline-block">Phone</span>:{" "}
              <span className="ms-[7px]">+39 377-089-247</span>
            </li>
            <li className="text-sm mb-[14px] lg:text-base">
              <span className="w-[108px] inline-block">Email</span>:{" "}
              <span className="ms-[7px]">vastosamueleob@gmail.com</span>
            </li>
            <li className="text-sm mb-[14px] lg:text-base">
              <span className="w-[108px] inline-block">Address</span>:{" "}
              <span className="ms-[7px]">74121 Taranto, TA</span>
            </li>
            <li className="text-sm mb-[14px] lg:text-base">
              <span className="w-[108px] inline-block">Lenguage</span>:{" "}
              <span className="ms-[7px]">Italian, English</span>
            </li>
            <li className="text-sm mb-[14px] lg:text-base">
              <span className="w-[108px] inline-block">Freelance</span>:{" "}
              <span className="ms-[7px]">Available</span>
            </li>
          </ul>
          <div className="mt-[52px] lg:mt-20 min-[1440px]:mt-24">
            <button className="text-slate-950 text-sm font-semibold bg-[#FEC544] pt-3 pb-3 ps-10 pe-10 rounded-3xl btn ease2 lg:pt-3 lg:pb-3 lg:ps-7 lg:pe-7 lg:text-base min-[1440px]:ps-8 min-[1440px]:pe-8">
              <a href={CV_SAMUELE} download="CV_Samuele_Vasto_Dev.pdf">
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="h-24 lg:h-[100px]"></div>
    </section>
  );
}
export default About;