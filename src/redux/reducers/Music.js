import {MusicGenres} from '../../constants';

var initState = {
    url: "https://artlistmusic.azureedge.net/artlist-mp3/13379_Run_-_Master_(16-44.1).mp3",
    playing: false,
    controls: false,
    light: false,
    volume: 1,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    seeking: false,
    playbackRate: 1.0,
    loop: false,
    currentIndex: 0,
    songs: [
        {
          id: 0,
          name: "Demo Track 1",
          artist: "Artlist Music",
          url: "https://artlistmusic.azureedge.net/artlist-mp3/13379_Run_-_Master_(16-44.1).mp3",
          genres: [MusicGenres.Pop, MusicGenres.Rock],
          albums: ["May Collection", "2019 Rock"],
        },
        {
          id: 1,
          name: "Demo Track 2",
          artist: "Artlist Music",
          url: "https://artlistmusic.azureedge.net/artlist-mp3/13379_Run_-_Master_(16-44.1).mp3",
          genres: [MusicGenres.Jazz, MusicGenres.Rock],
          albums: ["April Collection", "2019 Rock"],
        },
        {
          id: 2,
          name: "Demo Track 3",
          artist: "Artlist Music",
          url: "https://artlistmusic.azureedge.net/artlist-mp3/13379_Run_-_Master_(16-44.1).mp3",
          genres: [MusicGenres.Pop, MusicGenres.Rock],
          albums: ["May Collection", "2019 Rock"],
        },
        {
          id: 3,
          name: "Demo Track 4",
          artist: "Artlist Music",
          url: "https://artlistmusic.azureedge.net/artlist-mp3/13379_Run_-_Master_(16-44.1).mp3",
          genres: [MusicGenres.Jazz, MusicGenres.Rock],
          albums: ["April Collection", "2019 Rock"],
        },
        {
          id: 4,
          name: "Demo Track 5",
          artist: "Artlist Music",
          url: "https://artlistmusic.azureedge.net/artlist-mp3/13379_Run_-_Master_(16-44.1).mp3",
          genres: [MusicGenres.Pop, MusicGenres.Rock],
          albums: ["May Collection", "2019 Rock"],
        },
        {
          id: 5,
          name: "Demo Track 6",
          artist: "Artlist Music",
          url: "https://artlistmusic.azureedge.net/artlist-mp3/13379_Run_-_Master_(16-44.1).mp3",
          genres: [MusicGenres.Jazz, MusicGenres.Rock],
          albums: ["April Collection", "2019 Rock"],
        },
        {
          id: 6,
          name: "Demo Track 7",
          artist: "Artlist Music",
          url: "https://artlistmusic.azureedge.net/artlist-mp3/13379_Run_-_Master_(16-44.1).mp3",
          genres: [MusicGenres.Pop, MusicGenres.Rock],
          albums: ["May Collection", "2019 Rock"],
        },
        {
          id: 7,
          name: "Demo Track 8",
          artist: "Artlist Music",
          url: "https://artlistmusic.azureedge.net/artlist-mp3/13379_Run_-_Master_(16-44.1).mp3",
          genres: [MusicGenres.Jazz, MusicGenres.Rock],
          albums: ["April Collection", "2019 Rock"],
        },
      ],
    isPlaying: false,
}

  const music = (state = initState, action) => {
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

  export default music
