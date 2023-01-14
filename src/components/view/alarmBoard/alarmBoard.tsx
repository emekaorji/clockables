import { useState } from 'react';
import Button from '../../reusables/button/button';
import { PlusIcon } from '../../reusables/icons';
import Alarm from './alarm/alarm';
import styles from './alarmBoard.module.css';

const AlarmBoard = () => {
  const [open, setOpen] = useState(false);

  const toggleBoard = () => setOpen(!open);

  return (
    <>
      <div className={styles.board}>
        <div className={styles.main}>
          <div className={styles.header}>
            <h1>Alarms</h1>
            <button onClick={toggleBoard}>•••</button>
          </div>
          <div className={styles.alarms}>
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
          </div>
        </div>
        <div className={styles.addButtonContainer}>
          <Button
            className={styles.addButton}
            icon={<PlusIcon />}
            notext={open}
          >
            New alarm
          </Button>
        </div>
      </div>
    </>
  );
};

export default AlarmBoard;
