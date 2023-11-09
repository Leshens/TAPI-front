import express from "express";
import{getCourse, getStudent} from "../dataGen/generator.js";

export const coursesRouter = express.Router()

coursesRouter.get("/:id"),(req,res) => {
    res.send(getCourse(req.params.id));
}
