import React from 'react';
import './Topnavbar.css';
import { Bell } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import logo from '../../Images/Logo.png';
import profile from '../../Images/profile.png';

function Topnavbar() {
  return (
    <div className="navbar">
      {/* Left Section */}
      <div className="left">
        <div
          data-layer="Rectangle 1"
          className="Rectangle1"
          style={{ width: 1200, height: 70, background: 'white' }}
        />
        <img className="logo" src={logo} alt="Logo" style={{ width: '100px' }} />
      </div>

      {/* Right Section */}
      <div className="right">
        <div
          className="divider"
          style={{
            width: 50,
            height: 0,
            transform: 'rotate(90deg)',
            transformOrigin: '0 0',
            opacity: 0.2,
            border: '1px black solid',
          }}
        ></div>

        {/* Bell Icon */}
        <Bell style={{ padding: '8px' }} />

        {/* Profile Information */}
        <div className="profile-info">
          <h5
            style={{
              color: 'black',
              fontSize: '12px',
              fontFamily: 'Roboto',
              fontWeight: '500',
              margin: '0',
            }}
          >
            Daniel Roberts
          </h5>
          <h6
            style={{
              opacity: 0.5,
              color: 'black',
              fontSize: '10px',
              fontFamily: 'Roboto',
              fontWeight: '400',
              margin: '0',
              lineHeight: '11.72px',
            }}
          >
            Receptionist
          </h6>
        </div>

        {/* Profile Picture */}
        <img
          style={{
            width: 36,
            height: 36,
            borderRadius: '9999px',
            margin: '0 10px',
          }}
          src={profile}
          alt="Profile"
        />

        {/* Chevron Icon */}
        <ChevronDown style={{ padding: '8px' }} />
      </div>
    </div>
  );
}

export default Topnavbar;
