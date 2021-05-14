
//for filterbox category

// const selected = document.querySelector(".selected");
// const optionsContainer = document.querySelector(".options-container");

// const optionsList = document.querySelectorAll(".option");

// selected.addEventListener("click", () => {
// 	optionsContainer.classList.toggle("active");
// });

// optionsList.forEach( o => {
// 	o.addEventListener("click", () => {
// 		selected.innerHTML = o.querySelector("label").innerHTML;
// 		optionsContainer.classList.remove("active");
// 	});
// });



// admin@example.com
// eLate5

axios.defaults.baseURL = 'https://cmsc209-api.herokuapp.com/api/v1';

// const apiURL = 'https://cmsc209-api.herokuapp.com/api/v1';

const loginForm = document.querySelector('#login-form');

// might remove signup and querying users feature
const getAllUsersBtn = document.querySelector('#btn-get-all-users');
const getUserBtn = document.querySelector('#btn-get-user');
const putUserBtn = document.querySelector('#btn-put-user');
const deleteUserBtn = document.querySelector('#btn-delete-user');

const getAllCategoriesBtn = document.querySelector('#btn-get-all-categories');

const addSupplierBtn = document.querySelector('#btn-add-supplier');
const getAllSuppliersBtn = document.querySelector('#btn-get-all-suppliers');
const getSupplierBtn = document.querySelector('#btn-get-supplier');
const putSupplierBtn = document.querySelector('#btn-put-supplier');
const deleteSupplierBtn = document.querySelector('#btn-delete-supplier');

const addItemBtn = document.querySelector('#btn-add-item');
const getAllItemsBtn = document.querySelector('#btn-get-all-items');
const getItemBtn = document.querySelector('#btn-get-item');
const putItemBtn = document.querySelector('#btn-put-item');
const deleteItemBtn = document.querySelector('#btn-delete-item');

// 'X-Auth-Token'

// let config = {
//     headers: {
//         Authorization: 'Bearer ' + axios.defaults.headers.common['Authorization']
//     }
// }

async function loginUser(email, password) {
    try {
        const credentials = {
            email: email,
            password: password
        }
        console.log('login credentials:', credentials)
        const response = await axios.post(
            '/users/login',
            credentials
        );
        console.log('response:', response);
        console.log('response.data.token:', response.data.token);

        // axios.defaults.headers.common['X-Auth-Token'] = 'Bearer ' + response.data.token;
        // console.log('axios.defaults.headers.common[\'X-Auth-Token\']:', axios.defaults.headers.common['X-Auth-Token']);

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
        console.log('axios.defaults.headers.common[\'Authorization\']:', axios.defaults.headers.common['Authorization']);

        // config.headers['Authorization'] = 'Bearer ' + response.data.token;
        // console.log('config.headers[\'Authorization\']:', config.headers['Authorization']);
    }
    catch (err) {
        alert(err.message);
        console.error('error.response:', err.response);
    }
}

// might remove signup and querying users feature
async function getAllUsers() {
    try{
        const response = await axios.get('/users');
        console.log('response.data:', response.data);
    }
    catch (err) {
        alert(err.message);
        console.error('err.response:', err.response)
    }
}
async function getUser(id) {
    try{
        const response = await axios.get(`/users/${id}`);
        console.log('response.data:', response.data);
    }
    catch (err) {
        alert(err.message);
        console.error('err.response:', err.response)
    }
}

async function getAllCategories() {
    try{
        const response = await axios.get('/categories');
        console.log('response.data:', response.data);
    }
    catch (err) {
        alert(err.message);
        console.error('err.response:', err.response)
    }
}

async function addSupplier(name, address) {
    try{
        let data = {
            name,
            address,
        }
        const response = await axios.post('/suppliers', data);
        console.log('response.data:', response.data);
    }
    catch (err) {
        alert(err.message);
        console.error('err.response:', err.response)
    }
}

async function getAllSuppliers() {
    try{
        const response = await axios.get('/suppliers');
        console.log('response.data:', response.data);
    }
    catch (err) {
        alert(err.message);
        console.error('err.response:', err.response)
    }
}

async function getSupplier(id) {
    try{
        const response = await axios.get(`/suppliers/${id}`);
        console.log('response.data:', response.data);
    }
    catch (err) {
        alert(err.message);
        console.error('err.response:', err.response)
    }
}

loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const enteredEmail = event.currentTarget.querySelector('#email').value;
    const enteredPassword = event.currentTarget.querySelector('#password').value;

    console.log(enteredEmail, enteredPassword);

    // change this after finalization
    // login(enteredEmail, enteredPassword);
    loginUser('admin@example.com', 'eLate5');
});

// might remove signup and querying users feature
getAllUsersBtn.addEventListener('click', event => {
    getAllUsers();
});

getUserBtn.addEventListener('click', event => {
    let id = 1;
    getUser(1);
});

getAllCategoriesBtn.addEventListener('click', event => {
    let id = 1;
    getUser(1);
});

getAllCategoriesBtn.addEventListener('click', event => {
    getAllCategories();
});

addSupplierBtn.addEventListener('click', event => {
    let name = "Supplier4";
    let address = "Somewhere around the area";
    addSupplier(name, address);
});

getAllSuppliersBtn.addEventListener('click', event => {
    getAllSuppliers();
});

getSupplierBtn.addEventListener('click', event => {
    let id = 1;
    getSupplier(id);
});
