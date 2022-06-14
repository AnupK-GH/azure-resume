window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();  //function gets called
});


const functionApiUrl = 'https://getresumecounterak.azurewebsites.net/api/GetResumeCounter?code=Ns9Uh0rpNbxnfqUZxZwRojj5VT-WxQ0jdX115TRbMrCsAzFu4R9efg==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;            //variable to hold the count
    fetch(functionApiUrl).then(response => {
        return response.json()    //get data from URL
    })
    .then(response => {
        console.log("Website called function API.");  //debugging
        count = response.count;    //set variable to json response
        document.getElementById('counter').innerText = count;  //go to html document, find element, and set element
    }).catch(function(error) {     
        console.log(error);     //if there is an error, log it to console
      });
    return count;
}
