import React, { useState, useEffect } from "react";

function Slider(props) {
  const values = {
    minValue: props?.minValue || 0,
    maxValue: props?.maxValue || 100,
  };
  const [sliderValue, setSliderValue] = useState(values.minValue);

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
  };

  useEffect(() => {
    props.getData(sliderValue);
  }, [sliderValue]);

  const calculateProgressWidth = () => {
    const percentage =
      ((sliderValue - values.minValue) / (values.maxValue - values.minValue)) *
      100;
    return `${percentage}%`;
  };

  return (
    <div className={`sliderCont`}>
      <div className="slider">
        <input
          type="range"
          min={values.minValue}
          max={values.maxValue}
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <progress
          min={values.minValue}
          max={values.maxValue}
          value={sliderValue}
          style={{ width: calculateProgressWidth() }}
        ></progress>
      </div>
      <div className={`sliderValue flex flex-row items-center`}>
        {sliderValue}
        {props.units}
      </div>
    </div>
  );
}

export default Slider;
