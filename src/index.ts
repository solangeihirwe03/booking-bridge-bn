import express, { Request, Response } from "express"
import httpStatus  from "http-status";
import { config } from "dotenv";
import cors from "cors"

config()

const app = express();

app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.status(httpStatus.OK).json({ message: "Welcome to booking-bridge APIs" })}
  );

  const port = process.env.PORT
  app.listen(port, ()=> console.log(`Server is running on port ${port}`))