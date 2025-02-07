function generate() {
    let number = document.getElementById("numInput").value.trim();
    let table = document.getElementById("multiplication");
    
    table.innerHTML = "";

    if (!number || isNaN(number) || number <= 0) {
        alert("Please enter a valid number greater than 0!");
        return;
    } 
    number = parseInt(number);
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");

    let th1 = document.createElement("th");
    th1.innerText = "Multiplication";
    
    let th2 = document.createElement("th");
    th2.innerText = "=";

    let th3 = document.createElement("th");
    th3.innerText = "Result";

    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    headerRow.appendChild(th3);
    thead.appendChild(headerRow);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    for (let i = 1; i <= 10; i++) {
        let row = document.createElement("tr");

        let cell1 = document.createElement("td");
        cell1.innerText = `${number} × ${i}`;

        let cell2 = document.createElement("td");
        cell2.innerText = "=";

        let cell3 = document.createElement("td");
        cell3.innerText = number * i;

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
}
