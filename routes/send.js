import express  from "express";
import { receive, send } from "../Controllers/send.js";

const router = express.Router();

router.post("/postlink/", send)
router.get("/getlink/:id", receive)


export default router;
