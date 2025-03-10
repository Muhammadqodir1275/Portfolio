import React, { useEffect } from 'react'
import Page from './Page'
import Portofolio from './Portofolio'
import Contact from './contact'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setError, setLoading } from './store/authSlice'
const App = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.auth);

  console.log(isLoading, isError);

  useEffect(() => {
    dispatch(setLoading(true));

    setTimeout(() => {
      dispatch(setLoading(false));
      dispatch(setError(false)); 
    }, 2000);
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="line">
        <div className="loading"></div>
      </div>
    );
  }

  if (isError) {
    if (isError) {
      return <div className="error">❌ Xatolik yuz berdi! Qayta urining...</div>;
    }
    
  }
  return (
   <>
   <Routes>
    <Route index element={<Page />} />
    <Route path='/portofolio' element={<Portofolio />} />
    <Route path="/contact" element={<Contact />} />
   </Routes>
   </> 

  )
}

export default App