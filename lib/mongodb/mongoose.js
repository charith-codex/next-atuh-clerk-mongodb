import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
  mongoose.set('strictQuery', true);

  if (initialized) {
    console.log('MongoDb already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'clerk-auth',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDb connected');
    initialized = true;
  } catch (error) {
    console.log('MongoDb connection error', error);
  }
};
