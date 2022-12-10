(Array.from(document.getElementsByTagName("a")))
    .forEach((Book)=>{
    Book.addEventListener("click",book);
});


function book(event){
    event.preventDefault();
    
    if(event.target.id=="b1"){
        read("books/AliceInWonderland.txt","Alice In WonderLand");
    }
    if(event.target.id=="b2"){
        read("books/JekyllAndHyde.txt","Jekyll And Hyde");
    }
    if(event.target.id=="b3"){
        read("books/LOTR.txt","Lord Of The Rings");
    }
}

function read(url,title){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = function() {
        var data = request.responseText;
        document.getElementById("head").innerText=title;
        document.getElementById("book_text").innerText=data;
}
request.send();
}