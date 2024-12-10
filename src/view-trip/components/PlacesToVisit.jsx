import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({trip}) {
  return (
    <div>
        <h2 className='font-bold text-lg'>Places to Visit</h2>

        <div>
            {Object.entries(trip.tripData?.itinerary || {}).map(([dayKey, dayData], index)=>(
                <div key={index} className="mt-5">
                    <h2 className="font-medium text-lg">{`Day ${index + 1}`}</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {dayData.places.map((place, placeIndex)=>(
                            <div key={placeIndex}>
                                <PlaceCardItem place={place} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PlacesToVisit