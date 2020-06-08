//TODO make this a hook?

function isInitialLoad(){
  //@ts-ignore
  if(window['loaded'] != true){
    return true;
  }
  return false;
}

function initialLoadComplete(){
  //@ts-ignore
  window['loaded'] = true;
}

export default ():[boolean, ()=>void] => [isInitialLoad(), initialLoadComplete]