window.onscroll = function (e) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        ajax("GET", "https://jsonplaceholder.typicode.com/users", wrzucDaneDoHTML)
    }
}

function wrzucDaneDoHTML(dane) {
    for (var i = 0; i < dane.length; i++) {

        var pUserId = document.createElement("p");
        var pUserName = document.createElement("p");
        var pUserURL = document.createElement("p");

        var pUserIdContent = document.createTextNode(" userId: " + dane[i].id);
        var pUserNameContent = document.createTextNode(" userName: " + dane[i].username);
        var pUserURLContent = document.createTextNode(" userURL: " + dane[i].website);

        pUserId.appendChild(pUserIdContent);
        pUserName.appendChild(pUserNameContent);
        pUserURL.appendChild(pUserURLContent);
        document.body.appendChild(pUserId);
        document.body.appendChild(pUserName);
        document.body.appendChild(pUserURL);
    }
}

function ajax(method, url, callback) {
    var httpRequest = new XMLHttpRequest();

    httpRequest.open(method, url);

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                var returnData = httpRequest.responseText;

                var jsonObj = JSON.parse(returnData);

                callback(jsonObj);

                httpRequest = null;

            }
        }
    }
    httpRequest.send();
};
