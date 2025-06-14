import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer  id="contact" className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-14 px-4 shadow-inner relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-cyan-600 opacity-20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500 opacity-20 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* Contact Info */}
        <div className="space-y-5 text-center md:text-left bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-2xl shadow-2xl p-8 border-2 border-cyan-700/30 relative">
          <h4 className="text-2xl md:text-3xl font-extrabold font-mono tracking-wide mb-2 text-cyan-400 drop-shadow-lg">Contact Information</h4>
          <div className="font-mono text-base space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FontAwesomeIcon icon={faPhone} />
              <span className="font-semibold text-cyan-200">Phone:</span>
              <a href="tel:+639156843668" className="hover:underline hover:text-cyan-400 transition-colors">+63 915-684-3668</a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FontAwesomeIcon icon={faEnvelope}/>
              <span className="font-semibold text-cyan-200">Email:</span>
              <a href="mailto:edwardshildon081@gmail.com" className="hover:underline hover:text-cyan-400 transition-colors">edwardshildon081@gmail.com</a>
            </div>
          </div>
        </div>
        {/* Social Links */}
        <div className="flex flex-col items-center gap-5">
          <span className="font-mono text-xl font-semibold mb-1 text-cyan-400 drop-shadow-lg">Connect with me</span>
          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-full p-3 hover:scale-110 transition-transform shadow-lg border-2 border-cyan-400/40 hover:border-cyan-300"
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"/>
              </svg>
            </a>
            <a
              href="https://github.com/Codexx45/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-full p-3 hover:scale-110 transition-transform shadow-lg border-2 border-cyan-400/40 hover:border-cyan-300"
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-14 border-t border-cyan-700/30 pt-6 text-center text-xs text-cyan-200 font-mono tracking-wide relative z-10">
        &copy; {new Date().getFullYear()} Edward Shildon Tenchavez. All rights reserved.
      </div>
    </footer>
  );
}