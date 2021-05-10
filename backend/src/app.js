import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import usersRoutes from './routes/users.routes';
import notesRoutes from './routes/notes.routes';
const app = express();

//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


//routes
app.use('/api/users', usersRoutes);
app.use('/api/notes', notesRoutes);



export default app;
