const sendgrid = require('@sendgrid/mail')


const api = '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'
sendgrid.setApiKey(api)

const sendmail = (email,name) =>{
    sendgrid.send({
        to: email,
        from:'odedarajaymal24@gmail.com',
        subject:'thanks for joining',
        text:`walcome my app ${name}`

    })
}

module.exports =sendmail