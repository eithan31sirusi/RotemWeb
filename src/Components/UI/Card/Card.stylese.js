import styled from "styled-components";

export const CardContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20%;
  overflow: hidden;
  align-self: normal;
  background-color: lightgray;
  margin-bottom: 5rem;
  margin-top: 5rem;
  border-radius: 1rem;
  flex: 0 1 calc(23% - 1em);
  box-shadow: 5px 10px 8px grey;

  transition: 0.2s ease-in;

  &:hover {
    box-shadow: 0px 0px 30px 10px #fffaf0;
  }
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardTitle = styled.div`
  padding: 0 1rem 0 1rem;
  min-height: 2rem;
`;

export const CardLink = styled.a`
  text-decoration: none;
  color: black;
`;

export const CardContent = styled.div`
  box-sizing: border-box;
  padding: 0 1.5rem 0 1.5rem;
`;

export const CardParagraph = styled.p`
  height: 5rem;
  overflow: hidden;
  color: black;
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
