import { SimpleGrid, Box, Center, Text } from '@chakra-ui/react';
import React from 'react';
import Experiences from '../components/Experiences';

const Contents: React.FC = () => {
    return (
        <SimpleGrid minChildWidth='540px' spacing='10px'>
            <Box bg='tomato' height='540px'>
                <Text>
                    Work Experience
                </Text>
                <Experiences />              
            </Box>
            <Box bg='green' height='540px'></Box>
            <Box bg='tomato' height='540px'></Box>
        </SimpleGrid>
    );
};

export default Contents;