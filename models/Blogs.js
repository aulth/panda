import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    date:{
        type: String
    },
    author:{
        type:String
    },
    url:{
        type:String
    },
    image:{
        type:String
    },
    content:{
        type:String,
    },
    description:{
        type:String
    }
})
// mongoose.connection.deleteModel("Blogs");
export default (mongoose.models && mongoose.models.Blogs
    ? mongoose.models.Blogs
    : mongoose.model('Blogs', BlogSchema));
// export default mongoose.model("Blogs", BlogSchema);
