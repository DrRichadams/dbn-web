import React from 'react';
import Banner from '../components/Banner';
import ClubCharter from '../components/ClubCharter';


function Club() {
  return (
    <div>
        <Banner text="About The Club" title="Club Charter" bgImage="club.png" />
        <ClubCharter />
    </div>
  )
}

export default Club