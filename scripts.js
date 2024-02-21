const URL_BASE = "http://localhost:5255/api/home";

const page = document.getElementById("page").innerHTML;
let REMOTE_METHOD = "";
switch(page){
    case "p1":
        REMOTE_METHOD = "/InsertClient";
        break;
    case "p2":
        REMOTE_METHOD = "/InsertAccount";
        break;
}

formElem.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formElem);
    var object = {};
    formData.forEach((value, key) => object[key] = value);
    var json = JSON.stringify(object);

    let response = await fetch(URL_BASE + REMOTE_METHOD, {
      method: 'POST',
      body: json,
      headers: {'Content-Type' : 'application/json; charset=utf-8'}
    });

    let result = response.status;
    switch (result){
        case 200:
            result.message = "La operación se realizó exitosamente";
        default:
            result.message = "Se produjo un error al ejecutar la operación."
    }
    alert(result.message);
    window.location.href("./index.html","blank");
  };
