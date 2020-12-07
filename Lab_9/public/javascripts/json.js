function onClick() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let operation = document.getElementById("operation").value;

    let formData = JSON.stringify({ "n1":n1,"n2":n2,"operation":operation });
    let request = new XMLHttpRequest();
    request.open("POST","/form",true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() { document.getElementById("out").value = JSON.parse(request.response); };
    request.send(formData);
}