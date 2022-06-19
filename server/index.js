const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')
const movieRouter = require("./routes/movie");

app.use(cors())
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.json({ message: "ok" });
})

app.use("/movies", movieRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})