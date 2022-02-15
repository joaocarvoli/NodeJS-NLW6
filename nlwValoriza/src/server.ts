import "reflect-metadata"
import express, { response } from "express"
import { router } from "./routes"
require('dotenv').config({ path: 'src'+'/.env' });

import "./database"

const app = express()

app.use(express.json())

app.use(router)

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))