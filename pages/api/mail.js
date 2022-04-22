const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

const mails = (req,res) =>{
    const body = JSON.parse(req.body);
    const message = `
        Name: ${body.fname}\s${body.lname}\r\n
        Email: ${body.mail}\r\n
        Subject: ${body.mfs}\r\n
        Message: ${body.message}
    `;
    const data = {
        to: 'uaj.hisham@gmail.com',
        from: 'admin@mathsfitnessacademy.com',
        subject: 'Message from user',
        text: message,
        html: message.replace(/\r\n/g,'<br>')
    };  
    console.log(data)
    mail.send(data);
    res.status(200).json({status: 'Ok'})
}

export default mails