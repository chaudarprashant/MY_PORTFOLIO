const sendEmailController = (req,res)=>{
     try{
        return res.status(200).send({
            success:true,
            message:'Your message send susscessfully',
            
        })
     }catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'send Email API Error',
            error
        })
     }

};

module.exports = {sendEmailController};
