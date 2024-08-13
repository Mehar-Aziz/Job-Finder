import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../src/config/db.js';
import Service from '../src/models/serviceSchema.js';

dotenv.config();
connectDB();

const seedServices = async () => {
  try {
   
    const services = [
      { icon: 'fa fa-suitcase', label: 'Design & Creative', link: 'job_listing.html', count: 653 },
      { icon: 'fa fa-cogs', label: 'Design & Development', link: 'job_listing.html', count: 658 },
      { icon: 'fa fa-file-alt', label: 'Sales & Marketing', link: 'job_listing.html', count: 658 },
      { icon: 'fa fa-mobile-alt', label: 'Mobile Application', link: 'job_listing.html', count: 658 },
      { icon: 'fa fa-hard-hat', label: 'Construction', link: 'job_listing.html', count: 658 },
      { icon: 'fa fa-laptop-code', label: 'Information Technology', link: 'job_listing.html', count: 658 },
      { icon: 'fa fa-building', label: 'Real Estate', link: 'job_listing.html', count: 658 },
      { icon: 'fa fa-pencil-alt', label: 'Content Writer', link: 'job_listing.html', count: 658 }
    ];

    await Service.deleteMany();

    await Service.insertMany(services);

    console.log('Services have been seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding services:', error);
    process.exit(1);
  }
};

seedServices();
