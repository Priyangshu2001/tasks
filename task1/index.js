const express=require('express');
const nodemailer = require ('nodemailer');
var app=express();
app.use(express.json());

app.post('/email',  async (req, res) => {
    let send_to = req.body.to;
    let email_body = req.body.email_body;
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'tq3gllqkdxn4zavq@ethereal.email',
            pass: 'XjTs4Y32YhErk9KuJq'
        }
    });
    const messages={
        from: 'tq3gllqkdxn4zavq@ethereal.email',
        to: send_to,
        text: email_body
    }
    transporter.sendMail(messages,(err,info)=>{
        if(err){
            res.status(400).send(
                JSON.stringify({
                    success: false,
                    message: 'Error message'
                }));
        }
        else{
            res.status(200).send(
                JSON.stringify({
                    success: true,
                    message: 'Email sent successfully'
                }));
        }
    })


})
const port=3010;
app.listen(port,()=>{
    console.log(`listening at ${port}`);
})