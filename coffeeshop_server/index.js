const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const cors = require("cors");
const port = 3000;
app.use(express.json());
app.use(
  cors({
    // origin: "http://localhost:5173",
  })
);

const uri =
  "mongodb+srv://coffeeshop:coffeeshop098@coffeeshop.dxiqg0g.mongodb.net/?retryWrites=true&w=majority&appName=coffeeshop";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const products = client.db("coffeeshop").collection("products");

    //   app.get() , post, delete, put, patch

    app.post("/", async (req, res) => {
      try {
        const newProduct = req.body;

        const result = await products.insertOne(newProduct);
        console.log("Product inserted with: ", result);
        res.status(201).json(result);
      } catch (error) {
        console.error("Error inserting product:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
