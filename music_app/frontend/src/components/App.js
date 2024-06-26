import React from 'react';
import styled from 'styled-components';
import ColorChangingBackground from './ColorChangingBackground'; // Import your ColorChangingBackground component
import HomePage from './HomePage'; 

const Container = styled.div`
  position: relative;
`;

const App = () => {
  return (
    <Container>
      <ColorChangingBackground />
      <HomePage />
    </Container>
  );
};

export default App;
