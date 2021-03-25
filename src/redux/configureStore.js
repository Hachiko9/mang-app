import { createStore } from 'redux';
import {rootReducer} from "./index";

const initialState = {
    mangas: [
        {
            title: 'My Hero Academia',
            cover: 'https://upload.wikimedia.org/wikipedia/it/1/1a/My_Hero_Academia_manga.jpg',
            totalVolumes: 33,
            lastVolume: 13,
            missingVolumes: [4, 6, 7],
            volumes: [1, 2, 3, 5, 8]
        },

        {
            title: 'Full Metal Alchemist',
            cover: 'https://images-na.ssl-images-amazon.com/images/I/91fhhUusE1L.jpg',
            totalVolumes: 33,
            lastVolumes: 13,
            missingVolumes: [],
            volumes: [1,2,3]
        }
    ]
}

const configureStore = () => createStore(rootReducer, initialState);
export default configureStore;
