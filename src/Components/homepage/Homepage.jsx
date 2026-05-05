import React from 'react';
import Banner from '../homepages/Banner';
import Cards from '../homepages/Cards';
import AllFriends from '../homepages/AllFriends';

const Homepage = () => {
    return (
        <div>
          <Banner></Banner>
          <Cards></Cards>
          <AllFriends></AllFriends>
        </div>
    );
};

export default Homepage;