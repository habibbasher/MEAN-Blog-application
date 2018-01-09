/**
 * Importing node modules
 */
import express from 'express';
/**
 * Importing custom modules
 */
import User from '../../models/User';
import parseErrors from '../../utils/parseErrors';


const router = express.Router();

router.post("/", (req, res) => {
  const { email, password, username } = req.body.user;

  const user = new User({ email, username });
  user.setPassword(password);
  user.setConfirmationToken();
  user.save()
  .then(userRecord => {
    res.json({ user: userRecord.toAuthJSON() });
  })
  .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));

});

export default router;
