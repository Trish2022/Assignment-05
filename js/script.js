const $ = (id) => document.getElementById(id);
let empForm = $('empForm');
let employeeId = $('employeeId');
let empName = $('empName');
let extension = $('extension');
let email = $('email');
let department = $('department');
window.addEventListener('load', init, false);
function init() {
    "use strict";
    empForm.addEventListener('submit', (event) => {
        // event.preventDefault();
        employeeId = employeeId.value;
        empName = empName.value;
        extension = extension.value;
        email = email.value;
        department = department.value;       
        console.log(` ID: ${employeeId}\n Name: ${empName} \n Extension: ${extension} \n Email: ${email} \n Department: ${department}`)
        event.preventDefault();
})
}
