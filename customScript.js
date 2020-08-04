function changeHeading(newHeading) {
  let element = document.getElementById("lastTweetHeading");
  element.innerText = newHeading;
  return element;
}

function changeBackgroundColor(colorCode) {
  let element = document.getElementById("my_friends");
  element.style.backgroundColor = colorCode;
  return element;
}

document.onload = changeHeading("MY LAST POST");
document.onload = changeBackgroundColor("#fcba03");
