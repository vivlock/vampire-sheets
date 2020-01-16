import React from "react";
import PropTypes from "prop-types";

import Basics from "./Basics/Basics";
import Attributes from "./Attributes/Attributes";
import Skills from "./Skills/Skills";
import Backgrounds from "./Backgrounds/Backgrounds";
import Disciplines from "./Disciplines/Disciplines";
import MeritsFlaws from "./MeritsFlaws/MeritsFlaws";

import "./CharacterSheet.scss";

export class CharacterSheet extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      draft: { ...props.characterSheet },
      isEditing: false
    }
  }

  toggleEditMode = () => {
    this.setState( ( prevState, props ) => {
      return {
        isEditing: !prevState.isEditing,
        draft: {
          ...props.characterSheet
        }
      }
    } );
  }

  handleBasicsChange = ( field, value ) => {
    console.log( `field "${field}", value "${value}"` );
    this.setState( ( { draft } ) => {
      return {
        draft: {
          ...draft,
          [field]: value
        }
      };
    } );
  }

  handleAttributesChange = ( field, value ) => {
    this.setState( ( { draft }, props ) => {
      return {
        draft: {
          ...draft,
          attributes: {
            ...draft.attributes,
            [field]: value
          }
        }
      };
    } );
  }

  handleSkillsChange = ( field, value ) => {
    this.setState( ( { draft }, props ) => {
      return {
        draft: {
          ...draft,
          skills: {
            ...draft.skills,
            [field]: value
          }
        }
      };
    } );
  }

  handleBackgroundsChange = ( field, value ) => {
    this.setState( ( { draft }, props ) => {
      return {
        draft: {
          ...draft,
          backgrounds: {
            ...draft.backgrounds,
            [field]: value
          }
        }
      };
    } );
  }

  handleDisciplinesChange = ( field, value ) => {
    this.setState( ( { draft }, props ) => {
      return {
        draft: {
          ...draft,
          disciplines: {
            ...draft.disciplines,
            [field]: value
          }
        }
      };
    } );
  }

  handleMeritsFlawsChange = ( field, value ) => {
    this.setState( ( { draft }, props ) => {
      return {
        draft: {
          ...draft,
          meritsFlaws: {
            ...draft.meritsFlaws,
            [field]: value
          }
        }
      };
    } );
  }

  handleSubmitClick = () => {
    this.toggleEditMode();
  }

  render() {
    const { characterSheet } = this.props;
    const { draft, isEditing } = this.state;
    console.log( "characterSheet", characterSheet );
    console.log( "draft", draft );

    return (
      <div className="container characterSheet">
        <div className="header">
          <h2>{characterSheet.name}</h2>
          <div className="alignRight">
            { isEditing ?
              <button className='button' onClick={this.handleSubmitClick}>Submit Changes</button> :
              <button className='button' variant="link" onClick={this.toggleEditMode}>Edit</button>
            }
          </div>
        </div>
        
        <div className="subsection">
          <Basics 
            characterSheet={characterSheet}
            draft={draft}
            isEditing={isEditing}
            onChange={this.handleBasicsChange}
          />
        </div>

        <div className="subsection">
          <h3>Attributes</h3>
          <Attributes 
            attributes={characterSheet.attributes}
            draft={draft.attributes}
            isEditing={isEditing}
            onChange={this.handleAttributesChange}
          />
        </div>

        <div className="subsection">
          <h3>Skills</h3>
          <Skills 
            skills={characterSheet.skills}
            draft={draft.skills}
            isEditing={isEditing}
            onChange={this.handleSkillsChange}
          />
        </div>

        <div className="subsection">
          <h3>Backgrounds</h3>
          <Backgrounds 
            backgrounds={characterSheet.backgrounds}
            draft={draft.backgrounds}
            isEditing={isEditing}
            onChange={this.handleBackgroundsChange}
          />
        </div>

        <div className="subsection">
          <h3>Disciplines</h3>
          <Disciplines
            disciplines={characterSheet.disciplines}
            draft={draft.disciplines}
            isEditing={isEditing}
            onChange={this.handleDisciplinesChange}
          />
        </div>
        
        <div className="subsection">
          <h3>Merits/Flaws</h3>
          <MeritsFlaws
            meritsFlaws={characterSheet.meritsFlaws}
            draft={draft.meritsFlaws}
            isEditing={isEditing}
            onChange={this.handleMeritsFlawsChange}
          />
        </div>
      </div>
    );
  }
}

CharacterSheet.propTypes = {
  characterSheet: PropTypes.object.isRequired
};

export default CharacterSheet;
