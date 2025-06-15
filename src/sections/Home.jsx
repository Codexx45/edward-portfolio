import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlus } from '@fortawesome/free-solid-svg-icons';
import ComputersCanvas from "../components/canvas/Computers";

import { handleDownload, scrollToFooter } from "../utils/helpers";


export default function Home() {
return (
    <section id="home"  className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-cyan-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
        {/* Interactive Canvas Background */}
        <div className="absolute inset-0 z-0">
            <ComputersCanvas />
        </div>

        {/* Content above the canvas */}
        <div className="relative z-10 flex flex-col justify-center h-full px-10 text-white space-y-8 pointer-events-auto sm:pointer-events-none">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-black px-5 py-2 rounded-full w-fit font-mono font-extrabold shadow-lg text-l md:text-xl animate-bounce flex items-center gap-2">
            Hi! I'm Edward
            </span>

            <h1 className="text-xl md:text-3xl font-extrabold font-mono text-cyan-400 drop-shadow-lg">
            {'I do '}
            <Typewriter
                words={['Web Development', 'UI/UX Design', 'System Development']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
            />
            </h1>

            <p className="text-gray-300 max-w-lg text-lg font-mono font-medium drop-shadow gap-2">
            Coding the future, one <span className="text-cyan-400">line</span> at a time. Passionate about <span className="text-purple-400">modern web tech</span>.
            </p>

            <div className="flex flex-wrap gap-4 pointer-events-auto">
                <button onClick={scrollToFooter} className="bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-600 text-white py-2 px-8 rounded-full font-bold shadow-lg hover:scale-105 transition-transform duration-200 font-mono flex items-center gap-2">
                    <FontAwesomeIcon icon={faPlus} size="1x" />
                    Hire Me
                </button>
                <button onClick={handleDownload} className="pointer-events-auto border-2 border-cyan-400 text-white py-2 px-8 rounded-full font-bold hover:bg-gray-800 hover:border-blue-600 transition-colors duration-200 font-mono flex items-center gap-2">
                    <FontAwesomeIcon icon={faDownload} size="1x" />
                    Download Resume
                </button>
            </div>
        </div>
    </section>
    );
}
