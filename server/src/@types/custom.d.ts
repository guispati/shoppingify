import { Request } from "express";
import { ItemInterface } from "../models/itemModel";
import { UserInterface } from "../models/userModel";
 
export interface CustomUserReq extends Request {
	user?: UserInterface;
}

export interface CustomReq extends Request {
	requestTime?: string;
}

export interface CustomItemReq extends Request {
	item?: ItemInterface;
}