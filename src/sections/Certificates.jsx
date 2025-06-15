import React from 'react';

export default function About() {
  return (
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
    );
}