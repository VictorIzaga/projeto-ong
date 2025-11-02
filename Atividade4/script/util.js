function isNil(v){return v===null||v===undefined}
function isStrNilOrEmpty(v){return v===null||v===undefined||v===""||v.trim()===""}
function isArrNilOrEmpty(v){return v===null||v===undefined||!Array.isArray(v)||v.length===0}
function validateRegexInText(regex,text){return regex.test(text.trim())}
function createElem(tag,options){const elem=document.createElement(tag);const text=options?.text;const child=options?.child;const attrs=options?.attrs;if(!isNil(text)){elem.innerHTML=text}
if(!isNil(child)){for(let i=0;i<child.length;i++){elem.appendChild(child[i])}}
if(!isNil(attrs)){objKeys=Object.keys(attrs);for(let i=0;i<objKeys.length;i++){const key=objKeys[i];const value=attrs[key];elem.setAttribute(key,value)}}
return elem}