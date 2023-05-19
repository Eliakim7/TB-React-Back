import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

// Connexion DB
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://Elk7:Stevurkel7@titi-burger.7706qbu.mongodb.net/TitiBurger?retryWrites=true&w=majority"
  );
}

//ROUTER
import burger from "./Routes/burger.js";
import accompagnement from "./Routes/accompagnement.js";
import boisson from "./Routes/boisson.js";
import dessert from "./Routes/dessert.js";

//PORT
const PORT = process.env.PORT || 8080;

//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/api/burger", burger);
app.use("/api/accompagnement", accompagnement);
app.use("/api/boisson", boisson);
app.use("/api/dessert", dessert);
app.use(express.static("public"));

// SERVEUR
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
