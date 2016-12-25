'use strict';

let musicians = ['Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 'Frank Sinatra', 'Johann Sebastian Bach', 'Richard Wagner',
                 'Joseph Haydn', 'Franz Schubert', 'Robert Schumann', 'Piotr Illitch Tchaïkovsky', 'Georg Friedrich Händel',
                 'Felix Mendelssohn-Bartholdy', 'Igor Stravinsky', 'Frédéric Chopin', 'Franz Liszt', 'Antonín Dvořák',
                 'Giovanni Pierluigi da Palestrina', 'Richard Strauss', 'Dmitri Shostakovich', 'Sergej S. Prokofiew', 'Giuseppe Verdi',
                 'Antonio Vivaldi', 'Claudio Monteverdi', 'Christoph Willibald Gluck', 'Camille Saint-Saëns', 'Georg Philipp Telemann'];
//
let diftongs = ['i','y','oi','oy','ai','ay','ei','ey','ea','ow','ou','ow','oa','old','oll',//15
                 'ear','eer','ere','ier','are','air','esr','ue','ure','our','a','ie','ye'];//13
//
let UnLetters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','`',//13
                 '!','~','@','#','$','%','^','&','*','(',')','_','+','/',',',//15
				 ,'.','<','>','/','\'','|','[',']','{','}','\\',';',':'];//13
//
function filter_arr(i){
  let temp;
  for(let z = 0; z <41; z++){
    temp = i.indexOf(UnLetters[z]);
    if (temp != -1){
      i = '';
    }
  }
  return (i);
}


let musicians2 = musicians.filter(filter_arr);

let musicians3 = musicians.sort(function(a, b){
  return a.split(' ').length - b.split(' ').length;
});

let musicians4;


let dift_num = 0;

for (let n = 0; n < musicians.length; n++){
  musicians4 += ';  \n  ' + musicians[n] + ' : ';
  for (let i = 0; i < diftongs.length; i++){
    let tmp = musicians[n].indexOf(diftongs[i]);
    if (tmp != -1) {
	  musicians4 += diftongs[i] + ',';
      dift_num++;
    }
  }
  musicians4 += '; ';
  for(let i = 0; i < musicians[n].length; i++){
    musicians4 += musicians[n].charCodeAt(i);
    
    
  }
  
}

let musicians_encr = [];
let tempo = [];





global = {};
global.api = {};
global.api.encrypt = function(array) {
  let ans = [];
  for(let i = 0; i < array.length; i++) {
    let s = '';
    for(let j = 0; j < array[i].length; j++) {
      s += String.fromCharCode(array[i].charCodeAt(j) ^ 89);
    }
    ans.push(s);
  }
  return ans;
}

let encrypted = global.api.encrypt(musicians);

console.log(JSON.stringify(global.api.encrypt(encrypted)) + '\n');




Array.prototype.searchSubstring = function(s) {
  return this.filter(item => item.indexOf(s) >= 0);
};


console.log('Початковий масив');
console.log(JSON.stringify(musicians));
console.log('\nTask2: Отфильтровать:в названии могут быть только буквы;\nArray\n');
console.log(JSON.stringify(musicians2));
console.log('\nTask3: Отсортировать:по кол-ву слов в названии;\nArray\n');
console.log(JSON.stringify(musicians3));
console.log('\nTask4.1: Для каждого элемента сгенерировать:массив встречающихся дифтонгов; массив кодов символов\nArray\n');
console.log(musicians4);
console.log('\n\nTask5: шифрование : ' + JSON.stringify(encrypted) + '\n\nДешифрование : ' + global.api.encrypt(encrypted) + '\n\nпоиск строк в массиве по подстроке \'ag\' : ' + musicians.searchSubstring('ag'));

