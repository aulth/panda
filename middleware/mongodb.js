import mongoose from 'mongoose';
const mongodburl =process.env.mongodburl
const connection = {};

const connectToDb = async ()=>{
    if(connection.isConnected){
        console.log('Using existing connection');
        return connection.isConnected;
    }
    const db = await mongoose.connect(mongodburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    connection.isConnected = db.connections[0].readyState;
}
export default connectToDb;