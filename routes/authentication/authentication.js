/**
 * Importing node modules
 */
import express from 'express';
/**
 * Importing custom modules
 */
import User from '../../models/User';

const router = express.Router();

router.post("/", (req, res) => {
  const { credentials } = req.body;
  User.findOne({ email: credentials.email }).then((user) => {
    if (user && user.isValidPassword(credentials.password)) {
      res.status(200).json({ user: user.toAuthJSON() });
    } else {
      console.log(`User not found.`);
      res.status(400).json({ errors: { global: "Invalid credentials" } });
    }
  });

});

export default router;
