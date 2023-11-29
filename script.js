// Close navbar on mobile
function closeBar() {
  var element = document.getElementById('nav-bar');
  if (element) {
    let isOpen = element.classList.contains('show-bar');
    if (isOpen) {
      element.classList.remove('show-bar');
    } else {
      element.classList.add('show-bar');
    }
    hidden();
  }

  function hidden() {
    var element = document.getElementById('home-content');
    let ishidden = element.getAttribute('hidden');

    if (ishidden) {
      element.removeAttribute('hidden');
    } else {
      element.setAttribute('hidden', 'hidden');
    }
  }
}
