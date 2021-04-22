import '../dashboard/SideNavbar.css'


const Sidebar = ({sidebarOpen, closeSidebar}) =>{
    return (
        <>
            <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
                <div className="sidebar__title">
                    <div className="sidebar__img">
                    </div>

                    <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>

                </div>
                <div className="sidebar__menu">
                    <div className="sidebar__link active_menu_link">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="sidebar__link">
                        <a href="#">Admin management</a>
                    </div>
                    <div className="sidebar__link">
                        
                        <a href="#">Company management</a>
                    </div>
                    <div className="sidebar__link">
                        
                        <a href="#">Employee management</a>
                    </div>
                    <div className="sidebar__link">
                        <a href="#">Warehouse</a>
                    </div>
                    <div className="sidebar__link">
                        <a href="#">Contracts</a>
                    </div>
                    
                    <div className="sidebar__link">
                        <i link="fa fa-question"></i>
                        <a href="#">Requests</a>
                    </div>

                    <div className="sidebar__link">
                        <a href="#">Leave policy</a>
                    </div>

                    <div className="sidebar__link">
                        <a href="#">Special days</a>
                    </div>

                    <div className="sidebar__link">
                        <a href="#">Apply for leave</a>
                    </div>

                    <div className="sidebar__link">
                        <a href="#">Payroll</a>
                    </div>
                    <div className="sidebar__link">
                        <a href="#">PayGrade</a>
                    </div>
                    <div className="sidebar__link">
                        <a href="#">ABC</a>
                    </div>
                    <div className="sidebar__link">
                        <a href="#">XYZ</a>
                    </div>
                    <div className="sidebar__link">
                        <a href="#">VHB</a>
                    </div>
                    <div className="sidebar__link">
                        <a href="#">VHB</a>
                    </div>
                    <div className="sidebar__link">
                        <a href="#">LogOut</a>
                    </div>
                   
                </div>
            </div>
        </>
    );

}
export default Sidebar;