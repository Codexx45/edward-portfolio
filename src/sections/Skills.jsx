import { TechIcon, TailwindSVG, ChatGPTSVG } from "../components/icon";
import { faGitAlt, faJava, faJs, faNode, faPhp, faPython, faReact, faRProject } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons/faBootstrap';
import { faLaravel } from '@fortawesome/free-brands-svg-icons/faLaravel';
import { faFlutter } from '@fortawesome/free-brands-svg-icons/faFlutter';

export default function About() {
  return (
    <section id="skills" className="min-h-screen w-full bg-gray-950 text-white px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-12">
            <h2 className="text-4xl font-bold text-cyan-400 font-mono">Tech Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            My core technologies and tools for building modern, scalable applications.
            </p>

            {/* Frontend */}
            <h3 className="text-2xl font-bold text-white font-mono pt-10">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center pt-6">
            <TechIcon icon={faJs} label="JavaScript" color="text-yellow-400" />
            <TechIcon icon={faReact} label="React" color="text-sky-400" />
            <TechIcon icon={faBootstrap} label="Bootstrap" color="text-purple-500" />
            <TechIcon svg={TailwindSVG} label="Tailwind" />
            </div>

            {/* Backend */}
            <h3 className="text-2xl font-bold text-white font-mono pt-10">Backend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center pt-6">
            <TechIcon icon={faLaravel} label="Laravel" color="text-rose-600" />
            <TechIcon icon={faPhp} label="PHP" color="text-indigo-500" />
            <TechIcon icon={faNode} label="Node.js" color="text-green-500" />
            <TechIcon icon={faPython} label="Python" color="text-blue-500" />
            <TechIcon icon={faJava} label="Java" color="text-orange-500" />
            <TechIcon svg={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" 
            className='w-14 h-14/2' />
            } 
            label="Ruby on Rails" 
            color="text-blue-400" />
            <TechIcon icon={faFlutter} label="Flutter" color="text-sky-500"/>
            <TechIcon svg={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className='w-14 h-15'/>
            } 
            label="C++" 
            color="text-blue-400" />
            </div>

            {/* Database */}
            <h3 className="text-2xl font-bold text-white font-mono pt-10">Database</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center pt-6">
            <TechIcon svg={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" className='w-14 h-14/2' />} 
            label="MySQL" 
            color="text-blue-400" />
            <TechIcon svg={
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" className='w-14 h-15' />} 
            label="SQLite" 
            color="text-blue-400" />
            <TechIcon
            svg={<i className="devicon-firebase-plain colored text-6xl"></i>}
            label="Firebase"
            color="text-zinc-400"
            />
            </div>

            {/* Others / Tools */}
            <h3 className="text-2xl font-bold text-white font-mono pt-10">Tools & Others</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center pt-6">
            <TechIcon icon={faGitAlt} label="Git" color="text-[#F1502F]" />
            <TechIcon icon={faRProject} label="R" color="text-pink-500" />
            <TechIcon svg={ChatGPTSVG} label="ChatGPT" color="text-green-500" />
            <TechIcon svg={
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg" className='w-14 h-15'/>
            } 
            label="Arduino" 
            color="text-blue-400" />
            </div>
        </div>
    </section>
    );
}