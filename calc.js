let switches = document.getElementsByClassName('switch');
let style = localStorage.getItem('style');

if (style == null) {
  setTheme('light');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
    console.log(theme);
  });
}

function setTheme(theme) {
  if (theme == 'light') {
    document.getElementById('switcher-id').href = './themes/light.css';
  } else if (theme == 'sky') {
    document.getElementById('switcher-id').href = './themes/blue.css';
  } else if (theme == 'red') {
    document.getElementById('switcher-id').href = './themes/red.css';
  } else if (theme == 'dark') {
    document.getElementById('switcher-id').href = './themes/dark.css';
  }else if (theme == 'green') {
    document.getElementById('switcher-id').href = './themes/green.css';
  }
  localStorage.setItem('style', theme);
}


document.getElementById('answer').readOnly = true; 
let screen = document.getElementById('answer');
buttons = document.querySelectorAll('button');
console.log(buttons)
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText)
        console.log(screenValue)
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

document.addEventListener("keydown", function(event) {
    console.log(event.which);
    if(event.shiftKey==57){
        event.key = '(';
    }
    else if(event.shiftKey==48){
        event.key = ')';
    }
    else if(event.shiftKey==53){
        event.key = '%';
    }
    if(event.key==88){
        screenValue += '*';
        screen.value = screenValue;
    }
    if(event.key<=9 || event.key=='+' || event.key=='-' || event.key=='*' || event.key=='.' || event.key=='/' || event.key=='%' || event.key=='(' || event.key==')'){
        screenValue += event.key;
        screen.value = screenValue;
    }
    if(event.key == 13 || event.keyCode == 187)
    {
        screen.value = eval(screenValue);
    }
    else if(event.key == 46){
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    }
    else if(event.key == 8){
        screenValue = screenValue.slice(0, -1);
        screen.value = screenValue;
    }
    else if(event.key == 67){
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    }
    else if(event.key == 82){
        location.reload();
    }
  })

  window.onerror = function(){
      alert("PLEASE INPUT VALID EXPRESSION");
      screenValue = "";
      screen.value = screenValue;
      console.clear();
  }
