const { default: mongoose } = require("mongoose")
const Student = require("../models/Student.model")

module.exports.studentsController = {
    getStudent: (reg, res) => {
        Student.find().then((data) => {
            res.json(data)})
    },

    postStudent: (reg, res) => {
        Student.create({
            name: `${reg.body.name}`,
            phone: `${reg.body.phone}`,
            age: `${reg.body.age}`
        }).then(() => {
            res.json("Студент добавлен")
        })
    },

    deleteStudent: (reg, res) => {
        Student.findByIdAndRemove(reg.params.id)
        .then(() => {
            res.json(`Студент с id: ${reg.params.id} удален`)
        })
    },

    patchStudent: (reg, res) => {
        Student.findByIdAndUpdate(reg.params.id, 
            {name: reg.body.name})
        .then(() => {
            res.json('Имя студента успешно изменен')
        })
    },
}