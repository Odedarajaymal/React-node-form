const mongoose = require('mongoose')
const Node = mongoose.model('Node')
const valid = require('../validator/index')
const sendmail = require('../sendmail/mail')

module.exports = app =>{
    
    app.post('/user/registration',valid,async(req, res)=>{
        try{
            const userexists = await Node.findOne({name:req.body.name})
        if(userexists){
            res.json({error:'user already exists'})
        }
        const user =await new Node(req.body)
           await user.save()
           sendmail(user.email, user.name)
           res.json({message:"successfully registration "})
        }catch(err) {
            console.log(err)
        }
        
    })  

   
}