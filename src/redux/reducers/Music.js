
var initState = {
    music: true,
    albums: [
        {
          id: 0,
          name: "Music",
          link: "/music",
          fav: true,
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
