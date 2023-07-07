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
                <div className="edu" style={{marginTop: "4cm"}}>
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
                
                    <div className="position-relative">
                    <img src={props.skills.image1} style={{float: "right", marginRight: "4cm", marginTop: "-23rem"}} alt="..."/> 
                    <img src={props.skills.image2} className="position-absolute end-0 bottom-0" style={{ marginRight: "4cm",marginBottom: "-2.5rem" }} />
                    <img src={props.skills.image3} style={{float: "right", marginRight: "-25.5rem", marginTop: "-23rem"}} />
                    <img src={props.skills.image4} className="position-absolute bottom-0 start-0 ms-lg-n14 ms-n6 mb-n7" style={{marginLeft: "40.5rem", marginBottom: "-5.5rem"}} />
                    <img src={props.skills.image5} className="position-absolute bottom-0 mb-10 ms-n10 ms-lg-n1" style={{float: "right", marginLeft: "41.5rem", marginBottom: "1.5rem"}}/>
                    <img src={props.skills.image6} className="position-absolute top-0  start-0 mt-18 ms-lg-n19 ms-n8" style={{marginTop: "-15rem", marginLeft: "39rem"}} />
                    <img src={props.skills.image7} className="position-absolute top-0  start-0 ms-lg-n14 ms-n5" style={{marginTop: "-23rem", marginLeft: "41rem"}} />
                    </div>
                

            </form>

        </div>
    )
}