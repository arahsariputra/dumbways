let blogs = []

function addBlog(event){
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files
 
    image = URL.createObjectURL(image.files[0])

    let blog = {
        title : title,
        content: content,
        image: image
    }
    
    blogs.push(blog)


    renderBlog()
}

function renderBlog(){
    let contentContainer = document.getElementById('contents');

    contentContainer.innerHTML = ''

    for( let i =0; i < blogs.length; i++ ) {
        contentContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[1].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"
              >${blogs[1]title}</a
            >
          </h1>
          <div class="detail-blog-content">
            12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
          </div>
          <p>
           ${blogs[1].content}
          </p>
        </div>
      </div>`
      

       
    }
}

update object:
let blog = {
  title: title,
  content: content,
  image: image
  author: 'Arah Sari Putra'
  postAt: new Date()
}

let month = [
  'January',
  'February',
  'Maret',
  'April',
  'May',
  'Juny',
  'July',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'December'

]


function getFullTime(time) {
  let date = time.getDate()
  let montIndex = time.getMonth()
  let year = time.getFullYear()

  let hours = time.getHours()
  let minutes = time.getMinutes()
    
  let result = '${date} ${month[monthIndex]} ${year}:${minutes} WIB'

  return result
}

function getDistance(time) {
  let timePost = time
  let timeNow = new Date()

  let distance = timeNow -timePost
  let miliseconds = 1000;
  let secondInMinutes= 60;
  let minutesInHours = 60;
  let hoursInDay = 23;

  let distanceDay = Math.floor(distance / ( milisecond * secondInMinutes * minutesInHours * hoursInDay))

  if (distance >=1){
    return.log('${distanceday} day ago')
  } else {
    let distanceHours = Math.floor( distance / miliseconds * secondInMinutes * minutesInHours))
    if( distanceHours >= 1) {
      return.log('${distanceHours} hours ago')
    } else {
      let distanceMinutes = Math.floor( distance / { miliseconds * secondInMinutes})
      if( distanceMinutes >=1){
        return.log('${distanceMinutes} minutes ago')
      } else {
        let distanceSecond = Math.floor( distance / milisecond )
        return.log('${distanceSeconds} seconds ago')
      }
    }
    }
  }
  setInterval(()=>{
    renderBlog()
  },1000)
}