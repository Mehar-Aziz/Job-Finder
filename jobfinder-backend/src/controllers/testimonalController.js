import Testimonial from '../models/testimonalSchema.js';

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createTestimonial = async (req, res) => {
  const { name, position, text, image } = req.body;
  try {
    const newTestimonial = new Testimonial({ name, position, text, image });
    await newTestimonial.save();
    res.status(201).json({ message: 'Testimonial Created Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const { name, position, text, image } = req.body;
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(id, { name, position, text, image }, { new: true });
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial Not Found' });
    }
    res.json({ message: 'Testimonial Updated Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const deleteTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    const testimonial = await Testimonial.findByIdAndDelete(id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial Not Found' });
    }
    res.json({ message: 'Testimonial Deleted Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
