import React from 'react'
import "../css/header.css"
import logo from "../img/i_cloud.png"
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';

const Header = ({photoURL}) => {
  return (
    <div className="header">
        <div className="header__logo">
            <img src={logo} alt="logo" />
            <span>i Cloud</span>
        </div>
        <div className="header__search">
            <SearchIcon/>
            <input type="text" placeholder="Search in i Cloud"/>
            <FormatAlignCenterIcon/>
        </div>
        <div className="header__icons">
            <span>
              <HelpOutlineIcon/>
              <SettingsIcon/>
            </span>
              
            <span>
              <AppsIcon/>
              <Avatar src={photoURL}/>
            </span>
        </div>
    </div>
  )
}

export default Header