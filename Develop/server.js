const express = require("express")
const apiRoutes = require("./routes/apiRoutes.js")
const htmlRoutes = require("./routes/htmlRoutes.js")
const path = require('path')
const app = express()

//  middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)


app.listen(process.env.PORT || 3000)