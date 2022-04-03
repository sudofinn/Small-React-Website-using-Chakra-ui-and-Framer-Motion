import axios from "axios"
import {useState} from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



import classes from "./Home.module.css"


import { Heading, Text, IconButton , Button} from "@chakra-ui/react"
import {useColorMode} from "@chakra-ui/react"

import {motion} from "framer-motion"



import {FaSun, FaMoon, FaBluetoothB } from "react-icons/fa"

import wavingEmoji from "./../icons/Kirby.svg"



// make 2 api request for user primary page

const userUrl =  "https://jsonplaceholder.typicode.com/users/1"


const weatherUrl = "Api from air now"




function HomePage() {

  // make user api request
  const [user, setUser] = useState(0)


  useEffect(()=> {
    axios.get(userUrl).then((response) => {
      setUser(response.data)
    })
  }, [])

 

  // make weather api request
  const [weather, setWeather] = useState(0)

  useEffect(()=> {
    axios.get(weatherUrl).then((response) => {
      setWeather(response.data)
    })
  }, [])

   // dark mode enabling
   const {colorMode, toggleColorMode} = useColorMode()

   const navigate = useNavigate()


  //framer motion w. chakra ui
  const MotionButton = motion(Button)
  
  
  //checking logic

  if(!user) return null

  if(!weather) return null

 


  //Sentences

  const userGreetingOne = `Hello ${user.name}, good to see you !`

  const userGreetingTwo = `The weather in ${user.address.city} is currently ${weather[1].Category.Name}`

  const generalStuff = `What is up Leanne, today is the ${weather[0].DateObserved} and it is ${weather[0].HourObserved} AM . 
   Click on navbar to go to other sites and get inspired. We really like to show our abilities but now we would like
   to get a honest and good Feedback.`



  return (

    <div>

      <div className={classes.nav}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />


     </div>



      <Heading className={classes.heading} fontSize="4xl" bgGradient='linear(to-r, pink.500, pink.300, blue.500)' bgClip="text"
      display="flex" alignText="center" justifyContent="center" margin="20px"
       >{userGreetingOne}  
       </Heading>

      <Text className={classes.primarytext} fontSize="2xl" display="flex" alignText="center" justifyContent="center" margin="40px"
      >{userGreetingTwo}
      </Text> 
        
      <div className={classes.maintext}>
      <Text font-size="1xl" display="flex" alignText="center"
       marginLeft="30px" marginRight="30px" 
      w={[400, 1100, 900]}>
        {generalStuff}</Text>
      
      </div>

        <div className={classes.emoji}>
        <img src={wavingEmoji} alt="Waving Emoji" 
        ></img>

        </div>
        
        
        <div className={classes.badgedowndiv}>
          <MotionButton rightIcon={< FaBluetoothB/>} colorScheme='teal' variant='solid'   size="lg"
          display="flex" alignItems="center" justifyContent="center"
          whileHover= {{scale:1.2}}
          onClick={() => {
            navigate("/future")
          }} 
          >
          Visit the future
          </MotionButton>

        </div>

      
    </div> 


    
  )



}

export default HomePage