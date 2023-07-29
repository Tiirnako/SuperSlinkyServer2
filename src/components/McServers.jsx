import React from 'react' 
import {Helmet} from "react-helmet"
import "/src/index.css"



function McServers() {
    
  const mcSt = (<div className="mc-status" data-mc-server="mc.superslinkyserver.com"></div>)
  
  return (
    

  
    <div>
        <div className='allContent  text-white text-lg font-bold pagecontent'>
          <h2 className='underline'>Server Status</h2>
        </div>
        <div className='pageContents'>

          <div className="mcAll border-b-2 border-t-2 py-6">

            <img className="mcLogo hover:bg-[#1a1a1a83] transition-all duration-200 ease-in-out" src="https://raw.githubusercontent.com/Tiirnako/SuperSlinkyServer/main/images/logo.png"></img>
            {mcSt}
          </div>
        </div>
      </div>


  )
}

export default McServers