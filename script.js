let i = 0;
let message = 'Hey! I see you are interesting who i am. Try to scroll down.';

let structure = ['main', 'about', 'skills', 'projects', 'contacts']
let curent_slide = 'main'

$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 10,
      loop: false,
      nav: true,
      navText: ['<img src="static/img/projects/arrow1.svg">','<img src="static/img/projects/arrow.svg">'],
      dots: false,
    });
  });

function text(){
  if(i < message.length){
      document.getElementById('message').innerHTML += message.charAt(i);
      i++;
      setTimeout(text, Math.floor(Math.random() * 51));
  }
}

function lift(id_of_element){
  let tor = [];
  if(structure.indexOf(id_of_element) < structure.indexOf(curent_slide)){
    tor = structure.slice((structure.indexOf(id_of_element)+1), (structure.indexOf(curent_slide)+1));
    tor = tor.reverse();
    for(i in tor){
      up(tor[i]);
    }
    curent_slide = id_of_element;
  }
  else{
    tor = structure.slice((structure.indexOf(curent_slide)+1),(structure.indexOf(id_of_element)+1));
    console.log(tor)
    for(i in tor){
      down(tor[i]);
    }
    curent_slide = id_of_element;
  }
}

function down(id_of_element){
  document.getElementById(id_of_element).classList.add('godown');
  console.log('DOWN' + id_of_element);
}

function up(id_of_element){
  document.getElementById(id_of_element).classList.remove('godown');
  document.getElementById(id_of_element).classList.add('goup');
  console.log('UP' + id_of_element);
}

function copy(text){
  text.select();
  document.execCommand("copy");
}