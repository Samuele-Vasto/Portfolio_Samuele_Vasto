import HeroImg from '../assets/heroImg.webp'
import MeHeroImg from '../assets/MeHeroImg.webp'
import '../components/hero.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// icon animation

function handleIcon() {
    const whatsapp = document.getElementById('whatsapp')
    const slack = document.getElementById('slack')
    const instagram = document.getElementById('instagram')
    const linkedin = document.getElementById('linkedin')
    const spWhatsapp = document.getElementById('spWhatsapp')
    const spSlack = document.getElementById('spSlack')
    const spInstagram = document.getElementById('spInstagram')
    const spLinkedin = document.getElementById('spLinkedin')

    whatsapp.classList.add('w-12', 'justify-center')
    whatsapp.classList.add('w-32', 'justify-evenly')
    spWhatsapp.classList.remove('hidden')
    slack.classList.remove('justify-evenly', 'w-32')
    slack.classList.add('justify-center', 'w-12')
    spSlack.classList.add('hidden')
    instagram.classList.remove('justify-evenly', 'w-32')
    instagram.classList.add('justify-center', 'w-12')
    spInstagram.classList.add('hidden')
    linkedin.classList.remove('justify-evenly', 'w-32')
    linkedin.classList.add('justify-center', 'w-12')
    spLinkedin.classList.add('hidden')

}

function handleIcon2() {
    const whatsapp = document.getElementById('whatsapp')
    const slack = document.getElementById('slack')
    const instagram = document.getElementById('instagram')
    const linkedin = document.getElementById('linkedin')
    const spWhatsapp = document.getElementById('spWhatsapp')
    const spSlack = document.getElementById('spSlack')
    const spInstagram = document.getElementById('spInstagram')
    const spLinkedin = document.getElementById('spLinkedin')

    slack.classList.add('w-12', 'justify-center')
    slack.classList.add('w-32', 'justify-evenly')
    spSlack.classList.remove('hidden')
    whatsapp.classList.remove('justify-evenly', 'w-32')
    whatsapp.classList.add('justify-center', 'w-12')
    spWhatsapp.classList.add('hidden')
    instagram.classList.remove('justify-evenly', 'w-32')
    instagram.classList.add('justify-center', 'w-12')
    spInstagram.classList.add('hidden')
    linkedin.classList.remove('justify-evenly', 'w-32')
    linkedin.classList.add('justify-center', 'w-12')
    spLinkedin.classList.add('hidden')

}

function handleIcon3 () {
    const whatsapp = document.getElementById('whatsapp')
    const slack = document.getElementById('slack')
    const instagram = document.getElementById('instagram')
    const linkedin = document.getElementById('linkedin')
    const spWhatsapp = document.getElementById('spWhatsapp')
    const spSlack = document.getElementById('spSlack')
    const spInstagram = document.getElementById('spInstagram')
    const spLinkedin = document.getElementById('spLinkedin')

    instagram.classList.add('w-12', 'justify-center')
    instagram.classList.add('w-32', 'justify-evenly')
    spInstagram.classList.remove('hidden')
    whatsapp.classList.remove('justify-evenly', 'w-32')
    whatsapp.classList.add('justify-center', 'w-12')
    spWhatsapp.classList.add('hidden')
    slack.classList.remove('justify-evenly', 'w-32')
    slack.classList.add('justify-center', 'w-12')
    spSlack.classList.add('hidden')
    linkedin.classList.remove('justify-evenly', 'w-32')
    linkedin.classList.add('justify-center', 'w-12')
    spLinkedin.classList.add('hidden')
}

function handleIcon4 () {
    const whatsapp = document.getElementById('whatsapp')
    const slack = document.getElementById('slack')
    const instagram = document.getElementById('instagram')
    const linkedin = document.getElementById('linkedin')
    const spWhatsapp = document.getElementById('spWhatsapp')
    const spSlack = document.getElementById('spSlack')
    const spInstagram = document.getElementById('spInstagram')
    const spLinkedin = document.getElementById('spLinkedin')

    linkedin.classList.add('w-12', 'justify-center')
    linkedin.classList.add('w-32', 'justify-evenly')
    spLinkedin.classList.remove('hidden')
    whatsapp.classList.remove('justify-evenly', 'w-32')
    whatsapp.classList.add('justify-center', 'w-12')
    spWhatsapp.classList.add('hidden')
    slack.classList.remove('justify-evenly', 'w-32')
    slack.classList.add('justify-center', 'w-12')
    spSlack.classList.add('hidden')
    instagram.classList.remove('justify-evenly', 'w-32')
    instagram.classList.add('justify-center', 'w-12')
    spInstagram.classList.add('hidden')
}

// animazione scroll
window.addEventListener('load', () => {
    const p = document.getElementById('p')
    const h1 = document.getElementById('h1')
    const h2 = document.getElementById('h2')
    const button = document.getElementById('button')
    const img = document.getElementById('vastoImg1')
    const social = document.getElementById('social')
    const scrollY = window.scrollY
  
    if(scrollY >= 0){
      p.classList.remove('opacity-0')
      p.classList.remove('translate-y-32')
      h1.classList.remove('opacity-0')
      h1.classList.remove('translate-y-32')
      h2.classList.remove('opacity-0')
      h2.classList.remove('translate-y-32')
      button.classList.remove('opacity-0')
      button.classList.remove('translate-y-32')
      img.classList.remove('opacity-0')
      img.classList.remove('translate-x-32')
    }

    if(scrollY >= 0 && window.innerWidth >= 1920){
      social.classList.remove('opacity-0')
      social.classList.remove('-translate-x-28')
    }
  })

  window.addEventListener('scroll', () => {
    const social = document.getElementById('social')
    const scrollY = window.scrollY
    if(scrollY >= 50 && window.innerWidth < 1920){
      social.classList.remove('opacity-0')
      social.classList.remove('-translate-x-28')
    }
  })

  let previousScrollY = 0

