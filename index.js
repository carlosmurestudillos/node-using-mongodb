import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/routes';

const app = express();
const port = 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productsdb', {
    useNewUrlParser: true, useUnifiedTopology:true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas de la app
routes(app);

app.get('/', (req, res) =>
    res.send(`Store server running on port ${port}`)
);

app.listen(port, () => 
    console.log(`Your server is running on port ${port}`)
);
