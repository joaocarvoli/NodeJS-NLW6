import "reflect-metadata"
import express, { response } from "express"
require('dotenv').config({ path: 'src'+'/.env' });

import "./database"

const app = express()




app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))