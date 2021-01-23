var data = [];

function addentry()
{
    var entry = document.getElementById('entry_new').value;
    var date  = document.getElementById('date_new').value;
    var flg = true;
    while(flg)
    {
        var id = Math.floor(Math.random() * 1000000);
        flg = false;
        data.forEach(element => {
            if(element.id == id) flg = true;
        });
    }
    var tmp = {
        "id" : id,
        "title" : entry,
        "duedate" : date
    }

    data.push(tmp);
    document.getElementById('entry_new').value = "";
    document.getElementById('date_new').value = "";

    updatelist();
}

function updatelist() {//意大利面条我最拿手了（悲
    var otpt = "";
    var cnt = 0;
    data.forEach(element => {
        otpt += "<tr><td>" + cnt++ + "</td><td>" + 
        element.title + "</td><td>" + element.duedate + 
        "</td><td><a href=\"#\" onclick=\"modify(" + element.id + ")\">修改</a> | <a href=\"#\" onclick=\"del(" + element.id + ")\">删除</a></td></tr>";
    });

    document.getElementById('todolist').innerHTML = otpt;
}

function modify(id)
{
    data.forEach(element => {
        if(element.id == id) {
            document.getElementById('id_mod').value = element.id;
            document.getElementById('entry_mod').value = element.title;
            document.getElementById('date_mod').value = element.duedate;
        }
    });
    document.getElementById('change').style.display="block";
    document.getElementById('list').style.display="none";
}

function modentry()
{
    var id = Number.parseInt(document.getElementById('id_mod').value);
    var title = document.getElementById('entry_mod').value;
    var date = document.getElementById('date_mod').value;
    data.forEach(element => {
        if(element.id == id) {
            element.title = title;
            element.duedate = date;
        }
    });

    updatelist();
    canc();
}

function canc()
{
    document.getElementById('change').style.display="none";
    document.getElementById('list').style.display="block";
}

function del(id)
{
    data.forEach(function(item, index, arr) {
        if(item.id === id) {
          arr.splice(index, 1);
        }
    });

    updatelist();
}