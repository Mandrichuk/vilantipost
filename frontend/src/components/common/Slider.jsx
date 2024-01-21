import React, { useState, useEffect } from "react";

function Slider(props) {
  const values = {
    minValue: props?.minValue || 0,
    maxValue: props?.maxValue || 100,
  };
  const [sliderValue, setSliderValue] = useState(values.minValue);
  const [fullRounded, setFullRounded] = useState(false);
  const [sliderNoBar, setSliderNoBar] = useState(false);
  const [inputNoLeft, setInputNoLeft] = useState(false);


  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
  };

  useEffect(() => {
    const fullRoundedDistinction = values.maxValue - sliderValue;
    const sliderBarDistinction = sliderValue - values.minValue;
    
    if (fullRoundedDistinction < 25) {
      setFullRounded(true);
    } else {
      setFullRounded(false);
    }

    if (sliderBarDistinction < 2) {
      setSliderNoBar(true);
    } else {
      setSliderNoBar(false);
    }

  }, [sliderValue]);

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
      <div className={`slider ${fullRounded && "sliderFullRounded sliderNoLeft"} ${sliderNoBar && "sliderNoBar"}`}>
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
