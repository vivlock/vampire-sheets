import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

import StatListItem from "../../StatList/StatListItem";

import { putSkillsInBoxes, displayNames } from "./helper";

export default function Skills( { skills } ) {
  const skillsObj = putSkillsInBoxes( skills );

  return (
    <Container className="skills">
      <Row>
        <Col>
          <ListGroup>
            <Skill name="academics" skill={skillsObj["academics"]} />
            <Skill name="animalKen" skill={skillsObj["animalKen"]} />
            <Skill name="athletics" skill={skillsObj["athletics"]} />
            <Skill name="awareness" skill={skillsObj["awareness"]} />
            <Skill name="brawl" skill={skillsObj["brawl"]} />
            <Skill name="computer" skill={skillsObj["computer"]} />
            { 
              skillsObj["crafts"].length < 2 
              ? 
                <Skill name="crafts" skill={skillsObj["crafts"]} /> 
                :
                skillsObj["crafts"].map( skill => (
                  <Skill name="crafts" skill={skill} key={`crafts-${skill.specialty}`} />
                ) )
            }
            <Skill name="dodge" skill={skillsObj["dodge"]} />
            <Skill name="drive" skill={skillsObj["drive"]} />
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <Skill name="empathy" skill={skillsObj["empathy"]} />
            <Skill name="firearms" skill={skillsObj["firearms"]} />
            <Skill name="intimidation" skill={skillsObj["intimidation"]} />
            <Skill name="investigation" skill={skillsObj["investigation"]} />
            <Skill name="leadership" skill={skillsObj["leadership"]} />
            <Skill name="linguistics" skill={skillsObj["linguistics"]} />
            <Skill name="lore" skill={skillsObj["lore"]} />
            <Skill name="medicine" skill={skillsObj["medicine"]} />
            <Skill name="melee" skill={skillsObj["melee"]} />
            <Skill name="occult" skill={skillsObj["occult"]} />
            
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            { 
              skillsObj["performance"].length < 2 
              ? 
                <Skill name="performance" skill={skillsObj["performance"]} /> :
                skillsObj["performance"].map( skill => (
                  <Skill name="performance" skill={skill} key={`perform-${skill.specialty}`} />
                ) )
            }
            { 
              skillsObj["science"].length < 2 
              ? 
                <Skill name="science" skill={skillsObj["science"]} /> 
                :
                skillsObj["science"].map( skill => (
                  <Skill name="science" skill={skill} key={`science-${skill.specialty}`} />
                ) )
            }
            <Skill name="security" skill={skillsObj["security"]} />
            <Skill name="stealth" skill={skillsObj["stealth"]} />
            <Skill name="streetwise" skill={skillsObj["streetwise"]} />
            <Skill name="subterfuge" skill={skillsObj["subterfuge"]} />
            <Skill name="survival" skill={skillsObj["survival"]} />
            { 
              skillsObj["etc"].length > 0
              ? 
                skillsObj["etc"].map( skill => (
                  <Skill skill={skill} key={`${skill.name}-${skill.value}`} />
                ) )
              : null
            }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export function Skill( { skill, ...props } ) {
  let name;
  let value;
  let specialty;

  if( !skill ) {
    name = props.name;
    value = 0;
  }
  else if( Array.isArray( skill ) ) {
    if( skill.length === 1 ) {
      name = skill[0].name;
      value = skill[0].value;
      specialty = skill[0].specialty
    }
    if( skill.length === 0 ) {
      name = props.name;
      value = 0;
    }
  }
  else {
    name = skill.name;
    value = skill.value;
    specialty = skill.specialty;
  }

  let displayName = specialty ? `${displayNames[name]} (${specialty})` : displayNames[name];

  return (
    <StatListItem name={displayName} value={value} />
  );
}