let express = require("express")
let connectDB = require("./config/db")

let app = express()

//connect Database
// connectDB()

//Init Middleware
app.use(express.json({ extended: false }))

app.use("/api/user", require("./routes/api/user"))
app.use("/api/auth", require("./routes/api/auth"))
app.use("/api/profile", require("./routes/api/profile"))
app.use("/api/posts", require("./routes/api/posts"))

app.get("/", (req, res) => res.send("Backend is Up and Running"))

let PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
