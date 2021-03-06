var express = require('express');
var router = express.Router();
const cosplayModel = require("./../model/cosplay.model");

router.get("/", (req, res, next) => {
    cosplayModel.find()
    .then((cosplay) => {
        res.render("all-cosplays", { cosplay })
    })
    .catch((error) => {
        next(error);
    })
})

router.get("/new", (req, res) => {
    res.render("add-new-cosplay")
})

router.post("/new", (req, res, next) =>{
    const { name, universe, inProgress } = req.body
    cosplayModel.create(req.body)
    .then(() => {
        res.redirect("/cosplay")
    })
    .catch((error) => {
        next(error);
    })
    console.log(req.body)
})

router.get("/edit/:id", (req, res, next) => {
    cosplayModel.findById(req.params.id)
    .then((editedCosplay) => {
        res.render("edit-cosplay", { editedCosplay })
    })
    .catch((error) => {
        next(error);
    })
})

router.post("/edit/:id", (req, res, next) => {
    const { name, universe, inProgress } = req.body
    cosplayModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect("/cosplay")
    })
    .catch((error) => {
        next(error);
    })
})

router.get("/delete/:id", (req, res, next) => {
    cosplayModel.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/cosplay")
    })
    .catch((error) => {
        next(error);
    })
})

module.exports = router;