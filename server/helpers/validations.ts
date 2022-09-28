import { Response } from 'express';

const processError = (res: Response, error: any) => {
    if(error!.kind === 'ObjectId') {
        return res.status(404).json({ message: 'ObjectId with invalid format' });
    }
    console.error(error.message);
    return res.status(500).json({ message: 'Server error' }); 
}

export {
    processError,
}