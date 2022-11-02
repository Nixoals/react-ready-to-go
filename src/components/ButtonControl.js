const ButtonControl = ({ swtichSate, isActive }) => {
	return (
		<>
			<div>
				<button
					className={isActive ? 'activated' : 'deactivated'}
					onClick={() => {
						swtichSate(true);
					}}
				>
					ON
				</button>
				<button
					className={!isActive ? 'activated' : 'deactivated'}
					onClick={() => {
						swtichSate(false);
					}}
				>
					OFF
				</button>
			</div>
		</>
	);
};

export default ButtonControl;
