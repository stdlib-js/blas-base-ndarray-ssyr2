"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=c(function(S,l){
var f=require('@stdlib/ndarray-base-numel-dimension/dist'),g=require('@stdlib/ndarray-base-strides/dist'),q=require('@stdlib/ndarray-base-stride/dist'),s=require('@stdlib/ndarray-base-offset/dist'),n=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),p=require('@stdlib/blas-base-ssyr2/dist').ndarray;function m(e){var r,i,v,a,t,u;return t=e[0],u=e[1],a=e[2],i=d(e[3]),r=d(e[4]),v=g(a,!1),p(i,f(a,0),r,n(t),q(t,0),s(t),n(u),q(u,0),s(u),n(a),v[0],v[1],s(a)),a}l.exports=m
});var x=o();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
