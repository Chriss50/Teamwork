import express from 'express';
import createUser from '../controllers/signupController';

const router = express.Router();

router.post('/auth/signup', createUser);

module.exports = router;

