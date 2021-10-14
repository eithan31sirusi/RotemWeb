import styled from "styled-components";

export const PopUpBg = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    background-color: rgba(126,126,150,0.9);
    justify-content: center;
    align-items: center;
`;

export const PopUpContainer = styled.div`
  width: max-content;
  height: auto;
  justify-content: center;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  border-radius: 1.5rem;
  height: 45em;
`;

export const ImageContainer = styled.div`
display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 400px;
    overflow: hidden;
    justify-content: center;
`;

export const Pbody = styled.div`
    padding: 1rem;
    width: 45em;
    margin-bottom: 1rem;
    height: 10em;
    overflow-y: auto;
    overflow-x: hidden;
    line-height: 1.2em;

    /* scroll bar */
    ::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(255, 105, 180, 0.5);
  border-radius: 10px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 105, 180);
}
`;
