window.addEventListener('scroll', ()=>{
  const titleSkills = document.getElementById('titleSkills')
  const textSkills = document.getElementById('textSkills')
  const bar1 = document.getElementById('bar1')
  const bar2 = document.getElementById('bar2')
  const bar3 = document.getElementById('bar3')
  const bar4 = document.getElementById('bar4')
  const bar5 = document.getElementById('bar5')
  const bar6 = document.getElementById('bar6')
  const bar7 = document.getElementById('bar7')
  const bar8 = document.getElementById('bar8')
  const bar9 = document.getElementById('bar9')
  const scrollY = window.scrollY
  const width = window.innerWidth

  if(scrollY >= 1500 && width >= 375 && width < 640){
    titleSkills.classList.remove('opacity-0')
    titleSkills.classList.remove('translate-y-28')

    if(scrollY >= 1550){
      textSkills.classList.remove('opacity-0')
      textSkills.classList.remove('translate-x-[-150px]')
    }

    if(scrollY >= 2000){
      bar1.classList.remove('opacity-0')
      bar1.classList.remove('translate-y-28')
      bar2.classList.remove('opacity-0')
      bar2.classList.remove('translate-y-28')
    }

    if(scrollY >= 2070){
      bar3.classList.remove('opacity-0')
      bar3.classList.remove('translate-y-28')
      bar4.classList.remove('opacity-0')
      bar4.classList.remove('translate-y-28')
    }

    if(scrollY >= 2120){
      bar5.classList.remove('opacity-0')
      bar5.classList.remove('translate-y-28')
      bar6.classList.remove('opacity-0')
      bar6.classList.remove('translate-y-28')
    }

    if(scrollY >= 2230){
      bar7.classList.remove('opacity-0')
      bar7.classList.remove('translate-y-28')
      bar8.classList.remove('opacity-0')
      bar8.classList.remove('translate-y-28')
      bar9.classList.remove('opacity-0')
      bar9.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 1400 && width >= 640 && width < 768){
    titleSkills.classList.remove('opacity-0')
    titleSkills.classList.remove('translate-y-28')

    if(scrollY >= 1450){
      textSkills.classList.remove('opacity-0')
      textSkills.classList.remove('translate-x-[-150px]')
    }

    if(scrollY >= 1800){
      bar1.classList.remove('opacity-0')
      bar1.classList.remove('translate-y-28')
      bar2.classList.remove('opacity-0')
      bar2.classList.remove('translate-y-28')
    }

    if(scrollY >= 1870){
      bar3.classList.remove('opacity-0')
      bar3.classList.remove('translate-y-28')
      bar4.classList.remove('opacity-0')
      bar4.classList.remove('translate-y-28')
    }

    if(scrollY >= 1920){
      bar5.classList.remove('opacity-0')
      bar5.classList.remove('translate-y-28')
      bar6.classList.remove('opacity-0')
      bar6.classList.remove('translate-y-28')
    }

    if(scrollY >= 2040){
      bar7.classList.remove('opacity-0')
      bar7.classList.remove('translate-y-28')
      bar8.classList.remove('opacity-0')
      bar8.classList.remove('translate-y-28')
      bar9.classList.remove('opacity-0')
      bar9.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 1500 && width >= 768 && width < 1024){
    titleSkills.classList.remove('opacity-0')
    titleSkills.classList.remove('translate-y-28')

    if(scrollY >= 1550){
      textSkills.classList.remove('opacity-0')
      textSkills.classList.remove('translate-x-[-150px]')
    }

    if(scrollY >= 1900){
      bar1.classList.remove('opacity-0')
      bar1.classList.remove('translate-y-28')
      bar2.classList.remove('opacity-0')
      bar2.classList.remove('translate-y-28')
    }

    if(scrollY >= 1970){
      bar3.classList.remove('opacity-0')
      bar3.classList.remove('translate-y-28')
      bar4.classList.remove('opacity-0')
      bar4.classList.remove('translate-y-28')
    }

    if(scrollY >= 2020){
      bar5.classList.remove('opacity-0')
      bar5.classList.remove('translate-y-28')
      bar6.classList.remove('opacity-0')
      bar6.classList.remove('translate-y-28')
    }

    if(scrollY >= 2130){
      bar7.classList.remove('opacity-0')
      bar7.classList.remove('translate-y-28')
      bar8.classList.remove('opacity-0')
      bar8.classList.remove('translate-y-28')
      bar9.classList.remove('opacity-0')
      bar9.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 1300 && width >= 1024 && width < 1440){
    titleSkills.classList.remove('opacity-0')
    titleSkills.classList.remove('translate-y-28')

    if(scrollY >= 1350){
      textSkills.classList.remove('opacity-0')
      textSkills.classList.remove('translate-x-[-150px]')
      bar1.classList.remove('opacity-0')
      bar1.classList.remove('translate-y-28')
      bar2.classList.remove('opacity-0')
      bar2.classList.remove('translate-y-28')
      bar3.classList.remove('opacity-0')
      bar3.classList.remove('translate-y-28')
      bar4.classList.remove('opacity-0')
      bar4.classList.remove('translate-y-28')
    }

    if(scrollY >= 1500){
      bar5.classList.remove('opacity-0')
      bar5.classList.remove('translate-y-28')
      bar6.classList.remove('opacity-0')
      bar6.classList.remove('translate-y-28')
    }

    if(scrollY >= 1550){
      bar7.classList.remove('opacity-0')
      bar7.classList.remove('translate-y-28')
      bar8.classList.remove('opacity-0')
      bar8.classList.remove('translate-y-28')
      bar9.classList.remove('opacity-0')
      bar9.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 1200 && width >= 1440 && width < 1536){
    titleSkills.classList.remove('opacity-0')
    titleSkills.classList.remove('translate-y-28')

    if(scrollY >= 1250){
      textSkills.classList.remove('opacity-0')
      textSkills.classList.remove('translate-x-[-150px]')
      bar1.classList.remove('opacity-0')
      bar1.classList.remove('translate-y-28')
      bar2.classList.remove('opacity-0')
      bar2.classList.remove('translate-y-28')
      bar3.classList.remove('opacity-0')
      bar3.classList.remove('translate-y-28')
      bar4.classList.remove('opacity-0')
      bar4.classList.remove('translate-y-28')
    }

    if(scrollY >= 1400){
      bar5.classList.remove('opacity-0')
      bar5.classList.remove('translate-y-28')
      bar6.classList.remove('opacity-0')
      bar6.classList.remove('translate-y-28')
    }

    if(scrollY >= 1450){
      bar7.classList.remove('opacity-0')
      bar7.classList.remove('translate-y-28')
      bar8.classList.remove('opacity-0')
      bar8.classList.remove('translate-y-28')
      bar9.classList.remove('opacity-0')
      bar9.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 1000 && width >= 1536 && width < 1920){
    titleSkills.classList.remove('opacity-0')
    titleSkills.classList.remove('translate-y-28')

    if(scrollY >= 1050){
      textSkills.classList.remove('opacity-0')
      textSkills.classList.remove('translate-x-[-150px]')
      bar1.classList.remove('opacity-0')
      bar1.classList.remove('translate-y-28')
      bar2.classList.remove('opacity-0')
      bar2.classList.remove('translate-y-28')
      bar3.classList.remove('opacity-0')
      bar3.classList.remove('translate-y-28')
      bar4.classList.remove('opacity-0')
      bar4.classList.remove('translate-y-28')
    }

    if(scrollY >= 1200){
      bar5.classList.remove('opacity-0')
      bar5.classList.remove('translate-y-28')
      bar6.classList.remove('opacity-0')
      bar6.classList.remove('translate-y-28')
    }

    if(scrollY >= 1250){
      bar7.classList.remove('opacity-0')
      bar7.classList.remove('translate-y-28')
      bar8.classList.remove('opacity-0')
      bar8.classList.remove('translate-y-28')
    }

    if(scrollY >= 1350){
      bar9.classList.remove('opacity-0')
      bar9.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 800 && width >= 1920 && width < 2560){
    titleSkills.classList.remove('opacity-0')
    titleSkills.classList.remove('translate-y-28')

    if(scrollY >= 850){
      textSkills.classList.remove('opacity-0')
      textSkills.classList.remove('translate-x-[-150px]')
      bar1.classList.remove('opacity-0')
      bar1.classList.remove('translate-y-28')
      bar2.classList.remove('opacity-0')
      bar2.classList.remove('translate-y-28')
      bar3.classList.remove('opacity-0')
      bar3.classList.remove('translate-y-28')
    }

    if(scrollY >= 1000){
      bar4.classList.remove('opacity-0')
      bar4.classList.remove('translate-y-28')
      bar5.classList.remove('opacity-0')
      bar5.classList.remove('translate-y-28')
    }

    if(scrollY >= 1050){
      bar6.classList.remove('opacity-0')
      bar6.classList.remove('translate-y-28')
      bar7.classList.remove('opacity-0')
      bar7.classList.remove('translate-y-28')
    }

    if(scrollY >= 1150){
      bar8.classList.remove('opacity-0')
      bar8.classList.remove('translate-y-28')
      bar9.classList.remove('opacity-0')
      bar9.classList.remove('translate-y-28')
    }
  }else if(scrollY >= 400 && width >= 2560){
    titleSkills.classList.remove('opacity-0')
    titleSkills.classList.remove('translate-y-28')

    if(scrollY >= 450){
      textSkills.classList.remove('opacity-0')
      textSkills.classList.remove('translate-x-[-150px]')
      bar1.classList.remove('opacity-0')
      bar1.classList.remove('translate-y-28')
      bar2.classList.remove('opacity-0')
      bar2.classList.remove('translate-y-28')
      bar3.classList.remove('opacity-0')
      bar3.classList.remove('translate-y-28')
    }

    if(scrollY >= 600){
      bar4.classList.remove('opacity-0')
      bar4.classList.remove('translate-y-28')
      bar5.classList.remove('opacity-0')
      bar5.classList.remove('translate-y-28')
    }

    if(scrollY >= 650){
      bar6.classList.remove('opacity-0')
      bar6.classList.remove('translate-y-28')
      bar7.classList.remove('opacity-0')
      bar7.classList.remove('translate-y-28')
    }

    if(scrollY >= 750){
      bar8.classList.remove('opacity-0')
      bar8.classList.remove('translate-y-28')
      bar9.classList.remove('opacity-0')
      bar9.classList.remove('translate-y-28')
    }
  }
})


function Skills() {
  return (
    <section id="Skills" className="bg-[#070D1B]">
      <div className="h-20 lg:h-[100px]"></div>
      <div id="titleSkills" className="h-24 opacity-0 translate-y-28 ease">
        <div className="flex justify-center items-center">
          <h2 className="text-[#FEC544] text-2xl font-medium mb-2.5 z-10">
            SKILLS
          </h2>
          <h2 className="hidden w-full text-[#151b2980] text-[90px] font-bold absolute text-center lg:inline">
            SKILLS
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="w-[170px] h-0.5 bg-[#3f4551] z-10"></div>
          <div className="bg-[#FEC544] w-[70px] h-0.5 absolute z-10"></div>
        </div>
        <div className="h-6"></div>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:ms-8 lg:me-8 xl:ms-[70px] xl:me-[70px] min-[1440px]:ps-[119px] min-[1440px]:pe-[119px] 2xl:ms-20 2xl:me-20 min-[1850px]:ms-[271px] min-[1850px]:me-[271px] min-[2560px]:ms-[590px] min-[2560px]:me-[590px]">
        <div id="textSkills" className="ps-[10.5px] pe-[10.5px] opacity-0 translate-x-[-150px] ease sm:ms-[50px] sm:me-[50px] md:ms-6 md:me-6 lg:ms-0 lg:ps-3 lg:me-0">
          <h3 className="text-[28px] leading-9 text-white mb-[25px] lg:text-4xl lg:leading-[1.2em]">
            All the skills that I have in that field of work are mentioned.
          </h3>
          <p className="text-sm leading-[1.6em] lg:text-base lg:leading-[1.6em]">
            I possess a strong command of the fundamental web programming
            languages, such as HTML and CSS, which I use to create structured
            websites with attractive designs. My JavaScript skills allow me to
            implement interactive and dynamic functionalities, creating smooth
            and engaging user experiences. I also have a good knowledge of
            front-end libraries and frameworks (such as Bootstrap, Tailwind, and
            React) that simplify and speed up web development, allowing me to
            develop complex and high-performance web applications with a modern
            and scalable architecture.<span className="lg:hidden xl:inline"> I use Git for efficient management of my
            web projects. Finally, I have a fair knowledge of WordPress and
            Canva.</span>
          </p>
          <div className="h-[30px] lg:hidden"></div>
        </div>

        <div className="ps-[10.5px] pe-[10.5px] sm:ms-[50px] sm:me-[50px] md:ms-6 md:me-6 lg:pe-3 lg:ms-0 lg:me-0">
          <div className="roboto text-base text-white font-bold">
            <div id="bar1" className="flex flex-col opacity-0 translate-y-28 ease delay-200 duration-500">
              <div className="flex justify-between">
                <label for="html">HTML</label>
                <span className="text-sm text-[#FEC544] font-normal lg:text-base">
                  95%
                </span>
              </div>
              <div className="w-full h-0.5 bg-[#FEC544]"></div>
              <div className="w-full h-4 lg:h-[20px]"></div>
            </div>

            <div id="bar2" className="flex flex-col opacity-0 translate-y-28 ease delay-300 duration-500">
              <div className="flex justify-between">
                <label for="html">CSS</label>
                <span className="text-sm text-[#FEC544] font-normal lg:text-base">
                  90%
                </span>
              </div>
              <div className="w-full h-0.5 bg-[#FEC544]"></div>
              <div className="w-full h-4 lg:h-[20px]"></div>
            </div>

            <div id="bar3" className="flex flex-col opacity-0 translate-y-28 ease delay-400 duration-500">
              <div className="flex justify-between">
                <label for="html">Tailwind</label>
                <span className="text-sm text-[#FEC544] font-normal lg:text-base">
                  90%
                </span>
              </div>
              <div className="w-full h-0.5 bg-[#FEC544]"></div>
              <div className="w-full h-4 lg:h-[20px]"></div>
            </div>

            <div id="bar4" className="flex flex-col opacity-0 translate-y-28 ease delay-500 duration-500">
              <div className="flex justify-between">
                <label for="html">Bootstrap</label>
                <span className="text-sm text-[#FEC544] font-normal lg:text-base">
                  70%
                </span>
              </div>
              <div className="w-full h-0.5 bg-[#FEC544]"></div>
              <div className="w-full h-4 lg:h-[20px]"></div>
            </div>

            <div id="bar5" className="flex flex-col opacity-0 translate-y-28 ease delay-[600ms] duration-500">
              <div className="flex justify-between">
                <label for="html">JavaScript</label>
                <span className="text-sm text-[#FEC544] font-normal lg:text-base">
                  80%
                </span>
              </div>
              <div className="w-full h-0.5 bg-[#FEC544]"></div>
              <div className="w-full h-4 lg:h-[20px]"></div>
            </div>

            <div id="bar6" className="flex flex-col opacity-0 translate-y-28 ease delay-700 duration-500">
              <div className="flex justify-between">
                <label for="html">React</label>
                <span className="text-sm text-[#FEC544] font-normal lg:text-base">
                  75%
                </span>
              </div>
              <div className="w-full h-0.5 bg-[#FEC544]"></div>
              <div className="w-full h-4 lg:h-[20px]"></div>
            </div>

            <div id="bar7" className="flex flex-col opacity-0 translate-y-28 ease delay-[800ms] duration-500">
              <div className="flex justify-between">
                <label for="html">GIT</label>
                <span className="text-sm text-[#FEC544] font-normal lg:text-base">
                  85%
                </span>
              </div>
              <div className="w-full h-0.5 bg-[#FEC544]"></div>
              <div className="w-full h-4 lg:h-[20px]"></div>
            </div>

            <div id="bar8" className="flex flex-col opacity-0 translate-y-28 ease delay-[900ms] duration-500">
              <div className="flex justify-between">
                <label for="html">WordPress</label>
                <span className="text-sm text-[#FEC544] font-normal lg:text-base">
                  70%
                </span>
              </div>
              <div className="w-full h-0.5 bg-[#FEC544]"></div>
              <div className="w-full h-4 lg:h-[20px]"></div>
            </div>

            <div id="bar9" className="flex flex-col opacity-0 translate-y-28 ease delay-1000 duration-500">
              <div className="flex justify-between">
                <label for="html">Canva</label>
                <span className="text-sm text-[#FEC544] font-normal lg:text-base">
                  90%
                </span>
              </div>
              <div className="w-full h-0.5 bg-[#FEC544]"></div>
            </div>
          </div>
        </div>

        <div className="h-24 lg:h-[100px]"></div>
      </div>
    </section>
  );
}

export default Skills;