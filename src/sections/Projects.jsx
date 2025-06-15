import ProjectModal from '../components/ProjectModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import StarsCanvas from "../components/canvas/Stars";
import {
  filFoodImages,
  apluzImages,
  juanderFoodImages,
  lostAndFoundImages,
  wavesReservationImages
} from "../data/projectImages";

import React, { useState } from 'react';

export default function Projects() {
    const [activeModal, setActiveModal] = useState(null);
    return (
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
    </section>
    );
}