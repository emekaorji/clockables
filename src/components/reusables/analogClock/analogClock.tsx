import React, { useMemo } from 'react';
import styles from './analogClock.module.css';

const AnalogClock = ({ time }: { time: Date | string }) => {
  const { hours, minutes } = useMemo(() => {
    if (typeof time === 'object') {
      return { hours: time.getHours(), minutes: time.getMinutes() };
    }
    if (typeof time === 'string') {
      const numTime = time.split(':').map((item) => parseInt(item));
      return { hours: numTime[0], minutes: numTime[1] };
    }
    return { hours: 0, minutes: 0 };
  }, [time]);

  return (
    <>
      <div
        className={styles.clock}
        style={
          { '--hours': hours, '--minutes': minutes } as React.CSSProperties
        }
      />
    </>
  );
};

export default AnalogClock;
