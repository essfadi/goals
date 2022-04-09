import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addGoal} from '../features/goals/goalsSlice'

const GoalForm = ({user}) => {
    const dispatch = useDispatch();

    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addGoal({text}))
        setText('')
    }
  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Enter Your Goal:</label>
                <input type="text" name="text" id="text" value={text}  onChange={e => {setText(e.target.value)}}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-block">Add Goal</button>
            </div>
        </form>
    </section>
  )
}

export default GoalForm