
const BASE_URL = "http://localhost:5255/api/home/GetProyectedIncome?clientId=";

function createTable(inversionPeriod) {
    var table = document.createElement("table");
    let period = 1;

    let header = table.createTHead();
    let row = header.insertRow();
    let cell = row.insertCell(0);
    cell.innerHTML="<b>Mes No.</b>";
    cell = row.insertCell(1);
    cell.innerHTML = "<b>Valor[$]</b>"
    for(let row of inversionPeriod){
        table.insertRow();
        let newCell = table.rows[table.rows.length - 1].insertCell();
        newCell.textContent = period;
        newCell = table.rows[table.rows.length - 1].insertCell();
        newCell.textContent = row;
        period++;
    }
    document.body.appendChild(table);
}

const getValues = async (id) => {
    let response = await fetch(BASE_URL + id); // Fetch for all Values. The response is an array of objects that is sorted in decreasing order
    let result = await response.json();

    const values = [];
    let i = 0;
    result.forEach(element => {
       values[i]=element.money;
       i++ 
    });
    createTable(values);
};

formElem.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formElem);
    var object = {};
    formData.forEach((value, key) => object[key] = value);
    clientId = object["id"];
    
    getValues(clientId);

}
