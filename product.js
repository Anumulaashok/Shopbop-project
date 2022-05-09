
var show=0;
var more=document.querySelector(".more-less")

more.style.height="50px";
more.style.overflow="hidden";

function showmorefun(){
show++;
var but=document.querySelector("button")
if(show%2==1){
    var more=document.querySelector(".more-less")
    more.style.height="auto";
    more.style.overflow="show";
    but.innerText="showless.. "
   

}
else{
    var more=document.querySelector(".more-less")
    more.style.height="50px";
    more.style.overflow="hidden";
    but.innerText="showmore.."

}
}


  var Data1 =JSON.parse(localStorage.getItem("product"))||{
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088715137_2-0.__UX540__._QL90_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088715215_2-0.__UX540__._QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088716164_2-0.__UX540__._QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088714676_2-0.__UX540__._QL90_.jpg",
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088715601_2-0.__UX540__._QL90_.jpg" ,
    gender: "MEN",
    size:`Men's Sizes`,
    heading:"Reigning Champ",
    info:"Relaxed Crewneck Sweatshirt",
    color:"color:Earth",
    price:"62.50"
}



var image1= document.querySelector("#img1");
var im1=document.createElement("img");
im1.setAttribute("src",Data1.image_url1)
image1.append(im1)

var image2= document.querySelector("#img2");
var im2=document.createElement("img")
im2.setAttribute("src",Data1.image_url2)
image2.append(im2);

var image3= document.querySelector("#img3");
var im3=document.createElement("img")
im3.setAttribute("src",Data1.image_url3)
image3.append(im3);
var image4= document.querySelector("#img4");
var im4=document.createElement("img")
im4.setAttribute("src",Data1.image_url4)
image4.append(im4);
var image5= document.querySelector("#img5");
var im5=document.createElement("img")
im5.setAttribute("src",Data1.image_url5)
image5.append(im5)

var gen=document.querySelector("#gen");
gen.innerText=Data1.gender;

var size=document.querySelector(".size");
size.innerText=Data1.size;

var heading=document.querySelector("#gen+h1");
heading.innerText=Data1.heading;

var disc=document.querySelector("#gen+h1+p");
disc.innerText=Data1.info;

var pric=document.querySelector("#price");
var span1=document.createElement("span");
span1.innerText="$ ";
var span2=document.createElement("span");
span2.innerText=Data1.price;

pric.append(span1,span2)

var colar=document.querySelector("#price+p")
colar.innerText=Data1.color;

var buto=document.querySelector("#add")

buto.addEventListener("click",function(){
    // console.log(Data1)
  buttonfunction(Data1)
   
})


