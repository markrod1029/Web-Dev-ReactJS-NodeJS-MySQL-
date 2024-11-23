const express = require('express')
const app = express()

app.use(express.json());
const db = require('./models');

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);


db.sequelize.sync()
.then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001')
    });
})
// .catch((err) => {
//     console.error('Failed to sync database:', err);
// });
