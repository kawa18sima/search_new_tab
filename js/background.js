window.onload = function(){
  let state = {65:false, 83:false}
  window.addEventListener('keydown', (e)=>{
    state[e.keyCode] = true;
    if(state[65] && state[83]){
      let selection = window.getSelection().toString();
      window.open(`https://www.google.co.jp/search?q=${selection}&oq=${selection}`);
    }
  });

  window.addEventListener('keyup', (e)=>{
    state[e.keyCode] = false;
  })
}
