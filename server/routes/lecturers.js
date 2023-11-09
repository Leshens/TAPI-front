import express from "express";
import { getLecturer } from "../dataGen/generator.js";

export const lecturersRouter = express.Router();

lecturersRouter.get("/:id", (req, res) => {
    res.send(getLecturer(req.params.id));
});
