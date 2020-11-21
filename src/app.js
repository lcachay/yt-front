
//<article class="video-container">
//            <a href="#" class="link-video">
//               <div href="#" class="thumbnail">
//                  <img src="https://source.unsplash.com/featured/?film,people" alt="" class="thumbnail-img">
//               </div>
//            </a>
//            <div class="video-text">
//               <a href="#" class="channel-img">
//                  <img src="https://source.unsplash.com/featured/?people" alt="" class="channel-img">
//               </a>
//               
//               <a href="#" class="video-title">Video Title</a>
//               <div class="video-details">
//                  <a href="#" class="channel-name">ChannelName</a>
//                  <div class="video-metadata">
//                     <div class="views">
//                        <span data-views-number>x</span> <span>views</span>
//                     </div>
//                     <div class="circle">
//                        <i class="fas fa-circle"></i>
//                     </div>
//                     <div class="time">
//                        <span data-time-number>0</span> <span data-time-type>something</span> <span>ago</span>
//                     </div>
//                     
//                     
//                  </div>
//               </div>
//               
//            </div>
//</article>

/* Elements on load */
const main = document.querySelector('.main-videos')
const trending = document.querySelector('.trending-videos')
const extra = document.querySelector('.extra-videos')

/* Pad time */
function pad(number, digits) {
   return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}

/* Create elements and assign classes src href or attributes*/

var article = document.createElement('article')
article.classList.add('video-container')

var linkVideo = document.createElement('a')
linkVideo.classList.add('link-video')
linkVideo.href = '#'

var thumbnail = document.createElement('div')
thumbnail.classList.add('thumbnail')

//The majority of youtube videos aren't more than a few minutes long, so hours tend to be zero */  
if (Math.random() > 0.1){
   thumbnail.setAttribute(
                           'data-hours', 
   /* minutes */           Math.round(Math.random() * (60 - 1 ) + 1) + ':' + 
   /* seconds */           pad(Math.round(Math.random() * (60 - 1 ) + 1),2) 
   )
}else{
   thumbnail.setAttribute(
                           'data-hours', 
   /* hours */             Math.round(Math.random() * 4) + ':' + 
   /* minutes */           pad(Math.round(Math.random() * (60 - 1 ) + 1),2) + ':' + 
   /* seconds */           pad(Math.round(Math.random() * (60 - 1 ) + 1),2) 
   )
}

var thumbnailIMG = document.createElement('img')
thumbnailIMG.classList.add('thumbnail-img')
thumbnailIMG.src = 'https://source.unsplash.com/featured/?film,people' + Math.random()

var videoText = document.createElement('div')
videoText.classList.add('video-text')

var channelImg = document.createElement('a')
channelImg.classList.add('channel-img')
channelImg.href = '#'

var channelImgImg = document.createElement('img')
channelImgImg.classList.add('channel-img')
channelImgImg.src = 'https://source.unsplash.com/featured/?people' + Math.random()

var videoTitle = document.createElement('a')
videoTitle.classList.add('video-title')
videoTitle.href = '#'

var videoDetails = document.createElement('div')
videoDetails.classList.add('video-details')

var channelName = document.createElement('a')
channelName.classList.add('channel-name')
channelName.href = '#'

var metadata = document.createElement('div')
metadata.classList.add('video-metadata')

var views = document.createElement('div')
views.classList.add('views')

var dataViewsNumber = document.createElement('span')
dataViewsNumber.setAttribute('data-number','views')

var viewsNumber = document.createElement('span')

var circle = document.createElement('div')
circle.classList.add('circle')

var circleI = document.createElement('i')
circleI.classList.add('fas')
circleI.classList.add('fa-circle')

var time = document.createElement('div')
time.classList.add('time')

var dataTimeNumber = document.createElement('span')
dataTimeNumber.setAttribute('data-number','time')

var typetimeNumber = document.createElement('span')
typetimeNumber.setAttribute('data-number','type')

var timeNumber = document.createElement('span')

/* Complete inner html */
viewsNumber.innerText = ' views'
timeNumber.innerText = ' ago'
channelName.innerText = Math.random() > 0.8 ? faker.company.companyName() :  faker.name.findName()
videoTitle.innerText = faker.random.words(Math.random() * 7)


/* Append elements */

views.appendChild(dataViewsNumber)
views.appendChild(viewsNumber)

circle.appendChild(circleI)

time.appendChild(dataTimeNumber)
time.appendChild(typetimeNumber)
time.appendChild(timeNumber)


metadata.appendChild(views)
metadata.appendChild(circle)
metadata.appendChild(time)

channelImg.appendChild(channelImgImg)
videoDetails.appendChild(channelName)
videoDetails.appendChild(metadata)

videoText.appendChild(channelImg)
videoText.appendChild(videoTitle)
videoText.appendChild(videoDetails)

thumbnail.appendChild(thumbnailIMG)
linkVideo.appendChild(thumbnail)

article.appendChild(linkVideo)
article.appendChild(videoText)

main.appendChild(article)
