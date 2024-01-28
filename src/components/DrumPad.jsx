import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/DrumPad.scss';
import { formatWord } from '../utils/formatWord';
import { setDisplay } from '../features/audios/audioSlice';

export default function DrumPad() {
	const power = useSelector((state) => state.audios.power);
	const volume = useSelector((state) => state.audios.volume);
	const audios = useSelector((state) => state.audios.data);

	const dispatch = useDispatch();

	const handleKeyPress = (event) => {
		event.preventDefault();
		const key = event.key.toUpperCase();

		if (power) {
			if (audios[key]) {
				const audioElement = document.getElementById(key);
				const dataName = audioElement.getAttribute('data-name');
				if (audioElement) {
					audioElement.volume = volume;
					audioElement.pause();
					audioElement.currentTime = 0;
					audioElement.play();
				}
				audioElement.parentNode.classList.add('active');
				setTimeout(() => {
					audioElement.parentNode.classList.remove('active');
				}, 100);

				dispatch(setDisplay(formatWord(dataName)));
			}
		} else {
			dispatch(setDisplay(formatWord('Power is OFF')));
		}
	};

	React.useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		window.addEventListener('touchstart', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
			window.removeEventListener('touchstart', handleKeyPress);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [volume, power]);

	const handlePad = (event) => {
		event.preventDefault();

		if (power) {
			event.target.querySelector('audio').pause();
			event.target.querySelector('audio').currentTime = 0;
			event.target.querySelector('audio').play();

			event.target.classList.add('active');
			setTimeout(() => {
				event.target.classList.remove('active');
			}, 100);

			const dataName = event.target
				.querySelector('audio')
				.getAttribute('data-name');
			dispatch(setDisplay(formatWord(dataName)));
		} else {
			dispatch(setDisplay(formatWord('Power is OFF')));
		}
	};

	return (
		<div className="pad-bank">
			{Object.entries(audios).map((data) => (
				<div className="drum-pad" key={data[0]} onClick={handlePad}>
					{data[0]}
					<audio
						src={`/audios/${data[1]}.mp3`}
						className="clip"
						data-name={data[1]}
						id={data[0]}
					></audio>
				</div>
			))}
		</div>
	);
}
