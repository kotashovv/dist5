var complexpage = document.querySelector('.complex__body');

if (complexpage) {
    var accBtn = document.getElementsByClassName('accordeon-btn')
  var i;

  for (i = 0; i < accBtn.length; i++) {
    accBtn[i].addEventListener('click', function() {
        this.classList.toggle('active')
        var accInfo = this.nextElementSibling;

        if (accInfo.style.maxHeight) {
            accInfo.style.maxHeight = null;
        } else {
            accInfo.style.maxHeight = accInfo.scrollHeight + 'px';
        }
    });
}
}

