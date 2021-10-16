import { React, useState } from "react";
import { SliderData } from "./SliderData";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return <div>ooopppps</div>;
  }
  return (
    <section>
      <button onClick={prevSlide}>left</button>
      <button onClick={nextSlide}>right</button>

      {SliderData.map((slide, index) => {
        return (
          <div>
            {index === current && <img src={slide.image} alt="image" />}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
