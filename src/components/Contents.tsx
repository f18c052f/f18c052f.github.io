import { SimpleGrid, Box, Text } from '@chakra-ui/react';
import React from 'react';
import Experiences from '../components/Experiences';
import Education from './Education';

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
            <Box boxShadow="md" borderRadius='md' height='400px' p='6'>

            </Box>
        </SimpleGrid>
    );
};

export default Contents;