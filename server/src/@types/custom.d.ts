import { Request } from "express";
import { UserInterface } from "../models/userModel";
 
export interface CustomUserReq extends Request {
	user?: UserInterface;
}

export interface CustomReq extends Request {
	requestTime?: string;
}