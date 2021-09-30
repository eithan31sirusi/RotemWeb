import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20%;
  height: 100%;
  overflow: hidden;
  align-self: normal;
  background-color: lightgray;
  margin-bottom: 5rem;
  margin-top: 5rem;
  border-radius: 1rem;
`;

export const CardImage = styled.img`
  width: 50vh;
`;

export const CardLink = styled.a`
  text-decoration: none;
  color: black;
`;

export const CardContent = styled.div`
  box-sizing: border-box;
  padding: 1rem 3rem 1rem 3rem;
  height: 100%;
`;

export const CardParagraph = styled.p`
  height: 8rem;
  color: blue;
  overflow: hidden;
  color: black;
`;

export const CardTitle = styled.div`
  padding: 0 2rem 0 2rem;
  min-height: 5rem;
`;

/* .card-container {
  width: 100%;
  box-shadow: 0 0 1rem 0;
  transition: 0.8s;
  animation: ease-in-out;
  margin: 3rem;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 1rem 0;
  }

  .image-container img {
    overflow: hidden;
    height: 15rem;
  }

  .card-content {
    margin: 1rem;
    margin-top: 0.5rem;

    .card-title {
      margin-bottom: 0.5rem;

      .card-title-h3 {
        margin: 0;
        padding: 0;
      }
    }

    .card-body {
      display: flex;
      .card-body-p {
        margin: 1rem;
        padding: 0;
      }
    }
  }

  .card-link {
    text-decoration: none;
    color: black;
  }

  .btn {
    margin: 1rem;
  }
}
 */
