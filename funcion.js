function addItem(){
    const itemList = document.getElementById('item').value;
    const errorMessage = document.getElementById('errorMessage');

    if(itemList.trim()===''){
        errorMessage.style.display = 'block'

    }else{
        const li = document.createElement('li');
        li.textContent = itemList;

        document.getElementById('toDoList').appendChild(li);
        document.getElementById('item').value='';

        errorMessage.style.display = 'none';
        
    }
}

document.getElementById('addItem').addEventListener('click', addItem);