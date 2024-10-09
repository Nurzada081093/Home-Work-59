import Task01 from './Containers/Task-01/Task-01.tsx';
import { useState } from 'react';
import Task02 from './Containers/Task-02/Task-02.tsx';
import './App.css';

const App = () => {
  const [showPostForm, setShowPostForm] = useState<boolean>(true);

  const togglePostForm = () => setShowPostForm((prev) => !prev);

  return (
    <>
      <button className="custom-btn btn-7" type="button" onClick={togglePostForm}><span>Change task</span></button>
      {
        showPostForm ?
          <Task01/> : <Task02/>
      }
    </>
  );
};

export default App;
