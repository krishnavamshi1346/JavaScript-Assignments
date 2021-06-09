var TableList = [
    { id: 1, name: "Table-1", noOfItems: 0, items: [], TotalBill: 0 },
    { id: 2, name: "Table-2", noOfItems: 0, items: [], TotalBill: 0 },
    { id: 3, name: "Table-3", noOfItems: 0, items: [], TotalBill: 0 }
];


localStorage.clear();
localStorage.setItem('Table-1',JSON.stringify([{'item':"Tomato Soup",'cost':125,'quantity':0},{'item':"Chicken Soup",'cost':170,'quantity':0},{'item':"Manchow Soup",'cost':125,'quantity':0},{'item':"Chicken Biryani",'cost':200,'quantity':0},{'item':"Special Chicken Biryani",'cost':250,'quantity':0},{'item':"Mutton Biryani",'cost':220,'quantity':0},{'item':"Veg Panner Biryani",'cost':180,'quantity':0},{'item':"Vanilla",'cost':125,'quantity':0},{'item':"Butter Scotch",'cost':170,'quantity':0},{'item':"Noodles",'cost':125,'quantity':0},{'item':"Fried Rice",'cost':170,'quantity':0},{'item':"Manchuria",'cost':125,'quantity':0},{'item':"Cool Drinks",'cost':50,'quantity':0},{'item':"Lemonade",'cost':35,'quantity':0}]));
localStorage.setItem('Table-2',JSON.stringify([{'item':"Tomato Soup",'cost':125,'quantity':0},{'item':"Chicken Soup",'cost':170,'quantity':0},{'item':"Manchow Soup",'cost':125,'quantity':0},{'item':"Chicken Biryani",'cost':200,'quantity':0},{'item':"Special Chicken Biryani",'cost':250,'quantity':0},{'item':"Mutton Biryani",'cost':220,'quantity':0},{'item':"Veg Panner Biryani",'cost':180,'quantity':0},{'item':"Vanilla",'cost':125,'quantity':0},{'item':"Butter Scotch",'cost':170,'quantity':0},{'item':"Noodles",'cost':125,'quantity':0},{'item':"Fried Rice",'cost':170,'quantity':0},{'item':"Manchuria",'cost':125,'quantity':0},{'item':"Cool Drinks",'cost':50,'quantity':0},{'item':"Lemonade",'cost':35,'quantity':0}]));
localStorage.setItem('Table-3',JSON.stringify([{'item':"Tomato Soup",'cost':125,'quantity':0},{'item':"Chicken Soup",'cost':170,'quantity':0},{'item':"Manchow Soup",'cost':125,'quantity':0},{'item':"Chicken Biryani",'cost':200,'quantity':0},{'item':"Special Chicken Biryani",'cost':250,'quantity':0},{'item':"Mutton Biryani",'cost':220,'quantity':0},{'item':"Veg Panner Biryani",'cost':180,'quantity':0},{'item':"Vanilla",'cost':125,'quantity':0},{'item':"Butter Scotch",'cost':170,'quantity':0},{'item':"Noodles",'cost':125,'quantity':0},{'item':"Fried Rice",'cost':170,'quantity':0},{'item':"Manchuria",'cost':125,'quantity':0},{'item':"Cool Drinks",'cost':50,'quantity':0},{'item':"Lemonade",'cost':35,'quantity':0}]));



var MenuList = [
    { id: 1, item_name: "Tomato Soup", cost: 125, category: "soup" },
    { id: 2, item_name: "Chicken Soup", cost: 170, category: "soup" },
    { id: 3, item_name: "Manchow Soup", cost: 125, category: "soup" },
    { id: 4, item_name: "Chicken Biryani", cost: 200, category: "biryani" },
    { id: 5, item_name: "Special Chicken Biryani", cost: 250, category: "biryani" },
    { id: 6, item_name: "Mutton Biryani", cost: 220, category: "biryani" },
    { id: 7, item_name: "Veg Panner Biryani", cost: 180, category: "biryani" },
    { id: 8, item_name: "Vanilla", cost: 125, category: "icecream" },
    { id: 9, item_name: "Butter Scotch", cost: 170, category: "icecream" },
    { id: 10, item_name: "Noodles", cost: 125, category: "Chinese" },
    { id: 11, item_name: "Fried rice", cost: 170, category: "Chinese" },
    { id: 12, item_name: "Manchuria", cost: 125, category: "Chinese" },
    { id: 13, item_name: "Cool Drinks", cost: 50, category: "beverages" },
    { id: 14, item_name: "Lemonade", cost: 35, category: "beverages" }
];




