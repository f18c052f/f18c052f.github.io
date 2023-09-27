import { Center, Text, Box, VStack, HStack } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import React from 'react';

const Contact: React.FC = () => {
    return (
        <Box padding='50px'>
            <Center >
                <VStack>
                    <Text fontSize='xl'>
                        Please contact me :)
                    </Text>
                    <HStack>
                        <EmailIcon />
                        <Text>
                            yuta.ohara1995@gmail.com
                        </Text>
                    </HStack>
                </VStack>
            </Center>
        </Box>

    );
}

export default Contact;