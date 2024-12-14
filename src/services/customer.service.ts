import { db } from "../config/firebase";

import { StoreData } from "../types";

const customerService = async (data:StoreData) =>{
    try {
        const customerData: StoreData = data;
        
        if (!customerData.customerId) {
            return false
        }

        customerData.contactAsked = customerData.contactAsked === true;
        const values = {
            email: customerData?.email || '',
            name: customerData?.name || '',
            phno: customerData?.phone || '',
            ...customerData
        };
            
        const response = await db.collection("customer_data").doc(values.customerId).set(values);
        console.info("response ",response);
        return true;
    }catch(error){
        console.error(error);
        return false;
    }
}

export {customerService}