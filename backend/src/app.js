import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app = express();

//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.get('api/users', (req, res) => res.send('Users Routes'));
app.get('api/notes', (req, res) => res.send('Notes Routes'));



export default app;
