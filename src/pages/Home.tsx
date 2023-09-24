import React from "react";
import Profile from '../components/Profile';
import Components from '../components/Contents';
// import { Box } from "@chakra-ui/react";


const Home: React.FC = () => {
    return (
        <>
            <Profile />
            <Components />
        </>
    );
};


export default Home;