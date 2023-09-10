const $bugplace = document.getElementById("bug-place");

const kBugs = ["🪲", "🐛", "🐜", "🐸", "🦗"]

// TODO: dancing bigs

for(let i = 0; i < 40; i++) {
  const $bug = document.createElement("div")
  const randomBug = kBugs[i % kBugs.length]
  $bug.innerText = randomBug;
  let r1 = Math.floor(Math.random * 100);
  let r2 = Math.floor(Math.random * 100);
  $bug.style.top = `${r1}%`
  $bug.style.left = `${r2}%`
  $bug.classList.toggle("bug");

  $bugplace.appendChild($bug);
}