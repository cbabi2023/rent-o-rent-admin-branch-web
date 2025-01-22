import React from 'react'
import './Sidenavbar.css'
function Sidenavbar() {
  return (
    <div>
        <div className="sidebar">
      <a href="#" className="active">
        <i className="bi bi-grid"></i> Dashboard
      </a>
      <a href="#">
        <i className="bi bi-box"></i> Orders
      </a>
      <a href="#">
        <i className="bi bi-cart"></i> Equipments
      </a>
      <a href="#">
        <i className="bi bi-person"></i> Customers
      </a>
      <a href="#">
        <i className="bi bi-building"></i> Branch
      </a>
      <a href="#">
        <i className="bi bi-clipboard"></i> Reports
      </a>
      <a href="#">
        <i className="bi bi-chat-dots"></i> Feedbacks
      </a>
    </div>
    </div>
  )
}

export default Sidenavbar