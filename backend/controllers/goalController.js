const asyncHandler = require('express-async-handler');

// @desc    get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'get goals'});
})
// @desc    get Goals
// @route   POST /api/goals
// @access  Private
const setGoals = asyncHandler( async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('text is required');
    }
    res.status(200).json({message: 'set goals'});
})
// @desc    get Goals
// @route   PUT /api/goals
// @access  Private
const putGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`});
})
// @desc    get Goals
// @route   DELETE /api/goals
// @access  Private
const deleteGoals =asyncHandler( async (req, res) => {
    res.status(200).json({message: `delete goals ${req.params.id}` });
})


module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
}