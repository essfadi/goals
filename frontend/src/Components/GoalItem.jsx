import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteGoal} from '../features/goals/goalsSlice'

const GoalItem = ({goal}) => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(deleteGoal(goal._id))
    }
    
  return (
    <div className="goal">
        <div>
            {new Date(goal.createdAt).toLocaleDateString('en-US')}
        </div>
        <h2>
            {goal.text}
        </h2>
        <button className="btn btn-block" onClick={onClick}>Delete Goal</button>
    </div>
  )
}

export default GoalItem