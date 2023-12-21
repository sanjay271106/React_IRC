import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home2(){
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer 
      position='bottom-right' />
    </div>
  );
}
export default Home2