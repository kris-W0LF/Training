
const months = document.getElementsByClassName("month");

const songpanel = document.getElementsByClassName("song-panel");
const closebtn = document.getElementsByClassName("close-btn");

const monthTitle = document.getElementById("month-title");

const songnameInput = document.getElementById("song-name");
const songurlInput = document.getElementById("song-url");

const addsongbtn = document.getElementById("add-song");

const songlist = document.getElementById("song-list");





const songs = {
  January: [],
  February: [],
  March: [],
  April: [],
  May: [],
  June: [],
  July: [],
  August: [],
  September: [],
  October: [],
  November: [],
  December: []
};


let selectedMonth = "";

Array.from(months).forEach(function (monthName) {
  monthName.addEventListener("click", function () {
    selectedMonth = monthName.textContent;
    monthTitle.textContent = selectedMonth;

    songpanel[0].classList.add("active");
    displaySong();
  });
});

function displaySong() {
  songlist.innerHTML = "";

  songs[selectedMonth].forEach(function (song) {
    const li = document.createElement("li");
    const link = document.createElement("a");

    link.textContent = song.name;
    link.href = song.url;

    link.target = "_blank";

    li.appendChild(link);

    songlist.appendChild(li);
  })
};

addsongbtn.addEventListener("click", function () {
  const songname = songnameInput.value.trim();
  const songurl = songurlInput.value.trim();

  if (songname === "" || songurl === "") {
    alert("please enter  songname and url");
    return;
  }

  songs[selectedMonth].push({
    name: songname,
    url: songurl
  });

  songnameInput.value = "";
  songurlInput.value = "";

  displaySong();


});



closebtn[0].addEventListener("click", function () {
  songpanel[0].classList.remove("active");

});

