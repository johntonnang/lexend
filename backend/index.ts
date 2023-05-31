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
          `../frontend/public/${category.image_url}`
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

app.get("/products/:category", async (request, response) => {
  const category = request.params.category
  console.log(request.params.category)
  console.log(category)

  try {
    const result = await client.query(
      `SELECT * FROM products WHERE category_id IN (SELECT category_id FROM categories WHERE name = $1);`,
      [category]
    )

    console.log(category)

    const products = result.rows

    console.log(result.rows)

    const productsWithImages = []

    for (const product of products) {
      if (!product.image) {
        const imagePath = path.join(
          __dirname,
          `../frontend/public/${product.image_url}`
        )
        const imageBuffer = fs.readFileSync(imagePath)
        const base64Image = imageBuffer.toString("base64")
        product.image = `${base64Image}`
      }

      productsWithImages.push(product)
    }

    response.json(productsWithImages)
  } catch (error) {
    console.error("Error retrieving products:", error)
    response.status(500).json({ error: "Unable to retrieve products" })
  }
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})
