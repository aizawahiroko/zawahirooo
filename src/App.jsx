import React from "react";
import Styled from "styled-components";
import { useModal } from "react-hooks-use-modal";
import "./styles.css";

import hrk from "./images/hrk.png";
import header from "./images/header.png";
import myjobs from "./images/MY_JOBS.png";
import contact from "./images/CONTACT.png";

export const App = () => {
  const [Modal, open] = useModal("root", {
    preventScroll: true
  });
  return (
    <SWrapper>
      <SHeader>
        <SHeaderButton onClick={open}>
          <SHeaderImg src={header} alt="" />
        </SHeaderButton>
      </SHeader>
      <Modal>
        <SModal>
          <SModalTitle>
            <SModalTitleImg src={myjobs} alt="" />
          </SModalTitle>
          <SModalText>
            Webサイト制作・運用のディレクション、Webデザイン、マークアップなど。
            <br />
            たまに音楽関連のライティング・翻訳。
            <br />
            <br />
            <SModalLink
              href="https://bunshun.jp/denshiban"
              target="_blank"
              rel="noreferrer"
            >
              週刊文春 電子版
            </SModalLink>
            <br />
            <SModalLink
              href="http://turntokyo.com"
              target="_blank"
              rel="noreferrer"
            >
              TURN
            </SModalLink>
          </SModalText>
          <SModalTitle>
            <SModalTitleImg src={contact} alt="" />
          </SModalTitle>
          <SModalText>
            <SModalLink href="mailto:zawahiror@gmail.com">
              zawahiror@gmail.com
            </SModalLink>
          </SModalText>
        </SModal>
      </Modal>
    </SWrapper>
  );
};

const SWrapper = Styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(269.46deg, rgba(4, 133, 252, 0.55) 0.44%, rgba(194, 64, 255, 0.55) 99.54%),
    url(${hrk});
`;

const SHeader = Styled.header`
  max-width: 1024px;
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;

const SHeaderButton = Styled.button`
  display: block;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const SHeaderImg = Styled.img`
  width: 100%;
  height: auto;
`;

const SModal = Styled.div`
  background-color: #fff;
  padding: 60px 100px;
  border-radius: 10px;
  @media (max-width: 768px) {
    margin: 20px;
    padding: 20px;
  }
`;

const SModalTitle = Styled.h2`
`;

const SModalTitleImg = Styled.img`
  max-width: 300px;
  @media (max-width: 768px) {
    max-width: 200px;
  }
`;

const SModalText = Styled.p`
  line-height: 1.6;
  padding-bottom: 40px;
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

const SModalLink = Styled.a`
  color: #666;
  &:hover {
    color: #EB0400;
  }
`;
