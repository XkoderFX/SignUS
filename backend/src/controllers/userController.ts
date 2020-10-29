import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/User";
import jwt from "jsonwebtoken";

export const postUser = async (req: Request, res: Response) => {
    try {
        const { email, password, name } = req.body;
        console.log(email);

        const user = await User.create({
            email,
            password,
            name,
        });

        const token = jwt.sign({ id: user._id }, "secret");

        res.status(201).send({
            message: "Success",
            token,
        });
    } catch (error) {
        console.log(error);
    }
};

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
        res.status(404).send({
            message: "user not exist!",
        });
    }
    const token = jwt.sign({ id: user?._id }, "secret");

    res.send(200).send({ token });
};
