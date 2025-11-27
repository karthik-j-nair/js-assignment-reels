const reels = [
  {
    creatorName: "Aarav Sharma",
    profilePic: "https://images.pexels.com/photos/28583939/pexels-photo-28583939.jpeg",
    video: "./videos/bike-edit.mp4",
    isLiked: false,
    likeCount: 1200,
    commentCount: 340,
    caption: "Chasing good vibes ✨",
    shareCount: 80,
    isFollowing: false,
    isMuted: true
  },
  {
    creatorName: "Riya Mehta",
    profilePic: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg",
    video: "./videos/bmw-bike-edit.mp4",
    isLiked: false,
    likeCount: 5400,
    commentCount: 620,
    caption: "Weekend mood 🔥",
    shareCount: 140,
    isFollowing: false,
    isMuted: true
  },
  {
    creatorName: "Krish Patel",
    profilePic: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    video: "./videos/ktm-edit.mp4",
    isLiked: false,
    likeCount: 890,
    commentCount: 120,
    caption: "Travel diaries 🏔️",
    shareCount: 45,
    isFollowing: false,
    isMuted: true
  },
  {
    creatorName: "Sneha Kapoor",
    profilePic: "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg",
    video: "./videos/levi-edit.mp4",
    isLiked: false,
    likeCount: 3200,
    commentCount: 410,
    caption: "Fitness grind 💪",
    shareCount: 110,
    isFollowing: false,
    isMuted: true
  },
  {
    creatorName: "Rohan Verma",
    profilePic: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    video: "./videos/obanai-edit.mp4",
    isLiked: false,
    likeCount: 150,
    commentCount: 30,
    caption: "Trying something new 🎨",
    shareCount: 10,
    isFollowing: false,
    isMuted: true
  },
  {
    creatorName: "Ananya Singh",
    profilePic: "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg",
    video: "./videos/bmw-car-edit.mp4",
    isLiked: false,
    likeCount: 2100,
    commentCount: 500,
    caption: "Sunset lover 🌅",
    shareCount: 95,
    isFollowing: false,
    isMuted: true
  }
];

let allReels = document.querySelector(".reels-all");
// 
function addData() {
  let sum = '';
  reels.forEach((objs, idx) => {
    sum = sum + `<div class="reel">
                    <video autoplay ${objs.isMuted ? 'muted' : ''} loop src="${objs.video}"></video>

                    <div id="${idx}" class="mute-button">
                      ${objs.isMuted ? '<i class="ri-volume-up-line"></i>' : '<i class="ri-volume-mute-line"></i>'}
                    </div>

                    <div class="bottom">
                        <div class="creator">
                            <img class="user-img"
                                src="${objs.profilePic}" alt="">
                            <h4>Karthik.j.nair</h4>
                            <button id="${idx}" class="follow">${objs.isFollowing ? "Following" : "Follow"}</button>
                        </div>
                        <h6>${objs.caption}</h6>
                    </div>

                    <div class="right">
                        <div id="${idx}" class="like">
                            <h4 class="like-icon icons">${objs.isLiked ? '<i class="love ri-thumb-up-fill"></i>' : '<i class="ri-thumb-up-line"></i>'}</h4>
                            <h6>${objs.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icons"><i class="ri-message-2-line"></i></h4>
                            <h6>${objs.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icons"><i class="ri-share-forward-line"></i></h4>
                            <h6>${objs.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icons"><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div>`;
  });



  allReels.innerHTML = sum;
}

addData();

// allReels.addEventListener("click", (evt)=>{

//   if (!reels[evt.target.id].isLiked) {
//     reels[evt.target.id].likeCount++;
//     reels[evt.target.id].isLiked = true;
//   } else {
//     reels[evt.target.id].likeCount--;
//     reels[evt.target.id].isLiked = false;
//   }

//   addData();

// });



allReels.addEventListener("click", (evt) => {
  console.log(evt.target);


  if (evt.target.className == 'like') {
    if (!reels[evt.target.id].isLiked) {
      reels[evt.target.id].likeCount++;
      reels[evt.target.id].isLiked = true;

    }
    else {

      reels[evt.target.id].likeCount--;
      reels[evt.target.id].isLiked = false;
    }
    addData();
  }

  if (evt.target.className == 'follow') {
    if (!reels[evt.target.id].isFollowing) {
      reels[evt.target.id].isFollowing = true;

    }
    else {
      reels[evt.target.id].isFollowing = false;
    }
    addData();

  }
  if (evt.target.className == 'mute-button') {
    if (!reels[evt.target.id].isMuted) {
      reels[evt.target.id].isMuted = true;

    }
    else {
      reels[evt.target.id].isMuted = false;
    }
    addData();

  }

  //  else {
  //   reels[evt.target.id].likeCount--;
  //   reels[evt.target.id].isLiked = false;
  //   addData();
  // }
  // if (!reels[evt.target.id].isFollowing) {
  //   reels[evt.target.id].isFollowing = true;
  // } else {
  //   reels[evt.target.id].isFollowing = false;
  // }



});



