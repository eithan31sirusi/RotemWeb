import React from "react";

import videosSrc from "../../../services/videos";

import {
  VideosContainer,
  IframeRow,
  IframeContainer,
  TitleH1,
  IframeHr,
} from "./Iframe.styled";

import { GlobalStyle } from "../../../styles/global/GlobalStyle";

const Iframe = () => {
  return (
    <IframeContainer>
      <GlobalStyle />
      <TitleH1>סרטונים מומלצים</TitleH1>
      <IframeHr />
      <VideosContainer>
        {videosSrc.map((video) => {
          return (
            <IframeRow key={video.id}>
              <iframe
                style={{ borderRadius: "1.5rem" }}
                width="560"
                height="315"
                src={video.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </IframeRow>
          );
        })}
      </VideosContainer>
    </IframeContainer>
  );
};

export default Iframe;
