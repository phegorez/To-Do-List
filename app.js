//1. include usage elements

const input = document.querySelector('#input')
const btn = document.querySelector('#submit')
const list_container = document.querySelector('#list-container')


//2. assign on 'click' event to btn if start to click is trigged addTask function
btn.addEventListener('click', addTask)

//3. Create addTask funtion
//3.1 Set condition if input value = '', show alert box 'Please add task'

//3.2 If input value != '', Create li tag to display value form input tag in this case we use
//3.2.1 Create 'li' variable to store createElement command, This element is 'li'
//3.2.2 Use method innerHTML to assign input value to li tag
//3.2.3 Use method appendChild to list_container for create li tag on ul tag in this case list_container is ul tag, in () put li becuse li store input value
//3.2.4 Create 'span' valiable to store createElement command, This element is 'cross' symbol
//3.2.5 Put span to li tag by using appendChild method, Because we want to show corss symbol after task on list

//3.3 After finish conditon set input value to ''

//4. Assign on 'click' event to list_container (in this case this is group of li tag), Send event parameter and trigged funtion on code block
//4.1 Set condition if have some event on tag name 'li', Toggle class list to checked
//4.2 If have some event on tag name 'span', Remove this parent element

//5. Create store current data funtion to store last data on your html page
//5.1 Use localStorage and method setItem() to store current data, In () require 2 paremeter 1.name of storage 2.data for store
//5.2 In this case we use last data on list_container tag becuse this tag store all list tag
//5.3 Put this funtion in final part of all function

//6. Create load last data funtion to display last data on your html page
//6.1 In this case we use show all list tag to assign last data form localStorage by use getItem() method on() put your storage name

//7.Call load last data funtion to use for load lasted data on you html page
function addTask() {
    if(input.value === '') {
        alert('Please add task')
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = input.value
        list_container.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    input.value = ''
    saveCurrentData()
}

list_container.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveCurrentData()
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveCurrentData()
    }
    
})

function saveCurrentData() {
    localStorage.setItem('current_data', list_container.innerHTML)
}

function showLastList() {
    list_container.innerHTML = localStorage.getItem('current_data')
}

showLastList()