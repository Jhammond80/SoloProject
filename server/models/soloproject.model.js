import { model, Schema } from 'mongoose';

const JournalEntrySchema = new Schema ({
    title: {
        type: String,
        required: [true, "Input is required!"],
        minlength: [2, "Input requires 2 or more characters!"],
        maxlength: [25, "Input holds a max of 25 characters!"]
    },
    thought:{
        type:String,
        required: [true, "Input is required!"],
        minlength: [2, "Input requires 2 or more characters!"],
        maxlength: [500, "Input holds a max of 25 characters!"]
    },
    date:{
        type:Date,
        default: Date.now
    }
})

const GoalSchema = new Schema({
    goal:{
        type:String,
        required: [true, "Input is required!"],
        minlength: [2, "Input requires 2 or more characters!"],
        maxlength: [25, "Input holds a max of 25 characters!"]
    },
    description:{
        type:String,
        required: [true, "Input is required!"],
        minlength: [2, "Input requires 2 or more characters!"],
        maxlength: [150, "Input holds a max of 25 characters!"]
    },
    date:{
        type:Date,
        default: Date.now
    }
    
})

// const RegistrationSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         minlength: [2, "Username must be at least 2 characters long!"],
//         maxlength: [25, "Username can be at most 25 characters long!"]
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         validate: {
//             validator: (value) => {
//                 // Regular expression for validating email format
//                 return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//             },
//             message: props => `${props.value} is not a valid email address!`
//         }
//     },
//     pin: {
//         type: Number,
//         required: true,
//         minlength: [4, "PIN must be exactly 4 digits long!"],
//         maxlength: [4, "PIN must be exactly 4 digits long!"]
//     }
// });

// const LoginSchema = new Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         validate: {
//             validator: (value) => {
//                 // Regular expression for validating email format
//                 return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//             },
//             message: props => `${props.value} is not a valid email address!`
//         }
//     },
//     pin: {
//         type: Number,
//         required: true,
//         minlength: 4,
//         maxlength: 4
//     }
// });

// const Registration = model('Registration', RegistrationSchema);
// const Login = model('Login', LoginSchema);
const Journal = model('Journal', JournalEntrySchema);
const Goal = model('Goal', GoalSchema);

export default { Journal, Goal};
