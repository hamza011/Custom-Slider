/**
 * Created by Rehan-pc on 10/05/2017.
 */
var flag = false;
var i = 0;
var updatefield;

function save() {

    //To Generate New Row For New Student And His/Her Details..
    newRow = document.createElement("tr");
    newRow.setAttribute("id", "a" + i++);
    newVar = newRow.getAttribute("id");
    document.getElementById("demo").appendChild(newRow);

    //1st TD For Student Name :
    var td1 = document.createElement("td");
    var usrName = document.getElementById("textField").value;
    var b = document.createTextNode(usrName);
    td1.appendChild(b);
    document.getElementById(newVar).appendChild(td1);

    //2nd TD For Student Roll Number:
    var td2 = document.createElement("td");
    var rollNumber = document.getElementById("rollNum").value;
    var c = document.createTextNode(rollNumber);
    td2.appendChild(c);
    document.getElementById(newVar).appendChild(td2);

    //3rd TD For Student Email ID:
    var td3 = document.createElement("td");
    var emailAddress = document.getElementById("mail").value;
    var d = document.createTextNode(emailAddress);
    td3.appendChild(d);
    document.getElementById(newVar).appendChild(td3);

    //4th TD For Select Course:
    var td4 = document.createElement("td");
    var selectBox = document.getElementById("options").value;
    var e = document.createTextNode(selectBox);
    td4.appendChild(e);
    document.getElementById(newVar).appendChild(td4);

    // Empty All Fields after SAVE :
    document.getElementById("textField").value = "";
    document.getElementById("rollNum").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("options").value = "";

    //Update Button and Function:
    var update = document.createElement("button");
    update.style.backgroundColor = "#A291BF";
    update.style.color = "#fff";
    update.style.margin = "5px";
    var text = document.createTextNode("Update");
    update.appendChild(text);
    document.getElementById("mainDiv").appendChild(update);
    update.style.display = "none";

    //Update Function
    update.onclick = (function(){
        document.getElementById("submit").style.display = "block";
        this.style.display = "none";
        document.getElementById(updatefield).children[0].innerText = document.getElementById("textField").value;
        document.getElementById(updatefield).children[1].innerText = document.getElementById("rollNum").value;
        document.getElementById(updatefield).children[2].innerText = document.getElementById("mail").value;
        document.getElementById(updatefield).children[3].innerText = document.getElementById("options").value;

        // Empty All Fields after UPDATE :
        document.getElementById("textField").value = '';
        document.getElementById("rollNum").value = '';
        document.getElementById("mail").value = '';
        document.getElementById("options").value = '';

        updatefield='';

    });

    //Edit Button
    var edit = document.createElement("button");
    edit.style.backgroundColor = "#2305E5";
    edit.style.color = "#fff";
    edit.style.margin = "5px";
    var showOnBtn2 = document.createTextNode("Edit");
    edit.setAttribute("id","b"+ i++);
    edit.appendChild(showOnBtn2);
    document.getElementById(newVar).appendChild(edit);

    //Edit Function:
    edit.onclick = (function (event) {
        //console.log(event);
        document.getElementById("submit").style.display = "none";
        update.style.display = "block";
        updatefield = event.currentTarget.parentElement.id;
        //console.log(updatefield);

        document.getElementById("textField").value = usrName;
        document.getElementById("rollNum").value = rollNumber;
        document.getElementById("mail").value = emailAddress;
        document.getElementById("options").value = selectBox;
    });


    //DeleteButton
    var x = document.createElement("button");
    x.style.backgroundColor = "orangeRed";
    x.style.color = "#fff";
    x.style.margin = "5px";
    var showOnBtn = document.createTextNode("Delete");
    x.appendChild(showOnBtn);
    document.getElementById(newVar).appendChild(x);

    //Delete Function.
    x.onclick = (function () {
        document.getElementById("submit").style.display = "block";
        update.style.display = "none";
        td1.style.display = "none";
        td2.style.display = "none";
        td3.style.display = "none";
        td4.style.display = "none";
        edit.style.display = "none";
        this.style.display = "none";
    });
}


