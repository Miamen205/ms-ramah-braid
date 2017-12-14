const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing


exports.sendMessage = function (req, res, next) {
    const email = req.body.email;
    const fullName = req.body.fullName;
    const phoneNumber = req.body.phoneNumber;
    const subject = req.body.subject;
    const message = req.body.message;
    const name = req.body.name;
    const number = req.body.number;
   

    console.log("CONTACT MESSAGE CONTROLLER SENT");
    console.log(email);
    console.log(fullName);
    console.log(phoneNumber);
    console.log(name);
    console.log(number);
    // console.log(subject);
    console.log(message);


    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
           
            user: 'ramahbraid2017@gmail.com',
            pass:'Ramah2017',
           
        }
    });
    var mailOptions = {
        from:'"Ms.Ramah Braids.com" <ramahbraid2017@gmail.com>',
        //Enter as many emails as you'd 
        to: "ramahbraid2017@gmail.com, adeahkpo@yahoo.com, graylisad121@gmail.com",
        // blesschild2508@gmail.com,
        subject: 'Hello How Can We Help You?',
        text: message,
        html: `<br/><p> From: ${email} <br/> <br/> </p><p> Name: ${fullName}<br/> <br/> </p><p> Phone: ${phoneNumber}<br/> <br/> </p><p> Hair Name: ${name} <br/> <br/> </p><p> Hair Number: ${number} <br/> <br/> </p><p> Message: ${subject} <br/> <br/> </p> <br/> <p> <br/> <br/> <br/> <p> - From Ms.Ramah Braid Email Service<br/>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});

        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});            
        };
    });

    
    
  };

