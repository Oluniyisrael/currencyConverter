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
},{
    value: 502.68,
    currency: "Euro",
    link: "./symbols/euros.png"
},{
    value: 3.58,
    currency: "Yen",
    link: "./symbols/yen.png"
},{
    value: 326.24 ,
    currency: "Austrilian dollars",
    link: "./symbols/austrilian dollars.png"
},{
    value: 505.03 ,
    currency: "Franc ",
    link: "./symbols/franc.png"
}

],
   [
    {
    value: 743,
    currency: "Dollar",
},
{
    value: 925,
    currency: "pound",
},
{
    value: 78,
    currency: "cedis",
},
{
    value: 560,
    currency: "canadian dollars",
},{
    value: 790,
    currency: "Euro",
},{
    value:6,
    currency: "Yen",
},{
    value: 555,
    currency: "Austrilian dollars",
},{
    value: 718 ,
    currency: "Franc ",
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
