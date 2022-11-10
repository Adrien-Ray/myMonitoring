import { jsonFetch2 } from "./jsonFetch.js";
import { cleanReports } from "../main.js";

function createBtnCategory() {
    console.log('function createBtnCategory');
    document.getElementById('vue_launch_category').innerHTML = 'search category';
    document.getElementById('vue_launch_category').style.display = 'block';
    var url = './assets/scripts/modules/myData.json';
    fetch(url)
        .then(response => response.json())
        .then(json => {
            let jsonFilter = json;
            const arrayOfCat = [];
            for (let index = 0; index < jsonFilter.category.length; index++) {
                const element = jsonFilter.category[index];
                arrayOfCat.push({
                    category: element,
                    domain: []
                });
                for (let index2 = 0; index2 < jsonFilter.domain.length; index2++) {
                    const element2 = jsonFilter.domain[index2];
                    for (let index3 = 0; index3 < element2.category.length; index3++) {
                        const element3 = element2.category[index3];
                        if (element3 === element) {
                            arrayOfCat[index].domain.push(element2);
                        }
                    }
                }
            }
            console.log("arrayOfCat", arrayOfCat);
            const arrayOfCat2 = [];
            for (let index = 0; index < arrayOfCat.length; index++) {
                const element = arrayOfCat[index];
                if (element.domain.length > 0) {
                    arrayOfCat2.push(element);
                }
            }
            console.log('arrayOfCat2', arrayOfCat2);
            if (arrayOfCat2.length > 0) {
                let domForVueLaunchCategory = '';
                for (let index = 0; index < arrayOfCat2.length; index++) {
                    const element = arrayOfCat2[index].category;
                    domForVueLaunchCategory = `${domForVueLaunchCategory}
                    <button class="btn_cat"># ${element}</button>`;
                }
                document.getElementById('vue_launch_category').innerHTML = domForVueLaunchCategory;

                let catBtn = document.querySelectorAll('.btn_cat');
                // console.log('catBtn', catBtn);
                catBtn.forEach(box => {
                    box.addEventListener('click', () => {
                        // console.log('click on cat btn');
                        cleanReports();
                        const label = box.innerHTML.replace('# ', '');
                        console.log(label);
                        jsonFetch2(label);
                    });
                });
            } else {
                document.getElementById('vue_launch_category').innerHTML = 'no category found';
            }
        });
}

export { createBtnCategory };