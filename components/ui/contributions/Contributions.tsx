import React, { useEffect, useState, FC } from 'react';
//styling

interface Count {
  id: string;
  label: string;
  number: string;
  duration: string;
}
interface Props {
  count: Count

}
export const Contributions :FC<Props> =({count }) => {
  // label of counter
  // number to increment to
  // duration of count in secondscounts
  const {label, number, duration} = count;

  // number displayed by component
  const [counts, setCounts] = useState("0")

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(number?.substring(0,3))
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start countser 
    // then updates counts
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCounts(String(start) + number.substring(3))
      if (start === end) clearInterval(timer)       
    }, incrementTime);

    // dependency array
  }, [number, duration]);

  return (   
    <div className='flex flex-col justify-center items-center h-20 text-center md:w-full px-2'>
      <span className='text-4xl text-primary-color'>{counts}
      </span>
      <span className=' text-lg md:text-xl'>{label}
      </span>
    </div>
  );
}

