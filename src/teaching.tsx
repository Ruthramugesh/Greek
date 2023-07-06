import { startcls } from "./academ";

export default function Teaching(props: startcls) {
    return (
        <div>
            <table className="bg-primary rounded-3 container" >
                <div className="position-relative">
                <img src={props.teach.student} alt="image" className="img-fluid mt-n13" style={{paddingRight: "40px"}}/>
                <div className="atom">
                    <img src={props.teach.atom} alt="..." />
                </div>
                <img style={{marginRight: "20px", marginBottom: "2cm", }} src={props.teach.graph} alt="..."/>
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