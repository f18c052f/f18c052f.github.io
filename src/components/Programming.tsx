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

const images = [python,
                c,
                googleCloud,
                linux,
                matlab,
                react,
                typescript,
                unity]

const Programming: React.FC = () => {
    return (
        <SimpleGrid minChildWidth='64px' spacing='10px'>
            {
                images.map((image) => {
                    return (
                        <Image boxSize='64px' src={image} />
                    );
                })
            }
        </SimpleGrid>
    );
};

export default Programming;