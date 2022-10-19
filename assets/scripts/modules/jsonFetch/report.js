function displayReport(array) {
    console.log('function displayReport: ', array);
    let domInReportDiv = ``;
    let allErrorCount = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let urls = ``;
        let siteStatus = 'ok';
        for (let index2 = 0; index2 < element.urls.length; index2++) {
            const element2 = element.urls[index2];
            if (element.status[index2] === 200) {
                var urlStatus = 'ok';
            } else {
                var urlStatus = 'error';
                siteStatus = 'error';
                allErrorCount += 1;
            }
            let timeStatus = '';
            if (element.resTime[index2] === -1 || element.resTime[index2] >= 1000) {
                timeStatus = 'error';
            } else if (element.resTime[index2] < 1000 && element.resTime[index2] >= 500) {
                timeStatus = 'warning';
            } else if (element.resTime[index2] >= 0 && element.resTime[index2] < 500){
                timeStatus = 'ok';
            }
            urls = urls+`<li class="status_${urlStatus}">
                <a class="status_${urlStatus}" href="${element2}">${element2}</a>
                <ul>
                    <li>
                        Status: ${element.status[index2]}, <span class="status_${timeStatus}"><span title="test url response time" class="a" onclick="testTime('${element2}')">ResponseTime</span>: ${element.resTime[index2]}</span>
                    </li>
                </ul>
            </li>`;
        }
        const elementDomReport = `<li class="status_${siteStatus}">${element.name}<ul>${urls}</ul></li>`;
        domInReportDiv = domInReportDiv+elementDomReport;
    }
    let allErrorClass = "status_ok";
    if (allErrorCount !== 0) {
        allErrorClass = "status_error";
    }
    domInReportDiv = `
        <h2>rapport</h2>
        <p class="${allErrorClass}"><b>${allErrorCount} Errors</b></p>
        <ul>${domInReportDiv}</ul>
        `;
    document.getElementById('vue_report').innerHTML = domInReportDiv;
    document.getElementById('vue_await').style.display = 'none';
    document.getElementById('vue_report').style.display = 'block';
}

export { displayReport };