import React from 'react';
import Banner from '../components/Banner';
import EventsPage from '../components/EventsPage';

function Events() {
  return (
    <div>
        <Banner title="Events" text="Connect With Us" bgImage="events.png"/>
        <EventsPage />
    </div>
  )
}

export default Events