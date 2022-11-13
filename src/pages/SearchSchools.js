import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Loader from "../components/Loader";
import NavbarOne from "../components/NavbarOne";
import NavbarTwo from "../components/NavbarTwo";
import Searchbar from "../components/Searchbar";

import SearchResult from "../components/SearchResult";

const SearchSchools = () => {
  const { loading, schools } = useSelector((state) => state.schools);

  return (
    <Wrapper>
      <NavbarOne />
      <NavbarTwo />
      <ContentWrapper>
        <Intro>
          <IntroTitle>
            Search in-network schools, facilities, and propietors
          </IntroTitle>
          <IntroSubtitle>
            2022 · Individual · Lagos · Individual Lagos ·
            <span> Change network</span>
          </IntroSubtitle>
        </Intro>
        <Searchbar />

        <Schools>
          {loading ? (
            <Loader />
          ) : schools?.length === 0 ? (
            <h1>No schools matched your query</h1>
          ) : (
            schools?.map((school) => (
              <SearchResult key={school._id} {...school} />
            ))
          )}
        </Schools>
      </ContentWrapper>
    </Wrapper>
  );
};

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  margin-top: 20px;
  position: sticky;
`;
const IntroTitle = styled.h1`
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  color: #141414;
`;
const IntroSubtitle = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  color: #141414;
  span {
    color: #0074ba;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const ContentWrapper = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 10px;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Schools = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SearchSchools;
