import { Request } from "express";

export const handleFormData:any =  (req:Request, res:Response):void => {
    const formData = req.body;
    console.log('Received Form Data:', formData);
    //@ts-ignore
    res.json({ success: true, message: 'Form data received successfully' });
}