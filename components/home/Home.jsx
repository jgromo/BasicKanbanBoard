import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  && {
    max-width: sm;
    text-align: center;
    background-color: #a6e0b1;
    padding: 20px;
    margin-top: 20px;
    border: 5px solid black;
  }
`;

const StyledHeading = styled(Typography)`
  && {
    font-size: 28px;
    color: #333;
    transition: text-decoration 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledParagraph = styled(Typography)`
  && {
    font-size: 16px;
    color: #666;
  }
`;

export default function Home() {
  return (
    // <p>Use Material UI component Container and Typography to display a Welcome message here.</p>
    <StyledContainer maxWidth="sm">
      <StyledHeading variant="h4" component="h1" gutterBottom>
        Welcome to Project 4: Kanban Board Application!
      </StyledHeading>
      <StyledParagraph variant="body1" paragraph>
        Thanks for visiting.
      </StyledParagraph>
    </StyledContainer>
  );
}
