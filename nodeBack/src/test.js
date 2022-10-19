const axios = require('axios');

async function test(returnThis, res) {
    for (let index = 0; index < returnThis.length; index++) {
        const element = returnThis[index];
        element.status = [];
        element.resTime = [];
        for (let index2 = 0; index2 < element.urls.length; index2++) {
            const elementUrl = element.urls[index2];
            try {
                //console.time('before');
                let start_time = new Date().getTime();
                const resp = await axios.get(elementUrl)
                start_time = new Date().getTime() - start_time;
                console.log('Response time:', start_time);
                element.resTime.push(start_time);
                //console.timeEnd('before');
                element.status.push(resp.status)
                console.log(element.name);
                console.log(resp.status);
            } catch (error) {
                element.status.push(404);
                element.resTime.push(-1);
                console.log(element.name);
                console.log(404);
            }
        }
    }
    await res.send(returnThis);
}

async function testTime(url, res) {
    const resObj = {
        url,
        nbrTest: 10,
        testList: [],
    };
    for (let index = 0; index < resObj.nbrTest; index++) {
        // console.log('testTimeFor');
        let start_time = new Date().getTime();
        const resp = await axios.get(url)
        start_time = new Date().getTime() - start_time;
        console.log('Response time:', start_time);
        resObj.testList.push(start_time);
    }
    await res.status(200).json(resObj);
}

module.exports = {
    test,
    testTime,
};