import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/create-student', UserControllers.createAStudent);

// router.post('/create-faculty', UserControllers.createFaculty);

// router.post('/create-admin', UserControllers.createAdmin);

export const UserRoutes = router;
