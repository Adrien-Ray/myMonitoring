import { vue } from "./modules/varStructure.js";
import { jsonFetch, jsonFetch2 } from "./modules/jsonFetch.js";
import { createBtnCategory } from "./modules/createBtnCategory.js";

function cleanReports() {
    document.getElementById('vue_reportTime').innerHTML = '';
    document.getElementById('vue_reportTime').style.display = 'none';
    document.getElementById('vue_report').style.display = 'none';
    document.getElementById('vue_report').innerHTML = '';
}

document.getElementById(vue.launch).style.display = 'block';
document.getElementById('vue_launch_button_all').addEventListener('click', () => {
    cleanReports();
    jsonFetch2('all');
});
/* document.getElementById('vue_launch_button_perso').addEventListener('click', () => {
    jsonFetch('perso');
});
document.getElementById('vue_launch_button_yupanki').addEventListener('click', () => {
    jsonFetch('yupanki');
}); */
document.getElementById('vue_reportReset').addEventListener('click', () => {
    document.getElementById('vue_await').style.display = 'none';
    cleanReports();
});
document.getElementById('enter_url').addEventListener('click', () => {
    cleanReports();
    document.getElementById('form_url').classList.toggle('vue');
});
document.getElementById('form_url_outpout').addEventListener('click', () => {
    console.log('outpout: ', document.getElementById('form_url_input').value);
    jsonFetch('', document.getElementById('form_url_input').value);
});
createBtnCategory();

export { cleanReports };