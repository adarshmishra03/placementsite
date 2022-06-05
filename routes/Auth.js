const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../Middlewares/auth');

//LOGIN
router.post('/login',async(req,res) => {
    const {id,password} = req.body;

    if(!id || !password){
        return res.status(400).send('please enter all fields');
    }

    if (id !== process.env.ADMIN_ID || password !== process.env.ADMIN_PASSWORD) {
        return res.status(400).json({ msg: "Wrong credential" });
    }

    //create & assign a token
    jwt.sign({id: id,password:password},
        process.env.JWT_SECRET,
        { expiresIn: 36000 },
        (err, token) => {
            if (err) {
                return res.send(err);
            }
            return res.json({
                token,
                status: "success",
            });
        }
    );
});

module.exports = router;