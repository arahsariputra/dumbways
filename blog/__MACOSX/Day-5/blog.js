function addBlog(event){
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files
 
    image = URL.createObjectURL(image[0])

    let blog = {
        title : title,
        content: content,
        image: image
    }
    
    console.log(blog)
}

function manipulationHTML(){
    let contentContainer = document.getElementById('contents');

    contentContainer.innerHTML = ''

    for( let i =0; i < blogs.length; i++ ) {
        contentContainer.innerHTML += ' 

        <div class="blog-detail">
      <div class="blog-detail-container">
        <img src="${blogs[1].image}"
        <div class="author">12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah</div>
        <img src="assets/blog-img-detail.png" alt="detail" />
        <p>
          ${blogs[1].content}
          memasuki pasar setiap tahunnya.
        </p>
      </div>
    }
}