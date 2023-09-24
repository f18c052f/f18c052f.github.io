import React from 'react';
import { certifications, CertificationType } from '../models/certification';
import { Box,
         Text,
         VStack,
         StackDivider,
        } from '@chakra-ui/react';


const Certifications: React.FC = () => {

    return (
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        >
        {
            certifications.map((certification: CertificationType) => {
                return (
                    <Box h='80px' >
                        <Text fontSize='lg' >
                        {certification.name}
                        </Text>
                        <Text fontSize='lg' color='gray.500'>
                        {certification.period}
                        </Text>
                    </Box>
                );
            })
        }
        </VStack>
    );
}

export default Certifications;