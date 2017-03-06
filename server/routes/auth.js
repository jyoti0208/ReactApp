import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';

let router = express.Router();
router.post('/', (req, res) => {
  const { identifier, password } = req.data;
  User.query({
    where: { username: identifier },
    orWhere: { email: identifier}
  }).fetch().then(user => {
    if(user) {
      if(bcrypt.compareSync(password, user.get('password_digest'))){

      }
      else
        res.status(401).json({ errors: { form: 'Invalid Credential' } });

    }else
      res.status(401).json({ errors: { form: 'Invalid Credential' } });

  })


});
export default router;