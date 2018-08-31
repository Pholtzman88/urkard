const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'holtzman.patrick@gmail.com',
        clientId: '727656314805-gh9ru4t35ss64q7j3bcblcquvb0ne1hm.apps.googleusercontent.com',
        clientSecret: 'KK6TKkzsH31O8z2RvsUa27U5',
        refreshToken: '1/hose6d2SSXyU1UsC2EyvKyJY4oStMpUwIAspeQXaDpI',
        accessToken: 'ya29.GlvcBA2uLwMyGEH6LgSErLFyAmGO4RuvKzkdk2AI1RNBTADZlug5VxYd58aGjKag4nsonzJyWV5hiJJmDp9AjO3io5V8047dJ4Upqh9xkd4Qul6RNM06kHpHoZoA'
    },
});

module.exports = {
    sendMail: req => {
        console.log('req:  -->', req);

        return transporter.sendMail({

            from: req.body.email,
            to: "urkardapp@directimagecards.com",
            subject: `received from directimagecards.com.. subject: ${req.body.subject}, reply to: ${req.body.email}`,
            text: req.body.comments

        }, (err,res) => {

            if (err){
                console.log(err)
            }
            else{
                console.log('email sent', res)
            }
        })
    }
};