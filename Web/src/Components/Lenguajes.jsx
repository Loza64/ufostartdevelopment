import PropTypes from 'prop-types'
import { BiLogoAngular, BiLogoBootstrap, BiLogoCss3, BiLogoGit, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoJquery, BiLogoMongodb, BiLogoNodejs, BiLogoPhp, BiLogoReact, BiLogoTypescript } from 'react-icons/bi'
import { TbBrandCSharp, TbBrandKotlin } from 'react-icons/tb'
import { DiNetmagazine } from 'react-icons/di'
import { SiMysql, SiMicrosoftsqlserver, SiOracle, SiExpress, SiSpringboot } from 'react-icons/si'
import { useEffect } from 'react'

Lenguajes.propTypes = {
  title: PropTypes.array
}

export default function Lenguajes({ title }) {

  const technologies = [
    { icon: <BiLogoReact style={{ color: '#61DBFB' }} className='icon-tecnologie' />, name: 'React' },
    { icon: <BiLogoAngular style={{ color: '#E23237' }} className='icon-tecnologie' />, name: 'Angular' },
    { icon: <BiLogoHtml5 style={{ color: '#E34F26' }} className='icon-tecnologie' />, name: 'HTML5' },
    { icon: <BiLogoCss3 style={{ color: '#1572B6' }} className='icon-tecnologie' />, name: 'CSS3' },
    { icon: <BiLogoBootstrap style={{ color: '#7952B3' }} className='icon-tecnologie' />, name: 'Bootstrap' },
    { icon: <BiLogoJquery style={{ color: '#0769AD' }} className='icon-tecnologie' />, name: 'jQuery' },
    { icon: <BiLogoJavascript style={{ color: '#F7DF1E' }} className='icon-tecnologie' />, name: 'JavaScript' },
    { icon: <BiLogoTypescript style={{ color: '#007ACC' }} className='icon-tecnologie' />, name: 'TypeScript' },
    { icon: <TbBrandKotlin style={{ color: '#F18E33' }} className='icon-tecnologie' />, name: 'Kotlin' },
    { icon: <BiLogoPhp style={{ color: '#4F5B93' }} className='icon-tecnologie' />, name: 'PHP' },
    { icon: <SiSpringboot style={{ color: '#6DB33F' }} className='icon-tecnologie' />, name: 'Spring Boot' },
    { icon: <TbBrandCSharp style={{ color: '#239120' }} className='icon-tecnologie' />, name: 'C#' },
    { icon: <BiLogoGit style={{ color: '#E34F26' }} className='icon-tecnologie' />, name: 'Git' },
    { icon: <DiNetmagazine style={{ color: '#512BD4' }} className='icon-tecnologie' />, name: '.NET' },
    { icon: <BiLogoJava style={{ color: '#007396' }} className='icon-tecnologie' />, name: 'Java' },
    { icon: <BiLogoNodejs style={{ color: '#8CC84B' }} className='icon-tecnologie' />, name: 'Node.js' },
    { icon: <SiExpress style={{ color: 'white' }} className='icon-tecnologie' />, name: 'Express.js' },
    { icon: <SiMysql style={{ color: '#00758F' }} className='icon-tecnologie' />, name: 'MySQL' },
    { icon: <SiMicrosoftsqlserver style={{ color: '#CC2927' }} className='icon-tecnologie' />, name: 'SQL Server' },
    { icon: <SiOracle style={{ color: '#F80000' }} className='icon-tecnologie' />, name: 'Oracle' },
    { icon: <BiLogoMongodb style={{ color: '#47A248' }} className='icon-tecnologie' />, name: 'MongoDB' },
  ];

  useEffect(() => {
    const icons = document.querySelectorAll(".icon");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(
        ({ isIntersecting, target }) => {
          if (isIntersecting) {
            target.style.transform = "translateY(0%)"
            target.style.opacity = "1";
          } else {
            target.style.transform = "translateY(-15%)"
            target.style.opacity = "0";
          }
        },
        {
          root: null,
          rootMargin: '0%',
          threshold: [0.5, 1.0]
        }
      )
    })

    icons.forEach(item => {
      observer.observe(item);
    })

    return () => icons.forEach(item => {
      observer.unobserve(item);
    })
  }, [])

  return (
    <section className='seccion-tecnologies'>
      <h2 className="title">{title}</h2>
      <div className='list'>
        {
          technologies.map(({ icon, name }, index) => (
            <article className="icon" key={index}>
              {icon}
              <label className="icon-title">{name}</label>
            </article>
          ))
        }
      </div>
    </section>
  )
}