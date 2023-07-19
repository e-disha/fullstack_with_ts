import mongoose, { Document, Model } from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator'

export interface UserDocument extends Document {
    email: string;
    password: string;
}

export interface UserModel extends Model<UserDocument> {
    signup(email: string, password: string): Promise<UserDocument>;
    signin(email: string, password: string): Promise<UserDocument>;
}

const userSchema = new mongoose.Schema<UserDocument>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });


//signup method
userSchema.statics.signup = async function (email, password) {
    //validate email and password
    if(!email||!password){
        throw Error("All fields must be filled")
    }
    if(!validator.isEmail(email)){
        throw Error("Please fill in with a valid email")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Please choose a stronger password")
    }

    //encryption, salting and hashing
    const exists = await this.findOne({ email });

    if (exists) {  
        throw new Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash });
    return user;
};

//signin method
userSchema.statics.signin = async function (email, password){
    //validate email and password
    if(!email||!password){
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({ email });

    if (!user) {  
        throw new Error('Incorrect email');
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user
}


const User: UserModel = mongoose.model<UserDocument, UserModel>('User', userSchema);
export default User;
