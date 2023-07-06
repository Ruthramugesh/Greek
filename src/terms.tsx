import { end } from "./academ";

export default function Terms(props: end) {
    return (
        <div>
            <div className="footer">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="nav-item">
                            <a>{props.foot.name}</a>
                        </div>
                        <form className="d-flex" role="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.foot.privacy}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.foot.cookie}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.foot.info}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.foot.terms}</a>
                            </li>
                            
                        </ul>
                        </form>
                    </div>
                </nav>
            </div>

        </div>
    )
}