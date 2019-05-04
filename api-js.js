function getData() {
    const Http = new XMLHttpRequest();
    const url='https://jsonplaceholder.typicode.com/users';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        var string_response = Http.responseText;
        var arr = JSON.parse(string_response);
        var len = arr.length;
        console.log(len);
        
        for (var json in arr) {
            var id = arr[json].id;
            var name = arr[json].name;
            var userName = arr[json].username;
            var phone = arr[json].phone;
            var email = arr[json].email;

            addOneObject(id, name, userName, phone, email);
            
        }
        

        //  document.getElementById("showdata").innerHTML = Http.responseText;
        // console.log(Http.responseText)
        setCookie();
            
        }
}

function addOneObject(id, name, userid, phone, email) {
    var row = document.createElement('row');
    row.classList.add('row');

    var row1 = addEachRow(id);
    var row2 = addEachRow(name);
    var row3 = addEachRow(userid);
    var row4 = addEachRow(phone);
    var row5 = addEachRow(email);

    row.appendChild(row1);
    row.appendChild(row2);
    row.appendChild(row3);
    row.appendChild(row4);
    row.appendChild(row5);
    

    document.getElementById('showdata').appendChild(row);
}

function addEachRow(textValue) {
    var col = document.createElement('div');
    col.classList.add('col');

    var span = document.createElement('span');
    var text = document.createTextNode(textValue);

    span.appendChild(text);
    col.appendChild(span);
    return col;
}
window.onload = function () {
    if (document.cookie.length != 0) {
        var nameValueArray = document.cookie.split('=');
        document.click = nameValueArray[1];
        document.getAnimations('btn').value = nameValueArray[1];
    }
}
function setCookie() {
    var selectedClick = document.getElementById('btn').value;
    if (selectedClick != 0) {
        document.click = selectedClick;
        document.cookie = 'noOfClick=' + selectedClick + ';expires=Fri, 10 May 2019 01:00:00 UTC;';
    }
}



  
