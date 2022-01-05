// showRecipe()將輸入的資料顯示在表格上面
function showRecipe(no, ingredient, weight, percent){
    if (no == "" || ingredient == "" || weight == "" || percent == ""){
        return;
    }
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = no;
    cell2.innerHTML = ingredient;
    cell3.innerHTML = weight;
    cell4.innerHTML = percent;
}

// loadData()將資料檔載入電腦並顯示在表格中
function loadData(){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", filePath , true);
    rawFile.send(null);
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                var allText = rawFile.responseText;
                // console.log(allText);
                data = JSON.parse(allText);
                fillData(data);
            }
        }
    }     
}

// fillData()將資料填入表格內
function fillData(data){
    console.log(data.items[0]);
    // 實作透過showRecipe()將資料填入表格中
    
}

function onInputFileChanged(){
    files = fileInput.files;
    filePath = URL.createObjectURL(files[0]);
    loadData();
}

let fileInput  = document.getElementById('file-upload-input');
let files = fileInput.files;
let filePath = "";