var data1=[  {
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/zsupp/zsupp307851c925/zsupp307851c925_1649513065533_2-0._UX357_QL90_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/efact/efact3065010366/efact3065010366_1646254385314_2-0._UX357_QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/efact/efact3065010366/efact3065010366_1646254385314_2-0._UX357_QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/efact/efact3065010366/efact3065010366_1646254385314_2-0._UX357_QL90_.jpg",
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/efact/efact3065010366/efact3065010366_1646254385314_2-0._UX357_QL90_.jpg" ,
    gender: "WOMEN",
    size:`Women's Sizes`,
    heading:"English Factory",
    info:"Tied Detail Top",
    color:"color:Lilac",
    price:"80.00"
    

},
{
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/leviv/leviv209141d665/leviv209141d665_1643906534419_2-0._UX357_QL90_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/leviv/leviv209141d665/leviv209141d665_1643906534419_2-0._UX357_QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/leviv/leviv209141d665/leviv209141d665_1643906534419_2-0._UX357_QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/leviv/leviv209141d665/leviv209141d665_1643906534419_2-0._UX357_QL90_.jpg",
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/leviv/leviv209141d665/leviv209141d665_1643906534419_2-0._UX357_QL90_.jpg",
    gender: "WOMEN",
    size:`Women's Sizes`,
    heading:"Levi's",
    info:"No Stone Unturned Overalls",
    color:"color:No Stone Unturned",
    price:"128.00"
},
{
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/sundr/sundr3208813301/sundr3208813301_1650921389760_2-0._UX357_QL90_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/sundr/sundr3208813301/sundr3208813301_1650921389760_2-0._UX357_QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/sundr/sundr3208813301/sundr3208813301_1650921389760_2-0._UX357_QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/sundr/sundr3208813301/sundr3208813301_1650921389760_2-0._UX357_QL90_.jpg",
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/sundr/sundr3208813301/sundr3208813301_1650921389760_2-0._UX357_QL90_.jpg",
    gender: "WOMEN",
    size:`Women's Sizes`,
    heading:"SUNDRY",
    info:"Stripe Button Down",
    color:"color:Spruce",
    price:"168.00"
},
{
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew4555513799/madew4555513799_1644957563642_2-0._UX357_QL90_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew4555513799/madew4555513799_1644957563642_2-0._UX357_QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew4555513799/madew4555513799_1644957563642_2-0._UX357_QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew4555513799/madew4555513799_1644957563642_2-0._UX357_QL90_.jpg" ,
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew4555513799/madew4555513799_1644957563642_2-0._UX357_QL90_.jpg",
    gender: "WOMEN",
    size:`Women's Sizes`,
    heading:"Madewell",
    info:"Square Neck Tiered Midi Dress In Textured Seersucker",
    color:"color:Fig",
    price:"138.00"
} ,
{
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rails/rails314411cde9/rails314411cde9_1649372804048_2-0._UX357_QL90_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rails/rails314411cde9/rails314411cde9_1649372804048_2-0._UX357_QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rails/rails314411cde9/rails314411cde9_1649372804048_2-0._UX357_QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rails/rails314411cde9/rails314411cde9_1649372804048_2-0._UX357_QL90_.jpg" ,
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rails/rails314411cde9/rails314411cde9_1649372804048_2-0._UX357_QL90_.jpg",
    gender: "WOMEN",
    size:`Women's Sizes`,
    heading:"RAILS",
    info:"Whitney Shirt",
    color:"color:Cut Out Fruits",
    price:"148.00"

}  ,
{
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/velve/velve416091c925/velve416091c925_1651523518190_2-0._UX357_QL90_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/velve/velve416091c925/velve416091c925_1651523518190_2-0._UX357_QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/velve/velve416091c925/velve416091c925_1651523518190_2-0._UX357_QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/velve/velve416091c925/velve416091c925_1651523518190_2-0._UX357_QL90_.jpg" ,
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/velve/velve416091c925/velve416091c925_1651523518190_2-0._UX357_QL90_.jpg",
    gender: "WOMEN",
    size:`Women's Sizes`,
    heading:"Velvet",
    info:"Yara Blouse ",
    color:"color:White",
    price:"158.00"
},      
{
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/blank/blank410561d654/blank410561d654_1644534568682_2-0._UX357_QL90_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/blank/blank410561d654/blank410561d654_1644534568682_2-0._UX357_QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/blank/blank410561d654/blank410561d654_1644534568682_2-0._UX357_QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/blank/blank410561d654/blank410561d654_1644534568682_2-0._UX357_QL90_.jpg" ,
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/blank/blank410561d654/blank410561d654_1644534568682_2-0._UX357_QL90_.jpg",
    gender: "WOMEN",
    size:`Women's Sizes`,
    heading:"BLANKNYC",
    info:"Once In A Lifetime Cropped Shacket",
    color:"color:Once In A Lifetime",
    price:"128.00"
},   
 {
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ffull/ffull3055771441/ffull3055771441_1644346485454_2-0._UX357_QL90_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ffull/ffull3055771441/ffull3055771441_1644346485454_2-0._UX357_QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ffull/ffull3055771441/ffull3055771441_1644346485454_2-0._UX357_QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ffull/ffull3055771441/ffull3055771441_1644346485454_2-0._UX357_QL90_.jpg" ,
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ffull/ffull3055771441/ffull3055771441_1644346485454_2-0._UX357_QL90_.jpg",
    gender: "WOMEN",
    size:`Women's Sizes`,
    heading:"FAITHFULL THE BRAND",
    info:"Kiera Skirt ",
    color:"color:Plain Black",
    price:"169.00"
}, 
   {
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/minkp/minkp413391c1b3/minkp413391c1b3_1643224246251_2-0._UX357_QL90_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/minkp/minkp413391c1b3/minkp413391c1b3_1643224246251_2-0._UX357_QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/minkp/minkp413391c1b3/minkp413391c1b3_1643224246251_2-0._UX357_QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/minkp/minkp413391c1b3/minkp413391c1b3_1643224246251_2-0._UX357_QL90_.jpg",
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/minkp/minkp413391c1b3/minkp413391c1b3_1643224246251_2-0._UX357_QL90_.jpg",
    gender: "WOMEN",
    size:`Women's Sizes`,
    heading:" MINKPINK",
    info:"Celestine Smock Dress",
    color:"color:White",
    price:"89.00"
},  
  {
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher30396102ca/faher30396102ca_1635890962983_2-0._UX357_QL90_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher30396102ca/faher30396102ca_1635890962983_2-0._UX357_QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher30396102ca/faher30396102ca_1635890962983_2-0._UX357_QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher30396102ca/faher30396102ca_1635890962983_2-0._UX357_QL90_.jpg",
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher30396102ca/faher30396102ca_1635890962983_2-0._UX357_QL90_.jpg",
    gender: "WOMEN",
    size:`Women's Sizes`,
    heading:"Faherty",
    info:"Willa Top",
    color:"color:White",
    price:"158.00"

},  
  {
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/mwlbm/mwlbm30066156dd/mwlbm30066156dd_1649956421837_2-0._UX357_QL90_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/mwlbm/mwlbm30066156dd/mwlbm30066156dd_1649956421837_2-0._UX357_QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/mwlbm/mwlbm30066156dd/mwlbm30066156dd_1649956421837_2-0._UX357_QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/mwlbm/mwlbm30066156dd/mwlbm30066156dd_1649956421837_2-0._UX357_QL90_.jpg" ,
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/mwlbm/mwlbm30066156dd/mwlbm30066156dd_1649956421837_2-0._UX357_QL90_.jpg",
    gender: "WOMEN",
    size:`Women's Sizes`,
    heading:"MWL by Madewell",
    info:"Dori Romper",
    color:"color:True Black",
    price:"65.00" 
}];


