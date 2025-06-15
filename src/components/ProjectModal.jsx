import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function ProjectModal({ images, isOpen, onClose }) {
  const [current, setCurrent] = useState(0);

  if (!isOpen) return null;

  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
      {/* Decorative Blobs */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-3xl p-6 w-full max-w-8xl sm:max-w-7xl shadow-2xl border-2 border-cyan-700/30 flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-sm sm:text-lg text-cyan-400 hover:text-red-500 transition-colors bg-white/10 rounded-full p-2 shadow-lg"
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="flex items-center justify-center w-full mt-4 gap-4">
          <button
            onClick={prevSlide}
            className="text-sm sm:text-lg text-cyan-400 hover:text-white bg-cyan-700/30 rounded-full p-3 transition-colors shadow-md"
            aria-label="Previous image"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="flex-1 flex justify-center">
            <img
              src={images[current]}
              alt={`Slide ${current + 1}`}
              className="max-h-[75vh] max-w-[80vw] object-contain rounded-2xl border-2 border-cyan-700/30 shadow-lg bg-black/40"
            />
          </div>
          <button
            onClick={nextSlide}
            className="text-sm sm:text-lg text-cyan-400 hover:text-white bg-cyan-700/30 rounded-full p-3 transition-colors shadow-md"
            aria-label="Next image"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <p className="text-center text-cyan-200 mt-4 font-mono text-sm">
          Image <span className="font-bold">{current + 1}</span> of {images.length}
        </p>
      </div>
    </div>
  );
}