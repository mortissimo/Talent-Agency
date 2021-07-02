// require('dotenv').config()
// const nodemailer = require('nodemailer')
// let transporter = nodemailer.createTransport({
//     service:"gmail",
//     auth: {
//         user: process.env.PASSWORD,
//         pass: process.env.EMAIL
//     }
// })

// let mailOptions = {
//     from : 'bboyfishy@gmail.com',
//     to: 'agassi.garry@gmail.com',
//     subject: 'Test',
//     text: 'This is a test email.'
// }

// transporter.sendMail(mailOptions, function(err, data){
//     if (err){
//         console.log (err)
//     }else{
//         console.log ('Sent!')
//     }
// })