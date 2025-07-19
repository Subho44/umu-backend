const express = require('express');
const router = express.Router();
const {
    createJob,
    getJob,
    getJobbyid,
    updateJob,
    deleteJob
} = require('../controlers/jobController');

router.post('/',createJob);
router.get('/',getJob);
router.get('/:id',getJobbyid);
router.put('/:id',updateJob);
router.delete('/:id',deleteJob);

module.exports = router;