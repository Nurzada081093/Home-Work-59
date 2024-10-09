import './Tasks.css';
import FormElement from '../../Components/FormElement/FormElement.tsx';
import Movies from '../../Components/Movies/Movies.tsx';

const Tasks = () => {
  return (
    <div className="container">
      <FormElement/>
      <div className="movies-block">
        <Movies/>
      </div>
    </div>
  );
};

export default Tasks;