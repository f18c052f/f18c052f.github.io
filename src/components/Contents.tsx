import { SimpleGrid, Box, Text } from '@chakra-ui/react';
import React from 'react';
import Experiences from './Experiences';
import Education from './Education';
import Achievement from './Achievements';


const Contents: React.FC = () => {
    return (
        <SimpleGrid minChildWidth='400px' spacing='10px' padding="20px">
            <Box boxShadow="md" borderRadius='md' height='400px' p='6'>
                <Text fontSize='4xl'>
                    Work Experience
                </Text>
                <Box height='15px' />
                <Experiences />              
            </Box>
            <Box boxShadow="md" borderRadius='md' height='400px' p='6'>
                <Text fontSize='4xl'>
                        Education
                </Text>
                <Box height='15px' />
                <Education />
            </Box>
            <Box boxShadow="md" borderRadius='md' height='720px' p='6'>
                <Text fontSize='4xl'>
                        Archievements
                </Text>
                <Box height='15px' />
                <Achievement />
            </Box>
        </SimpleGrid>
    );
};

export default Contents;