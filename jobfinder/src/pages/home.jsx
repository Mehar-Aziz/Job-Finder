// src/pages/MyPage.jsx
import React from 'react';
import Slider from '../components/Slider';
import OurServices from '../components/Services';
import CvArea from '../components/CVarea';
import FeaturedJobs from '../components/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Slider />
            <OurServices />
            <CvArea />
            <FeaturedJobs />
        </div>
    );
};

export default Home;
