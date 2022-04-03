import React from 'react'
import { Heading } from "@chakra-ui/react"
import { Button } from '@chakra-ui/react'
import {useToast} from "@chakra-ui/react"

import {motion} from "framer-motion"

import classes from "./Future.module.css"

function Future() {
  //framer motion w. chakra ui
  const MotionButton = motion(Button)

  //using toast
  const toast = useToast()

  const ToastTrigger =() => {
     toast ( {
       title:"Sorry, the future is currently not available",
       status:"error",
       duration:2000,
       isClosable: true,
     })
  }
  

  return (
    <div >
      <Heading  fontSize="4xl" bgGradient='linear(to-r, red.500, orange.300, yellow.500)' bgClip="text"
      display="flex" alignText="center" justifyContent="center" margin="20px">
          Welcome to the Future page

     </Heading>


      <div className={classes.main}>
     <MotionButton  variant="solid" size="lg" colorScheme={"pink"}
     marginTop="40px" whileHover={{scale:1.5}} onClick={ToastTrigger}
     >
       Get  the future
     </MotionButton>

     </div>

     </div>

     
  )
}

export default Future