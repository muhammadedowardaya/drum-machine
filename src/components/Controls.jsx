import { useDispatch, useSelector } from 'react-redux';
import '../styles/Controls.scss';
import {
	setVolume,
	toggleBank,
	togglePower,
} from '../features/audios/audioSlice';

export default function Controls() {
	const bank = useSelector((state) => state.audios.bank);
	const power = useSelector((state) => state.audios.power);
	const display = useSelector((state) => state.audios.display);
	const volume = useSelector((state) => state.audios.volume);
	const dispatch = useDispatch();

	const handlePower = () => {
		dispatch(togglePower());
	};

	const handleBank = () => {
		dispatch(toggleBank());
	};

	const handleVolume = (event) => {
		const newVolume = parseFloat(event.target.value);
		dispatch(setVolume(newVolume));
	};

	return (
		<div className="controls-container">
			<div className="control" onClick={handlePower}>
				<p>Power</p>
				<div className={`select ${power && 'active'}`}>
					<div className="inner"></div>
				</div>
			</div>
			<div id="display">{display}</div>
			<div className="volume-slider">
				<input
					type="range"
					max="1"
					min="0"
					step="0.01"
					onChange={handleVolume}
					defaultValue={volume}
				/>
			</div>
			<div className="control" onClick={handleBank}>
				<p>Bank</p>
				<div className={`select ${bank && 'active'}`}>
					<div className="inner"></div>
				</div>
			</div>
		</div>
	);
}
