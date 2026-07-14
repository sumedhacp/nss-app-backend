const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sumedha:sumu123@cluster0.jv4x88s.mongodb.net/nssdb").then(

    () => {
        console.log("MongoDB Connected")
    }

).catch(

    (error) => {

        console.log(error)

    }

)

const Volunteer = mongoose.model("Volunteers", new mongoose.Schema(

    {
        volunteerId: String,
        fullName: String,
        email: String,
        phone: String,
        dateOfBirth: String,
        gender: String,
        bloodGroup: String,
        department: String,
        yearOfStudy: String,
        campName: String,
        hoursCompleted: String,
        address: String,
        unitNumber: String
    }

))

app.post("/add-vol", async (request, response) => {

    await Volunteer.create(request.body)

    response.json({ "status": "success" })

})

app.get("/view-vol", async (request, response) => {

    const Volunteers = await Volunteer.find()

    response.json(Volunteers)

})

app.listen(3000, () => {

    console.log("server started")

})