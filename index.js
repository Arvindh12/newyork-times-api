var navbar = document.getElementById("navbar")
var navbarbutton = document.getElementById("navbarbutton")
var loadingdiv = document.getElementById("loadingdiv")
var currentpage = "home"

navbarbutton.onclick = ()=>{
    console.log(navbar.className)
    if( navbar.className == "navbar-collapse offcanvas-collapse")
    navbar.setAttribute("class" ,"navbar-collapse offcanvas-collapse open")
    else
    navbar.setAttribute("class","navbar-collapse offcanvas-collapse")
}

var links = document.querySelector(".navbar-nav.mr-auto")



async function getData(section){
    var renderhere = document.getElementById("renderhere")
    renderhere.innerHTML =""
    loadingdiv.style.display = "block";
var res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=vfcPqAbAa5ZFFDQjga07QSRt8imagCno`)
var data = await res.json()
console.log(data)
renderDom(data.results)
}

getData("home")

function renderDom(data){
    var renderhere = document.getElementById("renderhere")
    renderhere.innerHTML =""
    loadingdiv.style.display = "none";
    data.forEach(e => {
        
        renderhere.innerHTML += 
        `<div class="col-md-4">
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-lg-4">
                <img src="${e.multimedia[4].url}" class="card-img" alt="...">
              </div>
              <div class="col-lg-8">
                <div class="card-body">
                
                <h6 class="card-text text-primary"> <span class="text-uppercase">${e.section} </span> <span class="article">${e.item_type} </span></h6> 
                  <h5 class="card-title">${e.title.toUpperCase()} </h5>
                  <span class="font-weight-light font-italic" style="font-size:15px">${e.byline}</span>
                  <p class="card-text">${e.abstract} <a href="${e.short_url}">Continue reading</a></p>
                  <p class="card-text"><small class="text-muted">${e.created_date}</small></p>
                </div>
              </div>
            </div>
          </div>
      </div>`

    });
    
"sbvvsd".toUpperCase()
}