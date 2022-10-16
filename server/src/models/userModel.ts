import crypto from 'crypto';
import mongoose, { Document } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

export interface UserInterface extends Document {
	name: string;
	email: string;
	photo: string;
	role: string;
	password: string | undefined;
	passwordConfirm: string | undefined;
	passwordChangedAt: Date;

	correctPassword(candidatePassword: string, userPassword: string): boolean;
	changedPasswordAfter(JWTTimestamp: Date): boolean;
	createPasswordResetToken(): string;
}

const userSchema = new mongoose.Schema<UserInterface>({
    name: {
        type: String,
        required: [true, 'Please tell us your name!'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your email!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email!'],
    },
    photo: {
        type: String,
        default: 'default.jpg',
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
		select: false,
    },
    passwordChangedAt: Date,
});

userSchema.pre("save", async function(next) {
    if (!this.isModified('password')) return next();

    if (this.password && this.passwordConfirm) {
       const isSame = this.password === this.passwordConfirm;
       if(!isSame){
            throw("Password and Confirm password did not match")
        }

		this.password = await bcrypt.hash(this.password, 12);
		this.passwordConfirm = undefined;
    }
    next();
});

userSchema.pre('save', function(next) {
    if (!this.isModified('password') || this.isNew) return next();

    this.passwordChangedAt = new Date(Date.now() - 1000);
    next();
});

userSchema.methods.correctPassword = async function(candidatePassword: string, userPassword: string) {
    return await bcrypt.compare(candidatePassword, userPassword);
}

userSchema.methods.changedPasswordAfter = function(JWTTimestamp: number) {
    if (this.passwordChangedAt) {
        const changedTimestamp = this.passwordChangedAt.getTime() / 1000;
        return JWTTimestamp < changedTimestamp;
    }

    return false;
}

userSchema.methods.createPasswordResetToken = function() {
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 min

    return resetToken;
}

const User = mongoose.model<UserInterface>('User', userSchema);

export default User;