// Animazione imagine
window.addEventListener("scroll", ()=>{
    const Img = document.getElementById('imgContainer');
  let top = window.scrollY;
  const MaxValue = 200; 
  let misu = top * 0.15;
  misu = misu > MaxValue ? MaxValue : misu;

  if (top >= 80 && window.innerWidth >= 1024) {
    Img.style.translate = `${misu}px`;
  }

  
  if (top === 0 && previousScrollY > 0) {
    Img.style.translate = '0px';
  }

  previousScrollY = top;
})

function Hero () {
    return(
        <section id='#Home' className='w-full bg-[#080E1E] lg:h-[850px] relative overflow-hidden' >
          
            <div className='h-[580px] w-full pt-24 ps-2.5  sm:ps-[50px] sm:pe-[50px] md:ps-10 md:pt-[134px] md:h-[710px] lg:pt-32 lg:h-[710px] lg:ps-11 xl:ps-[82px] xl:me-[82px] min-[1440px]:ps-[162px] min-[1440px]:pt-[130px]' style={HeroStyle}>
              <div className='2xl:ms-12 min-[1850px]:ms-[240px] min-[2560px]:ms-[560px]'>
                 <p id='p' className='text-[#FEC544] text-3xl mb-2.5 font-light opacity-0 translate-y-32 ease delay-200'>Hello, I'm</p>
                 <h1 id='h1' className='text-white text-[90px] leading-[90px] font-bold mb-6 md:text-[120px] scale opacity-0 translate-y-32 ease delay-300 md:leading-[120px] lg:w-96'>Samuel Vasto</h1>
                 <h2 id='h2' className='text-gray-400 text-4xl mb-11 font-light opacity-0 translate-y-32 ease md:mb-10 lg:mb-12'>Web Developer</h2>
                 <div id='button' className='opacity-0 translate-y-32 ease delay-500'><button className='text-slate-950 text-sm font-semibold bg-[#FEC544] pt-3 pb-3 ps-14 pe-14 rounded-3xl btn ease2 lg:pt-3 lg:pb-3 lg:ps-14 lg:pe-14 lg:text-base'><a href='mailto:vastosamuelejob@gmail.com'>Hire Me</a></button></div>
              </div>
            </div>
            {/* modificare le transizioni perchè le hai solo per provare il js */}
            <div id='imgContainer' className='hidden absolute top-0 right-0 z-10 ease delay-0 duration-1000 lg:block'>
                <div className='overflow-hidden'>
                <img src={MeHeroImg} id='vastoImg1' alt="Immagine di Samuele Vasto" width='' height='' className='w-[460px] h-[850px] object-cover opacity-0 translate-x-32 ease duration-1000 delay-1000 xl:w-[576px] min-[1440px]:w-[648px] 2xl:w-[691px] min-[1850px]:w-[864px] min-[2560px]:w-[1152px]'/>
                </div>
                   {/* icone */}

                <div id='social' className='hidden h-20 w-[448px] bg-[#101624] border border-r-0 border-[#232935] rounded-s-full ps-3 absolute bottom-[30px] right-full opacity-0 -translate-x-28 ease duration-1000 delay-1000 lg:flex lg:items-center'>
                    <a href="https://wa.me/+393770892475" rel='nofollow' target='_blank' id='whatsapp' onMouseEnter={handleIcon} className='bg-[#070D1B] rounded-full w-32 h-12 border border-[#3f4551] me-5 flex items-center justify-evenly ease2'><FontAwesomeIcon icon={faWhatsapp} size="xl" style={{color: "#a9adb8",}} /><span id='spWhatsapp' className='text-white font-semibold'>Whatsapp</span></a>
                    <a href="https://samuelevasto.slack.com/team/U075VMMPAKA" target='_blank' rel='nofollow' id='slack' onMouseEnter={handleIcon2} className='bg-[#070D1B] rounded-full w-12 h-12 border border-[#3f4551] me-5 flex items-center justify-center ease2'><FontAwesomeIcon icon={faSlack} size="xl" style={{color: "#a9adb8",}} /><span id='spSlack' className='hidden text-white font-semibold'>Slack</span></a>
                    <a href="https://www.instagram.com/samuele_vasto" target='_blank' rel='nofollow' id='instagram' onMouseEnter={handleIcon3} className='bg-[#070D1B] rounded-full w-12 h-12 border border-[#3f4551] me-5 flex items-center justify-center ease2'><FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#a9adb8",}} /><span id='spInstagram' className='hidden text-white font-semibold'>Instagram</span></a>
                    <a href="https://www.linkedin.com/in/samuele-vasto-419154310" target='_blank' rel='nofollow' id='linkedin' onMouseEnter={handleIcon4} className='bg-[#070D1B] rounded-full w-12 h-12 border border-[#3f4551]  flex items-center justify-center ease2'><FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#a9adb8",}} /> <span id='spLinkedin' className='hidden text-white font-semibold'>Linkedin</span></a>
                </div>
            </div>

        </section>
    )
}

const HeroStyle = {
              backgroundImage: `url(${HeroImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
export default Hero