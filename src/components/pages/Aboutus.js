import { Heading, HStack, IconButton } from "@chakra-ui/react"
import {FcAutomatic,FcCamera,FcChargeBattery,  FcBarChart,  FcAbout, FcCloseUpMode } from "react-icons/fc"

import {motion} from "framer-motion"



function AboutUs()  {
    //framer motion w. chakra ui
    const MotionIconButton = motion(IconButton)

    return (
        <div>

      <Heading  fontSize="4xl" bgGradient='linear(to-r, green.500, green.300, red.500)' bgClip="text"
      display="flex" alignText="center" justifyContent="center" marginTop="-20px">
          Welcome to the about page
      </Heading>
      
      <Heading fontSize="2xl" display="flex" alignText="center" justifyContent="center" margin="30px" > Choose an action </Heading>
      
    
    

       <HStack display="flex" alignText="center" justifyContent="center" margin="50px">
           <MotionIconButton icon={<FcAutomatic />} fontSize="2xl" whileHover={{scale:1.2}} marginRight="4px" />
           <MotionIconButton icon={<FcCamera />}  fontSize="2xl" whileHover={{scale:1.2}} marginLeft="4px" marginRight="4px"/>
           <MotionIconButton icon={<FcChargeBattery fontSize="2xl"whileHover={{scale:1.2}} marginLeft="4px" marginRight="4px" />} />
           <MotionIconButton icon={<FcBarChart />} fontSize="2xl" whileHover={{scale:1.2}} marginLeft="6px" marginRight="4px"/>
           <MotionIconButton icon={<FcAbout />} fontSize="2xl" whileHover={{scale:1.2}}  marginLeft="4px" marginRight="4px"/>
           <MotionIconButton icon={<FcCloseUpMode />} fontSize="2xl" whileHover={{scale:1.2}} marginLeft="4px" marginRight="4px" />
       </HStack>

    

    </div>
    )
}

export default AboutUs