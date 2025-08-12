"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const startupController_1 = require("../controllers/startupController");
const router = express_1.default.Router();
router.post('/startups', startupController_1.createStartup);
router.get('/startups', startupController_1.getStartups);
exports.default = router;
//# sourceMappingURL=startups.js.map