var card=document.querySelector("#box");

data1.forEach(function(car){

var div2=document.createElement("div");


var ima=document.createElement("img");

ima.setAttribute("src",car.image_url1);

var nam1=document.createElement("h2");
nam1.innerText=car.heading;

var pars=document.createElement("p");
pars.innerText=car.info

var price1=document.createElement("h4");
var spa1=document.createElement("span");
spa1.innerText="$ "
var spa2=document.createElement("span");
spa2.innerText=car.price
price1.append(spa1,spa2)



div2.append(ima,nam1,pars,price1)
div2.addEventListener("click",function(){
  myfunction(car)
})
card.append(div2);

})
// JSON.parse(localStorage.getItem("product"))||

var pass=JSON.parse(localStorage.getItem("product"))||{}
function myfunction(car){

pass=car

localStorage.setItem("product",JSON.stringify(pass));
window.scrollTo(0,0);
window.location.reload();



}





var data2=[
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088715137_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088715215_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088716164_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088714676_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088715601_2-0.__UX540__._QL90_.jpg" ,
        gender: "MEN",
        size:`Men's Sizes`,
        heading:"Reigning Champ",
        info:"Relaxed Crewneck Sweatshirt",
        color:"color:Earth",
        price:"62.50"
    },
       
    
   
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718143_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718245_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718161_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350716978_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718606_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        size:`Men's Sizes`,
        heading:"Madewell",
        info:" All Day Pocket Tee ",
        color:"Color: Teapot Blue",
        price:"30.00",
    },
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher305381b8f0/faher305381b8f0_1651010959860_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher305381b8f0/faher305381b8f0_1651010959868_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher305381b8f0/faher305381b8f0_1651010959684_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher305381b8f0/faher305381b8f0_1651010959596_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher305381b8f0/faher305381b8f0_1651010960421_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        heading:"Faherty",
        size:`Men's Sizes`,
        info:" Sunwashed pocket tee ",
        color:"Color: Faded Flag",
        price:"58.00",
    },
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249377144_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249376613_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249375758_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249375543_2-0.__UX540__._QL90_.jpg" ,
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249377268_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        size:`Men's Sizes`,
        heading:"Club Monaco",
        size:`Men's Sizes`,
        info:"Short Sleeve Pique Tee",
        color:"Color: Off White",
        price:"89.00",
    } ,
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455911cdc4/madew455911cdc4_1650551993102_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455911cdc4/madew455911cdc4_1650551993291_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455911cdc4/madew455911cdc4_1650551993208_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455911cdc4/madew455911cdc4_1650551992927_2-0.__UX540__._QL90_.jpg" ,
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455911cdc4/madew455911cdc4_1650551993764_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        size:`Men's Sizes`,
        heading:"Club Monaco",
        size:`Men's Sizes`,
        info:"Short Sleeve Pique Tee",
        color:"Color: Off White",
        price:"89.00",
    }  ,
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249377144_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249376613_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249375758_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249375543_2-0.__UX540__._QL90_.jpg" ,
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249377268_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        size:`Men's Sizes`,
        heading:"Club Monaco",
        size:`Men's Sizes`,
        info:"Short Sleeve Pique Tee",
        color:"Color: Off White",
        price:"89.00",
    },      
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718143_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718245_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718161_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350716978_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718606_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        heading:"Madewell",
        size:`Men's Sizes`,
        info:" All Day Pocket Tee ",
        color:"Color: Teapot Blue",
        price:"30.00",
    },    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718143_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718245_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718161_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350716978_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718606_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        heading:"Madewell",
        size:`Men's Sizes`,
        info:" All Day Pocket Tee ",
        color:"Color: Teapot Blue",
        price:"30.00",
    },    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718143_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718245_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718161_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350716978_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718606_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        heading:"Madewell",
        size:`Men's Sizes`,
        info:" All Day Pocket Tee ",
        color:"Color: Teapot Blue",
        price:"30.00",
    },    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718143_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718245_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718161_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350716978_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718606_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        heading:"Madewell",
        size:`Men's Sizes`,
        info:" All Day Pocket Tee ",
        color:"Color: Teapot Blue",
        price:"30.00",
    },
        {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718143_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718245_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718161_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350716978_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718606_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        heading:"Madewell",
        size:`Men's Sizes`,
        info:" All Day Pocket Tee ",
        color:"Color: Teapot Blue",
        price:"30.00",
    },   
  
];


