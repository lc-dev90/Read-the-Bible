import React from "react";
import styled from "styled-components";
import { Search } from "@styled-icons/bootstrap/Search";
import { Menu } from "@styled-icons/ionicons-solid/Menu";

//Components
import Logo from "../images/logo-clean.png";

const Navbar = () => {
  return (
    <Nav>
      <div className="container">
        <div className="logo-container">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <h3>
            <span>Bible</span> read the
          </h3>
        </div>
        <div className="search-container">
          <form>
            <label>
              <input type="text" placeholder="Search.." />
            </label>

            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>
        <div className="menu-container">
          <button>
            <MenuIcon />
          </button>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const SearchIcon = styled(Search)`
  color: #4c5358;
  width: 18px;
  height: 18px;
  pointer-events: none;
`;

const MenuIcon = styled(Menu)`
  color: black;
`;

const Nav = styled.header`
  height: 65px;
  /* #ebf2f4 color background*/
  background-color: white;
  .container {
    display: flex;
    max-width: 1120px;
    margin: 0 auto;
    justify-content: space-between;

    .menu-container {
      display: flex;
      align-items: center;

      button {
        width: 50px;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
    .search-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: -1px;
      form {
        position: relative;
        button {
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          cursor: pointer;
          border: none;
          background-color: transparent;
          position: absolute;
          width: 34px;
          width: 50px;
          height: 100%;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          &:hover {
            background-color: #eae9ea;
          }
        }
        label {
          input {
            background-color: #f2f4f4;
            border: none;
            border-radius: 5px;
            border: 1px solid #f2f3f4;
            font-size: 15px;
            outline: none;
            color: #4c5358;
            padding: 0.7rem 80px 0.7rem 13px;
            width: 350px;
          }
        }
      }
    }
    .logo-container {
      display: flex;
      align-items: center;
      cursor: pointer;
      div {
        width: 50px;
        img {
          width: 100%;
        }
        margin-right: 2px;
      }

      h3 {
        font-size: 10px;
        font-weight: 400;
        color: gray;
        span {
          font-size: 29px;
          display: block;
          font-family: "Alex Brush", cursive;
          color: #091125;
          margin-top: 5px;
          margin-bottom: -10px;
        }
      }
    }
  }
`;
