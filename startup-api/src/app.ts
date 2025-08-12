import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import startupRoutes from './routes/startups';

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

dotenv.config();
connectDB();

const swaggerDocument = YAML.load(path.join(__dirname, '../docs/swagger.yaml'));

const app = express();

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use('/api', startupRoutes);

app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
