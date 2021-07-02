const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: 'agencyoftalents999@gmail.com',
        pass: 'hacktiv8'
    }
})

let mailOptions = {
    from : 'agencyoftalents999@gmail.com',
    to: 'agassi.garry@gmail.com',
    subject: 'Test',
    text: 'This is a test email.'
}

transporter.sendMail(mailOptions, function(err, data){
    if (err){
        console.log (err)
    }else{
        console.log ('Sent!')
    }
})