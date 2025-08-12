"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const startups_1 = __importDefault(require("./routes/startups"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
(0, database_1.default)();
const swaggerDocument = yamljs_1.default.load(path_1.default.join(__dirname, '../docs/swagger.yaml'));
const app = (0, express_1.default)();
// Swagger UI
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use(express_1.default.json());
app.use('/api', startups_1.default);
app.get('/', (req, res) => {
    res.send('API is running 🚀');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//# sourceMappingURL=app.js.map