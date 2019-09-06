import {EVENT_FAVORITE} from '../actionTypes';

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
        imgURL: "https://images.pexels.com/photos/462146/pexels-photo-462146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
        imgURL: "http://www.ormiston.school.nz/Images/Assets/3303/14"
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
        imgURL: "http://www.ormiston.school.nz/Images/Assets/3303/14"
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
        imgURL: "https://www.newzealand.com/assets/Tourism-NZ/Hamilton-Waikato/1ad9e4d490/img-1536906824-5931-32566-497A34AC-96A9-5F71-887FECFAC32F2EC7__FocalPointCropWzQyNyw2NDAsNTAsNTAsODUsImpwZyIsNjUsMi41XQ.jpg"
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
  