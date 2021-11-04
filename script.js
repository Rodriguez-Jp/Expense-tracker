let spendName = document.querySelector(".input-name");
let dateData = document.querySelector(".input-date");
let amount = document.querySelector(".input-amount");
let addExp = document.querySelector(".add-button");
let table = document.querySelector(".table")
let th = document.querySelector(".th");
let neay = document.querySelector(".neay");




addExp.addEventListener("click", () => {
    if(spendName.value== "" || amount.value == ""|| dateData.value == ""){
        alert("Please check if you write everything!");
    }else{
        neay.classList.add("none");
        let tr = document.createElement("tr");
        let tdExp = document.createElement("td");
        let delBtn = document.createElement("button");
        let tdDate = document.createElement("td");
        let tdAmount = document.createElement("td");
        th.classList.add("th-del");
        delBtn.innerHTML = "x";
        delBtn.classList.add("del-btn");
        table.appendChild(tr);
        tdExp.appendChild(document.createTextNode(spendName.value));
        tdDate.appendChild(document.createTextNode(dateData.value));
        tdAmount.appendChild(document.createTextNode(amount.value));
        tr.appendChild(tdExp);
        tr.appendChild(tdDate);
        tr.appendChild(tdAmount);
        tr.appendChild(delBtn)
        spendName.value = "";
        dateData.value = null;
        amount.value = "";
        delBtn.addEventListener("click", () => {
            table.removeChild(tr);
        })
    }

})