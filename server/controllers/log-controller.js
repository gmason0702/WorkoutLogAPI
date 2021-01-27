const router = require("express").Router(); //express methods = GET, POST, PUT, DELETE
const Workout = require("../db").import("../models/workoutlog");

router.post("/create", (req, res) => {
  const logEntry = {
    description: req.body.description,
    definition: req.body.definition,
    result: req.body.result,
    owner_id: req.user.id,
  };
  Workout.create(logEntry)
    .then((workout) => res.status(200).json(workout))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/", function (req, res) {
  Workout.findAll()
    .then((workouts) => res.status(200).json(workouts))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/:id", (req, res) => {
  let userid = req.params.id;
  Workout.findAll({
    where: { id: req.params.id },
  })
    .then((workouts) => res.status(200).json(workouts))
    .catch((err) => res.status(500).json({ error: err }));
});

router.put("/:id", (req, res) => {
  const updateWorkoutEntry = {
    description: req.body.description,
    definition: req.body.definition,
    result: req.body.result,
  };
  const query = { where: { id: req.params.id, owner_id: req.user.id } };

  Workout.update(updateWorkoutEntry, query)
    .then((workout) => res.status(200).json(workout))
    .catch((err) => res.status(500).json({ error: err }));
});

router.delete("/:id", (req, res) => {
  const query = { where: { id: req.params.id, owner_id: req.user.id } };

  Workout.destroy(query)
    .then(() => res.status(200).json({ message: "Workout log removed" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
