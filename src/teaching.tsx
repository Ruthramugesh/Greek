import { startcls } from "./academ";

export default function Teaching(props: startcls) {
    return (
        <div>
            <table className="bg-primary rounded-2 container" >
                <div className="position-relative">
                <img src={props.teach.student} alt="image" className="img-fluid mt-n13" style={{marginRight: "9rem"}}/>
                <div className="atom">
                    <img src={props.teach.atom} alt="..." />
                </div>
                <img style={{marginLeft: "-13rem", marginBottom: "2cm", }} src={props.teach.graph} alt="..." className="position-absolute"/>
                </div>
                <div className="today">
                    <h2><b>{props.teach.header}</b></h2>
                    <p><small>Instructors from around the world teach millions of students on <br/> Geeks. We provide the tools and skills to teach what you love.</small></p>
                    <button className="btn btn-light">{props.teach.start}</button>
                </div>
            
            </table>
        </div>
    )
}