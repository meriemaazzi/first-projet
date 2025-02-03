var addToDOButton = document.getElementById('addTODO');
var  toDOContainer= document.getElementById ('toDOContainer');
var inputField=document.getElementById('inputField')

addToDOButton.onclick = function(){
    if(inputField.value != ""){
        var paragraph =document.creatElement('p')
    }
     paragraph.innerText = inputField.value;
     paragraph.ClassList.add('paragraphe-style');
     toDOContainer.appendChild(paragraph);
     inputField.value="";
    
}
addTODOButton.onclick = function(){
    if(inputField.value.trim() !== ""){
        var paragraph = document.createElement('p');
        paragraph.innerText = inputField.value;
        paragraph.classList.add('paragraph-style');
        toDOContainer.appendChild(paragraph);
        inputField.value = "";
    }
}