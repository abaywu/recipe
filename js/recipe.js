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
    var data = {};
    
}