import React from 'react';
import './App.css';
import {SectionsContainer, Section} from 'react-fullpage';
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'
import Section5 from './Components/Section5'

const App =()=> {
  let options = {
    activeClass:          'active', // the class that is appended to the sections links
    anchors:              ["1", "2", "3", "4"], // the anchors for each sections
    arrowNavigation:      true, // use arrow keys
    className:            'Section', // the class name for the section container
    delay:                300, // the scroll animation speed
    navigation:           true, // use dots navigatio
    scrollBar:            false, // use the browser default scrollbar
    sectionClassName:     'Section', // the section class name
    sectionPaddingTop:    '0', // the section top padding
    sectionPaddingBottom: '0', // the section bottom padding
    verticalAlign:        false // align the content of each section vertical
  };
  return (
    <SectionsContainer {...options}>
    <Section><Section1/><Section2/></Section>
    <Section><Section3/></Section>
    <Section><Section4/></Section>
    <Section><Section5/></Section>
  </SectionsContainer>
  )
}

export default App;
