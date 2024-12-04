import express from 'express'
import mongoose from 'mongoose';
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js'
import bodyParser from 'express'
import addressRouter from './Routes/address.js'
import paymentRouter from './Routes/payment.js'
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config()

const app = express();

app.use(bodyParser.json())

app.use(cors({
  origin: true,
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true
}))


// home testing route
app.get('/', (req, res) => res.json({ message: "this is home router" }))


// user Router
app.use('/api/user', userRouter)

// product Router
app.use('/api/product', productRouter)

// cart Router
app.use('/api/cart', cartRouter)

// Address Router
app.use('/api/address', addressRouter)

// payment Router
app.use('/api/payment', paymentRouter)


// mongoose.connect("mongodb://localhost:27017/MERN_E_Commerce",
// ).then(() => console.log("MongoDB Connected successfully..."))
//   .catch((err) => console.log(err))


mongoose.connect("mongodb://0.0.0.0:27017/MERN_E_Commerce",
).then(() => console.log("MongoDB Connected successfully..."))
  .catch((err) => console.log(err))


// mongoose.connect("mongodb://127.0.0.1:27017/MERN_E_Commerce",
// ).then(() => console.log("MongoDB Connected successfully..."))
//   .catch((err) => console.log(err))



// const port = 1000;
app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))


