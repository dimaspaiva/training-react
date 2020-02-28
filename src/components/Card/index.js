import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#55e0ff" />
      </header>

      <p>Atualizar conhecimentos de react</p>
      <img src="https://api.adorable.io/avatars/285/abott@adorable.png" />
    </Container>
  );
}
