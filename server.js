import app from "./app.js";
const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`app listening on port ${PORT}`);
});