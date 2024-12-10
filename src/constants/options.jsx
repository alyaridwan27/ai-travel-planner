export const SelectTravelerList=[
    {
        id:1,
        title:'Just Me',
        desc:'I will travel by myself',
        icon:'✈️',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'A romantic trip with my partner',
        icon:'🥂',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun and loving people',
        icon:'🏡',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'We seek for thrills',
        icon:'⛵',
        people:'5 to 10 People'
    },
]


export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'I would like to save money',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Please keep the cost on average',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'I will spend all my money',
        icon:'💸',
    },
]

export const AI_PROMPT='Generate Travel Plan for Location: {location}, for {totalDays}, for {traveler} , with a {budget} budget, Give me the hotel options list with HotelName, Hotel Address, Price, hotel image url, geo coordinates, rating, descriptions, and suggest itinerary with placeName, PlaceDetails, place image url, geo coordinates, ticket price, time to travel for each of the location for {totalDays} days with each day plan with best time to visit in JSON format.'