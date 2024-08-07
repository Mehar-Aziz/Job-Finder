// src/pages/MyPage.jsx
import React from 'react';
import Slider from '../components/Slider';
import OurServices from '../components/Services';
import CvArea from '../components/CVarea';

const Home = () => {
    return (
        <div>
            <Slider />
            <OurServices />
            <CvArea />
        </div>
    );
};

export default Home;
