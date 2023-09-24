import React from 'react';
import { achievements, AchievementType } from '../models/achievement';
import { Box,
         Text,
         VStack,
         StackDivider,
         Link
        } from '@chakra-ui/react';


const Achievement: React.FC = () => {

    return (
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        >
        {
            achievements.map((achievement: AchievementType) => {
                return (
                    <Box h='180px' >
                        <Text fontSize='lg' fontWeight='semibold'>
                        {achievement.type} :
                        </Text>
                        <Text fontSize='lg'>
                        『{achievement.title}』
                        </Text>
                        <Text fontSize='lg' color='gray.800'>
                        {achievement.description}
                        </Text>
                        <Text fontSize='lg' color='gray.500'>
                        {achievement.date}
                        </Text>
                        <Link href={achievement.url} isExternal>
                            <Text color="teal.500" textDecoration="underline">
                            {achievement.site}
                            </Text>
                        </Link>
                    </Box>
                );
            })
        }
        </VStack>
    );
}

export default Achievement;