import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  List,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';

import { useState } from 'react';

import agent from '../../app/api/agent';

const About = () => {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const getValidationError = () => {
    agent.TestErrors.getValidError()
      .then(() => {
        console.log('Error');
      })
      .catch((error) => setValidationErrors(error));
  };

  return (
    <Container>
      <Typography variant="h2">Errors for testing</Typography>
      <ButtonGroup>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get400Error().catch((error) => console.log(error))
          }
        >
          Test 400 error
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get401Error().catch((error) => console.log(error))
          }
        >
          Test 401 error
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get404Error().catch((error) => console.log(error))
          }
        >
          Test 404 error
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get500Error().catch((error) => console.log(error))
          }
        >
          Test 500 error
        </Button>

        <Button variant="contained" onClick={getValidationError}>
          Test Validation error
        </Button>
      </ButtonGroup>

      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map((err) => (
              <List key={err}>{err}</List>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
};
export default About;
