

import * as Caml_option from "./caml_option.mjs";

function fromString(i) {
  var i$1 = parseFloat(i);
  if (isNaN(i$1)) {
    return ;
  } else {
    return Caml_option.some(i$1);
  }
}

export {
  fromString ,
  
}
/* No side effect */