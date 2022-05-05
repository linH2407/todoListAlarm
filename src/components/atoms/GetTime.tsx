import React, { useCallback, useEffect, useState } from "react";

const GetTime = () => {
  const [date, setDate] = useState<Date>(new Date());

  const callMe = useCallback(() => {
    setDate(new Date());
  }, [setDate]);

  useEffect(() => {
    const test = setInterval(callMe, 1000);

    return () => {
      clearInterval(test);
    };
  }, [callMe]);

  return (
    <div>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
};

export default GetTime;
