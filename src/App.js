
import {Flex,Stack,Heading,Box,Text,ListItem,List} from '@chakra-ui/layout';
import { Button, Img,Image } from '@chakra-ui/react';
import { useState } from 'react';
const App =()=>{
  const [gameStarted,setgameStarted]=useState(false);
  const [selectNumber,setselectedNumber]=useState();
  const [dice,setdice]=useState(1);
  const [Error,setError]=useState(null);
  const [score,setscore]=useState(0);
  

  const numbers=[1,2,3,4,5,6];


  const  startgame =()=>{
    setgameStarted(true);
  };
 

  const onNumberclicked = (value)=>{
    setselectedNumber(value);
    setError(null);


  };

  const generated =()=>{
    if(selectNumber){
      const generaRan=Math.ceil(Math.random() * 6);
      setdice(generaRan);

      if(selectNumber===generaRan){
        setscore((prev)=>prev+generaRan);
      }else{
        setscore((prev)=>prev-2);
      }

    }else{
      setError("Please select a number to roll");
    }
    

  };


  return(
  <>
   {gameStarted ? (
   <>
   <Stack justify="center" align="center" maxW="1200px" mx="auto" h="100vh">
    <Heading as="h1" fontSize="6xl" mb="8" color= {Error ?"red" :"black"}>
    {Error ?Error :"select number"}
    </Heading>
    <Flex padding="16">
    {numbers.map((value)=>(
      <Flex align="center" justify="center"  
      fontSize="2xl" h="50px" w="50px" 
      bg={selectNumber === value ? "green" :"black"} color="white" key={value} mr={4} borderRadius="md" onClick={()=>onNumberclicked(value) }>
      {value}
      </Flex>
    ))}
    </Flex>
    <Box h="150px" width="150px" onClick={generated }>
    <Image src={`/dice/dice${dice}.png`} />
    </Box>
    <Text as="p" fontSize="xl">Click on dice to roll</Text>
    <Text  color={score > 0 ? "blue" :"red"}  fontSize="8xl" fontWeight="bold">{score}</Text>
    <Text fontSize="6xl" fontWeight="bold">Total score</Text>
    <Button  onClick={()=>setscore(0)}>Reset Score</Button>
    

   </Stack>
   <Stack maxW="800px" mx="auto">
    <Heading as="h2">Games Rules</Heading>
    <List>
      <ListItem>select Number of any</ListItem>
      <ListItem>click on dice images to roll it </ListItem>
      <ListItem>select number is equal to obtained  dice result then you will  get same point</ListItem>
      <ListItem>select number is equal to dice result to same point</ListItem>
    </List>
   </Stack>
   </>
   ):
    <Flex justify="Center" align="center">
    <Img width="40%"  mt="10px" src='/dicc.png'/>
    <Stack>
    <Heading fontSize="7xl" as='h1' mb="6px">The Dice Game</Heading>
    <Heading as='h4' padding="10px">(create by Abhi..)</Heading>
    <Button alignSelf="flex-end" bg="black" color="white" mb="10px"
    _hover={{bg:'grey'}} onClick={startgame}>Start game</Button>

    </Stack>
   </Flex>
   }
  </>
  );


  
}
export default App;