var card=document.querySelector("#box2");

data2.forEach(function(car){

var div2=document.createElement("div");


var ima=document.createElement("img");

ima.setAttribute("src",car.image_url1);

var nam1=document.createElement("h2");
nam1.innerText=car.heading;

var pars=document.createElement("p");
pars.innerText=car.info

var price1=document.createElement("h4");
var spa1=document.createElement("span");
spa1.innerText="$ "
var spa2=document.createElement("span");
spa2.innerText=car.price
price1.append(spa1,spa2)



div2.append(ima,nam1,pars,price1)
div2.addEventListener("click",function(){
  myfunction(car)
})
card.append(div2);

})
// JSON.parse(localStorage.getItem("product"))||

var pass=JSON.parse(localStorage.getItem("product"))||{}
function myfunction(car){

pass=car

localStorage.setItem("product",JSON.stringify(pass));
window.scrollTo(0,0);
window.location.reload();



}

var data3=[{
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061910811/cnvsm3061910811_q2_2-0.__UX540__._QL90_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061910811/cnvsm3061910811_q1_2-0.__UX540__._QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061910811/cnvsm3061910811_q3_2-0.__UX540__._QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061910811/cnvsm3061910811_q4_2-0.__UX540__._QL90_.jpg",
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061910811/cnvsm3061910811_q5_2-0.__UX540__._QL90_.jpg" ,
    gender: "MEN",
    size:` Men's Size`,
    heading:"Reigning Champ",
    info:"Chuck Taylor All Star ‘70s High Top Sneakers",
    color:"color:parchment",
    price:"62.50"
},
{
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061812867/cnvsm3061812867_q2_2-0._QL90_UX173_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061812867/cnvsm3061812867_q1_2-0.__UX540__._QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061812867/cnvsm3061812867_q3_2-0.__UX540__._QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061812867/cnvsm3061812867_q5_2-0.__UX540__._QL90_.jpg",
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061812867/cnvsm3061812867_q6_2-0.__UX540__._QL90_.jpg" ,
    gender: "MEN",
    size:`Men's Sizes`,
    heading:"Converse",
    info:"Relaxed Crewneck Shoe",
    color:"color:Earth",
    price:"62.50"
},
// {
//     image_url1:"",
//     image_url2:"",
//     image_url3:"",
//     image_url4:"",
//     image_url5:"" ,
//     gender: "MEN",
//     size:`Men's Sizes`,
//     heading:"Reigning Champ",
//     info:"Relaxed Crewneck Sweatshirt",
//     color:"color:Earth",
//     price:"62.50"
// },
]
   
var box3=document.querySelector("#box3");


var card=document.querySelector("#box3");

data3.forEach(function(car){

var div2=document.createElement("div");
div2.addEventListener("click",function(){
    clicker(car)
})
var ima=document.createElement("img");
ima.setAttribute("src",car.image_url1);

var nam1=document.createElement("h2");
nam1.innerText=car.heading;

var pars=document.createElement("p");
pars.innerText=car.info;

var price1=document.createElement("h4");
price1.innerText=car.price;


div2.append(ima,nam1,pars,price1)
card.append(div2);
})









// <--size part-->
var cart=JSON.parse(localStorage.getItem("cartdata"))||[];
var bool=false
var svalue;
var sizes=document.querySelectorAll("#sizes>div")
    for(var i=0;i<sizes.length;i++){
        sizes[i].addEventListener("click",sizefunction)
    }
    function sizefunction(){
    
        var sizesvalue=(event.target.innerText)
        svalue=sizesvalue
            bool=true
        console.log(sizesvalue)
        } 


//------add to cart part---->

function buttonfunction(el){

    console.log(el)
    if(bool==false){
        alert("Please select size")
    }
    else if(bool==true){
     el["sizes"]=(svalue);
    cart.push(el);
    localStorage.setItem("cartdata",JSON.stringify(cart))
    alert("Item Added to Cart");
    window.location.reload();
   
    }


}


function carthtml(){
    window.location.href="cart.html";

}