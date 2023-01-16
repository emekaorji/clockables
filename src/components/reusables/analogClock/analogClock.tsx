import React, { useMemo } from 'react';
import getClassName from '../../../functions/getClassName';
import styles from './analogClock.module.css';

const getDeg = (num: number, type: 'hour' | 'minute' | 'second') => {
  return num * (type === 'hour' ? 30 : 6);
};

const AnalogClock = ({
  time,
  color = '#5D666D',
  className,
}: {
  time: Date | string;
  color?: string;
  className?: string;
}) => {
  const { hours, minutes } = useMemo(() => {
    if (typeof time === 'object') {
      return {
        hours: getDeg(time.getHours(), 'hour'),
        minutes: getDeg(time.getMinutes(), 'minute'),
      };
    }
    if (typeof time === 'string') {
      const numTime = time.split(':').map((item) => parseInt(item));
      return {
        hours: getDeg(numTime[0], 'hour'),
        minutes: getDeg(numTime[1], 'minute'),
      };
    }
    return { hours: 0, minutes: 0 };
  }, [time]);

  return (
    <>
      <div
        className={styles.clock + getClassName(className)}
        style={
          {
            '--hours': `${hours}deg`,
            '--minutes': `${minutes}deg`,
            '--color': `${color}`,
          } as React.CSSProperties
        }
      />
    </>
  );
};

export default AnalogClock;
