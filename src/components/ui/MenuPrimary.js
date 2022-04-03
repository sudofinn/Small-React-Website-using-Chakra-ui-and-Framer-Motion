import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react'


import {motion} from "framer-motion"


import {FaBattleNet } from "react-icons/fa"

import {Link} from "react-router-dom"






  function MenuPrimary () {
    //framer motion w. chakra ui
    const MotionMenuButton = motion(MenuButton)
    const MotionMenuItem = motion(MenuItem)
    

    return (
  
    <Menu closeOnSelect={false} >

      <MotionMenuButton as={Button} rightIcon={< FaBattleNet/> }
       marginTop="25px" marginLeft="15px"
       whileHover= {{scale:1.1}}
       >
        Actions
      </MotionMenuButton>


      <MenuList >
        
        <MotionMenuItem
        whileHover={{scale:0.97}} 
        >
        <Link to="/"> Home page</Link>
        </MotionMenuItem>
      
        <MotionMenuItem
        whileHover={{scale:0.97}} 
        >
        <Link to="/aboutus"> About us page</Link> 
        </MotionMenuItem>

        
      

      </MenuList>

    </Menu>
    


    )
  }


export default MenuPrimary

