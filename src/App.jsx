import { useDispatch, useSelector } from 'react-redux';
import Controls from './components/Controls';
import DrumPad from './components/DrumPad';
import './styles/App.scss';
import { changeMyAudio } from './features/audios/audioSlice';
import React from 'react';

function App() {
	const myAudio = useSelector((state) => state.audios.myAudio);
	const dispatch = useDispatch();

	const myAudioHandler = (event) => {
		event.preventDefault();

		const myAudio = event.target.querySelector('audio');

		if (myAudio) {
			if (myAudio.ended) {
				// Audio telah selesai, jadi kita bisa memutarnya kembali
				myAudio.currentTime = 0;
			}

			myAudio.play();
			event.target.classList.add('active');
		}
	};

	const handleAudioEnd = (event) => {
		event.preventDefault();

		dispatch(changeMyAudio());
		const myPhoto = document.getElementById('my-photo');
		if (myPhoto.classList.contains('active')) {
			myPhoto.classList.remove('active');
		}
	};

	React.useEffect(() => {
		// const handleAudioEnd = (event) => {
		// 	event.preventDefault();

		// 	// dispatch(changeMyAudio());
		// 	// const myPhoto = document.getElementById('my-photo');
		// 	// if (myPhoto.classList.contains('active')) {
		// 	// 	myPhoto.classList.remove('active');
		// 	// }
		// };

		const audioElement = document.getElementById('myAudio');
		audioElement.addEventListener('ended', handleAudioEnd);

		return () => {
			audioElement.removeEventListener('ended', handleAudioEnd);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="app-wrapper">
			<div id="title-app">
				<div id="my-photo" onClick={myAudioHandler}>
					{/* <img src="/public/images/saya-pake-masker.jpg" alt="" /> */}
					<audio
						src={`/audios/my_audio/${myAudio}.m4a`}
						id="myAudio"
						onEnded={handleAudioEnd}
					></audio>
				</div>
				<div className="info">
					<h1>Drum Machine</h1>
					<p>By : Muhammad Edo Wardaya</p>
				</div>
			</div>
			<div id="drum-machine">
				<DrumPad />
				<Controls />
			</div>
		</div>
	);
}

export default App;
