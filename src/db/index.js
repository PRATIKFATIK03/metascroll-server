import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const mongooseInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}/metascroll`
        );
        console.log(
            `\n MongoDB connected! ${mongooseInstance.connection.host}`
        );
    } catch (error) {
        console.error(`mongodb connection error ${error}`);
    }
};

export default connectDb;
