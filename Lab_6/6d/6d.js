// d) Write a JS function that will add a row to HTML table based on contents of a form on
// the same page. Function should be invoked using HTML button.

function addRow() {
    let table = document.getElementById("c");
    let newRow = table.rows.length;
    let row = table.insertRow(newRow);
    for(let i=0; i < table.rows[newRow-1].cells.length; i++) {
        let insertCell = row.insertCell(i);
        let input = document.getElementById("input" + (i+1)).value;
        document.getElementById("input" + (i+1)).value = "";
        if(input.length === 0) input = "none";
        insertCell.innerText = input;
    }
}