function loadTables() {
    for (var i = 0; i < TableList.length; i++) {
        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        var cost = document.createElement("p");

        div.className = "table";
        div.setAttribute("id", TableList[i].id);
        h3.textContent = TableList[i].name;

        cost.className = "table-p";
        cost.style.display = "inline";
        cost.textContent = "Rs. " + TableList[i].TotalBill + "   No. of items: " + TableList[i].noOfItems;

        div.appendChild(h3);
        div.appendChild(cost);
        div.addEventListener("drop", onDrop);
        div.addEventListener("dragover", dragOver);
        div.addEventListener("click", Button);

        document.getElementById('myTable').appendChild(div);


    }
}

loadTables();


function loadMenu() {
    for (var i = 0; i < MenuList.length; i++) {
        var div = document.createElement("div");
        div.className = "menu";

        var h3 = document.createElement("h3");
        //var cat = document.createElement("h3");
        h3.innerHTML = MenuList[i].item_name;
        div.id = MenuList[i].id;

        var costCategory = document.createElement("p");
        costCategory.innerHTML = "Rs. " + MenuList[i].cost  + " Category:" + MenuList[i].category;

        div.appendChild(h3);
        //div.appendChild(cat);
        div.appendChild(costCategory);
        
        document.getElementById('myMenu').appendChild(div);
        div.setAttribute("draggable", "true");
        div.addEventListener("dragstart", dragstart);


    }
}
loadMenu();


var price;
var iName;

function dragstart() {
    for (var i = 0; i < MenuList.length; i++) {
        if (MenuList[i].id == this.id) {
            price = MenuList[i].cost;
            iName = MenuList[i].item_name;
            break;
        }
    }
}

function onDrop() {
    this.style.backgroundColor = "grey";
    for (var i = 0; i < TableList.length; i++) {
        if (TableList[i].id == this.id) {
            TableList[i].noOfItems++;
            TableList[i].TotalBill += price;
            TableList[i].items.push(iName);

            var obj = JSON.parse(localStorage.getItem(TableList[i].name));

            for(j=0;j<obj.length;j++)
            {
                if(obj[j].item==iName)
                {
                    
                    obj[j].quantity=1;
                }
            }
            localStorage.setItem(TableList[i].name,JSON.stringify(obj));
            update();
            break;
        }
    }
}

function dragOver(ev) {
    ev.preventDefault();

}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function Button() {
    modal.style.display = "block";
    var content = document.getElementById("Tab");
    content.textContent = "Table : " + this.id + " " + "  Billing Details";
    goForward(this.id);
}

function goForward(idOfClicked) {

    var table = document.getElementById("mTable");

    while (table.childElementCount > 1) {
        table.removeChild(table.lastChild);
        table.childElementCount--;
    }

    var i = idOfClicked - 1;

    var uniqueItems = TableList[i].items.filter(function (elem, index, self) {
        return index == self.indexOf(elem);
    })

    if (TableList[i].id == idOfClicked) {
        for (var j = 0; j < uniqueItems.length; j++) {

            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var input = document.createElement("input");
            var td5 = document.createElement("td");
            var del = document.createElement("button");
            var item = uniqueItems[j];
            var cost = costofItem(item);

            tr.className = "trm"
            del.className = "delete";
            td1.className = "Sno";
            td1.textContent = "" + (j + 1);
            td2.textContent = item;
            td2.className = "item";
            td3.textContent = cost;
            td3.className = "price";
            del.textContent = "Delete Item";

            input.setAttribute("type", "number");
            input.setAttribute("min", 1);
            var noofserving = servings(i, item);

           
            

            input.addEventListener("change", function (){ serving(this, TableList[i].id, this.value); });
            input.setAttribute("value", noofserving);
            del.setAttribute("onclick", "deleteItem(this)");
            del.setAttribute("id", TableList[i].id);
            td4.appendChild(input);
            td5.appendChild(del);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            table.appendChild(tr);

            var gmodal = document.getElementById("GModal");
            var gbtn = document.getElementById("GenerateBill");

            gbtn.addEventListener("click", function () { GenerateBill(idOfClicked); });

        }
    }
    var tb = TableList[i].TotalBill;
    document.getElementById("TB").innerHTML = "Total Bill :" + tb;
}

function costofItem(item) {
    for (var i = 0; i < MenuList.length; i++) {
        if (MenuList[i].item_name == item)
            return MenuList[i].cost;
    }
}
span.onclick = function () {
    modal.style.display = "none";
}


function servings(index, item) {
    var count = 0;
    for (var i = 0; i < TableList[index].items.length; i++) {
        if (TableList[index].items[i] == item)
            count++;
    }
    return count;
}

var gmodal = document.getElementById("GModal");
var gbtn = document.getElementById("GenerateBill");

function update() {
    var update = document.getElementsByClassName("table-p");
    for (var i = 0; i < update.length; i++) {
        update[i].textContent = "Rs. " + TableList[i].TotalBill + "   No. of items: " + TableList[i].noOfItems;
    }
}

