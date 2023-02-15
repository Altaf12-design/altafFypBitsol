const db=require('../model')
const User=db.user;

exports.getAll=(_,res)=>{
    User.find((err, users)=>{
        if(err) {
            return res.status(500).send({
                status: 'error',
                message: 'unable to find record',
            })
        };
        return res.status(500).send({
            status: 'success',
            users: users
            
        })
    })
}

exports.addOne= async (req,res)=>{

    const {name,email,password} = req.body
    const user= new User({name,email,password})
    user.save((err, newuser)=>{
        if(err) {
            return res.status(500).send({
                status: 'error',
                message: 'unable to create new record',
            })
        }
        return res.send({
            status:'successfuly created',
            data: newuser
        })
    })
}

exports.getOne= async (req,res)=>{
    const {id}=req.params
   User.findById(id,(err,user)=>{
    if(err){
        return res.status(500).send({
            status: 'error',
            message: 'unable to find record',
        })
    }
    return res.send({
        status:'success',
        data: user
    })
   })

}

exports.updateOne= async (req,res)=>{
    const {id}=req.params
    const {body}=req
    console.log(id,body)
    User.findOneAndUpdate({_id:id},body,(error,updatedata)=>{
        if(error){
            return res.status(500).send({
                status:'error',
                message: 'unable to find record',
            })
           
        }
        return res.send({
                status:'update',
                data: updatedata
        })
    })
}

exports.deleteOne= async (req,res)=>{
    const {id}=req.params
    User.findOneAndDelete(id,(err,removeuser)=>{
        if(err){
            return res.send({
                status: 'error',
                message: 'unable to delete'
            })
        }
        return res.send({
            status: 'User deleted',
            data: removeuser
        })
    })

}