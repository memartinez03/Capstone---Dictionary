import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        saved_word: 'SavedWord',
        meaning: 'Meaning',
        word_type: 'WordType',
        origin: 'Origin',
       
    },
    reducers: { 
        chooseSavedWord: (state, action) => { state.saved_word = action.payload},
        chooseMeaning: (state, action) => { state.meaning = action.payload},
        chooseWordType: (state, action) => { state.word_type = action.payload},
        chooseOrigin: (state, action) => { state.origin = action.payload},
        
    }
})


export const reducer = rootSlice.reducer;
export const { chooseSavedWord, chooseMeaning, chooseWordType, chooseOrigin } = rootSlice.actions;