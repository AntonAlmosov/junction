import Head from "next/head";
import styled from "styled-components";
import { FullWrapper } from "../components/misc/FullWrapper";
import { Logo } from "../components/misc/Logo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Some name</title>
      </Head>
      <FullWrapper>
        <LoginWrapper>
          <LoginInnerWrapper>
            <Logo />
            <LoginFormWrapper>
              <LoginFormHeader></LoginFormHeader>
              <LoginFormInputWrapper></LoginFormInputWrapper>
            </LoginFormWrapper>
          </LoginInnerWrapper>
        </LoginWrapper>
        <IllustrationWrapper>
          <img src="/login.svg" alt="" />
        </IllustrationWrapper>
      </FullWrapper>
    </div>
  );
}

const LoginWrapper = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const LoginInnerWrapper = styled.div`
  margin-top: 40px;
  width: 360px;
`;

const LoginFormWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
`;

const LoginFormHeader = styled.div`
  width: 100%;
  h3 {
    margin-bottom: 6px;
  }
`;

const LoginFormInputWrapper = styled.div`
  margin-top: 35px;
  width: 100%;
`;

const IllustrationWrapper = styled.div`
  background-color: #f8f8f8;
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
  }
`;
