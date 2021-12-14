import express from 'express';
import mongoose from 'mongoose';

const app = express();
mongoose.connect('mongodb://localhost:27017/productsdb', {useNewUrlParser: true, useUnifiedTopology:true });

app.use(express.json({ extended: true }));

const port = process.env.PORT || 4000;

app.get('/', (req, res) =>
    res.send(`Store server running on port ${port}`)
);

app.listen(port, () => 
    console.log(`Your server is running on port ${port}`)
);
