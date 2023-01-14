import { useState } from 'react';
import getClassName from '../../../../functions/getClassName';
import AnalogClock from '../../../reusables/analogClock/analogClock';
import ToggleButton from '../../../reusables/toggleButton/toggleButton';
import styles from './alarm.module.css';

const Alarm = () => {
  const [on, setOn] = useState(false);

  return (
    <>
      <div className={styles.alarm + getClassName(on, styles.active)}>
        <AnalogClock time="07:30" />
        <h3 className={styles.time}>7:30</h3>
        <div className={styles.extras}>
          <div className={styles.day}>Mon, 14 Dec</div>
          <ToggleButton
            value={on}
            onChange={(e) => setOn(!on)}
            className={styles.toggle}
          />
        </div>
      </div>
    </>
  );
};

export default Alarm;
