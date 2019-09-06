import {EVENT_FAVORITE} from '../actionTypes';
import OutbackForest from '../../imgs/outback-forest.jpg'
import AucklandCity from '../../imgs/auckland-cty.jpg'
import Bush from '../../imgs/bush.jpg'

const initState = [
    {
        id: 0,
        name: "Outback NZ",
        host: "Mental Health NZ",
        loactionTown: "Auckland",
        website: "https://google.com",
        dateDay: 4,
        dateMonth: 2,
        dateYear: 2019,
        stars: 4,
        desc: "An event held in the outdoors of New Zealand, a place for people to meet and great them selfs and others.",
        price: 0,
        numofdays: 0,
        imgURL: OutbackForest
      },
      {
        id: 1,
        name: "Flatbush Health Day",
        host: "Packnsave Ormiston",
        loactionTown: "Auckland",
        website: "https://google.com",
        dateDay: 2,
        dateMonth: 4,
        dateYear: 2019,
        stars: 2,
        desc: "An event held in the outdoors of New Zealand, a place for people to meet and great them selfs and others.",
        price: 4.99,
        numofdays: 0,
        imgURL: Bush,
      },
      {
        id: 3,
        name: "Auckland Health Day",
        host: "Auckland Health",
        loactionTown: "Auckland",
        website: "https://google.com",
        dateDay: 31,
        dateMonth: 8,
        dateYear: 2019,
        stars: 5,
        desc: "An event held in the outdoors of New Zealand, a place for people to meet and great them selfs and others.",
        price: 4.99,
        numofdays: 0,
        imgURL: AucklandCity,
      },
      {
        id: 4,
        name: "Hamilton Health Day",
        host: "Hamilton Health",
        loactionTown: "Hamilton",
        website: "https://google.com",
        dateDay: 25,
        dateMonth: 12,
        dateYear: 2019,
        stars: 5,
        desc: "An event held in the outdoors of New Zealand, a place for people to meet and great them selfs and others.",
        price: 4.99,
        numofdays: 0,
        imgURL: Bush,
      },
]

const Events = (state = initState, action) => {
    switch (action.type) {
        case EVENT_FAVORITE:
            return state
    default:
            return state
    }
}

export default Events
  