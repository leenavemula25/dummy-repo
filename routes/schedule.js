const express = require('express');
const router = express.Router();
const {
  createSchedule,
  updateSchedule,
  getScheduleByBatch,
} = require('../controllers/scheduleController');
const { auth, checkRole } = require('../middleware/auth');

// All routes require authentication
router.use(auth);

// HR Only Routes
router.post(
  '/create',
  checkRole(['HR']),       // Only HR can create schedule
  createSchedule           // POST /api/schedule/create
);

router.put(
  '/:id',
  checkRole(['HR']),       // Only HR can update schedule
  updateSchedule           // PUT /api/schedule/:id
);

// All authenticated users can view schedules
router.get(
  '/batch/:batchId',
  checkRole(['HR', 'TRAINER', 'Intern']), // anyone logged in with a valid role
  getScheduleByBatch                      // GET /api/schedule/batch/:batchId
);

// router.get(
//   "/trainer/all",
//   checkRole(["TRAINER"]),
//   getSchedulesForTrainer
// );

module.exports = router;
