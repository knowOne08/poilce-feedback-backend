import express from 'express';
import { handleFormData } from '../middlewares/handleFormData';

const router = express.Router()

//get
router.get('/test', (req, res) => {
    res.send("Test Sucessfull")
});


//post
router.post('/send_form_data', handleFormData)
export default router;