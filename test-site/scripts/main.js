let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Golden-Retriever-Puppy-PNG.png') {
      myImage.setAttribute('src','images/Daco_4415875.png');
    } else {
      myImage.setAttribute('src','images/Golden-Retriever-Puppy-PNG.png');
    }
}