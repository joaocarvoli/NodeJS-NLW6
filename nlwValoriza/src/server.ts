import express, { response } from "express"
// import * as dotenv from 'dotenv';
// dotenv.config();

const app = express()

/*
- GET: To search any information
- POST: To insert any information inside the API
- PUT: To change any information
- DELETE: To delete a data
- PATCH: To change a specific data
*/

app.get('/test', (req, res) => {
    return res.send("Hello NLW!")
})

app.post('/test-post', (req, res) => {
    return res.send("Hello NLW, testing post method!")
})// <- It returns an error via browser: Cannot GET /test-post. This is because the browser doesn't process the POST request. We need to use another client


// app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`)) // http://localhost:process.env.PORT
const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`))