// var blueBox = document.createElement('div');

// document.body.appendChild(blueBox);

// blueBox.setAttribute('class', 'blueBox');

// var yellowBox = document.createElement('div');

// document.body.appendChild(yellowBox);

// yellowBox.setAttribute('class', 'yellowBox');

// var redBox = document.createElement('div');

// document.body.appendChild(redBox);

// redBox.setAttribute('class', 'redBox');





// This does the same thing as the first 17 lines of code, but in 13 lines.
// I could further reduce this into a smaller amount of code by removing whitespace
// The whole point is to not repeat code over and over
// because one or two words need to be changed

var boss = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ];
var i = 0;
var mTop = 50;

for(var k = 7; k > 0; k--) {

  var widthShit = (k * 50);
  var heightShit = (widthShit * 0.5);
  mTop += 1.835;

  console.log('first circle ' + boss[i] + ' ' + widthShit + ' ' + heightShit);

  var box = document.createElement('div');

  box.setAttribute('class', 'fun');

  box.style.height = heightShit + 'px';
  box.style.width = widthShit + 'px';
  box.style.borderTopLeftRadius = widthShit + 'px';
  box.style.borderTopRightRadius = widthShit + 'px';
  box.style.borderBottomRightRadius = '0px';
  box.style.borderBottomLeftRadius = '0px';
  // box.style.MozBorderRadius = widthShit + 'px', widthShit + 'px', 0, 0;
  // box.style.WebkitBorderRadius = widthShit + 'px', widthShit + 'px', 0, 0;
  box.style.top = mTop + '%';
  box.style.backgroundColor = boss[i];

  document.body.appendChild(box);

  i++;
  console.log(mTop);

};
