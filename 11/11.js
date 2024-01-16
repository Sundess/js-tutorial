let toDoList = [];

function addItem() {
    let text = document.querySelector('.input-field');

    toDoList.push(`${text.value}`);
    renderItems();
    text.value = ''
}

function renderItems() {
    let toDoListHtml = '';

    toDoList.forEach(element => {
        const html = `<div>${element}</div>`;
        toDoListHtml += html;
    });

    document.querySelector('.js-todo-list')
        .innerHTML = toDoListHtml;
}
