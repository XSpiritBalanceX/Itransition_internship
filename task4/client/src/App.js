import React, {useContext, useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import PageLinks from './pages/PageLinks';
import PageRouter from './pages/PageRouter';
import {observer} from 'mobx-react-lite';
import {Context} from './index';
import {check} from './http/userAPI';
import { Spinner } from 'react-bootstrap';

const App=observer(()=> {
  const {user}=useContext(Context);
  console.log(user.isAuth + '    isAuth')
  const [loading, setLoading]=useState(true);

  useEffect(()=>{
        check().then(data=>{
           user.setIsAuth(true);
        }).finally(()=>setLoading(false))
    }, [])

  if(loading){
    return <Spinner animation='grow'/>
  }

  return (
      <BrowserRouter>
    <div>
      <PageLinks />
      <PageRouter />
    </div>
    </BrowserRouter>
    
  );
})

export default App;
