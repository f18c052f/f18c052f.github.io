import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Center,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import img01 from '../assets/portfolio/image01.jpg'
import img02 from '../assets/portfolio/image02.jpg'
import img03 from '../assets/portfolio/image03.jpg'
import img04 from '../assets/portfolio/image04.jpg'
import img05 from '../assets/portfolio/image05.jpg'
import img06 from '../assets/portfolio/image06.jpg'
import img07 from '../assets/portfolio/image07.jpg'
import img08 from '../assets/portfolio/image08.jpg'

const imageArray = [img01, img02, img03, img04, img05, img06, img07, img08];

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Photo: React.FC = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  const titleProperty = ""
  const textProperty = ""

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: titleProperty,
      text: textProperty,
      image: img01
    },
    {
      title: titleProperty,
      text: textProperty,
      image: img02
    },
    {
      title: titleProperty,
      text: textProperty,
      image: img03
    },
    {
      title: titleProperty,
      text: textProperty,
      image: img04
    },
    {
      title: titleProperty,
      text: textProperty,
      image: img05
    },
    {
      title: titleProperty,
      text: textProperty,
      image: img06
    },
    {
      title: titleProperty,
      text: textProperty,
      image: img07
    },
    {
      title: titleProperty,
      text: 'Thank you for your watching :)',
      image: img08
    },
  ]


  return (
    <Center>
    <Box position={'relative'} height={'600px'} width={'900px'} overflow={'hidden'}>
    {/* <Box position={'relative'} height={'full'} width={'full'} overflow={'hidden'}> */}

      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'600px'}
            position="relative"
            backgroundPosition="center center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={card.image}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
    </Center>
  )
}

export default Photo;