var input = document.getElementById('input');
var button = document.getElementById('button');
var imgChange =document.getElementById('currency')
var output = document.getElementById('output');


let database =[
   [ 
    {
    value: 460.52,
    currency: "Dollar",
    link: "./symbols/dollars.png"
},
{
    value: 570.25 ,
    currency: "pound",
    link: "./symbols/pounds.png"
},
{
    value: 37.86,
    currency: "cedis",
    link: "./symbols/cedis.png"
},
{
    value: 347.17,
    currency: "canadian dollars",
    link: "./symbols/candian dollars.png"
}
],
   [
    {
    value: 743,
    currency: "Dollar",
    link: "./symbols/dollars.png"
},
{
    value: 925,
    currency: "pound",
    link: "./symbols/pounds.png"
},
{
    value: 78,
    currency: "cedis",
    link: "./symbols/cedis.png"
},
{
    value: 560,
    currency: "canadian dollars",
    link: "./symbols/candian dollars.png"
}
    ]
]
function convert() {
        var selector =  document.getElementById('money').selectedOptions[0].value;
        var type =  document.getElementById('standard').selectedOptions[0].value;
        var result = input.value / database[type][selector].value
        output.value = result
    }
button.addEventListener('click',convert);
function changeImg() {
    document.getElementById('converter').addEventListener('mouseover',()=>{
        var selector =  document.getElementById('money').selectedOptions[0].value;
        // var type =  document.getElementById('standard').selectedOptions[0].value;
        imgChange.src = database[0][selector].link;
    })
}
