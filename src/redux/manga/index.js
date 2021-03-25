const ADD_NEW_COLLECTION = 'ADD_NEW_COLLECTION';
const ADD_NEW_VOLUME = 'ADD_NEW_VOLUME';

export const addCollection = (payload) => ({
    type: ADD_NEW_COLLECTION,
    payload
});

export const addVolume = (payload) => ({
    type: ADD_NEW_VOLUME,
    payload
});

const getMissingVolumes = (volumes) => {
    const latestVolume = Math.max(...volumes);
    let result = [];

    for(let i = 1; i <= latestVolume; i++) {
        if (!volumes.includes(i)) {
            result.push(i);
        }
    }

    return result;
}

// Reducer
export const mangaReducer = (state = [], action) => {
    switch (action.type){
        case ADD_NEW_COLLECTION:
            const doesExists = state.map(collection => collection.title).includes(action.payload.collection);
            if (!doesExists) {
                const newManga = {
                    title: action.payload.collection,
                    cover: action.payload.cover,
                    totalVolumes: [],
                    lastVolumes: [],
                    missingVolumes: getMissingVolumes(action.payload.volumes),
                    volumes: action.payload.volumes
                };
                return [...state, newManga];
            }

            return state;
        case ADD_NEW_VOLUME:
            return state.map(collection => {
                if (collection.title === action.payload.collection) {
                    collection.volumes = [...new Set([...collection.volumes, ...action.payload.volumes])].sort((a,b) => a - b);
                    collection.missingVolumes = getMissingVolumes(collection.volumes)
                }
                return collection
            })
        default:
            return state;
    }
};
