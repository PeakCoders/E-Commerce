import { Button, Container, Divider, Paper, Typography } from '@mui/material';

import { useHistory, useLocation } from 'react-router-dom';

const ServerError = () => {
  const history = useHistory();
  const { state } = useLocation<any>();

  return (
    <Container component={Paper}>
      <Typography variant="h5" gutterBottom>
        {state.error ? (
          <>
            <Typography variant="h3" color="error">
              {state.error.title}
            </Typography>
            <Typography variant="h5" gutterBottom>
              <Divider sx={{ marginBottom: '15px' }} />
              <Typography align="left">
                {state.error.detail || 'Internal server error'}
              </Typography>
            </Typography>
          </>
        ) : (
          <Typography>Server Error</Typography>
        )}
      </Typography>

      <Button onClick={() => history.push('/catalog')}>Go to safety</Button>
    </Container>
  );
};

export default ServerError;
