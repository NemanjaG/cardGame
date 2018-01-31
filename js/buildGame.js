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

    var item = color[Math.floor(Math.random()*color.length)];

    element.className = 'loaded ' + item;

    var index = color.indexOf(item);
    color.splice(index, 1);

  });

  // show card color.
  function showCard() {
    for (var x in element) {
      for (i = 0; i < 2; i++) {
        if(i === 0) {

          element[x].addEventListener('click', clicked);

          function clicked(secondClick){
            this.className += " " + 'active';
            secondClick();
          }
        }

        function secondClick(){
          console.log('nemanja');
        }
      }
    }
  };

  showCard();
}
