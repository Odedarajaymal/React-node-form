
module.exports =(req,res,next)=>{
      req.check('name','name is required').notEmpty() 
      req.check('email','email is required').notEmpty() 
      req.check('email','email is not valid').matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      req.check('phoneNumber','phoneNumber is required').notEmpty()
      req.check('phoneNumber','phoneNumber must be length 10').isLength({
          min: 10,
      })
    const errors = req.validationErrors()
    if(errors){
    const first = errors.map((err) =>err.msg)[0]
    return res.json({error:first})
    }
    next()
}