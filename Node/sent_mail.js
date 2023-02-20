var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'h19920604@yahoo.com.tw',
    pass: 'lnyzdkzzvyxphsec'
  }
});

var mailOptions = {
  from: 'h19920604@yahoo.com.tw',
  to: 'lksh20602@gmail.com, b99705008@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy! Ha! Ha! Ha!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// Email sent: 250 OK , completed
