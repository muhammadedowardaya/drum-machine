import { configureStore } from "@reduxjs/toolkit";

import audiosReducer from "../features/audios/audioSlice";

export const store = configureStore({
    reducer: {
        audios: audiosReducer
    }
})