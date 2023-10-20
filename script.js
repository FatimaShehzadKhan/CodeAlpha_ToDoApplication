var inField = document.getElementById('inField');
// var mytodolist = document.getElementById('mytodolist');
var mytodolist = document.getElementById('mytodolist');
console.log(mytodolist);
console.log(inField);

function addItem() {
    if (inField.value == "") {
        alert("Please fill the input field")
    } else {

        var li = document.createElement('li')
        li.setAttribute("id","myListItem")
        var val = inField.value;
        var litext = document.createTextNode(val)
        li.appendChild(litext);

        var newtask = document.createElement('div')
        
        var editbtn = document.createElement('button')
        editbtn.innerHTML='<img src="edit.png" />'
        editbtn.setAttribute("onclick","editItem(this)");
        
        console.log(editbtn)

        var clrbtn = document.createElement('button')
        clrbtn.innerHTML='<img src="clear.png" />'
        clrbtn.setAttribute("onclick","clrItem(this)");
                
        newtask.appendChild(editbtn)
        newtask.appendChild(clrbtn)
        li.appendChild(newtask);
        
        console.log(li);

        mytodolist.appendChild(li);
        console.log(mytodolist);

        inField.value="";
    }
}
function deleteAll() {
    mytodolist.innerHTML = ""
}

function clrItem(clrBtn) {
    console.log(clrBtn);
    var parentofclr = clrBtn.parentNode; //div
    parentofclr.parentNode.remove() //li removed
    console.log(clrBtn);
}

function editItem(editBtn) {
    var editedTask = prompt("Enter the edited text")
    var parentofedit = editBtn.parentNode; //div
    parentofedit.parentNode.firstChild.nodeValue=editedTask; //li
    editBtn.parentNode.firstChild.nodeValue =editedTask;
}