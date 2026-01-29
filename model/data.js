import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    title:{type:String},
    price:{type:Number},
    image:{type:String},
    user_id:{type:String}
})
export default mongoose.model.Datas||mongoose.model('Datas',DataSchema)