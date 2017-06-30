function breakSentence(sentence) {
  var middle = Math.floor(sentence.length / 2);
  var before = sentence.lastIndexOf(' ', middle);
  var after = sentence.indexOf(' ', middle + 1);

  if (before == -1 || (after != -1 && middle - before >= after - middle)) {
    middle = after;
  } else {
      middle = before;
  }

  var s1 = sentence.substr(0, middle);
  var s2 = sentence.substr(middle + 1);

  return s1 + '<br>'+ s2;
}
