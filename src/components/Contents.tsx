import { SimpleGrid, Box, Text } from '@chakra-ui/react';
import React from 'react';
import Experiences from '../components/Experiences';

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
            <Box bg='green' height='400px'></Box>
            <Box bg='tomato' height='400px'></Box>
        </SimpleGrid>
    );
};

export default Contents;