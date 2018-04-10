export function attrDom(ele ,attr ,val) {
  if(val){
    ele.setAttribute(attr,val);
  }else {
    return ele.getAttribute(attr);
  }
}
