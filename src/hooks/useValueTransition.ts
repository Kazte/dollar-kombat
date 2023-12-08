import {useEffect, useState} from 'react';


export default function useValueTransition(startValue: number, endValue: number, duration: number) {
  const [currentValue, setCurrentValue] = useState(startValue);

  useEffect(() => {
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const interpolatedValue = startValue + progress * (endValue - startValue);
      setCurrentValue(interpolatedValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [startValue, endValue, duration]);

  return currentValue;
}