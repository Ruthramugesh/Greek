import { useEffect, useState } from "react";
//import { details } from "./academ";
import axios from "axios";

export default function Customer(props: any) {
    const [getgeek, setgeek] = useState<any>([]);

    useEffect(() => {
        visitors();
    },[])

    useEffect(() => {

    },[getgeek])

    console.log(getgeek)

    const visitors = async () => {
        let qualified = await axios.get("http://localhost:4000/api/getall").then(resp => {
            console.log(resp)
            setgeek(resp.data);
        })
    }


    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    {
                        getgeek.map((value: any) => {
                            return (
                                <>   
                                    <div className="card col-lg-3 col-md-6" style={{ width: "12rem", height: "5cm"}}>
                                        <div className="card-body">
                                        <div className="col" style={{paddingTop: "50px"}}>
                                          
                                            <h3><small><b>{value.people}</b></small></h3>
                                            <span><small>{value.instruct}</small></span>
                                        </div>
                                    </div>
                                    </div>
                                </>
                            )
                        })
                    }


                </div >
            </div>


            {/* //     <div className="border-top-md border-bottom border-end-lg  col-lg-3 col-md-6">
            //         <div className="py-7 text-center">
            //             <div className="mb-3">
            //                 <i className="fe fe-users fs-2 text-warning"> </i>
            //             </div>
            //             <div className="lh-1">
            //                 <h2 className="mb-1">1.8 Billion+</h2>
            //                 <span>Course enrolments</span>
            //             </div>
            //         </div>
            //     </div>
            //     <div className="border-top-lg border-bottom border-end-md  col-lg-3 col-md-6">
            //         <div className="py-7 text-center">
            //             <div className="mb-3">
            //                 <i className="fe fe-tv fs-2 text-primary"> </i>
            //             </div>
            //             <div className="lh-1">
            //                 <h2 className="mb-1">41,000+</h2>
            //                 <span>Courses in 42 languages</span>
            //             </div>
            //         </div>
            //     </div>
            //     <div className="border-top-lg border-bottom  col-lg-3 col-md-6">
            //         <div className="py-7 text-center">
            //             <div className="mb-3">
            //                 <i className="fe fe-film fs-2 text-success"> </i>
            //             </div>
            //             <div className="lh-1">
            //                 <h2 className="mb-1">179,000+</h2>
            //                 <span>Online Videos</span>
            //             </div>
            //         </div>
            //     </div>
            // </div >
            // </div >
            // </section > */}
        </div >
    )
}