import React, { useEffect, useState} from 'react'
import _token from './Token';

const arry = []

export default function Themepro (props){
  const [auth, setAuth]= useState({})
  arry.push({...auth})
useEffect(()=>{
            const location = window.location.origin
    _token.get(`https://www.ishtari.com/motor/v1/index.php?route=design/headermenu/header`)
    .then(function (response) {
        setAuth({info:{...response.data[0]["sub-categories"]}})
        
            console.log(response.data[0]["sub-categories"])
      })
        
    .catch(function (error) {
        console.log(error);
      });
},[]);

return(
  <Themecontext.Provider value={auth}>
      {props.children}
  </Themecontext.Provider>
)
}

export const Themecontext = React.createContext({
  info: arry
});
