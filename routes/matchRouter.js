import express from express

const matchRouter = express.Router()

import {
    getAllMatches,
    createMatch,
    GetMatchById
} from "./models/matchModels.js"

matchRouter.get('/', async function (req, res
) {
    const allMatches = await getAllMatches()
    res.status(200).json(allMatches)
    res.json(matches)
})

// get match by id
matchRouter.get('/:id', async function (req, res) {
    const match = await GetMatchById(req.params.id)
    res.status(200).json(match)
    res.json({success: true, payload: match})
})

//create a match
matchRouter.post('/', async function (req, res) {
    const newMatch = req.body
    const result = await createMatch(newMatch)
    res.status(201).json(newMatch)
})

export default matchRouter