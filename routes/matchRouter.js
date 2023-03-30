import express from 'express';
import { getAllCandidates, getAllMatchingCandidates, GetCandidateById } from "../models/matchModels.js";

const matchRouter = express.Router()
matchRouter.get('/', async function (req, res) {
    const allCandidates = await getAllCandidates()
    res.status(200).json(allCandidates)
})


// matchRouter.get('/', async function (req, res) {
//     const allCandidates = await getAllMatchingCandidates()
//     res.status(200).json(allCandidates)
// })

export default matchRouter;


// get match by id
matchRouter.get('/:id', async function (req, res) {
    const match = await GetCandidateById(req.params.id)
    res.status(200).json(match)
    res.json({success: true, payload: match})
})

// //create a match
// matchRouter.post('/', async function (req, res) {
//     const newCandidate = req.body
//     const result = await createCandidate(newCandidate)
//     res.status(200).json(result)
// })
