import express from "express";
import { getGroup } from "../dataGen/generator.js";

export const groupsRouter = express.Router();

groupsRouter.get("/:id", (req, res) => {
    res.send(getGroup(req.params.id));
});
