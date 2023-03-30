import app from "./app.js";
const PORT = process.env.PORT;

app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`);
});