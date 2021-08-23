//dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//internal imports
const postRoutes = require('./routes/postRoutes');

const app = express();

// middleweres
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

//Routes
app.use('/posts', postRoutes);

///environment variables
const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
    'mongodb+srv://shohan:mshohan1704@mern.fqnmn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//conect to database
mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () =>
            console.log(
                `Database Connected & server is running on http://localhost:${PORT}`
            )
        );
    })
    .catch((err) => console.log(err));

mongoose.set('useFindAndModify', false);
