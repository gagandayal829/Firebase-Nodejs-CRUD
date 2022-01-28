import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from '../Firebase-Nodejs-CRUD/routes/users.js'

//Initialize our express application
const app = express();
const PORT = 5000;





//Initialize body parser
//JSON function represents that we are going to use JSON data in our application
app.use(bodyParser.json());
//Starting point for all the routes
app.use('/users', userRoutes)

app.get('/', (req,res) => res.send('Hello from Homepage') )

app.listen(PORT, () => console.log(`Server running on port : http://localhost:${PORT}`))