require('dotenv').config()
const express=require('express');
const cors=require('cors')
const bodyparser=require('body-parser')
const AuthRouter=require('./Router/AuthRouter')
const JobRouter=require('./Router/JobRouter')
const passport=require('passport')
const errormiddleware=require('./Middleware/ErrorMiddleware')
const UserRouter=require('./Router/UserRouter')
const AdminRouter=require('./Router/AdminRouter')
const CourseRouter=require('./Router/CourseRouter')
const InstructorRouter=require('./Router/InstructorRouter')
const StripeRouter=require('./Router/StripeRouter')
const Course=require('./Model/CoursesModal')
const Enrollment=require('./Model/EnrollmentModal')

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

require('./Config/passport')
require('./Middleware/MulterMiddleware')
const server=express()
server.get('/',(req,res)=>{
    res.json({message:"server started"})

})
server.post('/api/stripe/webhook',bodyparser.raw({type:'application/json'}),async(req,res)=>{
    const sig=req.headers['stripe-signature'];
    let event;
    try {
        event=stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.WEBHOOK_SECRET_KEY
        );
    } catch (error) {
        console.log("webhook error ",error);
        res.status(400).json({FailureMessage:`webhook error ${error}`})
        
        
    }
    if(event.type==='checkout.session.completed'){
        const session=event.data.object;
        const {userId,courseId}=session.metadata;
        try {
            const EnrolledStatus=await Enrollment.findOne({student:userId,course:courseId})
            if(EnrolledStatus){
                return res.status(400).json({FailureMessage:"You are Already enrolled in this course"})
            }
            const Enroll=await Enrollment.create({student:userId,course:courseId})
            console.log("Enrollment successful");
            
        res.status(200).json({SuccessMessage:"Student Enrolled SuccessFully",Enroll})
} catch (error) {
    console.log(error);
    
    res.status(500).json({FailureMessage:"Internal Server Error",error:error.message})
}
    }
    
})
server.use(cors())
server.use(bodyparser.json())
server.use(passport.initialize())
server.use(express.urlencoded({ extended: true }));

server.use('/api/courses',CourseRouter)
server.use('/Api/Auth',AuthRouter)
server.use('/api/jobs',JobRouter)
server.use('/api/user',UserRouter)
server.use('/api/admin',AdminRouter)
server.use('/api/instructor',InstructorRouter)
server.use('/api/stripe',StripeRouter)
console.log(process.env.FRONT_END_URL);

server.use(errormiddleware)

const connectdb=require('./utils/db');
const CourseModal = require('./Model/CoursesModal');

const PORT=process.env.PORT||5000

 
 date=new Date()
 console.log(date.toDateString());
 
 
connectdb().then(()=>{
    server.listen(PORT,()=>{
        console.log('server started');
        
    })
})