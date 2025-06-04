const nodemailer=require('nodemailer')
const transporter=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:'amiranas761@gmail.com',
        pass:'oxgistgtmrabvhuh'
    }
})

module.exports=transporter