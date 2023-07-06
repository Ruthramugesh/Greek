import { demo } from "./academ";

export default function Reviews(props: demo) {
    return (
        <div>
            <div className="color">
                <h1 style={{paddingBottom: "30px"}}>{props.user.header}</h1>
                <div className="row">
                    {
                        props.users.map((ele:any)=>{
                            return(
                                <div className="col-sm-4">
                        <div className="card" style={{paddingTop: "30px"}}>
                            <div className="slick-slide slick-active slick-current" style={{ outline: "none", width: "372px" }}>
                                <div className="card-body">
                                    <img className="avatar avatar-lg rounded-circle d-inline" src={ele.imageUrl} alt="logo" style={{ width: "90px", height: "90px" }} />
                                    <p>{ele.para}</p>
                                    <br />
                                    <h3>{ele.name}</h3>
                                    <span>{ele.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                            )
                        })
                    }
                    {/* <div className="col-sm-4">
                        <div className="card">
                            <div className="slick-slide slick-active slick-current" style={{ outline: "none", width: "372px" }}>
                                <div className="card-body">
                                    <img className="avatar avatar-lg rounded-circle d-inline" src={props.user.imageUrl} alt="logo" style={{ width: "90px", height: "90px" }} />
                                    <p>{props.user.para}</p>
                                    <br />
                                    <h3>{props.user.name}</h3>
                                    <span>{props.user.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="slick-slide slick-active slick-current" style={{ outline: "none", width: "372px" }}>
                                <div className="card-body">
                                    <img className="avatar avatar-lg rounded-circle d-inline" src={props.user1.imageUrl} alt="logo" style={{ width: "90px", height: "90px" }} />
                                    <p>{props.user1.para}</p>
                                    <br />
                                    <h3>{props.user1.name}</h3>
                                    <span>{props.user1.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="slick-slide slick-active slick-current" style={{ outline: "none", width: "372px" }}>
                                <div className="card-body">
                                    <img className="avatar avatar-lg rounded-circle d-inline" src={props.user2.imageUrl} alt="logo" style={{ width: "90px", height: "90px" }} />
                                    <p>{props.user2.para}</p>
                                    <br />
                                    <h3>{props.user2.name}</h3>
                                    <span>{props.user2.role}</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div >
    )
}