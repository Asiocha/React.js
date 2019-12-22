import React from 'react';
import Container from '../Container/Container';
import { dataInfo } from '../../data/dataStore';
import Hero from './Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={dataInfo.title} imageAdres={dataInfo.imageAdres} />
    <p>{dataInfo.destription}</p>
  </Container>
);

export default Info;