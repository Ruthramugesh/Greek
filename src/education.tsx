import { useEffect, useState } from "react";
import { carrer } from "./academ";
import axios from "axios";

export default function Education(props: carrer) {

//     const [allstudents,setallstudents] = useState<any>([]);

// useEffect(()=>{
//     console.log("Code started");
//    // getstudents();
//     console.log("Code ended");
// },[])

//     useEffect(()=>{
       
//        console.log("Stuent changes");
//     },[allstudents])

//     const getstudents = async () =>{
//         let a = await axios.get("http://localhost:3001/api/getall").then(resp => {
//             setallstudents(resp);
           
//         });
//     }
    return (
        <div>
            <form>
                <div className="edu">
                    <div className="mb-6 mb-lg-0 col-lg-6">
                        <div className="text-dark mb-4">
                            <div className="most">

                                <h5><small><i className="fa fa-check" style={{fontSize:"15px", marginRight: "10px", color: "#19cb98", backgroundColor: "#a9f2ca"}}></i>{props.skills.platform}</small></h5>
                            </div>
                        </div>
                        <div className="grow">
                            <h1 style={{fontSize: "50px"}}><b>{props.skills.header}</b></h1>
                        </div>
                        <div className="platform">
                            <p>{props.skills.para}</p>
                        </div>
                        <br />
                        <div className="d-flex" role="search">
                            <button style={{ marginLeft: "1cm" }} className="btn btn-primary" type="submit">{props.skills.join}</button>
                            <a>
                                <img style={{ marginLeft: "20px" }} src={props.skills.vediologo} alt="vedio" className="me-2"></img>
                                {props.skills.demo} </a>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
                <div className="student">
                    {/* <img src="https://geeks-react.netlify.app/static/media/bg-thumb.5b4ebc05aa8a77519211f5e81bc9cae4.svg" style={{float: "right"}} alt="..."/> */}
                    <img src={props.skills.image} className="position-absolute end-0 bottom-0" style={{ marginRight: "2cm", marginBottom: "50px" }} />
                </div>

            </form>

        </div>
    )
}