// nav bar





let data =JSON.parse(localStorage.getItem("cartdata")) || [];
// console.log(data)
display(data)
function   display(data){
let sum =0;

if(data.length==0){
    let img = document.createElement("img")
    img.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjEzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik02NSAwYzM1Ljg5OCAwIDY1IDI5LjEwMiA2NSA2NSAwIDIxLjc2MS0xMC43MDYgNDEuMDA0LTI3LjEyNiA1Mi43OThsMTAuOTY1LTQwLjkyM2MuNDEyLTEuNTQtLjQ4OS0zLjExOC0yLjAxMi0zLjUyNmwtNS45OTYtMS42MDdhMiAyIDAgMDAtLjQzNC0xLjEwNmwtLjAxLS4wMTZhMi4wMDUgMi4wMDUgMCAwMC0uNDEyLS4zNzNjLS4wMy0uMDIxLS4wNi0uMDM5LS4wOTItLjA1OWEyLjAwMyAyLjAwMyAwIDAwLS41MjItLjIzM2wtNy40MzMtMS45OTJjLjk3MS0xMC40MDQtNS44LTIwLjM4LTE2LjQxLTIzLjIyM2EyMC45NzYgMjAuOTc2IDAgMDAtMy4xOTYtLjU3MiAyMS41NDIgMjEuNTQyIDAgMDAtMy41MzktMi4yNjZjLS4wNTMtLjAyNy0uMTAyLS4wNTctLjE1NS0uMDg0YTIyLjEzNCAyMi4xMzQgMCAwMC0xLjcyNi0uNzY1Yy0uMTA2LS4wNDItLjIwNi0uMDkzLS4zMTItLjEzNGEyMi4wOTMgMjIuMDkzIDAgMDAtMi4xMTMtLjY4NmMtNS41MTUtMS40NzctMTEuMzQ0LS42NTEtMTYuNDE1IDIuMzI4LTQuNCAyLjU4My03LjY5OCA2LjQ4LTkuNDYzIDExLjExM2wtMTYuNzIyLTQuNDgxYTEuOTk2IDEuOTk2IDAgMDAtMi40NDkgMS40MTRsLTEzLjUxNSA1MC40NDJDNC4wMjMgOTAuNzMxIDAgNzguMzM3IDAgNjUgMCAyOS4xMDIgMjkuMTAxIDAgNjUgMHpNMjcuNzc1IDUzLjU3NGw2Ljk0IDEuODZjLS4wMjUuMDc0LS4wNjEuMTQxLS4wODEuMjE3bC0xNC45NzYgNTUuODkxYTY1LjU5IDY1LjU5IDAgMDEtNS43MTYtNi4zNDNsMTMuODMzLTUxLjYyNXptNTUuOTctMS4xNmwuMzA0LjJjNC42MyAzLjEwNSA3LjQyNyA4LjMzNiA3LjI2IDEzLjg0M2wtNi4wOTMtMS42MzJjLjExNi0uNjEzLjE5Ny0xLjIyNS4yNTctMS44MzcuMDIxLS4yMi4wMzEtLjQzNy4wNDUtLjY1N2EyMC4wNyAyMC4wNyAwIDAwLjA0MS0xLjk2OCAxOS43NDEgMTkuNzQxIDAgMDAtLjA1LS45MTJjLS4wMjQtLjMyLS4wNDUtLjYzOS0uMDgzLS45NTYtLjAxOC0uMTU0LS4wNDgtLjMwNi0uMDctLjQ1OWEyMS4wMSAyMS4wMSAwIDAwLTEuMDA1LTQuMDkzYy0uMDE1LS4wNDMtLjAyOS0uMDg3LS4wNDUtLjEzYTIwLjggMjAuOCAwIDAwLS41NjItMS4zOTh6TTYwLjQ2IDU4LjE5MWMzLjQxOC01LjkwNCAxMC4zNjMtOS4zNDIgMTcuMTU4LTguMTc4IDMuMSAzLjc4MiA0LjU4IDguNzY0IDMuNzE3IDEzLjc3MnpNNTUuMDg4IDQ2LjAxYzQuMTQtMi40MzIgOC44ODMtMy4xMTEgMTMuMzU0LTEuOTEzLjU2Mi4xNSAxLjEwOS4zMjcgMS42NDMuNTI1LTYuNDk1IDEuNTEtMTIuMjQgNS45MTItMTUuMjYgMTIuMDZsLTcuMzIzLTEuOTYzYzEuNDc2LTMuNjE1IDQuMTAzLTYuNjYzIDcuNTg2LTguNzF6IiBmaWxsPSIjRkZFN0RCIi8+PHBhdGggZD0iTTM0LjcxNSA1NS40MzNsOC44IDIuMzZjLjIyNy4yMDIuNDk3LjM2Mi44MS40NDYuMzE0LjA4NC42MjguMDguOTI2LjAxOGwzNi4xOSA5LjY5N2ExLjk5NSAxLjk5NSAwIDAwMS4zMzEuNTE4Yy4xMjcgMCAuMjQ3LS4wMzkuMzctLjA2MmwxOC4yNTIgNC44OTFMODcuMjUgMTI2LjA5QTY0Ljg2NiA2NC44NjYgMCAwMTY1IDEzMGMtMTcuNjQ1IDAtMzMuNjM0LTcuMDQzLTQ1LjM0My0xOC40NThsMTQuOTc2LTU1Ljg5Yy4wMjEtLjA3Ny4wNTYtLjE0NC4wODItLjIxOXptNzEuMTE2IDE2LjMxbDUuOTk2IDEuNjA2YzEuNTIzLjQwOCAyLjQyNSAxLjk4NiAyLjAxMiAzLjUyNmwtMTAuOTY1IDQwLjkyM2E2NC45NjggNjQuOTY4IDAgMDEtMTAuOTY3IDYuMzY4bDEzLjg2OS01MS43NjFjLjAzLS4xMTUuMDQ4LS4yMy4wNTUtLjM0My4wMS0uMTA4LjAwNy0uMjE0IDAtLjMyek03Ny4zMjIgNDQuMTY4bC41MzQuMDYzYy44OS4xMTIgMS43NzkuMjczIDIuNjYyLjUxIDEwLjYxIDIuODQyIDE3LjM4MSAxMi44MTcgMTYuNDEgMjMuMjIybC0zLjAzNC0uODEzLTIuNTg1LS42OTNjLjE3LTUuNjI3LTIuNzUzLTEwLjk2NS03LjU2NS0xNC4wNDNBMjEuNjAzIDIxLjYwMyAwIDAwODEuODQxIDQ5bC0uMDQtLjA1OGEyMS43MyAyMS43MyAwIDAwLTIuNDU3LTIuOTY5bC0uMTEyLS4xMWEyMS41NyAyMS41NyAwIDAwLTEuOTEtMS42OTR6bS03LjIzOC40NTRhMTcuNzUxIDE3Ljc1MSAwIDAxNy41MzUgNS4zOTJjLTYuNzk1LTEuMTY1LTEzLjc0IDIuMjczLTE3LjE1OCA4LjE3OGwtNS42MzUtMS41MWMzLjAxOS02LjE0OCA4Ljc2NC0xMC41NSAxNS4yNTgtMTIuMDZ6IiBmaWxsPSIjRkZDQkIxIi8+PHBhdGggZD0iTTgxLjMzNyA2My43ODVsLTIwLjg3NS01LjU5NC01LjYzNi0xLjUxLTcuMzI0LTEuOTYyYzEuNDc2LTMuNjE1IDQuMTAzLTYuNjYzIDcuNTg2LTguNzA5IDQuMTQtMi40MzIgOC44ODMtMy4xMTIgMTMuMzU0LTEuOTEzYTE3Ljc0NiAxNy43NDYgMCAwMTkuMTc3IDUuOTE3YzMuMSAzLjc4MiA0LjU4IDguNzYzIDMuNzE4IDEzLjc3MW0yNC40OTQgNy45NTdhMS45OTggMS45OTggMCAwMC0uNDMzLTEuMTA2Yy0uMDA1LS4wMDUtLjAwOC0uMDEtLjAxMi0uMDE2YTEuOTQyIDEuOTQyIDAgMDAtLjQxLS4zNzNsLS4wOTMtLjA1OWExLjk4MiAxLjk4MiAwIDAwLS41MjEtLjIzM2wtNy40MzQtMS45OTItMy4wMzQtLjgxMy0yLjU4NS0uNjkzLTYuMDkyLTEuNjMyYy4xMTYtLjYxMy4xOTYtMS4yMjYuMjU3LTEuODM3LjAyLS4yMTkuMDMtLjQzNy4wNDUtLjY1N2EyMC4wNjIgMjAuMDYyIDAgMDAuMDQtMS45NjggMjEuMTU2IDIxLjE1NiAwIDAwLS4wNS0uOTEyYy0uMDI0LS4zMTktLjA0NC0uNjQtLjA4Mi0uOTU2LS4wMTgtLjE1NC0uMDQ4LS4zMDYtLjA3LS40NTlhMjEuMDY1IDIxLjA2NSAwIDAwLTEuMDA1LTQuMDkzbC0uMDQ1LS4xM2EyMS45MTYgMjEuOTE2IDAgMDAtLjU2Mi0xLjM5OGwtLjAwMS0uMDAyYTIxLjUyMyAyMS41MjMgMCAwMC0xLjk0NC0zLjQ3MiAyMS41NjkgMjEuNTY5IDAgMDAtMi40NTUtMi45NjhjLS4wMzctLjAzOC0uMDc1LS4wNzQtLjExMi0uMTFhMjIuMDIzIDIyLjAyMyAwIDAwLTEuOTEtMS42OTVoLS4wMDFhMjEuOTY4IDIxLjk2OCAwIDAwLTEuNzU2LTEuMjQ3bC0uMDA4LS4wMDZhMjIuMTk3IDIyLjE5NyAwIDAwLTEuNzc1LTEuMDEzYy0uMDUyLS4wMjYtLjEwMS0uMDU3LS4xNTQtLjA4NGEyMS40MjcgMjEuNDI3IDAgMDAtMS43MjctLjc2NWMtLjEwNi0uMDQyLS4yMDUtLjA5NC0uMzEyLS4xMzRhMjIuMDkzIDIyLjA5MyAwIDAwLTIuMTEzLS42ODZjLTUuNTE0LTEuNDc3LTExLjM0My0uNjUtMTYuNDE0IDIuMzI3LTQuNCAyLjU4NC03LjcgNi40OC05LjQ2MyAxMS4xMTRsLTE2LjcyMi00LjQ4YTEuOTk1IDEuOTk1IDAgMDAtMi40NSAxLjQxM0wxMC45MTQgMTAxLjA1YTY1LjYwMiA2NS42MDIgMCAwMDMuMDI5IDQuMTVsMTMuODMyLTUxLjYyNSA2Ljk0MiAxLjg2IDguOCAyLjM1OGMuMjI2LjIwMy40OTYuMzYzLjgxLjQ0Ny4zMTMuMDg0LjYyNy4wOC45MjYuMDE4bDM2LjE5IDkuNjk3YTEuOTk1IDEuOTk1IDAgMDAxLjMzLjUxOGMuMTI4IDAgLjI0OC0uMDM5LjM3LS4wNjJsMTguMjUzIDQuODkxTDg3LjI1IDEyNi4wOWE2NC43NjIgNjQuNzYyIDAgMDA0LjY1Ni0xLjkyM2wxMy44NjktNTEuNzYyYTEuOTMxIDEuOTMxIDAgMDAuMDU1LS42NjIiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+"
    let h5 = document.createElement("h5")
    h5.innerText="Your shopping bag is empty."
    let p = document.createElement("p")
    p.setAttribute("id","para")
    p.innerText="And that means it's time to start shopping!"
    let btn=document.createElement("button")
    btn.setAttribute("id","btn")
    btn.innerText="Shop What's New"
    document.querySelector(".preeti").append(img,h5,p,btn)
}
else{
 
  
data.forEach(function(e,i){
    var div1=document.createElement("div")
    var div2=document.createElement("div");
    var div3=document.createElement("div");
  
    let img1=document.createElement("img")
    img1.src=e.image_url1
   
    let h51=document.createElement("h5")
    h51.innerText=e.heading
    let p1=document.createElement("p")
    p1.innerText=e.info
    sum=sum+Number(e.price)
    let color1=document.createElement("p")
    color1.innerText=e.color
    let size1=document.createElement("div")
    var span1=document.createElement("span")
    var span2=document.createElement("span");
    span1.innerText="size: ";
    span2.innerText=e.sizes;
    size1.append(span1,span2)
    let para1=document.createElement("p");
    para1.innerText="Quantity"
    let btn1=document.createElement("select")
    let se1=document.createElement("option");
    se1.innerText="1"
    
    let se2=document.createElement("option");
    se2.innerText="2"
    let se3=document.createElement("option");
    se3.innerText="3"

    // btn1.setAttribute("id","btn1")
    // btn1.innerText="Quantity"
   
 
    var div3span1=document.createElement("span")
    var div3span2=document.createElement("span")
    var div3span3=document.createElement("span")

    div3span1.innerText="Edit";
    div3span2.innerText="Move To Wishlist";
    
    
  
    var div3span3=document.createElement("span")

    var dele=document.createElement("button");
    div2.setAttribute("id","content")
    div3.setAttribute("class","editme")
    dele.setAttribute("class","delete");
    // dele.innerHTML=`<i class="fa fa-trash" aria-hidden="true"></i>`
    dele.addEventListener("click",function(){
        dellefunction(e,i)        
    })
    btn1.append(se1,se2,se3);
    div2.append(h51,p1,color1,size1,para1,btn1)
    div3span3.append(dele);
    div3.append(div3span1,div3span2)
div1.append(img1,div2,div3,div3span3)
    



    document.querySelector(".preeti").append(div1)
})
}


// console.log(sum)
if(data.length==0){
    var take=document.getElementById("qty")
    var takespan=document.createElement("span");
    takespan.innerText="0)";
    take.append(takespan)

}
else{
   var take= document.getElementById("qty")
    var  takespan2=document.createElement("span");
    takespan2.innerText=data.length+")"
    take.append(takespan2)
    document.getElementById("price").innerText="$ "+sum+"0";
    document.querySelector(".total1").innerText="$ "+sum+"0";


}
if(data.length==1){
    var cart=document.querySelector("#cart");
    cart.style.color="white"
}
if(data.length==0){
    var dot=document.querySelector(".preeti")
    dot.setAttribute("id","cat1")

}
else{
    var dot=document.querySelector(".preeti")
    dot.setAttribute("id","cat2")
}

// delete purpose
}
// function  dellefunction(e,i) {
//     var deletee=data.filter(function(el){
//        return data.el==e
//     })
      
//     localStorage.setItem("cartdata",JSON.stringify(deletee))
//     display(deletee);
//     window.location.reload();
// }
function dellefunction(smart,i){
      
    data.splice(i,1)
    localStorage.setItem("cartdata",JSON.stringify(data));
    window.location.reload();

}
// -----boxesss--
