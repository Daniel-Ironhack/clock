import React from 'react';
import Relogio from './Relogio';

class AllRelogio extends React.Component {

  
    render() {

   return(
   <>
     <Relogio name={"New York"} country={"America/New_York"}/>
     <Relogio  name={"London"}  country={"Europe/London"}/>
     <Relogio  name={"Asia/Jerusalem"}  country={"Asia/Jerusalem"}/>
   </>
   )
  }

}

  export default AllRelogio