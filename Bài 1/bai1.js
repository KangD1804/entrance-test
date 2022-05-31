// let starNum =document.getElementById(start);
// let endNum =document.getElementById(end);
// let resEle =document.getElementById(result);
// let butEle =document.getElementById(enter);

function range(startNum,endNum) {
    const array = [];
    let loop = startNum + 1
    
    while(loop < endNum){
        array.push(loop)
        loop = loop + 1
    }

    return array

};

function onClick() {
    if (inputsAreEmpty()) {
      label.textContent = 'Error: one or both inputs are empty.';
      return;
    }
    updateLabel();
  }
  function inputsAreEmpty() {
    if (getNumber1() === '' || getNumber2() === '') {
      return true;
    } else {
      return false;
    }
  }
  function updateLabel() {
    var startNum = getNumber1();
    var endNum = getNumber2();
   
    console.log(':array',array)
  }
  function getNumber1() {
    return inputs[0].value;
  }
  function getNumber2() {
    return inputs[1].value;
  }
  var inputs = document.querySelectorAll('input');
  var label = document.querySelector('p');
  var button = document.querySelector('button');
  button.addEventListener('click', onClick);
  