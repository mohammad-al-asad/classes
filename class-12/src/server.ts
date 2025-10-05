import mongoose from "mongoose";
import app from "./index.js";


const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL || ""

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DATABASE_URL);

  app.listen(PORT, () => {
    console.log(`Server is runing at http://localhost:${PORT}`);
  });
}
