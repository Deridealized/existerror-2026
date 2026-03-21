import { useState } from "react";
import s from "./ProjectCardCarousel.module.css";
import { createPortal } from "react-dom";

interface ProjectCardCarouselProps {
  images: string[];
}

const ProjectCardCarousel = ({ images }: ProjectCardCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className={s.carousel}>
      {lightboxOpen &&
        createPortal(
          <div className={s.lightbox} onClick={() => setLightboxOpen(false)}>
            <img
              src={images[currentIndex]}
              alt={`screenshot ${currentIndex + 1}`}
            />
          </div>,
          document.body,
        )}
      <div className={s.imageScroller}>
        <img
          src={images[currentIndex]}
          alt={`screenshot ${currentIndex + 1}`}
          onClick={() => setLightboxOpen(true)}
          className={s.clickableImage}
        />

        {images.length > 1 && (
          <div className={s.controls}>
            <button className={s.btn} onClick={prev}>
              ←
            </button>
            <button className={s.btn} onClick={next}>
              →
            </button>
          </div>
        )}
      </div>
      {images.length > 1 && (
        <div className={s.dots}>
          {images.map((_, i) => (
            <span
              key={i}
              className={i === currentIndex ? s.activeDot : s.dot}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCardCarousel;
