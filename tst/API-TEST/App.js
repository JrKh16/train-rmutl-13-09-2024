const express = require('express');
const app = express();
const port = 3111;

// กำหนดให้แอปสามารถใช้ JSON
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hi');
});


// สร้าง API ที่สามารถดึงข้อมูลด้วย GET request
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// สร้าง API ที่รับข้อมูลผ่าน POST request
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ received: data });
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


const mongoose = require('mongoose');

// เชื่อมต่อกับ MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

  const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
  });
  
  const User = mongoose.model('User', userSchema);
  

  app.post('/api/users', async (req, res) => {
    const { name, age, email } = req.body;
    try {
      const newUser = new User({ name, age, email });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  });

  
  app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });
  
  
  const jwt = require('jsonwebtoken');
const secretKey = 'mysecretkey';

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // ตรวจสอบผู้ใช้ (นี่คือตัวอย่าง ไม่ใช่การตรวจสอบจริง)
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});


const authenticate = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// เส้นทางที่ต้องการการยืนยันตัวตน
app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'You are authorized', user: req.user });
});



const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // ไปยัง middleware หรือ route handler ถัดไป
};

app.use(logger); // ใช้ middleware ทุก request
