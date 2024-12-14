import { Request, Response } from "express";
import { customerService } from "../services/customer.service";
import { StoreData } from "../types";

const setCustomerData = async (req: Request, res: Response): Promise<any> => {
    const customerData : StoreData = req.body.data;
    const status = await customerService(customerData) 
    if(status){
        return res.send({
            success: true,
            message: "added customer data"
        })
    }
    return res.send({
        success: false,
        message: "Failed to add data"
    })
};

export { setCustomerData };
