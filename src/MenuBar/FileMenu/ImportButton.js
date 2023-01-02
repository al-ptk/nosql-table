import React, { useContext } from 'react';
import { DropDown } from '../../components/DropDown.styles';
import { LanguageContext } from '../../App';

/*
  All this button does is click a hidden input, located at the FileMenuAnchor component. The logic for importing tables is there.
*/

export function ImportButton() {
  const language = useContext(LanguageContext);
  const selectFile = () => {
    document.getElementById('hidden-file-importer').click();
  };

  return (
    <DropDown.Button onClick={selectFile}>
      {language['importFile']}
    </DropDown.Button>
  );
}
