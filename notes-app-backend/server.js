const express = require("express");
const { z } = require("zod");
require("dotenv").config();

const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT;

const app = express();


//connect to db

const noteDbSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 30,
    },
    description: {
        type: String,
        default: "No description added",
    },
    },
    {
        timestamps: true
    }
);

const Notes = mongoose.model("Notes", noteDbSchema)


//we Prepare a validation schema that defines the expected input format.
const noteSchema = z.object({
    title: z.string().trim().min(2).max(30),
    description: z.string().trim().optional()
})


//  Let's create a Zod validation middleware.
function validateBody(schema){
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "Invalid inputs provided.",
                errors: result.error.issues.map((issue) => ({
                    field: issue.path.join("."),
                    message: issue.message
                })),
            })
        }
        req.body = result.data
        next();
    }
}

app.use(express.json()) //imp middleware to parse/read the json requests 

// let notes = [];

app.get("/about", (req, res) => {
    res.status(200).send("<h1>Hello there...</h1>")
})


//get endpoints to fetch all the notes

app.get("/notes", async (req, res) => {
    const notes = await Notes.find({})
                    .select("title description -_id").lean()
                    .sort({createdAt: -1}) //all notes
    const data = {title: notes.title, data: notes.description}
    res.status(200).json({
        success: true,
        message: "Notes fetched successfully",
        data: notes
    })
})


//post
app.post("/notes", validateBody(noteSchema) ,async (req, res) => {
    //let add a little safety checks
    const {title, description} = req.body;
    
    // let newNote = {id: Number(Date.now()), title, description}; id automatically get's added to mongo
    let result = await Notes.create(
        {
            title, description
        }
    )

    res.status(201).json({
        success: true,
        message: "Notes Created",
        data: result.title
    })
})





///// need to fix these endpoints


//query search filtering

app.get("/notes/search", (req, res) => {
    const title = req.query.title;

    if (typeof title !== "string") {
        return res.status(404).json({
            success: false,
            message: "Provide a valid title."
        })
    }

    const filteredNotes = notes.filter((note) =>
        typeof note.title === "string" && note.title.toLowerCase().includes(title.toLowerCase())
    )

    res.status(200).json({
        success: true,
        message: "Successfully found note.",
        data: filteredNotes
    })
})


app.get("/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 0) {
        return res.status(404).json({
            success: false,
            message: "Invalid id, no notes found"
        })
    }

    return res.status(200).json({
        success: true,
        message: "Note Found",
        data: notes.filter(n => n.id == id)[0]
    })
})


app.put("/notes/:id", (req, res) => {
    //put replaces the whole data, even if the client only sends one field put will wipe out the whole field and replace the new data field
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 0) {
        return res.status(404).json({
            success: false,
            message: "Invalid id, no notes found",
            data: null
        })
    }

    const { title, description } = req.body;

    //have to find the index ig
    const index = notes.findIndex(n => n.id == id)
    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Id Doesn't exist",
            data: null
        })
    }
    // const index = notes.indexOf(notes.filter(n=>n.id == id)[0])
    notes[index] = { title, description, id: id };

    return res.status(200).json({
        success: true,
        message: "Note updated successfully.",
        data: `Updated note: ${notes[index]}`
    })

})


app.patch("/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 0) {
        return res.status(404).json({
            success: false,
            message: "Invalid id, no notes found"
        })
    }

    const { title, description } = req.body;
    let toUpdate = null;

    if (title === undefined && description === undefined) {
        return res.status(400).json({
            success: false,
            message: "Bad req. Nothing received. Nothing Updated"
        })
    }
    const index = notes.findIndex(n => n.id == id)
    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Id Doesn't exist",
            data: null
        })
    }
    if (title !== undefined) {
        notes[index].title = title;
        toUpdate = "Title"
    } if (description !== undefined) {
        toUpdate = "Description"
        notes[index].description = description;
    }

    return res.status(200).json({
        success: true,
        message: `${toUpdate} updated successfully.`,
        data: notes[id]
    })
})


app.delete("/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 0) {
        return res.status(404).json({
            success: false,
            message: "It does not exist."
        })
    }
    // let targetElem = notes.filter(n => n.id == id) //filter returns a new array
    // const index = notes.indexOf(targetElem[0])   //This fails when the filtered array is empty, meaning the ID does not exist.

    //so we have findIndex
    const index = notes.findIndex(n => n.id == id)
    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Id Doesn't exist",
            data: null
        })
    }
    const deletedNote = notes.splice(index, 1);
    console.log(deletedNote);

    return res.status(201).json({
        success: true,
        message: `The note: ${deletedNote[0].title} is deleted.`,
        deletedNote
    })

})



async function startServer() {
    try {
        if(!uri) {
            throw new Error("MONGODB_URI environment variable is missing.")
        }
        await mongoose.connect(uri);
        console.log("Connected to MongoDB successfully");
        
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`);
        })
    } catch(err) {
        console.error("Initialization failed:", err.message);
        process.exit(1);
    }
}

startServer()
