var grid = [[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0],
            [0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0],
            [0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0],
            [0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0],
            [0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0],
            [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
            [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            ];

var solution = [[0,0,0,0,0,'c',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,'u',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,'f','o','r','e','s','t',0,0,'l',0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,'s',0,0,0,0,0,'a',0,0,0,0,0,0,0,0,0],
                [0,0,0,0,'d','e','c','i','s','i','o','n',0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,'v',0,0,'g',0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,'m',0,'s','u','p','e','r','v','i','s','e','d',0],
                [0,0,0,0,0,0,0,0,0,0,0,'a',0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,'g',0,0,0,0,'a',0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,'d','e','e','p',0,0,'r',0,0,0,0],
                [0,0,0,0,0,0,0,'v',0,0,0,0,0,'e',0,0,'t',0,0,0,0],
                [0,0,0,0,0,0,0,'a',0,0,0,0,0,'r',0,0,'i',0,0,0,0],
                [0,0,0,0,0,0,0,'l',0,0,0,0,0,'c',0,0,'f',0,0,0,0],
                [0,0,0,0,0,0,0,'i',0,0,'l','i','n','e','a','r','i','t','y',0,0],
                [0,0,0,0,'d',0,0,'d',0,0,0,0,0,'p',0,0,'c',0,0,0,0],
                [0,0,0,0,'r',0,0,'a',0,0,0,0,0,'t','r','a','i','n',0,0,0],
                [0,0,0,0,'i',0,0,'t',0,0,0,0,0,'r',0,0,'a',0,0,0,0],
                [0,0,0,0,'v',0,0,'i',0,0,0,0,0,'o',0,0,'l',0,0,0,0],
                [0,0,'r','e','i','n','f','o','r','c','e','m','e','n','t',0,0,0,0,0,0],
                [0,0,0,0,'n',0,0,'n',0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,'g',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                ];

var l = 21
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("input");
    //cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    cell.setAttribute("maxlength", "1");
  };
};

var cnt = 0;
function buildGrid() {
  container.style.setProperty('--grid-rows', l+1);
  container.style.setProperty('--grid-cols', l+1);
  for(a = 0; a < l+1; a++) {
    for(b = 0; b < l+1;b++) {
      if(a == 0 && b == 0) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-borders";
        //cell.innerHTML  = 'C-0/R-0';
      } else if(a == 0) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-borders";
        cell.innerHTML = 'c' + b.toString();
      } else if(b == 0) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-borders";
        cell.innerHTML = 'r' + a.toString();
      }else if(grid[a-1][b-1] == 1) {
        let cell = document.createElement("input");
        container.appendChild(cell).className = "grid-item";
        cell.setAttribute("maxlength", "1");
        cell.id = cnt;
        cnt++;
      } else {
        let cell = document.createElement("input");
        container.appendChild(cell).className = "grid-item2";
        cell.setAttribute("maxlength", "0");
        cell.id = cnt;
        cnt++;
      }
    }
  }
}

function check() {
  console.log("hi");
  var flag = 1
  for(i = 0; i < l*l;i++) {
    var square = document.getElementById(i);
    console.log(square.value);
    var x = Math.floor(i/3);
    var y = i % 3
    if(square.value != solution[x][y]) {
      flag = 0;
      square.style.backgroundColor = "red";
    } else if(grid[x][y] == 1){
      square.style.backgroundColor = "white";
    }
  }
  if(flag == 1) {
    console.log('correct');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxBY7Xg_b1UvKbMaZSInXUnxWgfGS9fl9ke2B0R1RorRJHFZJwH/exec'
    const form = document.forms['submit-to-google-sheet']


    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))

    window.location.href = './done.html';
  } else {
    console.log('incorrect');
  }
}
//makeRows(3, 3);
buildGrid();
