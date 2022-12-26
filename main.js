let con = document.getElementById("container");
let Time = 1;
document.getElementById("read").addEventListener("click", readAll);
let counter = document.querySelector("#counter");
let count = 0;

function readAll() {
  let nodeList = document.querySelectorAll(".notification");
  if (nodeList) {
    nodeList.forEach(function (node) {
      node.className = "notification";
    });
    count = 0;
    counter.innerHTML = count;
  }
}

//user data
let person = [
 
  {
    name: "Mark Weber",
    avatar: "./assets/profile/avatar-mark-webber.webp",
    data: "reacted to your resent post",
    refrence: "My first tournament todaty!",
    ref_id: "",
    timeStamp: 1,
  },
  {
    name: "Angela Gray",
    avatar: "./assets/profile/avatar-angela-gray.webp",
    data: "followed you",
    refrence: "",
    refrence_src: "",
    ref_id: "",
    timeStamp: 1,
  },

  {
    name: "Jacob Thompson",
    avatar: "./assets/profile/avatar-jacob-thompson.webp",
    data: "has joined your group",
    refrence: "Chess Club",
    refrence_src: "",
    ref_id: "",
    timeStamp: 1,
  },

  {
    name: "Rizky Hasanuddin",
    avatar: "./assets/profile/avatar-rizky-hasanuddin.webp",
    data: "sent you a private message",
    refrence: "",
    refrence_src: "",
    ref_id: "",
    timeStamp: 1,
  },
  {
    name: "Kimberly Smith",
    avatar: "./assets/profile/avatar-kimberly-smith.webp",
    data: "commented on your picture",
    refrence: "",
    refrence_src: "./assets/profile/image-chess.webp",
    ref_id: "chess",
    timeStamp: 1,
  },
  {
    name: "Nathan Peterson",
    avatar: "./assets/profile/avatar-nathan-peterson.webp",
    data: "reacted to your resent post ",
    refrence: "5 end-game stratages to increase your win rate",
    refrence_src: "",
    ref_id: "",
    timeStamp: 1,
  },

  {
    name: "Anna Kim",
    avatar: "./assets/profile/avatar-anna-kim.webp",
    data: "left the group",
    refrence: "Chess club",
    refrence_src: "",
    ref_id: "",
    timeStamp: 1,
  },
];
function toggle() {
  if (this.className != "notification") {
    this.className = "notification";
    count -= 1;
    counter.innerHTML = count;
  }
}
// create new notification
function new_notification(data) {
  count += 1;
  counter.innerHTML = count;
  let div = document.createElement("div");
  div.className = "newNotification notification";
  div.addEventListener("click", toggle);
  // time
  let time = document.createElement("span");
  time.className = "timeStamp";
  time.innerHTML = data.timeStamp;
  setInterval(() => {
    time.innerHTML = data.timeStamp += 1;
  }, 60000);

  // hold content
  let inner_div = document.createElement("div");
  inner_div.className = "inner_div";

  //profile picture
  let pictureFrame = document.createElement("div");
  pictureFrame.className = "pic_frame";
  let avatar_src = document.createElement("img");
  avatar_src.src = data.avatar;
  pictureFrame.appendChild(avatar_src);

  //user name
  let name = document.createElement("p");
  let name_text = document.createElement("span");
  name_text.className = "name";
  let name_node = document.createTextNode(data.name);
  name_text.appendChild(name_node);
  name.appendChild(name_text);

  //the notification
  let data_text = document.createElement("span");
  let data_node = document.createTextNode(data.data);
  data_text.appendChild(data_node);
  data_text.className = "data";
  name.appendChild(data_text);

  //refrence text
  let ref_text = document.createElement("span");
  ref_text.className = "red_alert reference";
  let ref_node = document.createTextNode(data.refrence);
  ref_text.appendChild(ref_node);
  name.appendChild(ref_text);
  // add refrence source
  if (data.refrence_src) {
    inner_div.className = "inner_div_rev";
    let ref_box = document.createElement("img");
    ref_box.className = "ref_src";
    ref_box.src = data.refrence_src;
    inner_div.appendChild(ref_box);
  }

  div.appendChild(pictureFrame);
  div.appendChild(inner_div);
  inner_div.appendChild(name);
  inner_div.appendChild(time);
  con.appendChild(div);

  if (data.ref_id) {
    div.id = data.ref_id;
  }
}

person.map((data) => {
  new_notification(data);
});
