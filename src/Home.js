import React from 'react'
import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProduct from './components/FeatureProducts';

const Home = () => {
  const data = {
    name: 'Jyoti Store'
  }
  return (
    // <Wrapper className="test">Home</Wrapper> 
    <>
      <HeroSection page={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
    
  )
  // return <HeroSection />
}
const Wrapper = styled.section`
height: 100vh;
background-color: ${({theme}) => theme.colors.bg};
`;
export default Home