import express from 'express';
import validateInput from '../shared/validation/validation';

let router = express.Router();



router.post('/', (req, res) => {
  setTimeout( () =>
  {
    console.log(req.body);
    const {errors, isValid} = validateInput(req.body);

    if (isValid) {
      res.json({ success: true });

    }else{
      res.status(400).json(errors);
    }
  },1000);
});


export default router
