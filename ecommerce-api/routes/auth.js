const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');


//Register
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_CODE).toString(),
        email: req.body.email
    })
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (error){
        res.status(500).json(error);
    }
})

//Login
router.post('/login', async (req, res) => {

    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json('Wrong Credentials!');

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        },
            process.env.JWT_SECKEY,
        {expiresIn:'8d'}
        );



        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_CODE);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        originalPassword !== req.body.password && res.status(401).json('Wrong Credentials!');

        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });  
    }
    catch (err) { 
        res.status(500).json(err);
        return;
    }

})


 
module.exports = router;