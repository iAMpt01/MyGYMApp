import express from "express";
const app = express();
const cors = require("cors");//pt a permite partajaraea intre origin 
const pool = require("./db");//pool de conexiune la db

//middleware
app.use(cors());
app.use(express.json());//analizează incarcaturile utile de tip json primite 


//CRUD

//create a prog

app.post("/Abonament", async(req, res)=> {
    try {
        const {Abonament} = req.body;
        const newAbb = await pool.query("INSERT INTO Programare (Abonament) VALUES($1) RETURNING *",
        [Abonament]
        );

        res.json(newAbb.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//GET all prog

app.get("/Abonament", async(req, res)=> {
    try {
        const allAbb = await pool.query("SELECT * FROM Programare");

        res.json(allAbb.rows);
    } catch (err) {
        console.error(err.message);
    }
});
//GET a prog

app.get("/Abonament/:id", async(req, res)=> {
    try {
        const {id} = req.params;
        const Abb = await pool.query("SELECT * FROM Programare WHERE id = $1",
        [id]
        );
        res.json(Abb.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//UPDATE a prog

app.put("/Abonament/:id", async(req, res)=> {
    try {
        const {id} = req.params;
        const {Abonament} = req.params;
        const updateAbb = await pool.query("UPDATE Programare SET Abonament = $1 WHERE id = $2",
        [Abonament,id]
        );
        res.json("Date was update");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a prog

app.delete("/Abonament/:id", async(req, res)=> {
    try {
        const {id} = req.params;
        //const {Abonament} = req.params;
        const deleteAbb = await pool.query("DELETE FROM Programare WHERE id=$1",
        [id]
        );
        res.json("Date was delete");
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(8000, () => {
    console.log("server has started at port : 8000");
});

