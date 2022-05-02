import connectToDb from "../../middleware/mongodb";
connectToDb()
import Contact from "../../models/Contact";
const contact = async (req, res)=>{
    if(!req.method==='POST'){
        res.status(405).json({
            success: false,
            message: 'Method not allowed'
        })
    }else{
        const {name, email, message} = typeof(req.body) === 'string' ? JSON.parse(req.body) : req.body;
        if(!name || !email || !message){
            res.status(400).json({
                success: false,
                message: 'Please fill all the fields'
            })
        }else{
            let contact = new Contact({
                name:name,
                email:email,
                message:message
            })
            contact.save().then((data)=>{
                res.status(200).json({
                    success:true,
                    name: name,
                    message:'Message sent successfully'
                })
            })
        }
    }
}
export default contact