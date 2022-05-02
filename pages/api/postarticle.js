import connectTodb from '../../middleware/mongodb';
import Post from '../../models/Blogs';
connectTodb()
const postArticle = async (req, res)=>{
    if(req.method !== 'POST'){
        res.status(405).json({
            success: false,
            message: 'Method not allowed'
        })
    }else{
        const {title, author, url, image, content, description} = typeof(req.body)=== 'object' ? req.body : JSON.parse(req.body);
        console.log(typeof(req.body))
        if(!title || !author || !url || !image || !content || !description){
            res.status(400).json({
                success: false,
                message: 'Please fill all the fields'
            })
        }else{
            const newPost = new Post({
                title: title,
                author: author,
                url: url,
                date: new Date(),
                image: image,
                content: content,
                description:description
            })
            newPost.save().then((post)=>{
                res.status(201).json({
                    success: true,
                    message: 'Post created successfully',
                    post: post
                })
            })
        }
    }
}
export default postArticle;