import React from 'react';
import { DiFirebase, DiReact,} from 'react-icons/di';
import {GrNode} from "react-icons/gr";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider style={{marginBottom:"2%",width:"25%"}}/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in my web development journey so far.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js,
            HTML 5,
            CSS 3,
            BootStrap,
            Ant designs,
            Materials-UI,
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GrNode size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js,
            Express,
            MongoDB,
            JSP & Servlets
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Other Skills</ListTitle>
          <ListParagraph>
            I know the basics of<br/>
            C, C++, Java, Python, Linux & shell programming
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
