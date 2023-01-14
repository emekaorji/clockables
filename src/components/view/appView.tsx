import AlarmBoard from './alarmBoard/alarmBoard';
import styles from './appView.module.css';
import Clock from './clock/clock';

const AppView = () => {
	return (
		<>
			<Clock />
			<AlarmBoard />
		</>
	);
};

export default AppView;
