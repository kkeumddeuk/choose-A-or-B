const songs = [
  {
    title: "행운의 달 (Lucky12)",
    artist: "원위(ONEWE)",
    date: "2025.10.07",
    cover: "./images/onewe.webp",
    youtube: "https://youtu.be/pQ7Zj8CbCoU",
  },
  {
    title: "EYES CLOSED",
    artist: "JISOO X ZAYN",
    date: "2025.10.10",
    cover: "./images/jisoo-eyesclosed.webp",
    youtube: "https://youtu.be/EN1tMeXQii0",
  },
  {
    title: "WE GO UP",
    artist: "BABYMONSTER",
    date: "2025.10.10",
    cover: "./images/babymonster-wegoup.webp",
    youtube: "https://youtu.be/wlHwjkYpSr0",
  },
  {
    title: "ME+YOU",
    artist: "트와이스(TWICE)",
    date: "2025.10.10",
    cover: "./images/twice-meyou.webp",
    youtube: "https://youtu.be/zqorlX_5oHQ",
  },
  {
    title: "Blue Valentine",
    artist: "NMIXX(엔믹스)",
    date: "2025.10.13",
    cover: "./images/nmixx-bluevalentine.webp",
    youtube: "https://youtu.be/EmeW6li6bbo",
  },
  {
    title: "OVERDRIVE",
    artist: "TWS(투어스)",
    date: "2025.10.13",
    cover: "./images/tws-overdrive.webp",
    youtube: "https://youtu.be/TzbGBkEh9ms",
  },
  {
    title: "Round&Round",
    artist: "배진영",
    date: "2025.10.14",
    cover: "./images/roundnround.webp",
    youtube: "https://youtu.be/YpPqIK4JpcI",
  },
  {
    title: "BURNING UP",
    artist: "미야오(MEOVV)",
    date: "2025.10.14",
    cover: "./images/meovv-burning_up.webp",
    youtube: "https://youtu.be/hlULtigNNao",
  },
  {
    title: "Good Goodbye",
    artist: "화사",
    date: "2025.10.15",
    cover: "./images/hwasa-goodgoodbye.webp",
    youtube: "https://youtu.be/Qe8fa4b5xNU",
  },
  {
    title: "타임캡슐",
    artist: "다비치(DAVICHI)",
    date: "2025.10.16",
    cover: "./images/davichi.webp",
    youtube: "https://youtu.be/qE35JN1ogeI",
  },
  {
    title: "비가 오면",
    artist: "양다일",
    date: "2025.10.19",
    cover: "./images/yangdail.webp",
    youtube: "https://youtu.be/x_oX6kwCACU",
  },
  {
    title: "FOCUS",
    artist: "Hearts2Hearts",
    date: "2025.10.20",
    cover: "./images/h2h-focus.jpg",
    youtube: "https://youtu.be/Ur7aK4FvK-U",
  },
  {
    title: "Hollywood Action",
    artist: "BOYNEXTDOOR",
    date: "2025.10.20",
    cover: "./images/bnt-hollywoodaction.jpg",
    youtube: "https://youtu.be/yAtew9dZX_E",
  },

  {
    title: "첫사랑은 안녕히-",
    artist: "잔나비",
    date: "2025.10.21",
    cover: "./images/jannabi.jpg",
    youtube: "https://youtu.be/tN5vZjgmFxo",
  },
  {
    title: "Overdrop",
    artist: "시우민",
    date: "2025.10.20",
    cover: "./images/xiumin-overdrop.jpg",
    youtube: "https://youtu.be/s4rG7VoGmiE",
  },
  {
    title: "주르르",
    artist: "이창섭",
    date: "2025.10.22",
    cover: "./images/leechangsub.jpg",
    youtube: "https://youtu.be/jDNCmVejil4",
  },
  {
    title: "Irony",
    artist: "DKB(다크비)",
    date: "2025.10.23",
    cover: "./images/dkb-irony.jpg",
    youtube: "https://youtu.be/0pGUaXGM8wI",
  },
  {
    title: "SPAGHETTI (feat. j-hope of BTS)",
    artist: "LE SSERAFIM",
    date: "2025.10.24",
    cover: "./images/lesserafim-spaghetti.jpg",
    youtube: "https://youtu.be/TvVtYaqCni8",
  },
  {
    title: "ICU",
    artist: "Xdinary Heroes",
    date: "2025.10.24",
    cover: "./images/xdinaryheroes-icu.jpg",
    youtube: "https://youtu.be/L4rOBdjcwLc",
  },
  {
    title: "In Another World",
    artist: "EJAE",
    date: "2025.10.24",
    cover: "./images/ejaeinanotherworld.jpg",
    youtube: "https://youtu.be/fSzpkgeotB8",
  },
  {
    title: "Back to Life",
    artist: "&TEAM",
    date: "2025.10.28",
    cover: "./images/nteam-backtolife.jpg",
    youtube: "https://youtu.be/KqE0P1qMtQg",
  },
  {
    title: "Reno (Feat. Colde)",
    artist: "미연",
    date: "2025.10.28",
    cover: "./images/reno.jpg",
    youtube: "https://youtu.be/nXWEZT0fVYY",
  },
  {
    title: "Last Light",
    artist: "서은광",
    date: "2025.10.29",
    cover: "./images/lastlight.jpg",
    youtube: "https://youtu.be/9tafOVzMqk4",
  },
  //24
  {
    title: "SUPERPOWER (Peak)",
    artist: "xikers",
    date: "2025.10.31",
    cover: "./images/xikers-superpower.jpg",
    youtube: "https://youtu.be/aJjJcf2lDq8",
  },
  //25
  {
    title: "작은 나보다 커다란 세상이 문을 열어 줄 것 같아",
    artist: "FTISLAND",
    date: "2025.10.31",
    cover: "./images/ftisland.jpg",
    youtube: "https://youtu.be/SjGw9K4yJkw",
  },
  //26
  {
    title: "if you wanna",
    artist: "원호",
    date: "2025.10.31",
    cover: "./images/wonho-ifyouwanna.jpg",
    youtube: "https://youtu.be/Yx_0sLOzL74",
  },
  //27
  {
    title: "Chequered Flag (Feat. 유현 of 드림캐쳐)",
    artist: "다미",
    date: "2025.10.31",
    cover: "./images/chequeredflag.jpg",
    youtube: "https://youtu.be/goNL5jE3LIQ",
  },
  //28
  {
    title: "사랑은 어쩌고",
    artist: "LUCY",
    date: "2025.10.30",
    cover: "./images/lucy.jpg",
    youtube: "https://youtu.be/C4Ndp_Lq7VM",
  },
  //29
  {
    title: "앞머리",
    artist: "정승환",
    date: "2025.10.30",
    cover: "./images/prayer.jpg",
    youtube: "https://youtu.be/kKrEc4t8TN8",
  },
  //30
  {
    title: "TROPHY",
    artist: "82MAJOR",
    date: "2025.10.30",
    cover: "./images/82major-trophy.jpg",
    youtube: "https://youtu.be/lROE6G2DwFY",
  },
  //31
  {
    title: "I'm Missing You",
    artist: "범키",
    date: "2025.10.30",
    cover: "./images/immissingyou.jpg",
    youtube: "https://youtu.be/oi5Lk7bKVXY",
  },
  //32
  {
    title: "Replay My Anthem",
    artist: "DKZ",
    date: "2025.10.31",
    cover: "./images/dkz-replaymyanthem.jpg",
    youtube: "https://youtu.be/FR7Jb7q3hiQ",
  },
];

