import "reflect-metadata";
import express, { NextFunction, Response, Request } from "express";
import "express-async-errors";
import { router } from "./routes"
require('dotenv').config({ path: 'src'+'/.env' });

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error){
    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))