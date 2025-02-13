import React from 'react'

const ThemeTest = () => {
  return (
    <div>
     
  <div className="container-scroller">
 
  <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
      <a className="navbar-brand brand-logo me-5" href="index.html"><img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/logo.svg" className="me-2" alt="logo" /></a>
      <a className="navbar-brand brand-logo-mini" href="index.html"><img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/logo-mini.svg" alt="logo" /></a>
    </div>
    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
      <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
        <span className="icon-menu" />
      </button>
      <ul className="navbar-nav mr-lg-2">
        <li className="nav-item nav-search d-none d-lg-block">
          <div className="input-group">
            <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
              <span className="input-group-text" id="search">
                <i className="icon-search" />
              </span>
            </div>
            <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" />
          </div>
        </li>
      </ul>
      <ul className="navbar-nav navbar-nav-right">
        <li className="nav-item dropdown">
          <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
            <i className="icon-bell mx-0" />
            <span className="count" />
          </a>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
            <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-success">
                  <i className="ti-info-alt mx-0" />
                </div>
              </div>
              <div className="preview-item-content">
                <h6 className="preview-subject font-weight-normal">Application Error</h6>
                <p className="font-weight-light small-text mb-0 text-muted">
                  Just now
                </p>
              </div>
            </a>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-warning">
                  <i className="ti-settings mx-0" />
                </div>
              </div>
              <div className="preview-item-content">
                <h6 className="preview-subject font-weight-normal">Settings</h6>
                <p className="font-weight-light small-text mb-0 text-muted">
                  Private message
                </p>
              </div>
            </a>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-info">
                  <i className="ti-user mx-0" />
                </div>
              </div>
              <div className="preview-item-content">
                <h6 className="preview-subject font-weight-normal">New user registration</h6>
                <p className="font-weight-light small-text mb-0 text-muted">
                  2 days ago
                </p>
              </div>
            </a>
          </div>
        </li>
        <li className="nav-item nav-profile dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" id="profileDropdown">
            <img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/faces/face28.jpg" alt="profile" />
          </a>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
            <a className="dropdown-item">
              <i className="ti-settings text-primary" />
              Settings
            </a>
            <a className="dropdown-item">
              <i className="ti-power-off text-primary" />
              Logout
            </a>
          </div>
        </li>
        <li className="nav-item nav-settings d-none d-lg-flex">
          <a className="nav-link" href="#">
            <i className="icon-ellipsis" />
          </a>
        </li>
      </ul>
      <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span className="icon-menu" />
      </button>
    </div>
  </nav>
  {/* partial */}
  <div className="container-fluid page-body-wrapper">
    {/* partial:partials/_settings-panel.html */}
    <div className="theme-setting-wrapper">
      <div id="settings-trigger"><i className="ti-settings" /></div>
      <div id="theme-settings" className="settings-panel">
        <i className="settings-close ti-close" />
        <p className="settings-heading">SIDEBAR SKINS</p>
        <div className="sidebar-bg-options selected" id="sidebar-light-theme">
          <div className="img-ss rounded-circle bg-light border me-3" />Light
        </div>
        <div className="sidebar-bg-options" id="sidebar-dark-theme">
          <div className="img-ss rounded-circle bg-dark border me-3" />Dark
        </div>
        <p className="settings-heading mt-2">HEADER SKINS</p>
        <div className="color-tiles mx-0 px-4">
          <div className="tiles success" />
          <div className="tiles warning" />
          <div className="tiles danger" />
          <div className="tiles info" />
          <div className="tiles dark" />
          <div className="tiles default" />
        </div>
      </div>
    </div>
    <div id="right-sidebar" className="settings-panel">
      <i className="settings-close ti-close" />
      <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="todo-tab" data-bs-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="chats-tab" data-bs-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
        </li>
      </ul>
      <div className="tab-content" id="setting-content">
        <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
          <div className="add-items d-flex px-3 mb-0">
            <form className="form w-100">
              <div className="form-group d-flex">
                <input type="text" className="form-control todo-list-input" placeholder="Add To-do" />
                <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
              </div>
            </form>
          </div>
          <div className="list-wrapper px-3">
            <ul className="d-flex flex-column-reverse todo-list">
              <li>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="checkbox" type="checkbox" />
                    Team review meeting at 3.00 PM
                  </label>
                </div>
                <i className="remove ti-close" />
              </li>
              <li>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="checkbox" type="checkbox" />
                    Prepare for presentation
                  </label>
                </div>
                <i className="remove ti-close" />
              </li>
              <li>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="checkbox" type="checkbox" />
                    Resolve all the low priority tickets due today
                  </label>
                </div>
                <i className="remove ti-close" />
              </li>
              <li className="completed">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="checkbox" type="checkbox" defaultChecked />
                    Schedule meeting for next week
                  </label>
                </div>
                <i className="remove ti-close" />
              </li>
              <li className="completed">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="checkbox" type="checkbox" defaultChecked />
                    Project review
                  </label>
                </div>
                <i className="remove ti-close" />
              </li>
            </ul>
          </div>
          <h4 className="px-3 text-muted mt-5 font-weight-light mb-0">Events</h4>
          <div className="events pt-4 px-3">
            <div className="wrapper d-flex mb-2">
              <i className="ti-control-record text-primary me-2" />
              <span>Feb 11 2018</span>
            </div>
            <p className="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
            <p className="text-gray mb-0">The total number of sessions</p>
          </div>
          <div className="events pt-4 px-3">
            <div className="wrapper d-flex mb-2">
              <i className="ti-control-record text-primary me-2" />
              <span>Feb 7 2018</span>
            </div>
            <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
            <p className="text-gray mb-0 ">Call Sarah Graves</p>
          </div>
        </div>
        {/* To do section tab ends */}
        <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
          <div className="d-flex align-items-center justify-content-between border-bottom">
            <p className="settings-heading border-top-0 mb-3 ps-3 pt-0 border-bottom-0 pb-0">Friends</p>
            <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See
              All</small>
          </div>
          <ul className="chat-list">
            <li className="list active">
              <div className="profile"><img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/faces/face1.jpg" alt="image" /><span className="online" /></div>
              <div className="info">
                <p>Thomas Douglas</p>
                <p>Available</p>
              </div>
              <small className="text-muted my-auto">19 min</small>
            </li>
            <li className="list">
              <div className="profile"><img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/faces/face2.jpg" alt="image" /><span className="offline" /></div>
              <div className="info">
                <div className="wrapper d-flex">
                  <p>Catherine</p>
                </div>
                <p>Away</p>
              </div>
              <div className="badge badge-success badge-pill my-auto mx-2">4</div>
              <small className="text-muted my-auto">23 min</small>
            </li>
            <li className="list">
              <div className="profile"><img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/faces/face3.jpg" alt="image" /><span className="online" /></div>
              <div className="info">
                <p>Daniel Russell</p>
                <p>Available</p>
              </div>
              <small className="text-muted my-auto">14 min</small>
            </li>
            <li className="list">
              <div className="profile"><img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/faces/face4.jpg" alt="image" /><span className="offline" /></div>
              <div className="info">
                <p>James Richardson</p>
                <p>Away</p>
              </div>
              <small className="text-muted my-auto">2 min</small>
            </li>
            <li className="list">
              <div className="profile"><img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/faces/face5.jpg" alt="image" /><span className="online" /></div>
              <div className="info">
                <p>Madeline Kennedy</p>
                <p>Available</p>
              </div>
              <small className="text-muted my-auto">5 min</small>
            </li>
            <li className="list">
              <div className="profile"><img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/faces/face6.jpg" alt="image" /><span className="online" /></div>
              <div className="info">
                <p>Sarah Graves</p>
                <p>Available</p>
              </div>
              <small className="text-muted my-auto">47 min</small>
            </li>
          </ul>
        </div>
        {/* chat tab ends */}
      </div>
    </div>
    {/* partial */}
    {/* partial:partials/_sidebar.html */}
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="icon-grid menu-icon" />
            <span className="menu-title">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pages/widgets/widgets.html">
            <i className="icon-cog menu-icon" />
            <span className="menu-title">Widgets</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
            <i className="icon-layout menu-icon" />
            <span className="menu-title">UI Elements</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/accordions.html">Accordions</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/badges.html">Badges</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/breadcrumbs.html">Breadcrumbs</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/modals.html">Modals</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/progress.html">Progress bar</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/pagination.html">Pagination</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/tabs.html">Tabs</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/tooltips.html">Tooltips</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#ui-advanced" aria-expanded="false" aria-controls="ui-advanced">
            <i className="icon-image menu-icon" />
            <span className="menu-title">Advanced UI</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="ui-advanced">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dragula.html">Dragula</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/clipboard.html">Clipboard</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/context-menu.html">Context menu</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/slider.html">Sliders</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/carousel.html">Carousel</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/colcade.html">Colcade</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/ui-features/loaders.html">Loaders</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
            <i className="icon-columns menu-icon" />
            <span className="menu-title">Form elements</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="form-elements">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
              <li className="nav-item"><a className="nav-link" href="pages/forms/advanced_elements.html">Advanced Elements</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="pages/forms/validation.html">Validation</a></li>
              <li className="nav-item"><a className="nav-link" href="pages/forms/wizard.html">Wizard</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#editors" aria-expanded="false" aria-controls="editors">
            <i className="icon-loader menu-icon" />
            <span className="menu-title">Editors</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="editors">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><a className="nav-link" href="pages/forms/text_editor.html">Text editors</a></li>
              <li className="nav-item"><a className="nav-link" href="pages/forms/code_editor.html">Code editors</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
            <i className="icon-bar-graph menu-icon" />
            <span className="menu-title">Charts</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="charts">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/charts/morris.html">Morris</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/charts/flot-chart.html">Flot</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/charts/google-charts.html">Google charts</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/charts/sparkline.html">Sparkline js</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/charts/c3.html">C3 charts</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/charts/chartist.html">Chartists</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/charts/justGage.html">JustGage</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
            <i className="icon-grid-2 menu-icon" />
            <span className="menu-title">Tables</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="tables">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/tables/data-table.html">Data table</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/tables/js-grid.html">Js-grid</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/tables/sortable-table.html">Sortable table</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pages/ui-features/popups.html">
            <i className="icon-open menu-icon" />
            <span className="menu-title">Popups</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pages/ui-features/notifications.html">
            <i className="icon-esc menu-icon" />
            <span className="menu-title">Notifications</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
            <i className="icon-contract menu-icon" />
            <span className="menu-title">Icons</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="icons">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/icons/flag-icons.html">Flag icons</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/icons/font-awesome.html">Font Awesome</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/icons/simple-line-icon.html">Simple line icons</a>
              </li>
              <li className="nav-item"> <a className="nav-link" href="pages/icons/themify.html">Themify icons</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#maps" aria-expanded="false" aria-controls="maps">
            <i className="icon-map menu-icon" />
            <span className="menu-title">Maps</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="maps">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/maps/mapael.html">Mapael</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/maps/vector-map.html">Vector Map</a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/maps/google-maps.html">Google Map</a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
            <i className="icon-head menu-icon" />
            <span className="menu-title">User Pages</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/login-2.html"> Login 2 </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/register-2.html"> Register 2 </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/lock-screen.html"> Lockscreen </a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
            <i className="icon-ban menu-icon" />
            <span className="menu-title">Error pages</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="error">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
            <i className="icon-book menu-icon" />
            <span className="menu-title">General Pages</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="general-pages">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/profile.html"> Profile </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/faq.html"> FAQ </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/faq-2.html"> FAQ 2 </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/news-grid.html"> News grid </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/timeline.html"> Timeline </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/search-results.html"> Search Results </a>
              </li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/portfolio.html"> Portfolio </a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="collapse" href="#e-commerce" aria-expanded="false" aria-controls="e-commerce">
            <i className="icon-tag menu-icon" />
            <span className="menu-title">E-commerce</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="e-commerce">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/samples/invoice.html"> Invoice </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/pricing-table.html"> Pricing Table </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/orders.html"> Orders </a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pages/apps/email.html">
            <i className="icon-mail menu-icon" />
            <span className="menu-title">E-mail</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pages/apps/calendar.html">
            <i className="icon-watch menu-icon" />
            <span className="menu-title">Calendar</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pages/apps/todo.html">
            <i className="icon-align-right menu-icon" />
            <span className="menu-title">Todo List</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="pages/apps/gallery.html">
            <i className="icon-image menu-icon" />
            <span className="menu-title">Gallery</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://demo.bootstrapdash.com/skydash/docs/documentation.html">
            <i className="icon-paper menu-icon" />
            <span className="menu-title">Documentation</span>
          </a>
        </li>
      </ul>
    </nav>
    {/* partial */}
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="row">
              <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                <h3 className="font-weight-bold">Welcome John</h3>
                <h6 className="font-weight-normal mb-0">All systems are running smoothly! You have <span className="text-primary">3
                    unread alerts!</span></h6>
              </div>
              <div className="col-12 col-xl-4">
                <div className="justify-content-end d-flex">
                  <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                    <button className="btn btn-sm btn-light bg-white dropdown-toggle" type="button" id="dropdownMenuDate2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <i className="mdi mdi-calendar" /> Today (10 Jan 2021)
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                      <a className="dropdown-item" href="#">January - March</a>
                      <a className="dropdown-item" href="#">March - June</a>
                      <a className="dropdown-item" href="#">June - August</a>
                      <a className="dropdown-item" href="#">August - November</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card tale-bg">
              <div className="card-people mt-auto">
                <img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/dashboard/people.svg" alt="people" />
                <div className="weather-info">
                  <div className="d-flex">
                    <div>
                      <h2 className="mb-0 font-weight-normal"><i className="icon-sun me-2" />31<sup>C</sup></h2>
                    </div>
                    <div className="ms-2">
                      <h4 className="location font-weight-normal">Chicago</h4>
                      <h6 className="font-weight-normal">Illinois</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin transparent">
            <div className="row">
              <div className="col-md-6 mb-4 stretch-card transparent">
                <div className="card card-tale">
                  <div className="card-body">
                    <p className="mb-4">Today’s Bookings</p>
                    <p className="fs-30 mb-2">4006</p>
                    <p>10.00% (30 days)</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 stretch-card transparent">
                <div className="card card-dark-blue">
                  <div className="card-body">
                    <p className="mb-4">Total Bookings</p>
                    <p className="fs-30 mb-2">61344</p>
                    <p>22.00% (30 days)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                <div className="card card-light-blue">
                  <div className="card-body">
                    <p className="mb-4">Number of Meetings</p>
                    <p className="fs-30 mb-2">34040</p>
                    <p>2.00% (30 days)</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 stretch-card transparent">
                <div className="card card-light-danger">
                  <div className="card-body">
                    <p className="mb-4">Number of Clients</p>
                    <p className="fs-30 mb-2">47033</p>
                    <p>0.22% (30 days)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <p className="card-title">Order Details</p>
                <p className="font-weight-500">The total number of sessions within the date range. It is the period time a
                  user is actively engaged with your website, page or app, etc</p>
                <div className="d-flex flex-wrap mb-5">
                  <div className="me-5 mt-3">
                    <p className="text-muted">Order value</p>
                    <h3 className="text-primary fs-30 font-weight-medium">12.3k</h3>
                  </div>
                  <div className="me-5 mt-3">
                    <p className="text-muted">Orders</p>
                    <h3 className="text-primary fs-30 font-weight-medium">14k</h3>
                  </div>
                  <div className="me-5 mt-3">
                    <p className="text-muted">Users</p>
                    <h3 className="text-primary fs-30 font-weight-medium">71.56%</h3>
                  </div>
                  <div className="mt-3">
                    <p className="text-muted">Downloads</p>
                    <h3 className="text-primary fs-30 font-weight-medium">34040</h3>
                  </div>
                </div>
                <canvas id="order-chart" />
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="card-title">Sales Report</p>
                  <a href="#" className="text-info">View all</a>
                </div>
                <p className="font-weight-500">The total number of sessions within the date range. It is the period time a
                  user is actively engaged with your website, page or app, etc</p>
                <div id="sales-chart-legend" className="chartjs-legend mt-4 mb-2" />
                <canvas id="sales-chart" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card position-relative">
              <div className="card-body">
                <div id="detailedReports" className="carousel slide detailed-report-carousel position-static pt-2" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                          <div className="ml-xl-4 mt-3">
                            <p className="card-title">Detailed Reports</p>
                            <h1 className="text-primary">$34040</h1>
                            <h3 className="font-weight-500 mb-xl-4 text-primary">North America</h3>
                            <p className="mb-2 mb-xl-0">The total number of sessions within the date range. It is the
                              period time a user is actively engaged with your website, page or app, etc</p>
                          </div>
                        </div>
                        <div className="col-md-12 col-xl-9">
                          <div className="row">
                            <div className="col-md-6 border-right">
                              <div className="table-responsive mb-3 mb-md-0 mt-3">
                                <table className="table table-borderless report-table">
                                  <tbody><tr>
                                      <td className="text-muted">Illinois</td>
                                      <td className="w-100 px-0">
                                        <div className="progress progress-md mx-4">
                                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                      </td>
                                      <td>
                                        <h5 className="font-weight-bold mb-0">713</h5>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-muted">Washington</td>
                                      <td className="w-100 px-0">
                                        <div className="progress progress-md mx-4">
                                          <div className="progress-bar bg-warning" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                      </td>
                                      <td>
                                        <h5 className="font-weight-bold mb-0">583</h5>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-muted">Mississippi</td>
                                      <td className="w-100 px-0">
                                        <div className="progress progress-md mx-4">
                                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                      </td>
                                      <td>
                                        <h5 className="font-weight-bold mb-0">924</h5>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-muted">California</td>
                                      <td className="w-100 px-0">
                                        <div className="progress progress-md mx-4">
                                          <div className="progress-bar bg-info" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                      </td>
                                      <td>
                                        <h5 className="font-weight-bold mb-0">664</h5>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-muted">Maryland</td>
                                      <td className="w-100 px-0">
                                        <div className="progress progress-md mx-4">
                                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                      </td>
                                      <td>
                                        <h5 className="font-weight-bold mb-0">560</h5>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-muted">Alaska</td>
                                      <td className="w-100 px-0">
                                        <div className="progress progress-md mx-4">
                                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                      </td>
                                      <td>
                                        <h5 className="font-weight-bold mb-0">793</h5>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </div>
                            </div>
                            <div className="col-md-6 mt-3">
                              <div className="daoughnutchart-wrapper">
                                <canvas id="north-america-chart" />
                              </div>
                              <div id="north-america-chart-legend">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                          <div className="ml-xl-4 mt-3">
                            <p className="card-title">Detailed Reports</p>
                            <h1 className="text-primary">$34040</h1>
                            <h3 className="font-weight-500 mb-xl-4 text-primary">North America</h3>
                            <p className="mb-2 mb-xl-0">The total number of sessions within the date range. It is the
                              period time a user is actively engaged with your website, page or app, etc</p>
                          </div>
                        </div>
                        <div className="col-md-12 col-xl-9">
                          <div className="row">
                            <div className="col-md-6 border-right">
                              <div className="table-responsive mb-3 mb-md-0 mt-3">
                                <table className="table table-borderless report-table">
                                  <tbody><tr>
                                      <td className="text-muted">Illinois</td>
                                      <td className="w-100 px-0">
                                        <div className="progress progress-md mx-4">
                                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                      </td>
                                      <td>
                                        <h5 className="font-weight-bold mb-0">713</h5>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-muted">Washington</td>
                                      <td className="w-100 px-0">
                                        <div className="progress progress-md mx-4">
                                          <div className="progress-bar bg-warning" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                      </td>
                                      <td>
                                        <h5 className="font-weight-bold mb-0">583</h5>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-muted">Mississippi</td>
                                      <td className="w-100 px-0">
                                        <div className="progress progress-md mx-4">
                                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                      </td>
                                      <td>
                                        <h5 className="font-weight-bold mb-0">924</h5>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-muted">California</td>
                                      <td className="w-100 px-0">
                                        <div className="progress progress-md mx-4">
                                          <div className="progress-bar bg-info" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                      </td>
                                      <td>
                                        <h5 className="font-weight-bold mb-0">664</h5>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-muted">Maryland</td>
                                      <td className="w-100 px-0">
                                        <div className="progress progress-md mx-4">
                                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                      </td>
                                      <td>
                                        <h5 className="font-weight-bold mb-0">560</h5>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-muted">Alaska</td>
                                      <td className="w-100 px-0">
                                        <div className="progress progress-md mx-4">
                                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                      </td>
                                      <td>
                                        <h5 className="font-weight-bold mb-0">793</h5>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </div>
                            </div>
                            <div className="col-md-6 mt-3">
                              <div className="daoughnutchart-wrapper">
                                <canvas id="south-america-chart" />
                              </div>
                              <div id="south-america-chart-legend" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#detailedReports" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                  </a>
                  <a className="carousel-control-next" href="#detailedReports" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <p className="card-title mb-0">Top Products</p>
                <div className="table-responsive">
                  <table className="table table-striped table-borderless">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Search Engine Marketing</td>
                        <td className="font-weight-bold">$362</td>
                        <td>21 Sep 2018</td>
                        <td className="font-weight-medium">
                          <div className="badge badge-success">Completed</div>
                        </td>
                      </tr>
                      <tr>
                        <td>Search Engine Optimization</td>
                        <td className="font-weight-bold">$116</td>
                        <td>13 Jun 2018</td>
                        <td className="font-weight-medium">
                          <div className="badge badge-success">Completed</div>
                        </td>
                      </tr>
                      <tr>
                        <td>Display Advertising</td>
                        <td className="font-weight-bold">$551</td>
                        <td>28 Sep 2018</td>
                        <td className="font-weight-medium">
                          <div className="badge badge-warning">Pending</div>
                        </td>
                      </tr>
                      <tr>
                        <td>Pay Per Click Advertising</td>
                        <td className="font-weight-bold">$523</td>
                        <td>30 Jun 2018</td>
                        <td className="font-weight-medium">
                          <div className="badge badge-warning">Pending</div>
                        </td>
                      </tr>
                      <tr>
                        <td>E-Mail Marketing</td>
                        <td className="font-weight-bold">$781</td>
                        <td>01 Nov 2018</td>
                        <td className="font-weight-medium">
                          <div className="badge badge-danger">Cancelled</div>
                        </td>
                      </tr>
                      <tr>
                        <td>Referral Marketing</td>
                        <td className="font-weight-bold">$283</td>
                        <td>20 Mar 2018</td>
                        <td className="font-weight-medium">
                          <div className="badge badge-warning">Pending</div>
                        </td>
                      </tr>
                      <tr>
                        <td>Social media marketing</td>
                        <td className="font-weight-bold">$897</td>
                        <td>26 Oct 2018</td>
                        <td className="font-weight-medium">
                          <div className="badge badge-success">Completed</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">To Do Lists</h4>
                <div className="list-wrapper pt-2">
                  <ul className="d-flex flex-column-reverse todo-list todo-list-custom">
                    <li>
                      <div className="form-check form-check-flat">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Meeting with Urban Team
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li className="completed">
                      <div className="form-check form-check-flat">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" defaultChecked />
                          Duplicate a project for new customer
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li>
                      <div className="form-check form-check-flat">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Project meeting with CEO
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li className="completed">
                      <div className="form-check form-check-flat">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" defaultChecked />
                          Follow up of team zilla
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                    <li>
                      <div className="form-check form-check-flat">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" />
                          Level up for Antony
                        </label>
                      </div>
                      <i className="remove ti-close" />
                    </li>
                  </ul>
                </div>
                <div className="add-items d-flex mb-0 mt-2">
                  <input type="text" className="form-control todo-list-input" placeholder="Add new task" />
                  <button className="add btn btn-icon text-primary todo-list-add-btn bg-transparent"><i className="icon-circle-plus" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card">
              <div className="card-body">
                <p className="card-title mb-0">Projects</p>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className="ps-0  pb-2 border-bottom">Places</th>
                        <th className="border-bottom pb-2">Orders</th>
                        <th className="border-bottom pb-2">Users</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="ps-0">Kentucky</td>
                        <td>
                          <p className="mb-0"><span className="font-weight-bold me-2">65</span>(2.15%)</p>
                        </td>
                        <td className="text-muted">65</td>
                      </tr>
                      <tr>
                        <td className="ps-0">Ohio</td>
                        <td>
                          <p className="mb-0"><span className="font-weight-bold me-2">54</span>(3.25%)</p>
                        </td>
                        <td className="text-muted">51</td>
                      </tr>
                      <tr>
                        <td className="ps-0">Nevada</td>
                        <td>
                          <p className="mb-0"><span className="font-weight-bold me-2">22</span>(2.22%)</p>
                        </td>
                        <td className="text-muted">32</td>
                      </tr>
                      <tr>
                        <td className="ps-0">North Carolina</td>
                        <td>
                          <p className="mb-0"><span className="font-weight-bold me-2">46</span>(3.27%)</p>
                        </td>
                        <td className="text-muted">15</td>
                      </tr>
                      <tr>
                        <td className="ps-0">Montana</td>
                        <td>
                          <p className="mb-0"><span className="font-weight-bold me-2">17</span>(1.25%)</p>
                        </td>
                        <td className="text-muted">25</td>
                      </tr>
                      <tr>
                        <td className="ps-0">Nevada</td>
                        <td>
                          <p className="mb-0"><span className="font-weight-bold me-2">52</span>(3.11%)</p>
                        </td>
                        <td className="text-muted">71</td>
                      </tr>
                      <tr>
                        <td className="ps-0 pb-0">Louisiana</td>
                        <td className="pb-0">
                          <p className="mb-0"><span className="font-weight-bold me-2">25</span>(1.32%)</p>
                        </td>
                        <td className="pb-0">14</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="row">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">Charts</p>
                    <div className="charts-data">
                      <div className="mt-3">
                        <p className="mb-0">Data 1</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="progress progress-md flex-grow-1 me-4">
                            <div className="progress-bar bg-inf0" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <p className="mb-0">5k</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="mb-0">Data 2</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="progress progress-md flex-grow-1 me-4">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '35%'}} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <p className="mb-0">1k</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="mb-0">Data 3</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="progress progress-md flex-grow-1 me-4">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '48%'}} aria-valuenow={48} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <p className="mb-0">992</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="mb-0">Data 4</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="progress progress-md flex-grow-1 me-4">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <p className="mb-0">687</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 stretch-card grid-margin grid-margin-md-0">
                <div className="card data-icon-card-primary">
                  <div className="card-body">
                    <p className="card-title text-white">Number of Meetings</p>
                    <div className="row">
                      <div className="col-8 text-white">
                        <h3>34040</h3>
                        <p className="text-white font-weight-500 mb-0">The total number of sessions within the date
                          range.It is calculated as the sum . </p>
                      </div>
                      <div className="col-4 background-icon">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card">
              <div className="card-body">
                <p className="card-title">Notifications</p>
                <ul className="icon-data-list">
                  <li>
                    <div className="d-flex">
                      <img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/faces/face1.jpg" alt="user" />
                      <div>
                        <p className="text-info mb-1">Isabella Becker</p>
                        <p className="mb-0">Sales dashboard have been created</p>
                        <small>9:30 am</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/faces/face2.jpg" alt="user" />
                      <div>
                        <p className="text-info mb-1">Adam Warren</p>
                        <p className="mb-0">You have done a great job #TW111</p>
                        <small>10:30 am</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/faces/face3.jpg" alt="user" />
                      <div>
                        <p className="text-info mb-1">Leonard Thornton</p>
                        <p className="mb-0">Sales dashboard have been created</p>
                        <small>11:30 am</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/faces/face4.jpg" alt="user" />
                      <div>
                        <p className="text-info mb-1">George Morrison</p>
                        <p className="mb-0">Sales dashboard have been created</p>
                        <small>8:50 am</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <img src="https://demo.bootstrapdash.com/skydash/themes/assets/images/faces/face5.jpg" alt="user" />
                      <div>
                        <p className="text-info mb-1">Ryan Cortez</p>
                        <p className="mb-0">Herbs are fun and easy to grow.</p>
                        <small>9:00 am</small>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <p className="card-title">Advanced Table</p>
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive">
                      <table id="example" className="display expandable-table" style={{width: '100%'}}>
                        <thead>
                          <tr>
                            <th>Quote#</th>
                            <th>Product</th>
                            <th>Business type</th>
                            <th>Policy holder</th>
                            <th>Premium</th>
                            <th>Status</th>
                            <th>Updated at</th>
                            <th />
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content-wrapper ends */}
      {/* partial:partials/_footer.html */}
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2023.  Premium <a href="../../../../www.bootstrapdash.com/index.html" target="_blank">Bootstrap admin template</a> from BootstrapDash. All rights reserved.</span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted &amp; made with <i className="ti-heart text-danger ms-1" /></span>
        </div>
      </footer>
      {/* partial */}
    </div>
    {/* main-panel ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>


    </div>
  )
}

export default ThemeTest
