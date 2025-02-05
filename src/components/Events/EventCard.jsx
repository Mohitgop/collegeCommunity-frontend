import React from 'react';

function EventCard({ date, month, day, time, title, location, attendees, image }) {
  return (
    <div className="bg-white font-mont  shadow-md relative rounded-2xl overflow-hidden min-w-96 p-5">
      <div
        className="h-60 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/*  date card */}
      <div class="absolute p-3 rounded-lg font-mont bg-white text-center right-8 top-56 ">
        <div class="text-black text-lg">
          {month}
        </div>
        <div class="">
          <span class="text-3xl font-bold">{date}</span>
        </div>
      </div>

      <div className="p-4">
      
        <div className="flex text-green-500 font-normal  gap-3  text-sm mb-2">
          {/* <span>{date}</span> */}
          <span>{day}</span>
          <span>{time}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">Location - {location}</p>

        <div className="flex -space-x-2 ">
          {attendees.map((attendee, index) => (
            <img
              key={index}
              src={attendee}
              alt="Attendee"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
          <img
            src={`https://ui-avatars.com/api/?background=808080&color=fff&name=%2B2&rounded=true`}
            alt="Attendee"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
}

export default EventCard


