import { Request, Response } from "express";
import { db } from "../config/firebase";
import { StoreData } from "../types";

const setCustomerData = async (req: Request, res: Response): Promise<void> => {
    try {
        const customerData: StoreData = req.body.data;
        
        if (!customerData.customerId) {
            res.status(400).json({ success: false, error: 'Customer ID is required' });
            return;
        }

        customerData.contactAsked = customerData.contactAsked === true;
        const values = {
            email: customerData?.email || '',
            name: customerData?.name || '',
            phno: customerData?.phno || '',
            ...customerData
        };
            
        const response = await db.collection("customer_data").doc(values.customerId).set(values);
        res.status(200).json({ success: true, data: response });
    } catch (error) {
        console.error('Controller error:', error);
        res.status(500).json({ success: false, error: 'Failed to store customer data' });
    }
};

export { setCustomerData };
