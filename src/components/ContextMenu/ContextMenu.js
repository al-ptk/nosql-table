import { useEffect } from 'react';
import { StyledContextMenu } from './ContextMenu.styles';
import { createPortal } from 'react-dom';

/*
  The idea of the ContextMenu component is to create a vertical list of buttons at any position of the viewport, like all context menus found in modern, GUI-based computers.
*/

export function ContextMenu({ children, Reference, xPos, yPos, closeMenu }) {
  const controlContextVisibility = () => {
    if (Reference === undefined) return; // No reference, no action
    document.body.click(); // closes other menus
    Reference.current.focus();

    // event handler
    const closeMenuOnOutsideClick = (e) => {
      const isFocusWithin = Reference.current.contains(document.activeElement);
      if (!isFocusWithin) {
        closeMenu();
      }
    };

    // add events on mount
    window.addEventListener('click', closeMenuOnOutsideClick);
    window.addEventListener('contextmenu', closeMenuOnOutsideClick);

    return () => {
      // remove events on unmount
      window.removeEventListener('click', closeMenuOnOutsideClick);
      window.removeEventListener('contextmenu', closeMenuOnOutsideClick);
    };
  };

  useEffect(controlContextVisibility, [Reference, closeMenu]);

  return createPortal(
    <StyledContextMenu.Container
      ref={Reference}
      xPos={!isNaN(xPos) ? `${xPos}px` : 'inherit'}
      yPos={!isNaN(yPos) ? `${yPos}px` : 'inherit'}
      tabIndex={0}
    >
      {children}
    </StyledContextMenu.Container>,
    document.getElementById('modal-portal')
  );
}

export const ContextMenuButton = ({ buttonText, buttonAction, closeMenu }) => {
  return (
    <StyledContextMenu.Button
      onClick={(e) => {
        buttonAction(e);
        closeMenu();
      }}
      tabIndex={0}
    >
      {buttonText}
    </StyledContextMenu.Button>
  );
};
