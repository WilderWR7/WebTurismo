import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header className="topbar">
      <nav className="navbar top-navbar navbar-expand-md navbar-light">
        {/* <!-- ============================================================== -->
        <!-- Logo -->
        <!-- ============================================================== --> */}
        <div className="navbar-header">
            <a className="navbar-brand" href="index2.html">
                    {/*<!-- Dark Logo icon --> */}
                    <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                    {/* <!-- Light Logo icon --> */}
                    <img src="../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                {/* <!--End Logo icon --> */}
                {/* <!-- Logo text --> */}
                <span>
                    {/* <!-- dark Logo text --> */}
                    <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                    {/* <!-- Light Logo text --> */}
                    <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
                </span>
            </a>
        </div>
        {/* <!-- ============================================================== -->
        <!-- End Logo -->
        <!-- ============================================================== --> */}
        <div className="navbar-collapse">
            {/* <!-- ============================================================== --> */}
            {/* <!-- toggle and nav items --> */}
            {/* <!-- ============================================================== --> */}
            <ul className="navbar-nav mr-auto">
                {/* <!-- This is  --> */}
                <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark"
                        href="javascript:void(0)"><i className="ti-menu"></i></a> </li>
                <li className="nav-item"> <a className="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark"
                        href="javascript:void(0)"><i className="ti-menu"></i></a> </li>

            </ul>
            {/* <!-- User profile and search --> */}
            <ul className="navbar-nav my-lg-0">
                {/* <!-- ============================================================== -->
                <!-- Profile -->
                <!-- ============================================================== --> */}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false"><img src="../assets/images/users/1.jpg"
                            alt="user" className="profile-pic" /></a>
                    <div className="dropdown-menu dropdown-menu-right animated flipInY">
                        <ul className="dropdown-user">
                            <li>
                                <div className="dw-user-box">
                                    <div className="u-img"><img src="../assets/images/users/1.jpg" alt="user"/></div>
                                    <div className="u-text">
                                        <h4>Steave Jobs</h4>
                                        <p className="text-muted">varun@gmail.com</p><a href="pages-profile.html"
                                            className="btn btn-rounded btn-danger btn-sm">View Profile</a>
                                    </div>
                                </div>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#"><i className="ti-user"></i> My Profile</a></li>
                            <li><a href="#"><i className="ti-wallet"></i> My Balance</a></li>
                            <li><a href="#"><i className="ti-email"></i> Inbox</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#"><i className="ti-settings"></i> Account Setting</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#"><i className="fa fa-power-off"></i> Logout</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
  </header>
);
}

export default App;
