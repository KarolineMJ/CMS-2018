let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log("i want to get article: " + id);


fetch("http://kmjdesign.dk/m2/CMS/wordpress/wp-json/wp/v2/events/"+id)
  .then(e=>e.json())
  .then(showSinglePost)


function showSinglePost(aPost){
  console.log(aPost);
  document.querySelector("#singleGame h1").textContent=aPost.title.rendered;

  document.querySelector(".descript").innerHTML = aPost.content.rendered;

}
