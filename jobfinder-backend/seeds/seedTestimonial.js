import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../src/config/db.js';
import Testimonial from '../src/models/testimonalSchema.js'; // Adjust the path as needed

dotenv.config();

connectDB();

const seedTestimonials = async () => {
  try {
    
    const testimonials = [
      {
        name: 'Margaret Lawson',
        position: 'Creative Director',
        text: '“I am at an age where I just want to be fit and healthy. Our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean, it will care for you and workout hard.”',
      },
      {
        name: 'John Doe',
        position: 'Marketing Specialist',
        text: '“This service has truly changed my life. I feel healthier and more energetic. Highly recommend to everyone looking to improve their well-being!”',
      },
      {
        name: 'Jane Smith',
        position: 'Fitness Trainer',
        text: '“The guidance and resources provided are top-notch. The personalized advice and support have helped me reach my fitness goals faster.”',
      },
    ];

    // Clear existing testimonials
    await Testimonial.deleteMany();

    // Insert new testimonials
    await Testimonial.insertMany(testimonials);

    console.log('Testimonials seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding testimonials:', error);
    process.exit(1);
  }
};

seedTestimonials();
