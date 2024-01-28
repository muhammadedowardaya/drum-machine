import Controls from './components/Controls';
import DrumPad from './components/DrumPad';
import './styles/App.scss';

function App() {
	return (
		<div id="drum-machine">
			<DrumPad />
            <Controls />
		</div>
	);
}

export default App;
