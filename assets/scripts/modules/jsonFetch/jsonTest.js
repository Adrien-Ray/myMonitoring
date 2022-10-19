import { displayReport } from "./report.js";

function jsonTest(array) {
    console.log('log for jsonTest : ', array);
    document.getElementById('vue_report').style.display = 'none';
    document.getElementById('vue_await').style.display = 'block';
    const requestOptionsConn = {
        method: 'POST',
        body: JSON.stringify(array),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    fetch('http://localhost:8082/test', requestOptionsConn)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log('data');
            // console.log(data);
            displayReport(data);
        })
        .catch((err) => {
            console.log(err);
            document.getElementById('vue_await').style.display = 'none';
            alert('une erreur est survenu lors de la requête');
        });
}
export { jsonTest };