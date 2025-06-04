const express=require('express')
const RoleAccess = require('../Middleware/RoleMiddleware')
const { createCheckoutSession } = require('../Controller/Stripecontroller')
const passport=require('passport')
const Router=express.Router()
Router.route('/create-checkout-session').post(passport.authenticate('jwt',{session:false}),createCheckoutSession)
module.exports=Router;
