const vocab = {};

vocab.search = function(word) {
  let lowerCaseWord = word.toLowerCase();
  let matches = 0;
  for (key in vocab) {
    for(keyOne in vocab[key]) {
      for (let i = 0; i < vocab[key][keyOne].length; i++) {

        if (keyOne !== 'day' &&
          vocab[key][keyOne][i] !== undefined &&
          vocab[key][keyOne][i].split(' ').includes(lowerCaseWord)) {

          let $main = $('main');
          let $definitionContainer = document.getElementsByClassName('definitionContainer');
          let $entry = $('<div class="entry"></div>');
          let $definition = $('<h2 class="definition"></h2>').text('English: ' + vocab[key][keyOne][2]);
          let $word = $('<h2 class="word"></h2>').text('Thai: ' + vocab[key][keyOne][0]);
          let $day = $('<h3 class="day"></h3>').text('Lesson Day(s): ' + vocab[key].day);
          $definition.appendTo($entry);
          $word.appendTo($entry);
          $day.appendTo($entry);
          $entry.prependTo($definitionContainer);
          matches ++;
        }
      }
    }
  }
  if (matches === 0) {
    let $definitionContainer = document.getElementsByClassName('definitionContainer');
          let $entry = $('<div class="entry"></div>');
          let $notFound = $('<h2 class="definition"></h2>').text('"' + lowerCaseWord + '"' + ' not found in this dictionary.');
          $notFound.appendTo($entry);
          $entry.prependTo($definitionContainer);

  }
};
