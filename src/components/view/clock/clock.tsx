import { useEffect, useState } from 'react';
import styles from './clock.module.css';

const Clock = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const worker = new Worker('/sw.js');

    const getTime = (event: MessageEvent) => {
      const newSecond = event.data.seconds;
      const newMinute = event.data.minutes;
      const newHour = event.data.hours;
      setSecond(newSecond);
      setMinute(newMinute);
      setHour(newHour);
    };

    worker.addEventListener('message', getTime);
    worker.postMessage('startTimer');

    return () => {
      worker.removeEventListener('message', getTime);
    };
  }, []);

  return (
    <>
      <div className={styles.clock}>
        <div className={styles.clockContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.marks}>
              <div className={`${styles.mark} ${styles.mark1}`} />
              <div className={`${styles.mark} ${styles.mark2}`} />
              <div className={`${styles.mark} ${styles.mark3}`} />
              <div className={`${styles.mark} ${styles.mark4}`} />
            </div>
            <div className={styles.hands}>
              <div
                className={`${styles.hand} ${styles.hour}`}
                style={{
                  transform: `translate(-50%, -50%) rotate(${hour}deg)`,
                }}
              >
                <div className={styles.left} />
                <div className={styles.middle} />
                <div className={styles.right} />
              </div>
              <div
                className={`${styles.hand} ${styles.minute}`}
                style={{
                  transform: `translate(-50%, -50%) rotate(${minute}deg)`,
                }}
              >
                <div className={styles.left} />
                <div className={styles.middle} />
                <div className={styles.right} />
              </div>
              <div
                className={`${styles.hand} ${styles.second}`}
                style={{
                  transform: `translate(-50%, -50%) rotate(${second}deg)`,
                }}
              >
                <div className={styles.left} />
                <div className={styles.middle} />
                <div className={styles.right} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
