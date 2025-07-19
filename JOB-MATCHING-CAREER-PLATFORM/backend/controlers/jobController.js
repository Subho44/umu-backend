const Job = require('../models/jobModel');

//create a new job 
exports.createJob = async(req,res)=> {
    try {
        const job = await Job.create(req.body);
        res.status(201).json(job);
    } catch(error){
        res.status(400).json({message:error.message});
    }
};
//get all jobs
exports.getJob = async(req,res)=> {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch(error){
        res.status(400).json({message:error.message});
    }
};
//get single job
exports.getJobbyid = async(req,res)=> {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json(job);
    } catch(error){
        res.status(400).json({message:error.message});
    }
};
//update
exports.updateJob = async(req,res)=> {
    try {
        const job = await Job.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(job);
    } catch(error){
        res.status(400).json({message:error.message});
    }
};
//delete
exports.deleteJob = async(req,res)=> {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.status(200).json({message:'job deleted'});
    } catch(error){
        res.status(400).json({message:error.message});
    }
};
