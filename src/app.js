/* Elements on load */
const main = document.querySelector('.main-videos')
const trending = document.querySelector('.trending-videos')
const extra = document.querySelector('.extra-videos')

/* main style */
const gridComputedStyle = window.getComputedStyle(main)
var gridColumns = gridComputedStyle.gridTemplateColumns.split(' ').length
var lastGridColumns = gridComputedStyle.gridTemplateColumns.split(' ').length

while(main.children.length/2 < gridColumns){
   main.appendChild(newVideoContainer()) 
}

while(trending.children.length < gridColumns){
   trending.appendChild(newVideoContainer()) 
}

while(extra.children.length/4 < gridColumns){
   extra.appendChild(newVideoContainer()) 
}

lastGridColumns = gridComputedStyle.gridTemplateColumns.split(' ').length

window.addEventListener('resize', function(){
   gridColumns = gridComputedStyle.gridTemplateColumns.split(' ').length
   if(lastGridColumns < gridColumns){
      while(main.children.length/2 < gridColumns){
         main.appendChild(newVideoContainer()) 
      }
      while(trending.children.length < gridColumns){
         trending.appendChild(newVideoContainer()) 
      }
      while(extra.children.length/4 < gridColumns){
         extra.appendChild(newVideoContainer()) 
      }
      lastGridColumns = gridComputedStyle.gridTemplateColumns.split(' ').length
   }
})

/* Pad time */
function pad(number, digits) {
   return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number
}

function newVideoContainer(){
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
   var viewsData = Math.round(Math.random() * (999999))
   dataViewsNumber.innerText = viewsData >= 1000 ? viewsData.toString().slice(0,-3) + 'K' : viewsData


   var times = {
   'seconds': Math.round(Math.random() * (60 - 1) + 1),
   'minutes': Math.round(Math.random() * (60 - 1) + 1),
   'hours': Math.round(Math.random() * (24 - 1) + 1),
   'days': Math.round(Math.random() * (30 - 1) + 1),
   'months': Math.round(Math.random() * (12 - 1) + 1),
   'years': Math.round(Math.random() * (3 - 1) + 1)
   }


   typetimeNumber.innerText = Object.keys(times)[Math.floor(Math.random()*Object.keys(times).length)]

   dataTimeNumber.innerText = times[typetimeNumber.innerText] + ' '

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

   return article

}