let currentRound = [];
let winners = [];
let currentMatchIndex = 0;
let roundName = "32강";
let currentPlaying = null;

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function startGame() {
  currentRound = shuffleArray(songs);
  winners = [];
  currentMatchIndex = 0;
  updateRoundName();
  showNextMatch();
  document.getElementById("gameContainer").style.display = "block";
  document.getElementById("resultScreen").classList.remove("active");
}

function updateRoundName() {
  const remaining = currentRound.length;
  if (remaining === 32) roundName = "32강";
  else if (remaining === 16) roundName = "16강";
  else if (remaining === 8) roundName = "8강";
  else if (remaining === 4) roundName = "준결승";
  else if (remaining === 2) roundName = "결승";
  document.getElementById("roundInfo").textContent = roundName;
}

function showNextMatch() {
  if (currentMatchIndex >= currentRound.length) {
    if (winners.length === 1) {
      showWinner();
    } else {
      showRoundTransition();
    }
    return;
  }

  const song1 = currentRound[currentMatchIndex];
  const song2 = currentRound[currentMatchIndex + 1];

  document.getElementById("cover1").src = song1.cover;
  document.getElementById("title1").textContent = song1.title;
  document.getElementById("artist1").textContent = song1.artist;
  document.getElementById("date1").textContent = song1.date;
  document.getElementById("player1").src = "";
  document.getElementById("player1").classList.remove("active");
  document.getElementById("playBtn1").textContent = "▶";

  document.getElementById("cover2").src = song2.cover;
  document.getElementById("title2").textContent = song2.title;
  document.getElementById("artist2").textContent = song2.artist;
  document.getElementById("date2").textContent = song2.date;
  document.getElementById("player2").src = "";
  document.getElementById("player2").classList.remove("active");
  document.getElementById("playBtn2").textContent = "▶";

  currentPlaying = null;
}

function extractYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : null;
}

function toggleMusic(event, index) {
  event.stopPropagation();

  const player = document.getElementById(`player${index + 1}`);
  const playBtn = document.getElementById(`playBtn${index + 1}`);
  const song = currentRound[currentMatchIndex + index];

  const otherIndex = index === 0 ? 1 : 0;
  const otherPlayer = document.getElementById(`player${otherIndex + 1}`);
  const otherPlayBtn = document.getElementById(`playBtn${otherIndex + 1}`);

  if (currentPlaying === index) {
    player.classList.remove("active");
    player.src = "";
    playBtn.textContent = "▶";
    currentPlaying = null;
  } else {
    if (currentPlaying !== null) {
      otherPlayer.classList.remove("active");
      otherPlayer.src = "";
      otherPlayBtn.textContent = "▶";
    }

    const videoId = extractYouTubeId(song.youtube);
    if (!videoId) {
      console.error("Invalid YouTube URL:", song.youtube);
      return;
    }

    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&playsinline=1`;
    player.classList.add("active");
    playBtn.textContent = "⏸";
    currentPlaying = index;
  }
}

function selectSong(index) {
  const selectedSong = currentRound[currentMatchIndex + index];
  winners.push(selectedSong);
  currentMatchIndex += 2;
  showNextMatch();
}

function showWinner() {
  const winner = winners[0];
  document.getElementById("gameContainer").style.display = "none";
  document.getElementById("resultScreen").classList.add("active");

  document.getElementById("winnerCover").src = winner.cover;
  document.getElementById("winnerTitle").textContent = winner.title;
  document.getElementById("winnerArtist").textContent = winner.artist;
  document.getElementById("winnerDate").textContent = winner.date;
}

function showRoundTransition() {
  const nextRoundNames = {
    32: "16강",
    16: "8강",
    8: "준결승",
    4: "결승",
  };

  const currentCount = currentRound.length;
  const nextRound = nextRoundNames[currentCount];

  document.getElementById("transitionTitle").textContent = `${roundName} 완료!`;
  document.getElementById(
    "transitionMessage"
  ).textContent = `${nextRound}으로 넘어갑니다`;
  document.getElementById("roundTransition").classList.add("active");
}

function continueToNextRound() {
  document.getElementById("roundTransition").classList.remove("active");
  currentRound = winners;
  winners = [];
  currentMatchIndex = 0;
  updateRoundName();
  showNextMatch();
}

function restartGame() {
  startGame();
}

startGame();
