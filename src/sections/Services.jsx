import StarsCanvas from '../components/canvas/Stars';

export default function About() {
    return (
        <section id="services" className="relative min-h-screen w-full bg-black text-white px-6 md:px-16 py-20">
            <StarsCanvas />
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
    );
}