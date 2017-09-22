document.addEventListener('DOMContentLoaded', function() {
  var header = 'welcome';
  var item = document.createElement('div');
  item.innerHTML = header;
  document.lastChild.append(item);

  var content = document.getElementById('content');
  console.log(content.getAttribute('note'));

  setTimeout( () => {
    item.remove();
  }, 1000);
});
