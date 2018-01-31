function buildGame(element, data) {

  var buttonValue = data;

  var myList = document.getElementById('items');
  myList.innerHTML = '';

  for (var i = 0; i < element; i++) {
    myList.appendChild(document.createElement("li"));
  }

  var element = document.querySelectorAll('li');

  var color = [];

  switch (buttonValue) {
    case 'color_8':
        color = ['red', 'red', 'blue', 'blue', 'green', 'green', 'black', 'black'];
      break;
    case 'color_12':
        color = ['red', 'red', 'blue', 'blue', 'green', 'green', 'black', 'black', 'yellow', 'yellow', 'orange', 'orange'];
      break;
    case 'color_16':
        color = ['red', 'red', 'blue', 'blue', 'green', 'green', 'black', 'black', 'yellow', 'yellow', 'orange', 'orange', 'purple', 'purple', 'cyan', 'cyan'];
  }

  element.forEach(function(element) {

    item = color[Math.floor(Math.random()*color.length)];

    element.className = 'loaded ' + item;

    var index = color.indexOf(item);
    color.splice(index, 1);

  });

  // match card color.
  function showCard() {
    for (var x in element) {
      element[x].addEventListener('click', clicked);

      function clicked(){
        this.className += " " + "active";

        var clickedFirst =  document.querySelectorAll('#items .active');

          if (clickedFirst[0].className === clickedFirst[1].className) {
            console.log('isti su');
            clickedFirst[0].className += " " + "hide";
            clickedFirst[1].className += " " + "hide";
          }
      }
    }
  };

  showCard();
}
