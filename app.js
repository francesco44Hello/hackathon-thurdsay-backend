import express from 'express';
import morgan from "morgan";
import cors from 'cors';
import matchRouter from "./routes/matchRouter.js"

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(cors("*"));
app.use(matchRouter);

app.use("/api/match", matchRouter)

export default app;

