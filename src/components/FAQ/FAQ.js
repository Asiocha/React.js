import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { dataFAQ } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={dataFAQ.title} imageAdres={dataFAQ.imageAdres} />
    <p>{dataFAQ.destription}</p>
  </Container>
);

export default FAQ;
