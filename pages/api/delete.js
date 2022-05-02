import connectToDb from "../../middleware/mongodb";
import Blogs from "../../models/Blogs";
connectToDb()
const remove = async (req, res)=>{
    if(req.method!=='GET'){
        res.status(405).json({
            success: false,
            message: 'Method not allowed'
        })
    }else{
        const {url, key} = req.query;
        console.log(url, key)
        console.log(process.env.key)
        if(!url){
            res.status(400).json({
                success: false,
                message: 'Please provide url'
            })
        }else{
            if(key==process.env.key){
                Blogs.findOneAndDelete({url:url}).then((data)=>{
                    res.status(200).json({
                        success:true,
                        message:'Blog deleted successfully',
                        data:data
                    })
                })
            }else{
                res.status(400).json({
                    success: false,
                    message: 'Invalid key'
                })
            }
        }
    }
}
export default remove