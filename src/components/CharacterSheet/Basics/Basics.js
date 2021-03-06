import React from "react";

import DisplayGroup from "../../DisplayGroup/DisplayGroup";

const Basics = ( { characterSheet, draft, isEditing, onChange } ) => {
  return (
    <div>
      <DisplayGroup 
        fieldName="player" label="Player" 
        isEditing={isEditing} onChange={onChange} 
        value={draft.player.name} pristine={characterSheet.player.name}
      />
      <DisplayGroup 
        fieldName="clan" label="Clan" 
        isEditing={isEditing} onChange={onChange} 
        value={draft.clan} pristine={characterSheet.clan} 
      />
      <DisplayGroup 
        fieldName="title" label="Title" 
        isEditing={isEditing} onChange={onChange} 
        value={draft.title} pristine={characterSheet.title}
      />
      <DisplayGroup 
        fieldName="archetype" label="Archetype" 
        isEditing={isEditing} onChange={onChange} 
        value={draft.archetype} pristine={characterSheet.archetype}
      />
    </div>
  );
}

export default Basics;
