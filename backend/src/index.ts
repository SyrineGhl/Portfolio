import dotenv from "dotenv";
import app from "./app";

dotenv.config({ path: ".env" });
app.set("port",process.env.PORT || 3000)
app.listen(process.env.PORT);
