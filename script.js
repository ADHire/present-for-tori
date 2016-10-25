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
  box.style.top = mTop + '%';
  box.style.backgroundColor = boss[i];

  document.body.appendChild(box);

  i++;
  console.log(mTop);

};
