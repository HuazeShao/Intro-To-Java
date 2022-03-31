function chinaCity (num){
  if (num == 0){
    return"Welcome to Beijing";
  }
  if (num == 1){
    return"Welcome to Shanghai";
  }
  if (num == 2){
    return"Welcome to Yangzhou";
  }
  if (num == 3){
    return"Welcome to Kunming";
  }
  else {
    return"To be continued...";
  }
}

console.log(chinaCity(4));
