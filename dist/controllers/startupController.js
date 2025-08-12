"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStartups = exports.createStartup = void 0;
const Startup_1 = __importDefault(require("../models/Startup"));
const createStartup = async (req, res) => {
    try {
        const { name, founder, description, yearCreated } = req.body;
        if (!name || !founder || !description || !yearCreated) {
            return res.status(400).json({ message: 'Tous les champs sont requis' });
        }
        const startup = new Startup_1.default({ name, founder, description, yearCreated });
        await startup.save();
        res.status(201).json({
            message: 'Created startup object with generated ID',
            data: startup,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.createStartup = createStartup;
const getStartups = async (req, res) => {
    try {
        const startups = await Startup_1.default.find();
        res.status(200).json({
            message: 'Array of all startup objects',
            data: startups,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getStartups = getStartups;
//# sourceMappingURL=startupController.js.map