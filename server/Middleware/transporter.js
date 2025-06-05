import nodemailer from 'nodemailer';

const transporter=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:'amiranas761@gmail.com',
        pass:'oxgistgtmrabvhuh'
    }
})

export default transporter