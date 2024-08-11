document.getElementById('addButton').addEventListener('click', addItem);
document.getElementById('itemInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();

    if (itemText !== '') {
        const itemList = document.getElementById('itemList');

        const listItem = document.createElement('li');
        listItem.textContent = itemText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', function() {
            itemList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        itemList.appendChild(listItem);

        itemInput.value = '';
    }
}
