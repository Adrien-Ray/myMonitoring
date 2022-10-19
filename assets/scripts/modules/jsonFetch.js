import { catFilter } from "./jsonFetch/jsonFilter.js";
import { jsonTest } from "./jsonFetch/jsonTest.js";

async function jsonFetch(cat, url = true) {
    document.getElementById('vue_report').style.display = 'none';
    document.getElementById('vue_reportTime').style.display = 'none';
    if (url !== true) {
        console.log('in if of jsfetch', url);
        const arrayToReturn = [{
            "name": "input url",
            "urls": [
                url
            ],
            "cat": [
                "url in input"
            ]
        }, ];
        jsonTest(arrayToReturn);
    } else {
        var url = './assets/scripts/modules/data.json';
        fetch(url)
            .then(response => response.json())
            .then(json => {
                let jsonFilter = [];
                if (cat === "all") {
                    jsonFilter = json;
                } else {
                    jsonFilter = catFilter(json, cat);
                }
                // console.log(jsonFilter);
                jsonTest(jsonFilter);
            });
    }
}



async function jsonFetch2(cat, url = true) {
    console.log('enter in function jsonFetch2');
    document.getElementById('vue_report').style.display = 'none';
    document.getElementById('vue_reportTime').style.display = 'none';
    if (url !== true) {
        console.log('in if of jsfetch', url);
        const arrayToReturn = [{
            "name": "input url",
            "urls": [
                url
            ],
            "category": [
                "url in input"
            ]
        }, ];
        jsonTest(arrayToReturn);
    } else {
        var url = './assets/scripts/modules/myData.json';
        fetch(url)
            .then(response => response.json())
            .then(json => {
                let jsonFilter = [];
                if (cat === "all") {
                    jsonFilter = json.domain;
                } else {
                    jsonFilter = catFilter(json, cat);
                }
                // console.log(jsonFilter);
                jsonTest(jsonFilter);
            });
    }
}
export { jsonFetch, jsonFetch2 };