// imports dependencies
import express, { Router } from "express";

// local file dependencies
import { connectDbAndRunQueries } from "./dbOps.js";
const router = Router();

router.get("/getallusers", (req, res) => {
  connectDbAndRunQueries("getAllUsers", req, res);
});

export default router;
