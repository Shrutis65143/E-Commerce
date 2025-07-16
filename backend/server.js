import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// Connect to DB and Cloudinary
connectDB();
connectCloudinary();

// App Config
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Test route
app.get('/', (req, res) => {
  res.send('API Working');
});

// ❌ Don't do this on Vercel
// app.listen(port, () => console.log('Server started on port: ' + port));

// ✅ Instead, export the app for Vercel
export default app;
