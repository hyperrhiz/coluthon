var lines, markov;
i = 0;
var arr = ['code', 'chip', 'cloud', 'coltan', 'carbon'];
var images = ['xray1.jpg', 'xray2.jpg', 'xray3.jpg', 'xray4.jpg', 'xray5.jpg', 'xray6.jpg', 'xray7.jpg'];

$(document).ready(function () {
  markov = new RiMarkov(4);
  arr = shuffle(arr);

  RiTa.loadString('corpus1.txt', function (data1) {
    RiTa.loadString('corpus2.txt', function (data2) {
      markov.loadText(data1);
      markov.loadText(data2);
    });
  });

  $('.header').text('Machine Dream Anthropocene');
  $('.textarea').html('Anna Coluthon @acoluthon');
  //$('.textarea').css('height', '100%');
  $('div').click(generate);
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generate() {

  if (!markov.ready()) return;
  lines = markov.generateSentences(5);
  block = lines.join(' ');
  
  $('.images').attr('src', 'images/' + images[Math.floor(Math.random() * images.length)] );
  $('.header').css('opacity', '0');
  $('.header').delay(1000).animate({ opacity: 1 }, 700);
  $('.header').text(arr[i]);
  $('.textarea').css('opacity', '0');
  $('.textarea').delay(500).animate({ opacity: 1 }, 700);
  //$('.textarea').css('height', '');
  $('.textarea').html(block);
  responsiveVoice.speak(block);
  //console.log(lines);
  //console.log(arr);
  i++;
}
