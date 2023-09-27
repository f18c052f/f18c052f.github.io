import { SimpleGrid, Box, Text } from '@chakra-ui/react';
import React from 'react';
import Experiences from './Experiences';
import Education from './Education';
import Achievement from './Achievements';
import Certifications from './Certifications';
import Programming from './Programming';
import Fields from './Fileds';
import Hobbies from './Hobbies';


const Contents: React.FC = () => {
    return (
        <SimpleGrid minChildWidth='400px' spacing='10px' padding="20px">
            <Box boxShadow="md" borderRadius='md' height='400px' p='6'>
                <Text fontSize='4xl'>
                    Work Experience 🧙🏼‍♂️
                </Text>
                <Box height='15px' />
                <Experiences />              
            </Box>
            <Box boxShadow="md" borderRadius='md' height='400px' p='6'>
                <Text fontSize='4xl'>
                        Education  📖
                </Text>
                <Box height='15px' />
                <Education />
            </Box>
            <Box boxShadow="md" borderRadius='md' height='720px' p='6'>
                <Text fontSize='4xl'>
                        Archievements 💎
                </Text>
                <Box height='15px' />
                <Achievement />
            </Box>
            <Box boxShadow="md" borderRadius='md' height='650px' p='6'>
                <Text fontSize='4xl'>
                        Certifications 📑
                </Text>
                <Box height='15px' />
                <Certifications />
            </Box>
            <Box boxShadow="md" borderRadius='md' height='250px' p='6'>
                <Text fontSize='4xl'>
                        Programming Skills 💻
                </Text>
                <Box height='15px' />
                <Programming />
            </Box>
            <Box boxShadow="md" borderRadius='md' height='500px' p='6'>
                <Text fontSize='4xl'>
                        Fields of interest 🔍
                </Text>
                <Box height='15px' />
                <Fields />
            </Box>
            <Box boxShadow="md" borderRadius='md' height='900px' p='6'>
                <Text fontSize='4xl'>
                        Hobbies 🏸
                </Text>
                <Box height='15px' />
                <Hobbies />
            </Box>
        </SimpleGrid>
    );
};

export default Contents;