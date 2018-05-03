let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log("i want to get article: " + id);

let mediaId =


fetch("http://kmjdesign.dk/m2/wordpress/wp-json/wp/v2/events/"+id+"?_embed") //embed giver alle detaljer på billedet - Author, images osv.
  .then(e=>e.json())
  .then(showSinglePost)


function showSinglePost(aPost){
  console.log(aPost);
  document.querySelector("#singleGame h1").textContent=aPost.title.rendered;

  document.querySelector(".descript").innerHTML = aPost.content.rendered;
  document.querySelector("img").setAttribute("src", aPost._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);

}
