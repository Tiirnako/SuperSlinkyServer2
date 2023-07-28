import React from 'react' 
import {Helmet} from "react-helmet";
import "/src/index.css"

function McServers() {

    
  return (

    <div>
    <div>
    
      <Helmet>
      <script type="text/javascript" src="src/components/mcstatus.js"></script>
      <style rel="stylesheet" type="text/css" href="src/index.css"></style>
      </Helmet>

    </div>
    
   
    <div className='allContent  text-white text-lg font-bold pagecontent'>
        <h2 className='underline'>Server Status</h2>
        </div>
        <div className='pageContents'>

        <div className="mcAll border-b-2 border-t-2 py-6">

          <img className="mcLogo" src="/src/assets/logo.png"></img>

          <div className="mc-status" data-mc-server="mc.superslinkyserver.com"></div>
        </div>
      </div>
      </div>


  )
}

export default McServers