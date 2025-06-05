import express from 'express';
import AdminController from '../Controller/AdminController.js';
import passport from 'passport';
import RoleAccess from '../Middleware/RoleMiddleware.js';

const adminRouter = express.Router();

adminRouter.route('/ViewJobApplications')
  .get(passport.authenticate('jwt', { session: false }), RoleAccess('Admin'), AdminController.ViewJobApplications);

adminRouter.route('/delete-a-job/:id')
  .delete(passport.authenticate('jwt', { session: false }), RoleAccess('Admin'), AdminController.deletejob);

adminRouter.route('/AppliedInstructors')
  .get(passport.authenticate('jwt', { session: false }), RoleAccess('Admin'), AdminController.AppliedInstructors);

adminRouter.route('/getallJobs')
  .get(passport.authenticate('jwt', { session: false }), RoleAccess('Admin'), AdminController.alljobs);

adminRouter.route('/makeInstructor/:email')
  .patch(passport.authenticate('jwt', { session: false }), RoleAccess('Admin'), AdminController.makeInstructor);

adminRouter.route('/removeInstructor/:email')
  .patch(passport.authenticate('jwt', { session: false }), RoleAccess('Admin'), AdminController.removeinstructor);

export default adminRouter;
