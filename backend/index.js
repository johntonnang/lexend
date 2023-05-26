"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const dotenv = require("dotenv");
const { Client } = require("pg");
dotenv.config();
const client = new Client({
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
});
client.connect();
app.get("/categories", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield client.query(`SELECT * FROM categories;`);
        const categories = result.rows;
        const categoriesWithImages = [];
        for (const category of categories) {
            if (!category.image) {
                const imagePath = path_1.default.join(__dirname, `../frontend/public/${category.image_url}`);
                const imageBuffer = fs_1.default.readFileSync(imagePath);
                const base64Image = imageBuffer.toString("base64");
                category.image = `${base64Image}`;
            }
            categoriesWithImages.push(category);
        }
        response.json(categoriesWithImages);
    }
    catch (error) {
        console.error("Error retrieving categories:", error);
        response.status(500).json({ error: "Unable to retrieve categories" });
    }
}));
app.get("/chairs", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield client.query(`SELECT * FROM chairs;`);
        const chairs = result.rows;
        const chairsWithImages = [];
        for (const chair of chairs) {
            if (!chair.image) {
                const imagePath = path_1.default.join(__dirname, `../frontend/public/${chair.image_url}`);
                const imageBuffer = fs_1.default.readFileSync(imagePath);
                const base64Image = imageBuffer.toString("base64");
                chair.image = `${base64Image}`;
            }
            chairsWithImages.push(chair);
        }
        response.json(chairsWithImages);
    }
    catch (error) {
        console.error("Error retrieving chairs:", error);
        response.status(500).json({ error: "Unable to retrieve chairs" });
    }
}));
app.get("/products", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield client.query(`SELECT * FROM products;`);
        const products = result.rows;
        const productsWithImages = [];
        for (const product of products) {
            if (!product.image) {
                const imagePath = path_1.default.join(__dirname, `../frontend/public/${product.image_url}`);
                const imageBuffer = fs_1.default.readFileSync(imagePath);
                const base64Image = imageBuffer.toString("base64");
                product.image = `${base64Image}`;
            }
            productsWithImages.push(product);
        }
        response.json(productsWithImages);
    }
    catch (error) {
        console.error("Error retrieving chairs:", error);
        response.status(500).json({ error: "Unable to retrieve chairs" });
    }
}));
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
