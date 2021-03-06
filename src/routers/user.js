const express = require('express');
const router = new express.Router();
const User = require('../models/user');

// router.get('/test', (req, res) => {
//     res.send('Form a new file');
// });

router.post('/users', async (req, res) => {
    const user = new User(req.body);
    // user.save().then(() => {
    //     res.status(201).send(user);
    // }).catch((error) => {
    //     res.status(400).send(error);
    // });

    try {
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
    
});

router.get('/users', async (req, res) => {
    // User.find({}).then((users) => {
    //     res.send(users);
    // }).catch((error) => {
    //     res.status(500).send(error);
    // })

    try {
        const users = await User.find({});
        res.send(users);
    } catch(e) {
        res.status(500).send(e);
    }
});

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;
    // User.findById(_id).then((user) => {
    //    if (!user) {
    //        return res.status(404).send();
    //    }
    //    res.send(user);
    // }).catch((error) => {
    //     res.status(500).send(error);
    // });
    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send()
        }
        res.send(user);
    } catch(e) {
        res.status(500).send(e);
    }
});

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowUpdates = ['name', 'email', 'password', 'age'];

    const isValideOperation = updates.every((update) => {
        return allowUpdates.includes(update);
    });
    if (!isValideOperation) {
        return res.status(400).send({error: 'Invaid Updates'});
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
     } catch(e) {
        res.status(400).send(e);
    }
});

router.delete('/users/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(_id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch(e) {
        res.status(500).send(e);
    }
});

module.exports = router;