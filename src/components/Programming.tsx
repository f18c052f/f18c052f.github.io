import React from 'react';
import { SimpleGrid, Image } from '@chakra-ui/react';
import python from '../assets/programming/python.svg';
import c from '../assets/programming/c.svg';
import googleCloud from '../assets/programming/google-cloud.svg';
import linux from '../assets/programming/linux-tux.svg';
import matlab from '../assets/programming/matlab-svgrepo-com.svg';
import react from '../assets/programming/react.svg';
import typescript from '../assets/programming/typescript-icon.svg';
import unity from '../assets/programming/unity.svg';

const Programming: React.FC = () => {
    return (
        <SimpleGrid minChildWidth='64px' spacing='10px'>
            <Image
                boxSize='64px'
                src={python}
            />
            <Image
                boxSize='64px'
                src={matlab}
            />
            <Image
                boxSize='64px'
                src={c}
            />
            <Image
                boxSize='64px'
                src={typescript}
            />
            <Image
                boxSize='64px'
                src={react}
            />
            <Image
                boxSize='64px'
                src={unity}
            />
            <Image
                boxSize='64px'
                src={linux}
            />
            <Image
                boxSize='64px'
                src={googleCloud}
            />
        </SimpleGrid>
    );
};

export default Programming;