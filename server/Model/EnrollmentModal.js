import mongoose from 'mongoose';
const EnrollmentSchema=new mongoose.Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
        required:true,


    }

})


const EnrollmentModel = mongoose.model("Enrollment", EnrollmentSchema);
export default EnrollmentModel;