const { Router } = require("express");
const { studentsController } = require("../controllers/students.controller");

const router = Router();

router.get('/students', studentsController.getStudent);
router.post('/students', studentsController.postStudent);
router.delete('/students/:id', studentsController.deleteStudent)
router.patch('/students/:id', studentsController.patchStudent)


module.exports = router;