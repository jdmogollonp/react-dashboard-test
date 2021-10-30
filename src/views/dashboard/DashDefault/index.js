import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';

import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CreateProjectForm from '../../../components/Stepper/createProject';
import FormsElements from '../../../components/Stepper/uploadFiles';




const steps = [
    'Create project',
     'Upload files',
     'Check data quality',
     'Process data',
     'Share',
     'Done'];

const demos = {
soundcloud:
    '<iframe frameborder="0" style="overflow:hidden;height:100vh ;width:100%" height="100%" width="100%" src="http://dess.work.temporal.public.s3-website-us-east-1.amazonaws.com/index.html"></iframe>',
profile_report:
    '<iframe frameborder="0" style="overflow:hidden;height:100vh ;width:100%" height="100%" width="100%" src="https://s3.amazonaws.com/dess.work.temporal.public/profiling_report.html"></iframe>',
sample_distribution:
    '<iframe frameborder="0" style="overflow:hidden;height:100vh ;width:100%" height="100%" width="100%" src="https://s3.amazonaws.com/dess.work.temporal.public/sample_distribution.html"></iframe>',
};

function Iframe(props) {
return (
    <div
    dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
);
}
     
export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [state, setState] = React.useState( {
    ProjectName: '',
    description: '',
    tags: '',
    isPublic: false,
    bottonIsDisable : true
  });

  const handleNext = () => { 
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step  key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
                
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
       
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}

      {activeStep === 0 ? (
              <CreateProjectForm  handleNext = {handleNext}  state = {state} setSate = {setState} ></CreateProjectForm>
            ) : (
            ""
            )}
      {activeStep === 2 ? (
        <div className="App">
        <h5>Data quality report</h5>
        <Iframe iframe={demos["soundcloud"]} allow="autoplay" />,
        </div>
      ) : (
       ""
      )}


      {activeStep === 1 ? (
        <FormsElements></FormsElements>
      ) : (
       ""
      )}
      
    </Box>
  );
}





