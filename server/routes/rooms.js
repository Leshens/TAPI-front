import express from "express";
import { getRoom } from "../dataGen/generator.js";

export const roomsRouter = express.Router();

roomsRouter.get("/:id", (req, res) => {
    // #swagger.tags = ['Room']
    res.send(getRoom(req.params.id));
});
