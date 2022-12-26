import { useEffect } from 'react';
import { StyledDropDownMenu } from './StyledMenu';

/*
  The idea of the ContextMenu component is to create a vertical list of buttons at any position of the viewport, like all context menus found in modern, GUI-based computers.
*/

export function ContextMenu({ children, Reference, xPos, yPos, closeMenu }) {
  const controlContextVisibility = () => {
    if (Reference === undefined) return;
    document.body.click(); // closes other menus
    Reference.current.focus();
    const closeMenuOnOutsideClick = (e) => {
      const isFocusWithin = Reference.current.contains(document.activeElement);
      if (!isFocusWithin) {
        closeMenu();
      }
    };
    window.addEventListener('click', closeMenuOnOutsideClick);
    window.addEventListener('contextmenu', closeMenuOnOutsideClick);
    return () => {
      window.removeEventListener('click', closeMenuOnOutsideClick);
      window.removeEventListener('contextmenu', closeMenuOnOutsideClick);
    };
  };

  useEffect(controlContextVisibility, [Reference, closeMenu]);

  return (
    <StyledDropDownMenu
      ref={Reference}
      xPos={!isNaN(xPos) ? `${xPos}px` : 'inherit'}
      yPos={!isNaN(yPos) ? `${yPos}px` : 'inherit'}
      tabIndex={0}>
      {children}
    </StyledDropDownMenu>
  );
}

export const ContextMenuButton = ({ buttonText, buttonAction, closeMenu }) => {
  return (
    <button
      onClick={(e) => {
        buttonAction(e);
        closeMenu();
      }}
      tabIndex={0}
    >
      {buttonText}
    </button>
  );
};
