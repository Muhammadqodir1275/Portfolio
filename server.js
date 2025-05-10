const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// CORS sozlamalari
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'], // Development uchun
    methods: ['POST', 'GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

app.use(express.json());

// Email yuborish uchun transport yaratish
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/send-email', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // Qabul qiluvchi email
            subject: `Yangi xabar: ${name}dan`,
            text: `
                Ismі: ${name}
                Email: ${email}
                Xabar: ${message}
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email muvaffaqiyatli yuborildi' });
    } catch (error) {
        console.error('Email yuborishda xatolik:', error);
        res.status(500).json({ error: 'Server xatosi' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portda ishga tushdi`);
}); 