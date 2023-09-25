import React from 'react';
import { fields} from '../models/field';

import { Text,
         VStack,
         Image,
         SimpleGrid} from '@chakra-ui/react';



const Fields: React.FC = () => {
    return (
        <SimpleGrid minChildWidth='120px' spacing='10px'>
        {
            fields.map((field) => {
                return (
                    <VStack>
                        <Image src={field.image} boxSize='64px' />
                        <Text>{field.name}</Text>
                    </VStack>                      
                );
            })
        }
        </SimpleGrid>
    );
}

export default Fields;