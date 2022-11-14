import React, { useEffect, useState } from "react";
import school_logo from "./school_logo.png";
import styled from "styled-components";
import { pageLinks } from "../data/pageLinks";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import useScrollPosition from "@react-hook/window-scroll";
const NavbarTwo = ({ openSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollY = useScrollPosition(40);
  useEffect(() => {
    setIsScrolled(scrollY > 600 ? "true" : "false");
  }, [scrollY]);
  return (
    <Wrapper fixed={isScrolled}>
      <Link to="/">
        <Logo src={school_logo} alt="Logo" />
      </Link>
      <Links>
        {pageLinks.map((pageLink) => (
          <Link to={pageLink.url}>
            <PageLink key={pageLink.id}>{pageLink.name}</PageLink>
          </Link>
        ))}
      </Links>
      <NavToggle>
        <FaBars onClick={openSidebar} />
      </NavToggle>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  height: 120px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  position: ${({ fixed }) => fixed === "true" && "fixed"};
  @media screen and (max-width: 1150px) {
    padding: 0 20px;
  }
`;
const NavToggle = styled.div`
  cursor: pointer;
  color: #141414;
  padding-right: 20px;
  transition: all 0.6s linear;
  font-size: 37px;
  @media screen and (min-width: 800px) {
    display: none;
  }
  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;
const Logo = styled.img`
  width: 75px;
  height: 75px;
  cursor: pointer;
  object-fit: cover;
`;
const Links = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const PageLink = styled.div`
  font-family: "DM Sans";
  font-style: normal;
  height: 100%;
  padding: 25px;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #141414;
  margin-right: 40px;
  transition: all 0.5s linear;
  &:hover {
    opacity: 0.8;
  }
`;
export default NavbarTwo;
