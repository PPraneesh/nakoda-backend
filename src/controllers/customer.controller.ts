import { Request, Response } from "express";
import { appendOrUpdateRow } from "../services/sheets.service";
import { StoreData } from "../types";

const setCustomerData = async (req: Request, res: Response): Promise<void> => {
    try {
        const customerData: StoreData = req.body.data;
        
        if (!customerData.customerId) {
            res.status(400).json({ success: false, error: 'Customer ID is required' });
            return;
        }

        customerData.contactAsked = customerData.contactAsked === true;

        const values = [[
            customerData.customerId,
            customerData?.email || '',
            customerData?.name || '',
            customerData?.phno || '',
            JSON.stringify(customerData.cartIds),
            JSON.stringify(customerData.wishlistIds),
            JSON.stringify(customerData.visitedProducts),
            customerData.engagement["timeOnSite"],
            customerData.engagement["pageViews"],
            customerData.engagement["clickThroughRate"],
            customerData.location['x'],
            customerData.location['y'],
            customerData.locale,
            customerData.lastVisited,
            customerData.referralSource,
            customerData.contactAsked
        ]];

        const response = await appendOrUpdateRow(values);
        res.status(200).json({ success: true, data: response });
    } catch (error) {
        console.error('Controller error:', error);
        res.status(500).json({ success: false, error: 'Failed to store customer data' });
    }
};

export { setCustomerData };
