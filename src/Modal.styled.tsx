import styled from 'styled-components'

export const Dialog = styled.dialog`
  display: flex;
  flex-flow: column wrap;
  min-width: 20ch;
  max-width: 90ch;
  border-radius: 4px;
  border: 1px solid white;
  transition: opacity 0.3s ease;

  &:not([open]) {
    pointer-events: none;
    opacity: 0;
  }

  &::backdrop {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    backdrop-filter: blur(5px);
    transition: backdrop-filter 0.5s ease;
  }
`

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  gap: 1.5rem;
`

export const CloseBtn = styled.button`
  align-self: flex-end;
  width: 2rem;
  border-radius: 100%;
  border: none;
  aspect-ratio: 1;

  &:hover {
    background-color: grey;
  }
`

export const Content = styled.article`
  overflow-y: scroll;
  max-block-size: 100%; /* safari */
  overscroll-behavior-y: contain;
  display: grid;
  justify-items: flex-start;
`
