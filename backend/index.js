import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
let apiUrl = process.env.API_URL || '/api';

const router = express.Router();

app.use(cors());
app.use(apiUrl, router);
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.get('/', (req, res) => {
  res.json({ message: 'From Express API', node_env: process.env.NODE_ENV });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
