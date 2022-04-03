import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Heading, Button } from "@chakra-ui/react"
import {FaApplePay } from "react-icons/fa"

import {motion} from "framer-motion"

import classes from "./Error.module.css"

function Error () {
  
  const navigate = useNavigate()

  //framer motion w. chakra ui
  const MotionButton = motion(Button)

  return (
    <div className={classes.main}>
      <Heading  fontSize="4xl" bgGradient='linear(to-r, green.500, green.300, red.500)' bgClip="text"
      display="flex" alignText="center" justifyContent="center" margin="20px">
          Looks like this page does not exist
      </Heading>


      
        <div className={classes.button}>
          <MotionButton rightIcon={< FaApplePay/>} colorScheme='teal' variant='solid'   size="lg"
          
          whileHover={{scale:1.3}}
          onClick={() => {
            navigate("/")
          }} 
          >
            Go to our homepage 
          </MotionButton>
          </div>
    </div>
  )
}

export default Error