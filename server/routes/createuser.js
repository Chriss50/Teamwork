import express from 'express';
import createUser from '../controllers/signupController';
import login from '../controllers/loginController';

const router = express.Router();

router.post('/auth/signup', createUser);
router.post('/auth/signin', login);

module.exports = router;

