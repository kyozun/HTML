const obj = {
    name: "CuongDaiCa",
    age: 18,
    adress: "Hà Nội",
    gender: "Nam"
};

console.log(obj.name);

//Object
var nguoi_1 = document.getElementById("x-name");

//Inner Text là thuộc tính
setTimeout(function (){
    nguoi_1.innerText = obj.gender;
    nguoi_1.innerHTML = "<i>Khủng Long Bạo Chúa</i>";
    nguoi_1.style.color = "white";
    nguoi_1.style.backgroundColor = "blue";
},10)


var menu = [
    "Phở Bò",
    "Phở Gà",
    "Mì Tôm",
    "Bún Ngan",
    "Bún Bò"
]

var show = document.getElementById("thuc-don");

for (var i=0; i<menu.length;i++) {
    //Chèn biến vào text
    var new_list = `<li>${menu[i]}</li>`;
    show.innerHTML += new_list;
}

