import React from 'react';
import { educations } from '../models/education';
import { Box,
         Text,
         Stepper,
         Step,
         StepIndicator,
         StepStatus,
         StepDescription,
         StepTitle,
         StepSeparator,
         useSteps } from '@chakra-ui/react';


const steps = [
    educations[0],
    educations[1],
]

const Education: React.FC = () => {
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
                complete={`🌈`}
                active={`🌖`}
                />
            </StepIndicator>

            <Box flexShrink='0'>
                <StepTitle>
                    <Text
                    fontSize='2xl'
                    // fontWeight='semibold'
                    >
                    {step.name}
                    </Text>
                </StepTitle>
                <StepDescription>
                    <Text
                    fontSize='md'
                    // fontWeight='semibold'
                    >
                    {step.type}
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

export default Education;