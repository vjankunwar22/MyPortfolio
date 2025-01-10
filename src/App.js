// My Portfolio
import { Burger, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Lottie from 'lottie-react'
import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const App = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  return (
    <div className="min-h-screen bg-black">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'red'
        }}
        outerStyle={{
          border: '3px solid white'
        }}
      />
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl md:text-4xl text-white font-bold cursor-pointer hover:text-red-500 transition-colors">
              <a href="/">Vision._</a>
            </div>
            <div className="hidden md:flex space-x-8 text-lg justify-center flex-1">
              <a href="#experience" className="text-white hover:text-red-500 transition-colors">Experience</a>
              <a href="#work" className="text-white hover:text-red-500 transition-colors">Work</a>
              <a href="#skills" className="text-white hover:text-red-500 transition-colors">Skills</a>
            </div>
            <Burger
              opened={opened}
              onClick={toggle}
              className="md:hidden"
              color="white"
            />
            <Drawer
              opened={opened}
              onClose={close}
              size="xs"
              position="right"
              className="md:hidden"
            >
              <div className="flex flex-col space-y-4 p-4">
                <a href="#experience" className="text-black hover:text-red-500 transition-colors" onClick={close}>Experience</a>
                <a href="#work" className="text-black hover:text-red-500 transition-colors" onClick={close}>Work</a>
                <a href="#skills" className="text-black hover:text-red-500 transition-colors" onClick={close}>Skills</a>
              </div>
            </Drawer>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-red-500 leading-tight">
            Welcome to my portfolio
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            I'm a web developer with a passion for creating user-friendly and efficient web applications. 
            With a strong foundation in HTML, CSS, and JavaScript, I am dedicated to delivering high-quality, 
            responsive websites that meet the needs of modern users.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Lottie 
            animationData={require('./coder.json')} 
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-12">
          Experience
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Lottie 
              animationData={require('./hello2.json')} 
              className="w-full max-w-md mx-auto transform scale-x-[-1]"
            />
          </div>
        
          <div className="order-1 md:order-2 space-y-6">
            <div className="group border-2 border-white p-6 rounded-lg hover:bg-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-red-500 group-hover:text-black">TechAxis</h3>
              <p className="text-lg text-white group-hover:text-black">Front Developer</p>
              <p className="text-sm mt-2 text-white/70 group-hover:text-black/70">2024 - Present</p>
              <p className="mt-2 text-white group-hover:text-black">Working on enterprise web applications using React, Tailwind CSS</p>
            </div>

            <div className="group border-2 border-white p-6 rounded-lg hover:bg-white transition-all duration-300">
              <h3 className="text-2xl font-bold text-red-500 group-hover:text-black">Online Sathi</h3>
              <p className="text-lg text-white group-hover:text-black">Frontend Developer</p>
              <p className="text-sm mt-2 text-white/70 group-hover:text-black/70">2021 - 2022</p>
              <p className="mt-2 text-white group-hover:text-black">Developed responsive web interfaces using React and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-12">
          Skills
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { skill: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
            { skill: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' },
            { skill: 'HTML/CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/2560px-CSS3_and_HTML5_logos_and_wordmarks.svg.png' },
            { skill: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' },
            { skill: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' },
            { skill: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' }
          ].map((item, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center p-6 border-2 border-white rounded-lg bg-transparent hover:bg-white transition-all duration-300"
              style={{
                animation: `fadeIn 1s ease-in ${index * 0.2}s`,
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              <img 
                src={item.logo}
                alt={item.skill}
                className={`h-16 mb-4 transition-all duration-500 ${
                  item.skill === 'React' ? 'group-hover:animate-spin' :
                  item.skill === 'JavaScript' ? 'group-hover:animate-bounce' :
                  item.skill === 'HTML/CSS' ? 'group-hover:animate-pulse' :
                  item.skill === 'Node.js' ? 'group-hover:animate-ping' :
                  item.skill === 'Python' ? 'group-hover:scale-125' :
                  'group-hover:rotate-180'
                }`}
              />
              <span className="text-red-500 font-medium group-hover:text-black transition-colors">
                {item.skill}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-12">
          Work
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'React Portfolio',
              description: 'Modern portfolio built with React and Tailwind CSS',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
              link: 'https://github.com/vjankunwar22/MyPortfolio'
            },
            {
              title: 'React Dashboard', 
              description: 'Interactive dashboard with React components',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
              link: 'https://green-travel-vcwo.vercel.app/'
            },
            {
              title: 'React Blog',
              description: 'Personal blog created with React',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
              link: 'https://comic-gt2a0ufx0-vjankunwar22s-projects.vercel.app/home'
            }
          ].map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group block"
            >
              <div
                className="h-full border-2 border-white rounded-lg overflow-hidden bg-transparent hover:bg-white transition-all duration-300"
                style={{
                  animation: `fadeIn 1s ease-in ${index * 0.2}s`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="p-4 aspect-video flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-20 object-contain transition-all duration-500 group-hover:animate-spin"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-500 mb-2 group-hover:text-black transition-colors">{project.title}</h3>
                  <p className="text-white text-sm group-hover:text-black transition-colors">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .perspective-1000 {
              perspective: none;
            }
            .preserve-3d {
              transform-style: flat;
            }
          }
        `}
      </style>
      
    </div>
  )
}

export default App
