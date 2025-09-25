import express from "express";
import { protectRoute } from "../middleware/auth.js";
import { getMessages, getUsersForSidebar, markMessageAsSeen, sendMessage } from "../controllers/messageController.js";

const messgaeRouter = express.Router();

messgaeRouter.get("/users",protectRoute,getUsersForSidebar);
messgaeRouter.get("/:id",protectRoute,getMessages);
messgaeRouter.put("/mark/:id",protectRoute,markMessageAsSeen);
messgaeRouter.post("/send/:id",protectRoute,sendMessage);


export default messgaeRouter;