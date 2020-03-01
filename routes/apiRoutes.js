const path = require("path")
const router = require("express").Router()
const fs = require('fs')


//GET
router.get('/api/notes', (req, res) => {
  fs.readFile('../db/db.json', 'utf8', (err, notes) => {
    if (err) { console.log(err) }
    res.json(JSON.parse(notes))
    // res.json(notes)
  })
})

//POST 
router.post("/api/notes", (req, res) => {
  fs.readFile('../db/db.json', 'utf8', (err, notes) => {
    if (err) { console.log(err) }
    res.json(notes)
  })
})

// DELETE 
router.delete(('/api/notes/:id'), (req, res) => {
  fs.readFile('../db/db.json', 'utf8', (err, notes) => {
    if (err) { console.log(err) }
    res.json(notes)
  })
})

module.exports = router



