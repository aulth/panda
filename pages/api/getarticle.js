import connectToDb from "../../middleware/mongodb";
import Post from "../../models/Blogs";
connectToDb()
const getArticle = async (req, res)=>{
    if(req.method !== 'GET'){
        res.status(405).json({
            success: false,
            message: 'Method not allowed'
        })
    }else{
        let posts = await Post.find({});
        res.status(200).json({
            success: true,
            message: 'Posts fetched successfully',
            posts: posts
        })
    }
}

export default getArticle;