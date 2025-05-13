import React, { useEffect } from 'react'
import Portofolio from './page/Portofolio'
import Contact from './sozlama/contact'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setError,setLoading } from "./store/authSlice"; 
import NotFound from './home/NotFound'
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
    {/* <Route index element={<Page />} /> */}
    <Route path='/' element={<Portofolio />} />
    <Route path="/contact" element={<Contact />} />
    <Route path='*' element={<NotFound/>}/>
   </Routes>
   </> 

  )
}

export default App