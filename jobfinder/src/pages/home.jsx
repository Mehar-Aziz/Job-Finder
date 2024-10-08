// src/pages/MyPage.jsx
import React from 'react';
import Slider from '../components/Slider';
import OurServices from '../components/Services';
import CvArea from '../components/CVarea';
import FeaturedJobs from '../components/FeaturedJobs';
import Testimonial from '../components/Testimonal';
import BlogArea from '../components/OurProjects';
import AboutUs from '../components/AboutUs';

const Home = () => {
    return (
        <div>
            <Slider />
            <OurServices />
            <AboutUs />
            <CvArea />
            <FeaturedJobs />
            <Testimonial />
            <BlogArea />
        </div>
    );
};

export default Home;
