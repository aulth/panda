import Blogs from "../../../models/Blogs";
const usman = async (req, res)=>{
    const {url} = req.query;
    const blog = await Blogs.findOne({url:url});
    if(!blog){
        res.status(404).json({
            succes: false,
            message: 'Blog not found'
        })
    }else{
        res.status(200).json({
            succes: true,
            message: 'Blog found',
            blog: blog
        })
    }
}

export default usman