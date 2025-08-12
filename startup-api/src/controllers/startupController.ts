import { Request, Response } from 'express';
import Startup from '../models/Startup';

export const createStartup = async (req: Request, res: Response) => {
  try {
    const { name, founder, description, yearCreated } = req.body;

    if (!name || !founder || !description || !yearCreated) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    const startup = new Startup({ name, founder, description, yearCreated });
    await startup.save();

    res.status(201).json({
      message: 'Created startup object with generated ID',
      data: startup,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getStartups = async (req: Request, res: Response) => {
  try {
    const startups = await Startup.find();
    res.status(200).json({
      message: 'Array of all startup objects',
      data: startups,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
