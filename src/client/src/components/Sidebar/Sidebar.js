import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { RiFileCopy2Fill } from "react-icons/ri";
import { IoExit } from "react-icons/io5";

const Sidebar = ({id}) => {
    return (
        <div className="col-md-4 col-lg-3 pr-md-4">
            <ul className="sidebar__menu">
              <li className="sidebar__item pl-md-2 pr-md-0">
                <NavLink exact to={`/dashboard/${id}`} activeClassName="sidebar--sidebar--active" className='sidebar__link'>
                  Dashboard
                </NavLink>
                  <span className='sidebar__icon'>
                    <AiFillDashboard />
                  </span>
              </li>
              <li className="sidebar__item">
                <NavLink exact to={`/dashboard/${id}/perfil`} activeClassName="sidebar--active" className='sidebar__link'>
                  Mi perfil
                  <span className='sidebar__icon'>
                    <FaUser />
                  </span>
                </NavLink>
              </li>
              <li className="sidebar__item">
                <NavLink exact to={`/dashboard/${id}/postulaciones`} activeClassName="sidebar--active" className='sidebar__link'>
                  Mis postulaciones
                  <span className='sidebar__icon'>
                    <RiFileCopy2Fill />
                  </span>
                </NavLink>
              </li>
              <li className="sidebar__item">
                <NavLink exact to={`/dashboard/${id}/guardado`} activeClassName="sidebar--active" className='sidebar__link'>
                  Guardados
                  <span className='sidebar__icon'>
                    <MdOutlineWork />
                  </span>
                </NavLink>
              </li>
              <li className="sidebar__item">
                <NavLink exact to='' activeClassName="sidebar--active" className='sidebar__link'>
                  Salir
                  <span className='sidebar__icon'>
                    <IoExit />
                  </span>
                </NavLink>
              </li>
            </ul>
        </div>
    );
};

export default Sidebar;
