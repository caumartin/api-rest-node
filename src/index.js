import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import productRouter from './routes/productRoutes.js'
import authRouter from './routes/auth.routes.js'; 
import 'dotenv/config';

const app = express();
app.use (cors());

// Middlewares
app.use(express.json());
app.use(bodyParser.json()); 

// Rutas
app.use('/api/products', productRouter);
app.use('/auth', authRouter); 

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
