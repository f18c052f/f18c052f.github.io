import React from 'react';
import { experiences } from '../models/experience';
import { Box,
         Text,
         Stepper,
         Step,
         StepIndicator,
         StepStatus,
         StepIcon,
         StepDescription,
         StepTitle,
         StepSeparator,
         useSteps } from '@chakra-ui/react';


const steps = [
    experiences[0],
    experiences[1],
]

const Experiences: React.FC = () => {
    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
      })

    return (
        <Stepper index={activeStep} orientation='vertical' height='250px' gap='0'>
        {steps.map((step, index) => (
            <Step key={index}>
            <StepIndicator>
                <StepStatus
                complete={<StepIcon />}
                active={`🚗`}
                />
            </StepIndicator>

            <Box flexShrink='0'>
                <StepTitle>
                    <Text
                    fontSize='2xl'
                    // fontWeight='semibold'
                    >
                    {step.company}
                    </Text>
                </StepTitle>
                <StepDescription>
                    <Text
                    fontSize='md'
                    // fontWeight='semibold'
                    >
                    {step.department} / {step.occupation}
                    </Text>
                </StepDescription>
                <Text
                    fontSize='lg'
                    // fontWeight='semibold'
                    color='blackAlpha.600'
                    >
                    {step.period}
                </Text>
            </Box>

            <StepSeparator />
            </Step>
        ))}
        </Stepper>
    );
}

export default Experiences;