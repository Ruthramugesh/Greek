function dbservice(){

    fetch("http://localhost:3001/api/getall").then(resp => resp.json()).then((data) => {
        console.log(data);
       
    });

}
export default dbservice;