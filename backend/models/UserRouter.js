import express from 'express';
import ProductData from '../data/ProductData.js';
import expressAsyncHandler from 'express-async-handler';
import User from './UserModel.js';
const UserRouter = express.Router();

UserRouter.get('/seed',

    expressAsyncHandler(async (req, res) => {

        const createdUsers = await User.insertMany(ProductData.users);
        res.send({ createdUsers });

    }));

export default UserRouter;