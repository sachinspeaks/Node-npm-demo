const lod=require('lodash');//using lodash package/module/dependency
const items=[1,[2,[3,[4]]]];
const newitems=lod.flattenDeep(items);//using property of lodash package to get separate values of arrays
console.log(newitems);