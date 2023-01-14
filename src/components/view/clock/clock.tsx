import { useCallback, useEffect, useState } from 'react';
import styles from './clock.module.css';

const Clock = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  const resetTime = useCallback(() => {
    const date = new Date();
    const currentSecond = date.getSeconds();
    const currentMinute = date.getMinutes();
    const currentHour = date.getHours();
    setSecond(currentSecond * 6);
    setMinute(currentMinute * 6);
    setHour((currentHour + currentMinute / 60) * 30);
  }, []);

  useEffect(() => {
    resetTime();
    window.onfocus = resetTime;
  }, [resetTime]);

  useEffect(() => {
    const id = setInterval(() => {
      setSecond((prev) => prev + 6);
      setMinute((prev) => prev + 6 / 60);
      setHour((prev) => prev + 30 / 3600);
    }, 1000);

    return () => {
      clearInterval(id);
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
