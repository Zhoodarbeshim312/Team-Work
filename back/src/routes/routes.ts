import { Router } from "express";
import productRoutes from "../modules/product/product.routes";
import cors from "cors";

const globalRouter = Router();
const corsConfig = {
  origin: ["http://localhost:3000"],
};
globalRouter.use("/products", cors(corsConfig), productRoutes);
export default globalRouter;
