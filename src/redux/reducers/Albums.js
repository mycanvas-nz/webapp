import {MusicGenres} from '../../constants';

// Covers
import IMGRock2019 from '../../imgs/covers/2019Rock-min.jpg'
import IMGAprillCollection from '../../imgs/covers/aprilCollection-min.jpg'
import IMGMayCollection from '../../imgs/covers/mayCollection-min.jpg'

var initState = {
    albumsList: [
        {
            id: 0,
            name: "May Collection",
            albumCoverUrl: IMGMayCollection,
            isCollection: true,
            genres: MusicGenres.Mixed
        },
        {
            id: 1,
            name: "2019 Rock",
            albumCoverUrl: IMGRock2019,
            isCollection: false,
            genres: MusicGenres.Rock
        },
        {
            id: 2,
            name: "April Collection",
            albumCoverUrl: IMGAprillCollection,
            isCollection: true,
            genres: MusicGenres.Mixed
        },
      ],
    isPlaying: false,
}

  const album = (state = initState, action) => {
    switch (action.type) {
      case 'HIDE_EVENT':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      default:
        return state
    }
  }

  export default album
