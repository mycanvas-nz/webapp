import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMusic, faCalendarDay, faPhone, faCloudSun, faImage, faGamepad, faVideo, faBookOpen, faInfo} from '@fortawesome/free-solid-svg-icons';


var initState = [
    {
      id: 0,
      name: "Music",
      link: "/music",
      fav: true,
      icon: <FontAwesomeIcon icon={faMusic} />,
    },
    {
        id: 1,
        name: "Events",
        link: "/events",
        fav: true,
        icon: <FontAwesomeIcon  icon={faCalendarDay} />,
    },
    {
        id: 2,
        name: "Helplines",
        link: "/helplines",
        fav: true,
        icon: <FontAwesomeIcon flip="horizontal" icon={faPhone} />,
      },
      {
        id: 3,
        name: "Meditation",
        link: "/meditation",
        fav: false,
        icon: <FontAwesomeIcon icon={faCloudSun} />,
      },
      {
        id: 4,
        name: "Pictures",
        link: "/pictures",
        fav: true,
        icon: <FontAwesomeIcon icon={faImage} />,
      },
      {
        id: 5,
        name: "Games",
        link: "/games",
        fav: false,
        icon: <FontAwesomeIcon icon={faGamepad} />,
      },
      {
        id: 6,
        name: "Videos",
        link: "/videos",
        fav: false,
        icon: <FontAwesomeIcon icon={faVideo} />,
      },
      {
        id: 7,
        name: "Journal",
        link: "/journal",
        fav: false,
        icon: <FontAwesomeIcon icon={faBookOpen} />,
      },
      {
        id: 8,
        name: "Info",
        link: "/info",
        fav: false,
        icon: <FontAwesomeIcon icon={faInfo} />,
      },

  ]

  const applets = (state = initState, action) => {
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

  export default applets
