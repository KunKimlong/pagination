const phoneProduct = [
    {
        id:1,
        title: 'Iphone 15 pro max',
        image: 'iphone-15-pro-max.jpg',
        color: ['pink', 'yellow', 'green', 'blue','black'],
    },
    {
        id:2,
        title: 'Iphone 14 pro max',
        image: 'iphone-14-pro-max.jpg',
        color: ['midnight', 'starlight','RED', 'blue', 'purple','yellow'],
    },
    {
        id:3,
        title: 'Iphone 13 pro max',
        image: 'iphone-13-pro-max.jpg',
        color: ['Blue', 'Midnight','RED', 'Pink', 'Starlight','Green'],
    },
    {
        id:4,
        title: 'Iphone 12 pro max',
        image: 'iphone-12-pro-max.jpg',
        color: ['Black', 'White','RED', 'blue', 'purple','yellow'],
    },
    {
        id:5,
        title: 'Iphone 11 pro max',
        image: 'iphone-11-pro-max.jpg',
        color: ['Black', 'White','RED', 'green', 'purple','yellow'],
    },
    {
        id:6,
        title: 'Iphone XS max',
        image: 'iphone-xs-max.jpg',
        color: [ 'Gold', 'Gray','Silver'],
    },
    {
        id:7,
        title: 'Samsung galaxy s24 Ultra',
        image: 'samsung_galaxy_s24_ultra_titanium_black.jpg',
        color: [ 'titanium green', 'blue' , 'orange'],
    },
    {
        id:8,
        title: 'Samsung galaxy s23 Ultra',
        image: 'SAMSUNG-GALAXY-S23-ULTRA.jpeg',
        color: ['Phantom Black', 'Green','Graphite'],
    },
    {
        id:9,
        title: 'Samsung galaxy s22 Ultra',
        image: 'SAMSUNG-GALAXY-S22-ULTRA.jpeg',
        color: ['Phantom Black', 'White', 'Burgundy', 'Green', 'Graphite', 'Red', 'Sky Blue','Bora Purple'],
    },
    {
        id:10,
        title: 'Samsung galaxy fold 3',
        image: 'SAMSUNG-GALAXY-FOLD3.jpeg',
        color: ['Phantom Black','Phantom Green','Phantom Siliver'],
    },
    {
        id:11,
        title: 'Samsung Galaxy A72',
        image: 'Galaxy-A72.jpg',
        color: ['Awesome violet', 'blue','white','black'],
    },
    {
        id:12,
        title: 'Samsung galaxy flip 3',
        image: 'galaxy-z-flip-3.jpg',
        color: ['Cream','Phantom Black', 'Green','Lavender'],
    },
    {
        id:13,
        title: 'Oppo N3 Flip3 5G',
        image: 'oppo_n3.jpg',
        color: ['Cream Gold', 'Misty Pink', 'Sleek Black'],
    },
    {
        id:14,
        title: 'Oppo A78',
        image: 'oppo_a78.jpg',
        color: ['midnight', 'starlight','RED', 'blue', 'purple','yellow'],
    },
    {
        id:15,
        title: 'Oppo Reno 10',
        image: 'Pre_Reno10.jpg',
        color: ['Black Starlight', 'Dawn Gold' ],
    },
];
var flexBox = document.querySelector('.flexBox');
var pagination = document.querySelector('.pagination');
var txt  = '';
var page = 1;
function displayProduct(newpage = 1){
    var card = '';
    page = newpage;
    var startIndex = (page-1)*4;
    var endIndex   = (startIndex+4);
    var getProduct = phoneProduct.slice(startIndex,endIndex);
    // console.log(getProduct);
    getProduct.forEach(el=>{
        card += `
        <div class="box">
            <div class="card">
                ${el.id}
                <img src="Image/${el.image}" alt="">
                <div class="card-detail">
                    <h3>${el.title}</h3>
                    <p>Color:${el.color}</p>
                    <button>Add to cart <i class="bi bi-cart"></i></button>
                </div>
            </div>
        </div> 
        `;
    })
    flexBox.innerHTML = card;
}


function getPage(){
   var totalPage = Math.ceil(phoneProduct.length/4);
   for(var i = 1;i<=totalPage;i++){
        txt+='<li onclick="displayProduct('+i+')">'+i+'</li>';
   }
   pagination.innerHTML = txt;
}
getPage();