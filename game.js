// const dino = document.getElementById("dino"),
//     cactus = document.getElementById("cactus"),
//     scoreInput = document.getElementById("score");

// let gameStarted = false,
//     score = 0,
//     scoreInterval,
//     collisionInterval;

// function jump() {
//     if (!dino.classList.contains("jump")) {
//         dino.classList.add("jump");
//         setTimeout(() => dino.classList.remove("jump"), 500);
//     }
// }

// function startGame() {
//     if (gameStarted) return; // Prevent multiple game starts
//     gameStarted = true;
//     score = 0;
//     scoreInput.value = score;

//     // Add cactus animation
//     cactus.classList.add("move-cactus");

//     // Start score increment
//     scoreInterval = setInterval(() => {
//         scoreInput.value = ++score;
//     }, 1000);

//     // Collision detection
//     collisionInterval = setInterval(() => {
//         // const dinoBottom = parseInt(getComputedStyle(dino).bottom);
//         // const cactusRight = parseInt(getComputedStyle(cactus).right);

//         // if (cactusRight > 0 && cactusRight < 50 && dinoBottom < 50) {
//         //   alert("Game Over!");
//         //   resetGame();
//         // }
//         const dinoRect = dino.getBoundingClientRect();
//         const cactusRect = cactus.getBoundingClientRect();

//         if (
//             dinoRect.right > cactusRect.left &&
//             dinoRect.left < cactusRect.right &&
//             dinoRect.bottom > cactusRect.top
//         ) {
//             alert("Game Over!");
//             resetGame();
//         }
//     }, 10);
// }

// // function resetGame() {
// //     gameStarted = false;
// //     clearInterval(scoreInterval);
// //     clearInterval(collisionInterval);
// //     cactus.classList.remove("move-cactus");
// //     scoreInput.value = 0;
// // }

// function resetGame() {
//     gameStarted = false;
//     clearInterval(scoreInterval);
//     clearInterval(collisionInterval);
  
//     cactus.classList.remove("move-cactus");
//     // Force reflow
//     void cactus.offsetWidth;
//     cactus.classList.add("move-cactus");
  
//     scoreInput.value = 0;
// }
  

// // document.addEventListener("keydown", () => {
// //     if (!gameStarted) startGame();
// //     jump();
// // });

// document.body.addEventListener("keydown", (e) => {
//     if (e.key === " " || e.key === "ArrowUp") { // Space or Up arrow to jump
//       if (!gameStarted) startGame();
//       jump();
//     }
//   });
  


const dino = document.getElementById("dino"),
  cactus = document.getElementById("cactus"),
  scoreInput = document.getElementById("score");

let gameStarted = false,
  score = 0,
  scoreInterval,
  collisionInterval;

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    setTimeout(() => dino.classList.remove("jump"), 500);
  }
}

function startGame() {
  if (gameStarted) return;
  gameStarted = true;
  score = 0;
  scoreInput.value = score;

  cactus.classList.add("move-cactus");

  scoreInterval = setInterval(() => {
    scoreInput.value = ++score;
  }, 1000);

  collisionInterval = setInterval(() => {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (
      dinoRect.right > cactusRect.left &&
      dinoRect.left < cactusRect.right &&
      dinoRect.bottom > cactusRect.top
    ) {
      alert("Game Over!");
      resetGame();
    }
  }, 10);
}

function resetGame() {
  gameStarted = false;
  clearInterval(scoreInterval);
  clearInterval(collisionInterval);

  cactus.classList.remove("move-cactus");
  void cactus.offsetWidth; // Reflow
  cactus.classList.add("move-cactus");

  scoreInput.value = 0;
}

document.body.addEventListener("keydown", (e) => {
  if (e.key === " " || e.key === "ArrowUp") {
    if (!gameStarted) startGame();
    jump();
  }
});

