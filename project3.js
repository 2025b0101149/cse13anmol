function showTab(tabId){

    let tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab=>{
        tab.style.display = "none";
    });

    document.getElementById(tabId).style.display = "block";
}

function addBlog(){

    let title =
    document.getElementById("title").value;

    let content =
    document.getElementById("content").value;

    if(title==="" || content===""){
        alert("Please fill all fields");
        return;
    }

    let blogDiv =
    document.createElement("div");

    blogDiv.className="blog";

    blogDiv.innerHTML=
    "<h2>"+title+"</h2><p>"+content+"</p>";

    document.getElementById("blogList")
    .appendChild(blogDiv);

    document.getElementById("title").value="";
    document.getElementById("content").value="";

    alert("Blog Published!");

    showTab("blogs");
}