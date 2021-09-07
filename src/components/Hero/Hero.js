import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Hi There <br/>
          I am Dhananjay
      </SectionTitle>
      <SectionText>
        I am a web developer. I design and build websites 
      </SectionText>
      <Button>Learn more</Button>
    </LeftSection>    
  </Section>
);

export default Hero;