import React, { useEffect, useState } from "react";

const CountUpAnimation = ({ headingName, initialValue, targetValue, text }) => {
  const [count, setCount] = useState(initialValue);
  const duration = 2000; // 4 seconds

  useEffect(() => {
    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue, initialValue]);

  return (
    <div className="  countUpAnimationBox flex flex-col justify-evenly rounded-xl text-center transition-transform hover:scale-105 w-96 h-80">
      <div className="text-blue-800 text-2xl lg:text-4xl flex justify-center">
        {headingName}
      </div>
      <span className="text-slate-600 font-semibold text-4xl lg:text-5xl">{count}</span>
      <span className="text-slate-600 text-lg lg:text-xl py-3 font-semibold uppercase">
        {text}
      </span>
    </div>
  );
};

export default CountUpAnimation;
