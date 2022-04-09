import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Spinner from '../Components/Spinner';

function Dashboard() {
  const dispatch = useDispatch();
  const {goals} = useSelector(state => state.goals);
  console.log(goals);

  const navigate = useNavigate();
  const {user} = useSelector(state => state.auth);


  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  if (!goals) 
    return <Spinner />;
  return (
    <>
    <section className="heading">
      <h1>Welcome {user && user.name}</h1>
      <p>Goals Dashboard:</p>
    </section>
    </>
  )
}

export default Dashboard