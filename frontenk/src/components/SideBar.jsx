import React, { useState } from "react";
import { motion } from "framer-motion";
import { VscPreview } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import { MdDeliveryDining } from "react-icons/md";
import MyNavitem from "./MyNavitem";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ children }) => {
  const navigate = useNavigate();

 
  return (
    <>
      <div className="bg-white scrolling text-black">
        <div className="main-container">
          <motion.div
            animate={{
              width: "290px",
              height: "h-screen",
            }}
            className={`sidebar pr-4`}
          >
            <div className="top_section">
              <h2 className="py-8 px-6 w-full border-2 border-blue-500 font-bold rounded-sm text-center bg-tailtertiary3 text-black flex">
                Ordering Site
              </h2>
            </div>

            {/* Home and Logout button */}
            <div>
              <div className="flex justify-center px-2 text-black font-bold">
                <button
                  className=" bg-tailtertiary py-2 hover:bg-tailtertiary3 w-full rounded-sm"
                  onClick={() => navigate("/dashboard/home")}
                >
                  HOME
                </button>
                <button
                  className="ml-2 py-2 bg-tailtertiary hover:bg-red-600 w-full rounded-sm"
                  onClick={() => navigate("/")}
                >
                  LOGOUT
                </button>
              </div>
            </div>

            {/* routes */}
            <section className="routes">

              
              

               {/* Cart */}
               <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  View Menu
                </button>
                <ul class="dropdown-menu">
                
                  
                  <li>
                    <Link class="dropdown-item" href="#">
                    <MyNavitem
                      path="/dashboard/itemcomp"
                      routename="View Items"
                      icon={<VscPreview />}
                     />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                    <MyNavitem
                      path="/dashboard/cartcomp"
                      routename="View Cart"
                      icon={<VscPreview />}
                     />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                    <MyNavitem
                      path="/dashboard/checkout"
                      routename="Go to checkout"
                      icon={<VscPreview />}
                     />
                    </Link>
                  </li>
                  
                </ul>
              
               
              </div>

            </section>
          </motion.div>

          <main>{children}</main>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SideBar;