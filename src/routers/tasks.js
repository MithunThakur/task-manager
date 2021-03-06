const express = require('express');
const router = new express.Router();
const Task = require('../models/task');

router.post('/tasks' , async (req , res) => {
    const task = new Task(req.body);
    // task.save().then(() => {
    //     res.status(201).send(task);
    // }).catch((error) => {
    //     res.status(400).send(error);
    // });
    
    try{
        await task.save();
        res.status(201).send(task);
    }catch(e) {
        res.status(400).send(e);
    }

});



router.get('/tasks', async (req, res) => {
    // Task.find({}).then((tasks) => {
    //     res.send(tasks);
    // }).catch((error) => {
    //     res.status(500).send(error);
    // });
    try {    
        const tasks = await Task.find({});
        res.send(tasks);
    } catch(e) {
        res.status(500).send(e);
    }


});

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send();
    //     }
    //     res.send(task);
    // }).catch((error) => {
    //     res.status(500).send(error);
    // })
    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch(e) {
        res.status(500).send(e);
    }

})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowUpdates = ['description', 'completed'];

    const isValideOperation = updates.every((update) => {
        return allowUpdates.includes(update);
    });
    if (!isValideOperation) {
        return res.status(400).send({error: 'Invaid Updates'});
    }
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
     } catch(e) {
        res.status(400).send(e);
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch(e) {
        res.status(404).send(e);
    }
});

module.exports = router;