import app from "./index.js";
import mongoose from "mongoose"

main().catch(err => console.log(err))
const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL || ""

async function main() {
  await mongoose.connect(DATABASE_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
}
