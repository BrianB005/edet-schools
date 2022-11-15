import React, { useState } from "react";
import styled from "styled-components";
import image3 from "../images/image3.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import BlueButton from "../components/BlueButton";
import NavbarOne from "../components/NavbarOne";
import { BsArrowRight } from "react-icons/bs";
import NavbarTwo from "../components/NavbarTwo";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import LandingSection2 from "../components/LandingSection2";
import LandingSection3 from "../components/LandingSection3";
import LandingSection4 from "../components/LandingSection4";
import Footer from "../components/Footer";
const LandingPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <Wrapper>
      <Navbars>
        <NavbarOne />
        <NavbarTwo openSidebar={openSidebar} />
        <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} />
      </Navbars>
      <ContentWrapper>
        <Left>
          <Subtitle>WELCOME TO EDET Schools</Subtitle>
          <Title>Experience School Networks at its Peak</Title>
          <Buttons>
            <Link to="/search">
              <BlueButton title="Search schools" />
            </Link>
            <Link to="/blog">
              <ReadBlog href="/blog">
                <h3>Read our blog</h3>
                <div>
                  <BsArrowRight />
                </div>
              </ReadBlog>
            </Link>
          </Buttons>
        </Left>
        <Right>
          <Images>
            <Image1 src={image3} alt="Student image 1" />
            <Image2 src={image6} alt="Student image 2" />
          </Images>
          <Images>
            <Image3 src={image7} alt="Student image 3" />
            <Image4 src={image3} alt="Student image 4" />
          </Images>
        </Right>
      </ContentWrapper>
      <SectionWrapper>
        <LandingSection2 />
      </SectionWrapper>
      <SectionWrapper>
        <LandingSection3 />
      </SectionWrapper>
      <SectionWrapper>
        <LandingSection4 />
      </SectionWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const Navbars = styled.div`
  display: flex;
  flex-direction: column;
`;
const SectionWrapper = styled.div`
  /* @media screen and (min-width: 1150px) {
    padding: 30px 100px;
  } */
  @media screen and (max-width: 1150px) {
    padding: 20px;
  }

  @media screen and (min-width: 1150px) {
    padding: 30px 100px;
  }
`;
const FooterWrapper = styled.div`
  @media screen and (min-width: 1150px) {
    padding: 10px 100px;
  }
  @media screen and (max-width: 1150px) {
    padding: 10px 20px;
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 100px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
    padding: 0 20px;
    /* margin-bottom: 20px; */
  }
`;
// const LargeImage = styled.img`
//   object-fit: cover;
//   border-radius: 20px;
// `;
// const Logo = styled.img`
//   object-fit: cover;
//   border-radius: 50%;
//   width: 60%;
// `;
// const Title2 = styled.h1`
//   font-family: "DM Serif Display";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 36px;
//   line-height: 72px;
//   /* identical to box height, or 200% */
//   display: flex;
//   align-items: center;

//   color: #000000;
// `;
// const Text = styled.h2`
//   font-family: "DM Serif Display";
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 30px;
//   display: flex;
//   align-items: center;
//   color: #000000;
// `;
// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;

//   background: #3d3af8;
//   display:grid;
//   place-items:center;
//   color:white;
// `;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 1150px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 1150px) {
    margin-top: 30px;
    width: 100%;
    align-items: flex-start;
  }
`;
const Subtitle = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  color: #141414;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  max-width: 615px;
  font-size: 64px;
  line-height: 80px;
  color: #141414;
  margin-bottom: 20px;

  @media screen and (max-width: 700px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media screen and (max-width: 500px) {
    font-size: 45px;
    line-height: 50px;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1150px) {
    /* flex-direction: column; */
    align-self: flex-start;
    align-items: center;
  }
`;
const ReadBlog = styled.a`
  margin-left: 50px;
  display: flex;
  padding: 10px;
  align-items: center;

  transition: all 0.9s linear;

  h3 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    color: #141414;
  }
  div {
    color: #141414;
    margin-left: 10px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const Image1 = styled.img`
  width: 250px;
  height: 250px;
  margin-right: 20px;
  border-radius: 15px;
  object-fit: cover;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Image2 = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Image3 = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  object-fit: cover;
  margin-right: 20px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Image4 = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Images = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  @media screen and (max-width: 500px) {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default LandingPage;
