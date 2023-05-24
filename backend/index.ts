import cors from "cors"
import express from "express"
import fs from "fs"
import path from "path"

const app = express()

app.use(cors())

const dotenv = require("dotenv")
const { Client } = require("pg")

dotenv.config()

const client = new Client({
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
})

client.connect()

app.get("/categories", async (request, response) => {
  try {
    const result = await client.query(`SELECT * FROM categories;`)
    const categories = result.rows

    const categoriesWithImages = []

    for (const category of categories) {
      if (!category.image) {
        const imagePath = path.join(
          __dirname,
          `../frontend/public/${category.image_file}`
        )
        const imageBuffer = fs.readFileSync(imagePath)
        const base64Image = imageBuffer.toString("base64")
        category.image = `${base64Image}`
      }

      categoriesWithImages.push(category)
    }

    response.json(categoriesWithImages)
  } catch (error) {
    console.error("Error retrieving categories:", error)
    response.status(500).json({ error: "Unable to retrieve categories" })
  }
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})
