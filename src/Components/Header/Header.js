import React from 'react';

const welcomeMessage = (currentTime = new Date()) => {
  const currentHour = currentTime.getHours();
  const splitAfternoon = 12; // 24hr time to split the afternoon
  const splitEvening = 16; // 24hr time to split the evening

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    // Between 12 PM and 5PM
    return 'Good Afternoon';
  } else if (currentHour >= splitEvening) {
    // Between 5PM and Midnight
    return 'Good Evening';
  }
  // Between dawn and noon
  return 'Good Morning';
};

export default class Header extends React.Component {
  render() {
    return <h1>{welcomeMessage()}, Graham.</h1>;
  }
}
