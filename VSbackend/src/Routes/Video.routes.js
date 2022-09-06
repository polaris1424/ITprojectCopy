import {response, Router } from 'express';
import { Authenticate } from '../Middlewares/Authenticate.middleware';
import {videoUpload} from '../Middlewares/Video.middleware';


const router = Router();
//after upload work, next step is save to mongo db
router.post('/api/video', Authenticate, videoUpload.single('video'), (request, response)=>{
    return response.status(200).json({msg:'Authenticated'})

})

export default router;