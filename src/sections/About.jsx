import StarsCanvas from '../components/canvas/Stars';

export default function About() {
    return (
        <section id="about" className="relative min-h-screen w-full bg-black text-white px-6 md:px-16 py-20">
        <StarsCanvas />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center z-5">
            <img
                src="image/aboutme.jpg"
                alt="About Me"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-cyan-500"
            />
            </div>

            <div className="flex-1 flex flex-col items-start justify-center space-y-6 bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-3xl shadow-2xl p-10 border-2 border-cyan-700/30 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-600 opacity-20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-xl animate-pulse"></div>

            <h2 className="text-4xl md:text-5xl font-extrabold font-mono text-cyan-400 drop-shadow-lg z-10">About Me</h2>

            <p className="text-gray-300 text-lg leading-relaxed font-mono z-10">
                I'm <span className="text-cyan-400 font-bold">Edward Shildon Tenchavez</span>, a dedicated 
                <span className="text-indigo-400"> Full-Stack Web Developer</span> passionate about building responsive, high-performance web applications. 
                I studied <span className="text-cyan-300 font-semibold">BS Computer Science</span> at the 
                <span className="text-cyan-300 font-semibold"> University of Mindanao</span>, where I built a strong foundation in modern web technologies.
                I specialize in JavaScript, React, Node.js, Laravel, PHP, Bootstrap, Tailwind CSS, MySQL, and SQLite—transforming ideas into clean, efficient, and scalable code. 
                I also utilize Python and RStudio for statistical analysis and data-driven development.
            </p>

            <p className="text-gray-400 text-md font-mono z-10">
                My journey in tech is driven by curiosity, creativity, and a constant desire to grow. I enjoy turning complex challenges into elegant, functional solutions.
            </p>
            </div>
        </div>
        </section>
    );
}