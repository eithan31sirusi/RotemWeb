import styled from "styled-components";

export const PopUpBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  left: 0%;
  bottom: 0%;
`;

export const PopUpContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-wrap: wrap;
  width: 55%;
  overflow: hidden;
  flex-direction: column;
  position: relative;
  left: 25%;
  align-items: center;
  background-color: lightgray;
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 20rem;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;
`;

export const PopUpLink = styled.a`
  text-decoration: none;
  color: black;
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
