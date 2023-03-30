import express from express

const matchRouter = express.Router()

import {
    getAllMatcheingCandiates,
    GetCandidateById,
    createCandidate
} from "./models/matchModels.js"

matchRouter.get('/', async function (req, res
) {
    const allCandidates = await getAllMatcheingCandiates()
    res.status(200).json(allCandidates)
    res.json(allCandidates)
})

// get match by id
matchRouter.get('/:id', async function (req, res) {
    const match = await GetCandidateById(req.params.id)
    res.status(200).json(match)
    res.json({success: true, payload: match})
})

//create a match
matchRouter.post('/', async function (req, res) {
    const newCandidate = req.body
    const result = await createCandidate(newCandidate)
    res.status(200).json(result)
})
export default matchRouter