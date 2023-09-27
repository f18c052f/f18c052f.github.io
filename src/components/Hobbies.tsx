import React from 'react';
import ew1 from '../assets/hobbies/Shutin_machine.gif';
import ew2 from '../assets/hobbies/Fairy_bottle.gif';
import sw1 from '../assets/hobbies/WinkGame.gif';
import sw2 from '../assets/hobbies/Test_hand_gesture_recognition.gif';
import diy from '../assets/hobbies/diy.png';
import photo from '../assets/hobbies/photoedit.png';
import tea from '../assets/hobbies/tea.jpg';
import { SimpleGrid, Image, Text, AspectRatio, Card, CardBody, Center } from '@chakra-ui/react';


export const manuf = [
    ew1,
    ew2,
    sw1,
    sw2,
    diy
]

const Hobbies: React.FC = () => {
    return (
        <SimpleGrid spacing='15px' minChildWidth='360px'>
        <Card >
            <CardBody>
                <SimpleGrid spacing='5px' minChildWidth='64px'>
                {
                    manuf.map((item) => {
                        return (
                                
                                <AspectRatio maxW='300px' ratio={2/ 3}>
                                <Image src={item} />
                                </AspectRatio>                    
                        );
                    })
                }
                </SimpleGrid>
            </CardBody>
            <Center>
                <Text >ものづくり🔨</Text>
            </Center>
        </Card>
        <Card size='sm'>  
            <CardBody>
                <Center>
                    <Image src={photo} />
                </Center>
            </CardBody>
            <Center>
                <Text >写真📸</Text>
            </Center>
        </Card>
        <Card size='sm'>  
            <CardBody>
                <Center>
                    <Image src={tea} />
                </Center>
            </CardBody>
            <Center>
                <Text >茶道🍵</Text>
            </Center>
        </Card>
        </SimpleGrid>
    );
}

export default Hobbies;