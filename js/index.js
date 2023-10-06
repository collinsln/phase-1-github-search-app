const searchList=document.getElementById("search-list");
// const resultGrid=document.getElementById();
const searchBox=document.getElementById("ser -name-search-box");

async function loadNames(searchTerm){
    const url=`https://api.github.com/search/users?q=${searchTerm}`
   
    
    const res=await fetch (`${url}`)
    const data = await res.json();
}
function findUsername(){
    let searchTerm=(searchBox.value);
    console.log (searchTerm)
}
function displayUserNames(users){
    searchList.innerHTML="";
    let userslist=document.createElement("div");
    console.log(userslist);
}

if(data.Response ==="True")
.then(res =>{
console.log(res);
})
.then(data=>{
    data.forEach(user =>{
        const markUp=`<li>${user.name}<li>`
        document.querySelector(`ul`).insertAdjacentHTML(`beforeend`,markUp);
    });
})
.catch(error=> console.log(error));
