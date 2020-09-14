import express from 'express';
import Order from '../model/orderModel';
import { isAuth ,isAdmin} from '../util';

const router=express.Router();

router.post("/",isAuth, async(req,res)=>{
    const newOrder=new Order({
        orderItems:req.body.orderItems,
        user:req.user._id,
        shipping:req.body.shipping,
        payment:req.body.payment,
        itemPrice:req.body.itemPrice,
        taxPrice:req.body.taxPrice,
        shippingPrice:req.body.shippingPrice,
        totalPrice:req.body.totalPrice

    });
    const newOrderCreated= await newOrder.save();
    res.status(201).send({message:"New Order Created",data:newOrderCreated})
});

router.get("/mine",isAuth,async(req,res)=>{
    const orders=await Order.find({user:req.user._id});
    res.send(orders)
})

router.get("/:id",isAuth,async(req,res)=>{
    const order=await Order.findOne({_id:req.params.id});
    if(order){
        res.send(order);
    }
    else{
        res.status(404).send("Order Not Found.")
    }
});

router.put("/:id/pay",isAuth, async(req,res)=>{
    const order=await Order.findById(req.params.id);
    if(order){
        order.isPaid=true;
        order.paidAt=Date.now();
        order.payment ={
            paymentMethod:'paypal',
            paymentResult:{
                payerID:req.body.payerID,
                orderId:req.body.orderId,
                paymentId:req.body.paymentId
            }
        }
        const upadatedOrder=await Order.save();
        res.send({message:'Order Paid.',order:upadatedOrder});
    }
    else{
        res.status(404).send({message:'Order not found.'})
    }
})

export default router;
