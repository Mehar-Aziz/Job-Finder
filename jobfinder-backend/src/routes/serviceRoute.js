import express from 'express'
const router = express.Router();
import Service from '../models/serviceSchema.js';

//all service
router.get('/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//new service
router.post('/services', async (req, res) => {
  const service = new Service({
    icon: req.body.icon,
    label: req.body.label,
    link: req.body.link,
    count: req.body.count
  });

  try {
    const newService = await service.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
