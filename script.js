document.addEventListener('DOMContentLoaded', function(event) {
  var rellax = new Rellax('.rellax');

  new Glide('.glide').mount();

  const observer = lozad('.lozad', {
    loaded: function(el) {
      el.classlist.add('lozad-fully-loaded');
    }
  });

  observer.observe();
});
