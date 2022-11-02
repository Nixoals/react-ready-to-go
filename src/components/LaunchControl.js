import { useState } from 'react';
import ButtonControl from './ButtonControl';

const LaunchControl = () => {
	const [switch1, setSwitch1] = useState(false);
	const [switch2, setSwitch2] = useState(false);
	const [switch3, setSwitch3] = useState(false);

	let launchState;

	if (switch1 && switch2 && switch3) {
		launchState = 'GO!!!';
	} else {
		launchState = 'No way!!!';
	}

	return (
		<>
			<section className="launch-container">
				<div className="button-launcher-wrapper">
					<ButtonControl swtichSate={setSwitch1} isActive={switch1}></ButtonControl>
					<ButtonControl swtichSate={setSwitch2} isActive={switch2}></ButtonControl>
					<ButtonControl swtichSate={setSwitch3} isActive={switch3}></ButtonControl>
				</div>
				<div style={launchState === 'GO!!!' ? { backgroundColor: '#46AC4A' } : { backgroundColor: '#D34848' }} className="takeoff-control">
					<h1>{launchState}</h1>
				</div>
			</section>
		</>
	);
};

export default LaunchControl;
