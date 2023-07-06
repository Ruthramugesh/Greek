import { academy } from "./academ";

export default function Greek(props: academy) {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            
                <div className="container-fluid">
                    {/* <a className="navbar-brand" */}
                     <img src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg" alt="logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><button style={{backgroundColor: "#ede9fe", color: "#754ffe", marginLeft: "10px"}} className="btn btn"><h6><i style={{fontSize: "10px", marginRight: "10px", marginTop: "10px"}} className="fa fa-list"></i>{props.topbar.category}</h6></button></a>
                            </li>
                            
                            <div className="collapse navbar-collapse" style={{marginLeft: "3cm",fontSize: "0.875rem",color: "black"}}>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.topbar.landing}
                                </a>
                                 </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.topbar.page}
                                </a>
                                 </li>
                                 <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.topbar.account}
                                </a>
                                 </li>
                                 <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   {props.topbar.megamenu}
                                </a>
                                 </li>
                               
                            </div>
            
                        </ul>
                        
                        <div className="d-flex" role="search">
                            <a className="form-check form-switch theme-switch btn btn-light btn-icon rounded-circle undefined" style={{marginRight: "5px"}}>
                                <img src={props.topbar.light}/></a>
                        <button style={{marginRight: "10px"}} className="btn btn-outline-dark" type="submit">{props.topbar.signin}</button>
                            <button className="btn btn-dark" type="submit">{props.topbar.signup}</button>
                        </div>
                        
                    </div>
                    </div>
                    
            </nav>
        </div>
    )
}