function GenerateBill(id) {
    i = id - 1;
    modal.style.display = "none";
    gmodal.style.display = "block";
    var tno = document.getElementById("tno");
    tno.innerHTML = "Table :" + id;

    var Tbil = document.getElementById("TB").innerHTML;
    1
    var Tbill = document.getElementById("Tbill");
    Tbill.innerHTML = " " + "Pay the " + Tbil;

    TableList[i].TotalBill = 0;
    TableList[i].noOfItems = 0;
    TableList[i].items.length = 0;

    var obj = JSON.parse(localStorage.getItem(TableList[i].name));
    for(j=0;j<obj.length;j++)
    {
        obj[j].quantity=0;
    }
    localStorage.setItem(TableList[i].name,JSON.stringify(obj));
    update();
    document.getElementById(id).style.color = 'white';
}

var span1 = document.getElementsByClassName("close1")[0];
span1.onclick = function () {
    gmodal.style.display = "none";
}

function serving(thiss, tableID, value) {

    var parent = thiss.parentElement.parentElement;
    console.log(thiss);
    console.log(thiss.parentElement);
    console.log(parent.innerHTML);
    //var code = parent.innerHTML;
    var retrieveItemName = parent.innerHTML.split('>');
    console.log(retrieveItemName);
    var itemName = retrieveItemName[3].substring(0,retrieveItemName[3].length-4);
   // console.log(item);
    
    TableList[tableID-1].items.push(itemName);
    TableList[tableID-1].noOfItems=TableList[tableID-1].items.length;
    var id=tableID;
    //console.log(tableID);
    var obj = JSON.parse(localStorage.getItem('Table-'+id));
    for(i=0;i<obj.length;i++)
    {
        if(obj[i].item==itemName)
        {
            obj[i].quantity=value;
        }
    }
   
    localStorage.setItem('Table-'+id,JSON.stringify(obj));
    var tempTotal=0;
    for(i=0;i<obj.length;i++)
    {
        tempTotal += obj[i].quantity*obj[i].cost;
    }
    console.log(tempTotal);
    TableList[id-1].TotalBill=tempTotal;
    document.getElementById("TB").innerHTML = "Total Bill :" + TableList[id-1].TotalBill;
    update();

}

function deleteItem(ev) {
    var DelRow = ev.parentElement.parentElement;
    DelRow.remove();
    var price = DelRow.getElementsByClassName("price")[0].textContent;
    var p = parseInt(price);
    var item = DelRow.getElementsByClassName("item")[0].textContent;
    var ID = document.getElementById(ev.id).id;

    var SerialNo = document.getElementsByClassName("Sno");
    for (var i = 0; i < SerialNo.length; i++) {
        SerialNo[i].textContent = i + 1;
    }

    while (TableList[ID - 1].items.indexOf(item) > -1) {
        TableList[ID - 1].items.splice(TableList[ID - 1].items.indexOf(item), 1);
        TableList[ID - 1].noOfItems--;
    }



    var obj = JSON.parse(localStorage.getItem('Table-'+ID));
    for(i=0;i<obj.length;i++)
    {
        if(obj[i].item==item)
        {
            obj[i].quantity=0;
        }
    }

    localStorage.setItem('Table-'+ID,JSON.stringify(obj));
    var tempTotal=0;
    for(i=0;i<obj.length;i++)
    {
        tempTotal += obj[i].quantity*obj[i].cost;
    }
    TableList[ID-1].TotalBill=tempTotal;
   // update();
    document.getElementById("TB").innerHTML = "Total Bill :" + TableList[ID - 1].TotalBill;
    update();

}


function tableSearch() {
    var input, filter, myTable, table, i;
    input = document.getElementById("TableInput");
    filter = input.value.toUpperCase();
    myTable = document.getElementById("myTable");
    table = myTable.getElementsByClassName("table");


    for (i = 0; i < table.length; i++) {
        var h3 = table[i].getElementsByTagName('h3')[0];
        if (h3) {
            if (h3.innerHTML.toUpperCase().indexOf(filter) > -1) {
                table[i].style.display = "";
            } else {
                table[i].style.display = "none";
            }
        }
    }
}

function debounce(func, timeout = 1000){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

const menuSearch = debounce(() => searchItems());

function searchItems() {
    var input, filter, myMenu, menu, i;
    input = document.getElementById("MenuInput");
    filter = input.value.toUpperCase();
    myMenu = document.getElementById("myMenu");
    menu = myMenu.getElementsByClassName("menu");

    for (i = 0; i < menu.length; i++) {


        var h3 = menu[i].getElementsByTagName("h3")[0];
        //console.log(h3);
        var tag = menu[i].getElementsByTagName('p')[0];
       // console.log(menu[i].getElementsByTagName('p')[0]);
        
            if (h3.innerHTML.toUpperCase().indexOf(filter) > -1 || tag.innerHTML.toUpperCase().indexOf(filter) > -1) {
                menu[i].style.display = "";
            } else {
                menu[i].style.display = "none";
            }
        
    }
}
