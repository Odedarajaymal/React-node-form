import React,{Component} from 'react';


class Signup extends Component{
    state ={
     name:'',
     email:'',
     phoneNumber:'',
     error:'',
     open:false
    }

    handleChange = (name)=>(event)=>{
        this.setState({error:''})
        this.setState({[name]:event.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const {name,email,phoneNumber} = this.state
        const user = {
            name,
            email,
            phoneNumber
        }
       
      this.Signup(user)
      .then(data=>{
          if(data.error) return  this.setState({error:data.error})
          else this.setState({
              error:'',
              name:'',
              email:'',
              phoneNumber:'',
              open:true
          })
      })
    }

    Signup = (user)=>{
     return  fetch('http://localhost:5000/user/registration',{
            method:'POST',
            headers: {
                 Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res =>{
            return res.json()
        }).catch(err => console.log(err))
    }

    render() { 
        const {name,error,email,phoneNumber,open} = this.state
        return (
            <div style={{marginRight:'30px'}} className="container">
                <h2 className="mt-5 mb-3">Form</h2>
                <div style={{display:error ? '':'none'}} className="alert alert-danger">{error}</div>
                <div style={{display:open ? '':'none'}} className="alert alert-primary">your form successfully createAt  </div>
                <form>
                    <div className="form-group"> 
                      <label className="text-muted">name</label>
                       <input onChange={this.handleChange('name')} type="text" value={name} className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label className="text-muted">email</label>
                       <input onChange={this.handleChange('email')}  type="email" value={email} className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label className="text-muted">phoneNumber</label>
                       <input onChange={this.handleChange('phoneNumber')} type="number" value={phoneNumber} className="form-control"/>
                    </div>
                    <button onClick={this.handleSubmit} className="btn btn-raised btn-primary">Submit</button>
                </form>
               
            </div>
        )
    }
} 
   

export default Signup