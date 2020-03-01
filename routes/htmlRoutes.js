const path = require("path")
const router = require("express").Router()
const fs = require('fs')


router.get("/notes", (req, res) => {
  fs.readFile('../public/notes.html', 'utf8', (err, notes) => {
    if (err) { console.log(err) }
    res.json(notes)
  })
})

router.get("*", (req, res) => {
  fs.readFile('../public/index.html', 'utf8', (err, data) => {
    if (err) { console.log(err) }
    res.json(data)
  })
})

module.exports = router