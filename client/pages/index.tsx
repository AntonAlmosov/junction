import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { DefaultButton } from "../components/controls/DefaultButton";
import { DefaultInput } from "../components/controls/Input";
import { FullWrapper } from "../components/misc/FullWrapper";
import { Logo } from "../components/misc/Logo";
import { H3 } from "../components/typography/H3";
import { Paragraph } from "../components/typography/Paragraph";

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
              <LoginFormHeader>
                <H3>Create account</H3>
                <LoginFormHeaderParagph>
                  Please sign up to your personal account if you want to use all
                  our premium products
                </LoginFormHeaderParagph>
              </LoginFormHeader>
              <LoginFormInputWrapper>
                <LoginInput
                  placeholder={"johndoe@email.com"}
                  onChange={() => {}}
                  label={"Your email"}
                />
                <LoginInput
                  placeholder={"Enter your password"}
                  onChange={() => {}}
                  label={"Password"}
                />
              </LoginFormInputWrapper>
              <Link href="">
                <LoginSubmitButton />
              </Link>
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

const LoginSubmitButton = styled(DefaultButton)`
  margin-top: 24px;
`;

const LoginFormHeaderParagph = styled(Paragraph)`
  color: #252631;
`;

const LoginInput = styled(DefaultInput)``;

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
