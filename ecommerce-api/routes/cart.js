
const Cart = require('../models/Cart');
const Order = require('../models/Order');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, } = require('./verifyToken');

const router = require('express').Router();

//CREATE
router.post('/', verifyToken, async (req, res) => {
    const newCart = new Product(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }
    catch (err) {
        res.status(500).json(err);
    }

});


//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE
  router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Cart has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET CART
  router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
      try {
          const cart = await Cart.find({userId: req.params.userId});
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //GET ALL  
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
})


//GET MONTHLY INCOME

router.get('/income', verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: prevMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      ])
  }
  catch (err) {
    res.status(500).json(err); 
  }

});

module.exports = router;