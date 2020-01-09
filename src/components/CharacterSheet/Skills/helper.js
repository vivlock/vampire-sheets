export function putSkillsInBoxes( skills ) {
  let skillsObj = {
    academics: undefined,
    animalKen: undefined,
    athletics: undefined,
    awareness: undefined,
    brawl: undefined,
    computer: undefined,
    crafts: [],
    dodge: undefined,
    drive: undefined,
    // -- //
    empathy: undefined,
    firearms: undefined,
    intimidation: undefined,
    investigation: undefined,
    leadership: undefined,
    linguistics: undefined,
    lore: undefined,
    medicine: undefined,
    melee: undefined,
    occult: undefined,
    // -- //
    performance: [],
    science: [],
    security: undefined,
    stealth: undefined,
    streetwise: undefined,
    subterfuge: undefined,
    survival: undefined,
    etc: []
  }

  const skillKeys = Object.keys( skillsObj );

  skills.forEach( ( skill ) => {
    if( skillKeys.includes( skill.name ) ) {
      if( Array.isArray( skillsObj[skill.name] ) ) {
        skillsObj[skill.name].push( skill );
      }
      else {
        skillsObj[skill.name] = skill;
      }
    }
    else {
      skillsObj["etc"].push( skill );
    }
  } );

  return skillsObj;
}

export const displayNames = {
  academics: "Academics",
  animalKen: "Animal Ken",
  athletics: "Athletics",
  awareness: "Awareness",
  brawl: "Brawl",
  computer: "Computer",
  crafts: "Crafts",
  dodge: "Dodge",
  drive: "Drive",
  empathy: "Empathy",
  firearms: "Firearms",
  intimidation: "Intimidation",
  investigation: "Investigation",
  leadership: "Leadership",
  linguistics: "Linguistics",
  lore: "Lore",
  medicine: "Medicine",
  melee: "Melee",
  occult: "Occult",
  performance: "Performance",
  science: "Science",
  security: "Security",
  stealth: "Stealth",
  streetwise: "Streetwise",
  subterfuge: "Subterfuge",
  survival: "Survival",
}
