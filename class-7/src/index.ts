import express, { type Request, type Response } from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(cors())

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app