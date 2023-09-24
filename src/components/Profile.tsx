import React from "react";
import { Image, Box, Card, Link, Avatar, CardBody, Text, Center } from '@chakra-ui/react'
import profile from '../models/profile';
import background from '../assets/profile/background.jpeg';


const Profile: React.FC = () => {

    const backgroundStyles = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '80vh',
        // display: 'flex',
      }

    const profileStyles = {
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: '360px',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        padding: '60px'
      }

    return (
        <>
            <Box sx={backgroundStyles}>
                <Center h='100%'>
                    <Box sx={profileStyles} backdropFilter='auto' backdropBlur='8px'>
                        
                        
                        <Box>
                        <Avatar
                            src={profile.icon}
                            size='2xl'
                            name={profile.icon}
                        />
                        </Box>
                        
                        <Text
                            fontSize='4xl'
                            fontWeight='semibold'
                        >
                            {profile.name}
                        </Text>
                        <Center >
                            <Link href={profile.link[0].url} isExternal>
                                <Image
                                    boxSize='30px'
                                    src={profile.link[0].icon}
                                    alt={profile.link[0].name}
                                />
                            </Link>
                        </Center>

                    </Box>
                </Center>
            </Box>
        </>
    );
};

export default Profile;
