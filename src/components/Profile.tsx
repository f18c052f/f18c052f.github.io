import React from "react";
import { Image, Box, Link, Avatar, Text, Center } from '@chakra-ui/react'
import profile from '../models/profile';
import background from '../assets/profile/background.jpeg';


const Profile: React.FC = () => {

    const backgroundStyles = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '70vh',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)'
      }

    const profileStyles = {
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
