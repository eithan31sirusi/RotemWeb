import styled from "styled-components";

export const PopUpBg = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  left: 25%;
  bottom: 0%;
`;

export const PopUpContainer = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  justify-content: center;
  margin-top: 25em;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  border-radius: 1.5rem;
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
  margin-bottom: 1rem;
`;

/*
  .popup-link {
    text-decoration: none;
    color: black;
  }
  .image-container {
    height: 27rem;
  }
  .image-container img {
    transform: translate(0, -11rem);

    height: 29rem;
  }

  .popup-content {
    margin: 1rem;
    margin-top: 0.5rem;
    transform: translate(0, -8rem);

    .popup-title {
      margin-bottom: 0.5rem;

      .popup-title-h3 {
        margin: 0;
        padding: 0;
      }
    }
  }

  .popup-body {
    .popup-body-p {
      margin: 1rem;
      padding: 0;
    }
  }
  .btn-container {
    transform: translate(0, 8rem);
    width: 100%;
    height: 0%;

    .btn {
      margin: 0.5rem;
      padding: unset;
    }
  }
}
 */
