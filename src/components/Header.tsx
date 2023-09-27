import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import icon from '../assets/profile/icon.jpg';
import { links, RouteProps} from '../models/route';

  
const NavLink = (props: RouteProps) => {
    const { title, href } = props

    return (
        <Box
        as="a"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={href}>
        {title}
        </Box>
    )
}

const Header: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
                <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {links.map((link) => (
                    <NavLink {...link}>{link.title}</NavLink>
                ))}
                </HStack>
            </HStack>
            <Flex alignItems={'center'}>
                <Avatar
                size={'sm'}
                src={icon}
                />
            </Flex>
            </Flex>

            {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'} spacing={4}>
                {links.map((link) => (
                    <NavLink {...link}>{link.title}</NavLink>
                ))}
                </Stack>
            </Box>
            ) : null}
        </Box>
        </>
    )
}

export default Header;