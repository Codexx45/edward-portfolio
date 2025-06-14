import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ProjectModal from '../components/ProjectModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDatabase, faDownload, faPlus} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons/faBootstrap';
import { faLaravel } from '@fortawesome/free-brands-svg-icons/faLaravel';
import ComputersCanvas from "../components/canvas/Computers";
import StarsCanvas from "../components/canvas/Stars";
import {
  filFoodImages,
  apluzImages,
  juanderFoodImages,
  lostAndFoundImages,
  wavesReservationImages
} from "../data/projectImages";

import { handleDownload, scrollToFooter } from "../utils/helpers";

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);
return (
    <>
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

        <div className="flex flex-wrap gap-4">
        <button onClick={scrollToFooter} className="bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-600 text-white py-2 px-8 rounded-full font-bold shadow-lg hover:scale-105 transition-transform duration-200 font-mono flex items-center gap-2">
            <FontAwesomeIcon icon={faPlus} size="1x" />
            Hire Me
        </button>
        <button onClick={handleDownload} className="border-2 border-cyan-400 text-white py-2 px-8 rounded-full font-bold hover:bg-gray-800 hover:border-blue-600 transition-colors duration-200 font-mono flex items-center gap-2">
            <FontAwesomeIcon icon={faDownload} size="1x" />
            Download Resume
        </button>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap space-x-4 pt-4">
        <FontAwesomeIcon icon={faReact} size="2x" />
        <FontAwesomeIcon icon={faNode} size="2x" />
        <FontAwesomeIcon icon={faJs} size="2x" />
        <FontAwesomeIcon icon={faBootstrap} size="2x" />
        <FontAwesomeIcon icon={faLaravel} size="2x" />
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <FontAwesomeIcon icon={faDatabase} size="2x" />
        </div>
    </div>
    </section>

    <section id="about" className="relative min-h-screen w-full bg-black text-white px-6 md:px-16 py-20">
          <StarsCanvas />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Left Side: Image */}
            <div className="flex-1 flex justify-center z-5">
            <img
                src="image/aboutme.jpg"
                alt="About Me"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-cyan-500"
            />
            </div>

            {/* Right Side: About Me Card */}
            <div className="flex-1 flex flex-col items-start justify-center space-y-6 bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-3xl shadow-2xl p-10 border-2 border-cyan-700/30 relative overflow-hidden">
            {/* Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-600 opacity-20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-xl animate-pulse"></div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold font-mono text-cyan-400 drop-shadow-lg z-10">
                About Me
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed font-mono z-10">
                I'm <span className="text-cyan-400 font-bold">Edward Shildon Tenchavez</span>, a dedicated 
                <span className="text-indigo-400"> Full-Stack Web Developer</span> passionate about building 
                responsive, high-performance web applications. I studied <span className="text-cyan-300 font-semibold">BS Computer Science </span> 
                at the <span className="text-cyan-300 font-semibold">University of Mindanao</span>, where I built a strong foundation in modern web technologies.
                I specialize in JavaScript, React, Node.js, Laravel, PHP, Bootstrap, Tailwind CSS, MySQL, and SQLite—transforming ideas into clean, efficient, and scalable code.
            </p>

            <p className="text-gray-400 text-md font-mono z-10">
                My journey in tech is driven by curiosity, creativity, and a constant desire to grow. I enjoy turning complex challenges into elegant, functional solutions.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 z-10">
                <span className="bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-mono shadow">JavaScript</span>
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-mono shadow">React</span>
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-mono shadow">Node.js</span>
                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-mono shadow">Bootstrap</span>
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-mono shadow">Tailwind CSS</span>
                <span className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-mono shadow">Laravel</span>
                <span className="bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-mono shadow">PHP</span>
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-mono shadow">MySQL</span>
                <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-mono shadow">SQLite</span>
            </div>
            </div>
        </div>
    </section>
    
    <section id="services" className="min-h-screen w-full bg-gray-950 text-white px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-12">
            <h2 className="text-4xl font-bold text-cyan-400 font-mono">Services I Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            I provide high-quality development solutions tailored to meet your business goals and digital vision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                {/* Service 1 */}
                <div className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-cyan-400 hover:shadow-cyan-500/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-600 opacity-20 rounded-full blur-2xl group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-cyan-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                    </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-cyan-400 font-mono group-hover:text-white transition-colors">Web Development</h3>
                    <p className="text-gray-300 font-mono mb-4">
                    Build responsive, fast, and modern websites using the latest technologies like React, Tailwind, and Node.js.
                    </p>
                    <span className="inline-block bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-mono shadow">Frontend & Backend</span>
                </div>

                {/* Service 2 */}
                <div className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-cyan-400 hover:shadow-cyan-500/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-500 opacity-20 rounded-full blur-2xl group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-blue-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 15h8M9 9h6" />
                    </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400 font-mono group-hover:text-white transition-colors">UI/UX Design</h3>
                    <p className="text-gray-300 font-mono mb-4">
                    Create clean and user-friendly interfaces that enhance user experience and reflect your brand identity.
                    </p>
                    <span className="inline-block bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-mono shadow">Design & Prototyping</span>
                </div>

                {/* Service 3 */}
                <div className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-cyan-400 hover:shadow-cyan-500/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute -top-8 -left-8 w-24 h-24 bg-indigo-500 opacity-20 rounded-full blur-2xl group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-indigo-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" />
                    </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-indigo-400 font-mono group-hover:text-white transition-colors">Full-Stack Solutions</h3>
                    <p className="text-gray-300 font-mono mb-4">
                    Deliver end-to-end solutions — from frontend to backend — including APIs, databases, and deployment.
                    </p>
                    <span className="inline-block bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-white px-4 py-1 rounded-full text-xs font-mono shadow">API & Database</span>
                </div>

                {/* Add more services as needed */}
            </div>
        </div>
    </section>

    <section id="certificates" className="min-h-screen w-full bg-gray-950 text-white px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-cyan-400 font-mono text-center">Certificates</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-mono text-center">
                Here are some of my certifications that showcase my commitment to continuous learning and professional growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                {/* Certificate 1 */}
                <div className="flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg border-2 border-transparent hover:border-cyan-400 transition-all duration-300 p-6">
                    <img src="image/certificates/Capture.PNG" alt="Certificate 1" className="w-full h-40 object-contain mb-4 rounded-lg bg-gray-800" />
                    <h3 className="text-lg font-bold text-cyan-400 font-mono mb-2">HTML and CSS Certificate</h3>
                    <p className="text-gray-300 text-sm font-mono mb-2">Issued by Certiport • 2025</p>
                    <a href="#" className="text-cyan-400 font-mono underline text-sm hover:text-white">View Credential</a>
                </div>
                {/* Certificate 2 */}
                <div className="flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300 p-6">
                    <img src="image/certificates/Capture1.PNG" alt="Certificate 2" className="w-full h-40 object-contain mb-4 rounded-lg bg-gray-800" />
                    <h3 className="text-lg font-bold text-blue-400 font-mono mb-2">Responsive Web Design</h3>
                    <p className="text-gray-300 text-sm font-mono mb-2">Issued by FreeCodeCamp • 2019</p>
                    <a href="#" className="text-blue-400 font-mono underline text-sm hover:text-white">View Credential</a>
                </div>
                {/* Add more certificates as needed */}
            </div>
        </div>
    </section>

   <section id="projects" className="relative min-h-screen w-full bg-black text-white px-6 md:px-16 py-20 overflow-hidden">
    <StarsCanvas />

    <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-cyan-400 font-mono text-center">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {/* Project 1 */}
            <div className="flex flex-col group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-cyan-400 hover:shadow-cyan-500/30 transition-all duration-300 relative h-full">
                <div className="overflow-hidden">
                    <img src="image/Filfood/Capture.PNG" alt="Project 1" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-1 p-6 space-y-4 relative z-10">
                    <h3 className="text-xl font-bold text-cyan-400 font-mono group-hover:text-white transition-colors">FilFood Ordering and Management System</h3>
                    <p className="text-gray-300 text-sm font-mono flex-1">
                        This website is an online food ordering and management system called Filfood. It allows customers to browse a menu,
                        add food items to their cart, and place orders for dine-in or takeout. 
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">PHP</span>
                        <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">MySQL</span>
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">Bootstrap</span>
                    </div>
                    <a href="#" onClick={(e) => {e.preventDefault(); setActiveModal('filFood');}}
                        className="inline-block mt-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-5 py-2 rounded-full font-mono font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                    >
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faArrowRight} size="1x" />
                            View
                        </span>
                    </a>
                </div>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-cyan-600 opacity-20 rounded-full blur-2xl"></div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-blue-400 hover:shadow-blue-500/30 transition-all duration-300 relative h-full">
                <div className="overflow-hidden">
                    <img src="image/Apluz/Capture1.PNG" alt="Apluz" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-1 p-6 space-y-4 relative z-10">
                    <h3 className="text-xl font-bold text-blue-400 font-mono group-hover:text-white transition-colors">Apluz Electronics Inventory & Sales Management System</h3>
                    <p className="text-gray-300 text-sm font-mono flex-1">
                        This web application is designed to help manage products, suppliers, customers, orders, inventory, and sales for an electronics retail and service business.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">PHP</span>
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">Bootstrap</span>
                        <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">Ajax</span>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">MySQL</span>
                    </div>
                    <a href="#" onClick={(e) => {e.preventDefault(); setActiveModal('apluz');}}
                        className="inline-block mt-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-5 py-2 rounded-full font-mono font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                    >
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faArrowRight} size="1x" />
                            View
                        </span>
                    </a>
                </div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-500 opacity-20 rounded-full blur-2xl"></div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-indigo-400 hover:shadow-indigo-500/30 transition-all duration-300 relative h-full">
                <div className="overflow-hidden">
                    <img src="image/JuanderFood/1.PNG" alt="JuanderFood" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-1 p-6 space-y-4 relative z-10">
                    <h3 className="text-xl font-bold text-indigo-400 font-mono group-hover:text-white transition-colors">Juanderfood Reservation</h3>
                    <p className="text-gray-300 text-sm font-mono flex-1">
                        JuanderFood is a restaurant website that showcases Filipino cuisine, provides information about the restaurant, displays the menu, allows users to make reservations, and offers contact details and team introductions.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">PHP</span>
                        <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">Bootstrap</span>
                    </div>
                    <a href="#" onClick={(e) => {e.preventDefault(); setActiveModal('juanderFood');}}
                        className="inline-block mt-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-5 py-2 rounded-full font-mono font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                    >
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faArrowRight} size="1x" />
                            View
                        </span>
                    </a>
                </div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-indigo-500 opacity-20 rounded-full blur-2xl"></div>
            </div>

            {/* Project 4 */}
            <div className="flex flex-col group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-indigo-400 hover:shadow-indigo-500/30 transition-all duration-300 relative h-full">
                <div className="overflow-hidden">
                    <img src="image/LostandFound/Capture.PNG" alt="Lost and Found" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-1 p-6 space-y-4 relative z-10">
                    <h3 className="text-xl font-bold text-indigo-400 font-mono group-hover:text-white transition-colors">Lost and Found App</h3>
                    <p className="text-gray-300 text-sm font-mono flex-1">
                        A mobile application where users can post details and images of lost or found objects, search listings, and connect with others to return belongings.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">Flutter</span>
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">Firebase</span>
                    </div>
                    <a href="#" onClick={(e) => {e.preventDefault(); setActiveModal('lostAndFound');}}
                        className="inline-block mt-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-5 py-2 rounded-full font-mono font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                    >
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faArrowRight} size="1x" />
                            View
                        </span>
                    </a>
                </div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-indigo-500 opacity-20 rounded-full blur-2xl"></div>
            </div>

            {/* Project 5 */}
            <div className="flex flex-col group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-indigo-400 hover:shadow-indigo-500/30 transition-all duration-300 relative h-full">
                <div className="overflow-hidden">
                    <img src="image/WavesReservation/Capture.PNG" alt="Waves Reservation" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-1 p-6 space-y-4 relative z-10">
                    <h3 className="text-xl font-bold text-indigo-400 font-mono group-hover:text-white transition-colors">Waves Reservation</h3>
                    <p className="text-gray-300 text-sm font-mono flex-1">
                        A reservation management system for cottages and tables, featuring real-time availability, billing, and down payment tracking.
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">Laravel</span>
                        <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">SQLite</span>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">CSS</span>
                        <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-mono shadow">Tailwind</span><br/>
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-mono shadow">JavaScript</span>

                    </div>
                    <a href="#" onClick={(e) => {e.preventDefault(); setActiveModal('wavesReservation');}}
                        className="inline-block mt-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-5 py-2 rounded-full font-mono font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                    >
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faArrowRight} size="1x" />
                            View
                        </span>
                    </a>
                </div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-indigo-500 opacity-20 rounded-full blur-2xl"></div>
            </div>
        </div>
        </div>
    </section>

    {/* Modal Component for Projects*/}
    <ProjectModal
    images={
        activeModal === 'filFood'
        ? filFoodImages
        : activeModal === 'apluz'
        ? apluzImages
        : activeModal === 'juanderFood'
        ? juanderFoodImages
        : activeModal === 'lostAndFound'
        ? lostAndFoundImages
        : activeModal === 'wavesReservation'
        ? wavesReservationImages
        : []
    }
    isOpen={!!activeModal}
    onClose={() => setActiveModal(null)}
    />
     </>
    );
}
