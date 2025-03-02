const express = require("express")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./Middleware/errorMiddleware")
const connectDB = require('./Config/db')
const { swaggerUi, swaggerDocs } = require('./Config/swagger');
const port = process.env.PORT || 5000;

connectDB()
const app = express();


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./Routes/userRoutes'))

app.use(errorHandler)
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));