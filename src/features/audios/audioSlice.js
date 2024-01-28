import { createSlice } from '@reduxjs/toolkit';

const audios1 = {
	Q: 'heater_1',
	W: 'heater_2',
	E: 'heater_3',
	A: 'heater_4',
	S: 'clap',
	D: 'open_hh',
	Z: 'kick_n_hat',
	X: 'kick',
	C: 'closed_hh',
};

const audios2 = {
	Q: 'chord_1',
	W: 'chord_2',
	E: 'chord_3',
	A: 'shaker',
	S: 'open_hh',
	D: 'closed_hh',
	Z: 'punchy_kick',
	X: 'side_stick',
	C: 'snare',
};

const initialState = {
	data: audios1,
	bank: false,
	power: false,
	volume: 1,
	display: '',
};

export const audiosSlice = createSlice({
	name: 'audios',
	initialState,
	reducers: {
		toggleBank: (state) => {
			state.bank = !state.bank;
			if (state.bank) {
				state.data = audios2;
			} else {
				state.data = audios1;
			}
		},
		togglePower: (state) => {
			state.power = !state.power;
		},
		setVolume: (state, action) => {
			state.volume = action.payload; // Action creator untuk mengatur nilai volume
		},
		setDisplay: (state, action) => {
			state.display = action.payload;
		},
	},
});

export const { toggleBank, togglePower, setVolume, setDisplay } =
	audiosSlice.actions;
export default audiosSlice.reducer;
