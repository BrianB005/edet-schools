import React from "react";
import styled from "styled-components";
const FeaturedSchool = () => {
  return (
    <Wrapper>
      <Image src="https://res.cloudinary.com/dpdtbtb87/image/upload/v1668338052/vlaxhuyyxnxbj38sjv3g.jpg" />
      <VerticalWrapper>
        <Motto>In the end we all get what we deserve</Motto>
        <Description>
          Schools can celebrate their accomplishments, showcase their challenges
          to interested stakeholders like former pupils, inform parents on their
          events and activities calendar for the year as well as let the world
          know of their future plans.
        </Description>
      </VerticalWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  width: 100%;
  border-radius: 40px;
  background-color: #fff;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 800px) {
    border-radius: 20px;
  }
`;
const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Motto = styled.h1`
  font-family: "Test Heldane Display", "Dm Serif Display";
  font-weight: 500;
  font-size: 64px;
  line-height: 80px;
  color: #010021;
  @media screen and (max-width: 800px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

const Description = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  max-width: 643px;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: -0.02em;
  margin: 30px 0;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

const Image = styled.img`
  width: 50%;
  height: 500px;
  margin-right: 40px;
  object-fit: center;
  @media screen and (max-width: 1150px) {
    margin-bottom: 30px;
    width: 100%;
  }
`;

export default FeaturedSchool;
