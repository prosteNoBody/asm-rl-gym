var Kt=(j,U)=>{const A=j[U];return A?typeof A=="function"?A():Promise.resolve(A):new Promise((u,E)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(E.bind(null,new Error("Unknown variable dynamic import: "+U)))})},Zt=(()=>{var j=import.meta.url;return function(U={}){var A,u=Object.assign({},U),E,F,O=new Promise((r,e)=>{E=r,F=e}),se=!0,z=Object.assign({},u),N="./this.program",T="";function oe(r){return u.locateFile?u.locateFile(r,T):T+r}typeof document<"u"&&document.currentScript&&(T=document.currentScript.src),j&&(T=j),T.startsWith("blob:")?T="":T=T.substr(0,T.replace(/[?#].*/,"").lastIndexOf("/")+1),u.print||console.log.bind(console);var J=u.printErr||console.error.bind(console);Object.assign(u,z),z=null,u.arguments&&u.arguments,u.thisProgram&&(N=u.thisProgram),u.quit&&u.quit;var X;u.wasmBinary&&(X=u.wasmBinary);var We,ke=!1,D,$,K,ue,w,_,je,Ue;function hr(){var r=We.buffer;u.HEAP8=D=new Int8Array(r),u.HEAP16=K=new Int16Array(r),u.HEAPU8=$=new Uint8Array(r),u.HEAPU16=ue=new Uint16Array(r),u.HEAP32=w=new Int32Array(r),u.HEAPU32=_=new Uint32Array(r),u.HEAPF32=je=new Float32Array(r),u.HEAPF64=Ue=new Float64Array(r)}var Ie=[],He=[],Me=[];function _r(){if(u.preRun)for(typeof u.preRun=="function"&&(u.preRun=[u.preRun]);u.preRun.length;)br(u.preRun.shift());$e(Ie)}function mr(){$e(He)}function yr(){if(u.postRun)for(typeof u.postRun=="function"&&(u.postRun=[u.postRun]);u.postRun.length;)$r(u.postRun.shift());$e(Me)}function br(r){Ie.unshift(r)}function wr(r){He.unshift(r)}function $r(r){Me.unshift(r)}var V=0,Z=null;function Pr(r){V++,u.monitorRunDependencies?.(V)}function Cr(r){if(V--,u.monitorRunDependencies?.(V),V==0&&Z){var e=Z;Z=null,e()}}function we(r){u.onAbort?.(r),r="Aborted("+r+")",J(r),ke=!0,r+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(r);throw F(e),e}var Tr="data:application/octet-stream;base64,",Ye=r=>r.startsWith(Tr);function Ar(){if(u.locateFile){var r="asm_core.wasm";return Ye(r)?r:oe(r)}return new URL(""+new URL("asm_core-DgGdmKqg.wasm",import.meta.url).href,import.meta.url).href}var le;function Ve(r){if(r==le&&X)return new Uint8Array(X);throw"both async and sync fetching of the wasm failed"}function Sr(r){return!X&&se&&typeof fetch=="function"?fetch(r,{credentials:"same-origin"}).then(e=>{if(!e.ok)throw`failed to load wasm binary file at '${r}'`;return e.arrayBuffer()}).catch(()=>Ve(r)):Promise.resolve().then(()=>Ve(r))}function Be(r,e,t){return Sr(r).then(n=>WebAssembly.instantiate(n,e)).then(t,n=>{J(`failed to asynchronously prepare wasm: ${n}`),we(n)})}function Er(r,e,t,n){return!r&&typeof WebAssembly.instantiateStreaming=="function"&&!Ye(e)&&typeof fetch=="function"?fetch(e,{credentials:"same-origin"}).then(i=>{var s=WebAssembly.instantiateStreaming(i,t);return s.then(n,function(o){return J(`wasm streaming compile failed: ${o}`),J("falling back to ArrayBuffer instantiation"),Be(e,t,n)})}):Be(e,t,n)}function Fr(){return{env:cr,wasi_snapshot_preview1:cr}}function Dr(){var r=Fr();function e(n,i){return C=n.exports,We=C.memory,hr(),Ke=C.__indirect_function_table,wr(C.__wasm_call_ctors),Cr(),C}Pr();function t(n){e(n.instance)}if(u.instantiateWasm)try{return u.instantiateWasm(r,e)}catch(n){J(`Module.instantiateWasm callback failed with error: ${n}`),F(n)}return le||(le=Ar()),Er(X,le,r,t).catch(F),{}}var $e=r=>{for(;r.length>0;)r.shift()(u)};u.noExitRuntime;class Rr{constructor(e){this.excPtr=e,this.ptr=e-24}set_type(e){_[this.ptr+4>>2]=e}get_type(){return _[this.ptr+4>>2]}set_destructor(e){_[this.ptr+8>>2]=e}get_destructor(){return _[this.ptr+8>>2]}set_caught(e){e=e?1:0,D[this.ptr+12]=e}get_caught(){return D[this.ptr+12]!=0}set_rethrown(e){e=e?1:0,D[this.ptr+13]=e}get_rethrown(){return D[this.ptr+13]!=0}init(e,t){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(t)}set_adjusted_ptr(e){_[this.ptr+16>>2]=e}get_adjusted_ptr(){return _[this.ptr+16>>2]}get_exception_ptr(){var e=dr(this.get_type());if(e)return _[this.excPtr>>2];var t=this.get_adjusted_ptr();return t!==0?t:this.excPtr}}var Le=0,Or=(r,e,t)=>{var n=new Rr(r);throw n.init(e,t),Le=r,Le},Wr=()=>{we("")},kr=(r,e,t,n,i)=>{},jr=()=>{for(var r=new Array(256),e=0;e<256;++e)r[e]=String.fromCharCode(e);ze=r},ze,S=r=>{for(var e="",t=r;$[t];)e+=ze[$[t++]];return e},q={},B={},fe={},G,h=r=>{throw new G(r)},Ne,ce=r=>{throw new Ne(r)},Q=(r,e,t)=>{r.forEach(function(a){fe[a]=e});function n(a){var f=t(a);f.length!==r.length&&ce("Mismatched type converter count");for(var c=0;c<r.length;++c)W(r[c],f[c])}var i=new Array(e.length),s=[],o=0;e.forEach((a,f)=>{B.hasOwnProperty(a)?i[f]=B[a]:(s.push(a),q.hasOwnProperty(a)||(q[a]=[]),q[a].push(()=>{i[f]=B[a],++o,o===s.length&&n(i)}))}),s.length===0&&n(i)};function Ur(r,e,t={}){var n=e.name;if(r||h(`type "${n}" must have a positive integer typeid pointer`),B.hasOwnProperty(r)){if(t.ignoreDuplicateRegistrations)return;h(`Cannot register type '${n}' twice`)}if(B[r]=e,delete fe[r],q.hasOwnProperty(r)){var i=q[r];delete q[r],i.forEach(s=>s())}}function W(r,e,t={}){if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Ur(r,e,t)}var I=8,Ir=(r,e,t,n)=>{e=S(e),W(r,{name:e,fromWireType:function(i){return!!i},toWireType:function(i,s){return s?t:n},argPackAdvance:I,readValueFromPointer:function(i){return this.fromWireType($[i])},destructorFunction:null})},Hr=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),Pe=r=>{function e(t){return t.$$.ptrType.registeredClass.name}h(e(r)+" instance already deleted")},Ce=!1,qe=r=>{},Mr=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},Ge=r=>{r.count.value-=1;var e=r.count.value===0;e&&Mr(r)},xe=(r,e,t)=>{if(e===t)return r;if(t.baseClass===void 0)return null;var n=xe(r,e,t.baseClass);return n===null?null:t.downcast(n)},Je={},Yr=()=>Object.keys(te).length,Vr=()=>{var r=[];for(var e in te)te.hasOwnProperty(e)&&r.push(te[e]);return r},ee=[],Te=()=>{for(;ee.length;){var r=ee.pop();r.$$.deleteScheduled=!1,r.delete()}},re,Br=r=>{re=r,ee.length&&re&&re(Te)},Lr=()=>{u.getInheritedInstanceCount=Yr,u.getLiveInheritedInstances=Vr,u.flushPendingDeletes=Te,u.setDelayFunction=Br},te={},zr=(r,e)=>{for(e===void 0&&h("ptr should not be undefined");r.baseClass;)e=r.upcast(e),r=r.baseClass;return e},Nr=(r,e)=>(e=zr(r,e),te[e]),ve=(r,e)=>{(!e.ptrType||!e.ptr)&&ce("makeClassHandle requires ptr and ptrType");var t=!!e.smartPtrType,n=!!e.smartPtr;return t!==n&&ce("Both smartPtrType and smartPtr must be specified"),e.count={value:1},ne(Object.create(r,{$$:{value:e,writable:!0}}))};function qr(r){var e=this.getPointee(r);if(!e)return this.destructor(r),null;var t=Nr(this.registeredClass,e);if(t!==void 0){if(t.$$.count.value===0)return t.$$.ptr=e,t.$$.smartPtr=r,t.clone();var n=t.clone();return this.destructor(r),n}function i(){return this.isSmartPointer?ve(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:r}):ve(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var s=this.registeredClass.getActualType(e),o=Je[s];if(!o)return i.call(this);var a;this.isConst?a=o.constPointerType:a=o.pointerType;var f=xe(e,this.registeredClass,a.registeredClass);return f===null?i.call(this):this.isSmartPointer?ve(a.registeredClass.instancePrototype,{ptrType:a,ptr:f,smartPtrType:this,smartPtr:r}):ve(a.registeredClass.instancePrototype,{ptrType:a,ptr:f})}var ne=r=>typeof FinalizationRegistry>"u"?(ne=e=>e,r):(Ce=new FinalizationRegistry(e=>{Ge(e.$$)}),ne=e=>{var t=e.$$,n=!!t.smartPtr;if(n){var i={$$:t};Ce.register(e,i,e)}return e},qe=e=>Ce.unregister(e),ne(r)),Gr=()=>{Object.assign(de.prototype,{isAliasOf(r){if(!(this instanceof de)||!(r instanceof de))return!1;var e=this.$$.ptrType.registeredClass,t=this.$$.ptr;r.$$=r.$$;for(var n=r.$$.ptrType.registeredClass,i=r.$$.ptr;e.baseClass;)t=e.upcast(t),e=e.baseClass;for(;n.baseClass;)i=n.upcast(i),n=n.baseClass;return e===n&&t===i},clone(){if(this.$$.ptr||Pe(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var r=ne(Object.create(Object.getPrototypeOf(this),{$$:{value:Hr(this.$$)}}));return r.$$.count.value+=1,r.$$.deleteScheduled=!1,r},delete(){this.$$.ptr||Pe(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&h("Object already scheduled for deletion"),qe(this),Ge(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Pe(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&h("Object already scheduled for deletion"),ee.push(this),ee.length===1&&re&&re(Te),this.$$.deleteScheduled=!0,this}})};function de(){}var pe=(r,e)=>Object.defineProperty(e,"name",{value:r}),Xe=(r,e,t)=>{if(r[e].overloadTable===void 0){var n=r[e];r[e]=function(...i){return r[e].overloadTable.hasOwnProperty(i.length)||h(`Function '${t}' called with an invalid number of arguments (${i.length}) - expects one of (${r[e].overloadTable})!`),r[e].overloadTable[i.length].apply(this,i)},r[e].overloadTable=[],r[e].overloadTable[n.argCount]=n}},xr=(r,e,t)=>{u.hasOwnProperty(r)?((t===void 0||u[r].overloadTable!==void 0&&u[r].overloadTable[t]!==void 0)&&h(`Cannot register public name '${r}' twice`),Xe(u,r,r),u.hasOwnProperty(t)&&h(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),u[r].overloadTable[t]=e):(u[r]=e,t!==void 0&&(u[r].numArguments=t))},Jr=48,Xr=57,Kr=r=>{if(r===void 0)return"_unknown";r=r.replace(/[^a-zA-Z0-9_]/g,"$");var e=r.charCodeAt(0);return e>=Jr&&e<=Xr?`_${r}`:r};function Zr(r,e,t,n,i,s,o,a){this.name=r,this.constructor=e,this.instancePrototype=t,this.rawDestructor=n,this.baseClass=i,this.getActualType=s,this.upcast=o,this.downcast=a,this.pureVirtualFunctions=[]}var Ae=(r,e,t)=>{for(;e!==t;)e.upcast||h(`Expected null or instance of ${t.name}, got an instance of ${e.name}`),r=e.upcast(r),e=e.baseClass;return r};function Qr(r,e){if(e===null)return this.isReference&&h(`null is not a valid ${this.name}`),0;e.$$||h(`Cannot pass "${Fe(e)}" as a ${this.name}`),e.$$.ptr||h(`Cannot pass deleted object as a pointer of type ${this.name}`);var t=e.$$.ptrType.registeredClass,n=Ae(e.$$.ptr,t,this.registeredClass);return n}function et(r,e){var t;if(e===null)return this.isReference&&h(`null is not a valid ${this.name}`),this.isSmartPointer?(t=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,t),t):0;(!e||!e.$$)&&h(`Cannot pass "${Fe(e)}" as a ${this.name}`),e.$$.ptr||h(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&e.$$.ptrType.isConst&&h(`Cannot convert argument of type ${e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name} to parameter type ${this.name}`);var n=e.$$.ptrType.registeredClass;if(t=Ae(e.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(e.$$.smartPtr===void 0&&h("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?t=e.$$.smartPtr:h(`Cannot convert argument of type ${e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:t=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)t=e.$$.smartPtr;else{var i=e.clone();t=this.rawShare(t,me.toHandle(()=>i.delete())),r!==null&&r.push(this.rawDestructor,t)}break;default:h("Unsupporting sharing policy")}return t}function rt(r,e){if(e===null)return this.isReference&&h(`null is not a valid ${this.name}`),0;e.$$||h(`Cannot pass "${Fe(e)}" as a ${this.name}`),e.$$.ptr||h(`Cannot pass deleted object as a pointer of type ${this.name}`),e.$$.ptrType.isConst&&h(`Cannot convert argument of type ${e.$$.ptrType.name} to parameter type ${this.name}`);var t=e.$$.ptrType.registeredClass,n=Ae(e.$$.ptr,t,this.registeredClass);return n}function ge(r){return this.fromWireType(_[r>>2])}var tt=()=>{Object.assign(he.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){this.rawDestructor?.(r)},argPackAdvance:I,readValueFromPointer:ge,fromWireType:qr})};function he(r,e,t,n,i,s,o,a,f,c,v){this.name=r,this.registeredClass=e,this.isReference=t,this.isConst=n,this.isSmartPointer=i,this.pointeeType=s,this.sharingPolicy=o,this.rawGetPointee=a,this.rawConstructor=f,this.rawShare=c,this.rawDestructor=v,!i&&e.baseClass===void 0?n?(this.toWireType=Qr,this.destructorFunction=null):(this.toWireType=rt,this.destructorFunction=null):this.toWireType=et}var nt=(r,e,t)=>{u.hasOwnProperty(r)||ce("Replacing nonexistent public symbol"),u[r].overloadTable!==void 0&&t!==void 0?u[r].overloadTable[t]=e:(u[r]=e,u[r].argCount=t)},it=(r,e,t)=>{r=r.replace(/p/g,"i");var n=u["dynCall_"+r];return n(e,...t)},_e=[],Ke,Ze=r=>{var e=_e[r];return e||(r>=_e.length&&(_e.length=r+1),_e[r]=e=Ke.get(r)),e},at=(r,e,t=[])=>{if(r.includes("j"))return it(r,e,t);var n=Ze(e)(...t);return n},st=(r,e)=>(...t)=>at(r,e,t),x=(r,e)=>{r=S(r);function t(){return r.includes("j")?st(r,e):Ze(e)}var n=t();return typeof n!="function"&&h(`unknown function pointer with signature ${r}: ${e}`),n},ot=(r,e)=>{var t=pe(e,function(n){this.name=e,this.message=n;var i=new Error(n).stack;i!==void 0&&(this.stack=this.toString()+`
`+i.replace(/^Error(:[^\n]*)?\n/,""))});return t.prototype=Object.create(r.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},t},Qe,er=r=>{var e=vr(r),t=S(e);return k(e),t},Se=(r,e)=>{var t=[],n={};function i(s){if(!n[s]&&!B[s]){if(fe[s]){fe[s].forEach(i);return}t.push(s),n[s]=!0}}throw e.forEach(i),new Qe(`${r}: `+t.map(er).join([", "]))},ut=(r,e,t,n,i,s,o,a,f,c,v,p,g)=>{v=S(v),s=x(i,s),a&&=x(o,a),c&&=x(f,c),g=x(p,g);var m=Kr(v);xr(m,function(){Se(`Cannot construct ${v} due to unbound types`,[n])}),Q([r,e,t],n?[n]:[],b=>{b=b[0];var M,R;n?(M=b.registeredClass,R=M.instancePrototype):R=de.prototype;var Y=pe(v,function(...ae){if(Object.getPrototypeOf(this)!==l)throw new G("Use 'new' to construct "+v);if(d.constructor_body===void 0)throw new G(v+" has no accessible constructor");var gr=d.constructor_body[ae.length];if(gr===void 0)throw new G(`Tried to invoke ctor of ${v} with invalid number of parameters (${ae.length}) - expected (${Object.keys(d.constructor_body).toString()}) parameters instead!`);return gr.apply(this,ae)}),l=Object.create(R,{constructor:{value:Y}});Y.prototype=l;var d=new Zr(v,Y,l,g,M,s,a,c);d.baseClass&&(d.baseClass.__derivedClasses??=[],d.baseClass.__derivedClasses.push(d));var P=new he(v,d,!0,!1,!1),y=new he(v+"*",d,!1,!1,!1),L=new he(v+" const*",d,!1,!0,!1);return Je[r]={pointerType:y,constPointerType:L},nt(m,Y),[P,y,L]})},rr=(r,e)=>{for(var t=[],n=0;n<r;n++)t.push(_[e+n*4>>2]);return t},lt=r=>{for(;r.length;){var e=r.pop(),t=r.pop();t(e)}};function tr(r){for(var e=1;e<r.length;++e)if(r[e]!==null&&r[e].destructorFunction===void 0)return!0;return!1}function ft(r,e){if(!(r instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof r} which is not a function`);var t=pe(r.name||"unknownFunctionName",function(){});t.prototype=r.prototype;var n=new t,i=r.apply(n,e);return i instanceof Object?i:n}function ct(r,e,t,n){for(var i=tr(r),s=r.length,o="",a="",f=0;f<s-2;++f)o+=(f!==0?", ":"")+"arg"+f,a+=(f!==0?", ":"")+"arg"+f+"Wired";var c=`
        return function (${o}) {
        if (arguments.length !== ${s-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${s-2}');
        }`;i&&(c+=`var destructors = [];
`);var v=i?"destructors":"null",p=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];e&&(c+="var thisWired = classParam['toWireType']("+v+`, this);
`);for(var f=0;f<s-2;++f)c+="var arg"+f+"Wired = argType"+f+"['toWireType']("+v+", arg"+f+`);
`,p.push("argType"+f);if(e&&(a="thisWired"+(a.length>0?", ":"")+a),c+=(t||n?"var rv = ":"")+"invoker(fn"+(a.length>0?", ":"")+a+`);
`,i)c+=`runDestructors(destructors);
`;else for(var f=e?1:2;f<r.length;++f){var g=f===1?"thisWired":"arg"+(f-2)+"Wired";r[f].destructorFunction!==null&&(c+=`${g}_dtor(${g});
`,p.push(`${g}_dtor`))}return t&&(c+=`var ret = retType['fromWireType'](rv);
return ret;
`),c+=`}
`,[p,c]}function nr(r,e,t,n,i,s){var o=e.length;o<2&&h("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=e[1]!==null&&t!==null,f=tr(e),c=e[0].name!=="void",v=[r,h,n,i,lt,e[0],e[1]],p=0;p<o-2;++p)v.push(e[p+2]);if(!f)for(var p=a?1:2;p<e.length;++p)e[p].destructorFunction!==null&&v.push(e[p].destructorFunction);let[g,m]=ct(e,a,c,s);g.push(m);var b=ft(Function,g)(...v);return pe(r,b)}var vt=(r,e,t,n,i,s)=>{var o=rr(e,t);i=x(n,i),Q([],[r],a=>{a=a[0];var f=`constructor ${a.name}`;if(a.registeredClass.constructor_body===void 0&&(a.registeredClass.constructor_body=[]),a.registeredClass.constructor_body[e-1]!==void 0)throw new G(`Cannot register multiple constructors with identical number of parameters (${e-1}) for class '${a.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return a.registeredClass.constructor_body[e-1]=()=>{Se(`Cannot construct ${a.name} due to unbound types`,o)},Q([],o,c=>(c.splice(1,0,null),a.registeredClass.constructor_body[e-1]=nr(f,c,null,i,s),[])),[]})},dt=r=>{r=r.trim();const e=r.indexOf("(");return e!==-1?r.substr(0,e):r},pt=(r,e,t,n,i,s,o,a,f)=>{var c=rr(t,n);e=S(e),e=dt(e),s=x(i,s),Q([],[r],v=>{v=v[0];var p=`${v.name}.${e}`;e.startsWith("@@")&&(e=Symbol[e.substring(2)]),a&&v.registeredClass.pureVirtualFunctions.push(e);function g(){Se(`Cannot call ${p} due to unbound types`,c)}var m=v.registeredClass.instancePrototype,b=m[e];return b===void 0||b.overloadTable===void 0&&b.className!==v.name&&b.argCount===t-2?(g.argCount=t-2,g.className=v.name,m[e]=g):(Xe(m,e,p),m[e].overloadTable[t-2]=g),Q([],c,M=>{var R=nr(p,M,v,s,o,f);return m[e].overloadTable===void 0?(R.argCount=t-2,m[e]=R):m[e].overloadTable[t-2]=R,[]}),[]})},Ee=[],H=[],gt=r=>{r>9&&--H[r+1]===0&&(H[r]=void 0,Ee.push(r))},ht=()=>H.length/2-5-Ee.length,_t=()=>{H.push(0,1,void 0,1,null,1,!0,1,!1,1),u.count_emval_handles=ht},me={toValue:r=>(r||h("Cannot use deleted val. handle = "+r),H[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const e=Ee.pop()||H.length;return H[e]=r,H[e+1]=1,e}}}},mt={name:"emscripten::val",fromWireType:r=>{var e=me.toValue(r);return gt(r),e},toWireType:(r,e)=>me.toHandle(e),argPackAdvance:I,readValueFromPointer:ge,destructorFunction:null},ir=r=>W(r,mt),Fe=r=>{if(r===null)return"null";var e=typeof r;return e==="object"||e==="array"||e==="function"?r.toString():""+r},yt=(r,e)=>{switch(e){case 4:return function(t){return this.fromWireType(je[t>>2])};case 8:return function(t){return this.fromWireType(Ue[t>>3])};default:throw new TypeError(`invalid float width (${e}): ${r}`)}},bt=(r,e,t)=>{e=S(e),W(r,{name:e,fromWireType:n=>n,toWireType:(n,i)=>i,argPackAdvance:I,readValueFromPointer:yt(e,t),destructorFunction:null})},wt=(r,e,t)=>{switch(e){case 1:return t?n=>D[n]:n=>$[n];case 2:return t?n=>K[n>>1]:n=>ue[n>>1];case 4:return t?n=>w[n>>2]:n=>_[n>>2];default:throw new TypeError(`invalid integer width (${e}): ${r}`)}},$t=(r,e,t,n,i)=>{e=S(e);var s=v=>v;if(n===0){var o=32-8*t;s=v=>v<<o>>>o}var a=e.includes("unsigned"),f=(v,p)=>{},c;a?c=function(v,p){return f(p,this.name),p>>>0}:c=function(v,p){return f(p,this.name),p},W(r,{name:e,fromWireType:s,toWireType:c,argPackAdvance:I,readValueFromPointer:wt(e,t,n!==0),destructorFunction:null})},Pt=(r,e,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],i=n[e];function s(o){var a=_[o>>2],f=_[o+4>>2];return new i(D.buffer,f,a)}t=S(t),W(r,{name:t,fromWireType:s,argPackAdvance:I,readValueFromPointer:s},{ignoreDuplicateRegistrations:!0})},Ct=(r,e)=>{ir(r)},ar=(r,e,t,n)=>{if(!(n>0))return 0;for(var i=t,s=t+n-1,o=0;o<r.length;++o){var a=r.charCodeAt(o);if(a>=55296&&a<=57343){var f=r.charCodeAt(++o);a=65536+((a&1023)<<10)|f&1023}if(a<=127){if(t>=s)break;e[t++]=a}else if(a<=2047){if(t+1>=s)break;e[t++]=192|a>>6,e[t++]=128|a&63}else if(a<=65535){if(t+2>=s)break;e[t++]=224|a>>12,e[t++]=128|a>>6&63,e[t++]=128|a&63}else{if(t+3>=s)break;e[t++]=240|a>>18,e[t++]=128|a>>12&63,e[t++]=128|a>>6&63,e[t++]=128|a&63}}return e[t]=0,t-i},Tt=(r,e,t)=>ar(r,$,e,t),sr=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++t):e+=3}return e},or=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,At=(r,e,t)=>{for(var n=e+t,i=e;r[i]&&!(i>=n);)++i;if(i-e>16&&r.buffer&&or)return or.decode(r.subarray(e,i));for(var s="";e<i;){var o=r[e++];if(!(o&128)){s+=String.fromCharCode(o);continue}var a=r[e++]&63;if((o&224)==192){s+=String.fromCharCode((o&31)<<6|a);continue}var f=r[e++]&63;if((o&240)==224?o=(o&15)<<12|a<<6|f:o=(o&7)<<18|a<<12|f<<6|r[e++]&63,o<65536)s+=String.fromCharCode(o);else{var c=o-65536;s+=String.fromCharCode(55296|c>>10,56320|c&1023)}}return s},De=(r,e)=>r?At($,r,e):"",St=(r,e)=>{e=S(e);var t=e==="std::string";W(r,{name:e,fromWireType(n){var i=_[n>>2],s=n+4,o;if(t)for(var a=s,f=0;f<=i;++f){var c=s+f;if(f==i||$[c]==0){var v=c-a,p=De(a,v);o===void 0?o=p:(o+="\0",o+=p),a=c+1}}else{for(var g=new Array(i),f=0;f<i;++f)g[f]=String.fromCharCode($[s+f]);o=g.join("")}return k(n),o},toWireType(n,i){i instanceof ArrayBuffer&&(i=new Uint8Array(i));var s,o=typeof i=="string";o||i instanceof Uint8Array||i instanceof Uint8ClampedArray||i instanceof Int8Array||h("Cannot pass non-string to std::string"),t&&o?s=sr(i):s=i.length;var a=Oe(4+s+1),f=a+4;if(_[a>>2]=s,t&&o)Tt(i,f,s+1);else if(o)for(var c=0;c<s;++c){var v=i.charCodeAt(c);v>255&&(k(f),h("String has UTF-16 code units that do not fit in 8 bits")),$[f+c]=v}else for(var c=0;c<s;++c)$[f+c]=i[c];return n!==null&&n.push(k,a),a},argPackAdvance:I,readValueFromPointer:ge,destructorFunction(n){k(n)}})},ur=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Et=(r,e)=>{for(var t=r,n=t>>1,i=n+e/2;!(n>=i)&&ue[n];)++n;if(t=n<<1,t-r>32&&ur)return ur.decode($.subarray(r,t));for(var s="",o=0;!(o>=e/2);++o){var a=K[r+o*2>>1];if(a==0)break;s+=String.fromCharCode(a)}return s},Ft=(r,e,t)=>{if(t??=2147483647,t<2)return 0;t-=2;for(var n=e,i=t<r.length*2?t/2:r.length,s=0;s<i;++s){var o=r.charCodeAt(s);K[e>>1]=o,e+=2}return K[e>>1]=0,e-n},Dt=r=>r.length*2,Rt=(r,e)=>{for(var t=0,n="";!(t>=e/4);){var i=w[r+t*4>>2];if(i==0)break;if(++t,i>=65536){var s=i-65536;n+=String.fromCharCode(55296|s>>10,56320|s&1023)}else n+=String.fromCharCode(i)}return n},Ot=(r,e,t)=>{if(t??=2147483647,t<4)return 0;for(var n=e,i=n+t-4,s=0;s<r.length;++s){var o=r.charCodeAt(s);if(o>=55296&&o<=57343){var a=r.charCodeAt(++s);o=65536+((o&1023)<<10)|a&1023}if(w[e>>2]=o,e+=4,e+4>i)break}return w[e>>2]=0,e-n},Wt=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n>=55296&&n<=57343&&++t,e+=4}return e},kt=(r,e,t)=>{t=S(t);var n,i,s,o;e===2?(n=Et,i=Ft,o=Dt,s=a=>ue[a>>1]):e===4&&(n=Rt,i=Ot,o=Wt,s=a=>_[a>>2]),W(r,{name:t,fromWireType:a=>{for(var f=_[a>>2],c,v=a+4,p=0;p<=f;++p){var g=a+4+p*e;if(p==f||s(g)==0){var m=g-v,b=n(v,m);c===void 0?c=b:(c+="\0",c+=b),v=g+e}}return k(a),c},toWireType:(a,f)=>{typeof f!="string"&&h(`Cannot pass non-string to C++ string type ${t}`);var c=o(f),v=Oe(4+c+e);return _[v>>2]=c/e,i(f,v+4,c+e),a!==null&&a.push(k,v),v},argPackAdvance:I,readValueFromPointer:ge,destructorFunction(a){k(a)}})},jt=(r,e)=>{e=S(e),W(r,{isVoid:!0,name:e,argPackAdvance:0,fromWireType:()=>{},toWireType:(t,n)=>{}})},Ut=(r,e,t)=>$.copyWithin(r,e,e+t),It=(r,e)=>{var t=B[r];return t===void 0&&h(`${e} has unknown type ${er(r)}`),t},Ht=(r,e)=>{r=It(r,"_emval_take_value");var t=r.readValueFromPointer(e);return me.toHandle(t)},Mt=r=>{we("OOM")},Yt=r=>{$.length,Mt()},Re={},Vt=()=>N||"./this.program",ie=()=>{if(!ie.strings){var r=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:Vt()};for(var t in Re)Re[t]===void 0?delete e[t]:e[t]=Re[t];var n=[];for(var t in e)n.push(`${t}=${e[t]}`);ie.strings=n}return ie.strings},Bt=(r,e)=>{for(var t=0;t<r.length;++t)D[e++]=r.charCodeAt(t);D[e]=0},Lt=(r,e)=>{var t=0;return ie().forEach((n,i)=>{var s=e+t;_[r+i*4>>2]=s,Bt(n,s),t+=n.length+1}),0},zt=(r,e)=>{var t=ie();_[r>>2]=t.length;var n=0;return t.forEach(i=>n+=i.length+1),_[e>>2]=n,0},ye=r=>r%4===0&&(r%100!==0||r%400===0),Nt=(r,e)=>{for(var t=0,n=0;n<=e;t+=r[n++]);return t},lr=[31,29,31,30,31,30,31,31,30,31,30,31],fr=[31,28,31,30,31,30,31,31,30,31,30,31],qt=(r,e)=>{for(var t=new Date(r.getTime());e>0;){var n=ye(t.getFullYear()),i=t.getMonth(),s=(n?lr:fr)[i];if(e>s-t.getDate())e-=s-t.getDate()+1,t.setDate(1),i<11?t.setMonth(i+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1));else return t.setDate(t.getDate()+e),t}return t};function Gt(r,e,t){var n=t>0?t:sr(r)+1,i=new Array(n),s=ar(r,i,0,i.length);return e&&(i.length=s),i}var xt=(r,e)=>{D.set(r,e)},Jt=(r,e,t,n)=>{var i=_[n+40>>2],s={tm_sec:w[n>>2],tm_min:w[n+4>>2],tm_hour:w[n+8>>2],tm_mday:w[n+12>>2],tm_mon:w[n+16>>2],tm_year:w[n+20>>2],tm_wday:w[n+24>>2],tm_yday:w[n+28>>2],tm_isdst:w[n+32>>2],tm_gmtoff:w[n+36>>2],tm_zone:i?De(i):""},o=De(t),a={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var f in a)o=o.replace(new RegExp(f,"g"),a[f]);var c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],v=["January","February","March","April","May","June","July","August","September","October","November","December"];function p(l,d,P){for(var y=typeof l=="number"?l.toString():l||"";y.length<d;)y=P[0]+y;return y}function g(l,d){return p(l,d,"0")}function m(l,d){function P(L){return L<0?-1:L>0?1:0}var y;return(y=P(l.getFullYear()-d.getFullYear()))===0&&(y=P(l.getMonth()-d.getMonth()))===0&&(y=P(l.getDate()-d.getDate())),y}function b(l){switch(l.getDay()){case 0:return new Date(l.getFullYear()-1,11,29);case 1:return l;case 2:return new Date(l.getFullYear(),0,3);case 3:return new Date(l.getFullYear(),0,2);case 4:return new Date(l.getFullYear(),0,1);case 5:return new Date(l.getFullYear()-1,11,31);case 6:return new Date(l.getFullYear()-1,11,30)}}function M(l){var d=qt(new Date(l.tm_year+1900,0,1),l.tm_yday),P=new Date(d.getFullYear(),0,4),y=new Date(d.getFullYear()+1,0,4),L=b(P),ae=b(y);return m(L,d)<=0?m(ae,d)<=0?d.getFullYear()+1:d.getFullYear():d.getFullYear()-1}var R={"%a":l=>c[l.tm_wday].substring(0,3),"%A":l=>c[l.tm_wday],"%b":l=>v[l.tm_mon].substring(0,3),"%B":l=>v[l.tm_mon],"%C":l=>{var d=l.tm_year+1900;return g(d/100|0,2)},"%d":l=>g(l.tm_mday,2),"%e":l=>p(l.tm_mday,2," "),"%g":l=>M(l).toString().substring(2),"%G":M,"%H":l=>g(l.tm_hour,2),"%I":l=>{var d=l.tm_hour;return d==0?d=12:d>12&&(d-=12),g(d,2)},"%j":l=>g(l.tm_mday+Nt(ye(l.tm_year+1900)?lr:fr,l.tm_mon-1),3),"%m":l=>g(l.tm_mon+1,2),"%M":l=>g(l.tm_min,2),"%n":()=>`
`,"%p":l=>l.tm_hour>=0&&l.tm_hour<12?"AM":"PM","%S":l=>g(l.tm_sec,2),"%t":()=>"	","%u":l=>l.tm_wday||7,"%U":l=>{var d=l.tm_yday+7-l.tm_wday;return g(Math.floor(d/7),2)},"%V":l=>{var d=Math.floor((l.tm_yday+7-(l.tm_wday+6)%7)/7);if((l.tm_wday+371-l.tm_yday-2)%7<=2&&d++,d){if(d==53){var y=(l.tm_wday+371-l.tm_yday)%7;y!=4&&(y!=3||!ye(l.tm_year))&&(d=1)}}else{d=52;var P=(l.tm_wday+7-l.tm_yday-1)%7;(P==4||P==5&&ye(l.tm_year%400-1))&&d++}return g(d,2)},"%w":l=>l.tm_wday,"%W":l=>{var d=l.tm_yday+7-(l.tm_wday+6)%7;return g(Math.floor(d/7),2)},"%y":l=>(l.tm_year+1900).toString().substring(2),"%Y":l=>l.tm_year+1900,"%z":l=>{var d=l.tm_gmtoff,P=d>=0;return d=Math.abs(d)/60,d=d/60*100+d%60,(P?"+":"-")+("0000"+d).slice(-4)},"%Z":l=>l.tm_zone,"%%":()=>"%"};o=o.replace(/%%/g,"\0\0");for(var f in R)o.includes(f)&&(o=o.replace(new RegExp(f,"g"),R[f](s)));o=o.replace(/\0\0/g,"%");var Y=Gt(o,!1);return Y.length>e?0:(xt(Y,r),Y.length-1)},Xt=(r,e,t,n,i)=>Jt(r,e,t,n);jr(),G=u.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},Ne=u.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},Gr(),Lr(),tt(),Qe=u.UnboundTypeError=ot(Error,"UnboundTypeError"),_t();var cr={__cxa_throw:Or,_abort_js:Wr,_embind_register_bigint:kr,_embind_register_bool:Ir,_embind_register_class:ut,_embind_register_class_constructor:vt,_embind_register_class_function:pt,_embind_register_emval:ir,_embind_register_float:bt,_embind_register_integer:$t,_embind_register_memory_view:Pt,_embind_register_optional:Ct,_embind_register_std_string:St,_embind_register_std_wstring:kt,_embind_register_void:jt,_emscripten_memcpy_js:Ut,_emval_take_value:Ht,emscripten_resize_heap:Yt,environ_get:Lt,environ_sizes_get:zt,strftime_l:Xt},C=Dr(),vr=r=>(vr=C.__getTypeName)(r),Oe=r=>(Oe=C.malloc)(r),k=r=>(k=C.free)(r),dr=r=>(dr=C.__cxa_is_pointer_type)(r);u.dynCall_viijii=(r,e,t,n,i,s,o)=>(u.dynCall_viijii=C.dynCall_viijii)(r,e,t,n,i,s,o),u.dynCall_iiiiij=(r,e,t,n,i,s,o)=>(u.dynCall_iiiiij=C.dynCall_iiiiij)(r,e,t,n,i,s,o),u.dynCall_iiiiijj=(r,e,t,n,i,s,o,a,f)=>(u.dynCall_iiiiijj=C.dynCall_iiiiijj)(r,e,t,n,i,s,o,a,f),u.dynCall_iiiiiijj=(r,e,t,n,i,s,o,a,f,c)=>(u.dynCall_iiiiiijj=C.dynCall_iiiiiijj)(r,e,t,n,i,s,o,a,f,c);var be;Z=function r(){be||pr(),be||(Z=r)};function pr(){if(V>0||(_r(),V>0))return;function r(){be||(be=!0,u.calledRun=!0,!ke&&(mr(),E(u),u.onRuntimeInitialized&&u.onRuntimeInitialized(),yr()))}u.setStatus?(u.setStatus("Running..."),setTimeout(function(){setTimeout(function(){u.setStatus("")},1),r()},1)):r()}if(u.preInit)for(typeof u.preInit=="function"&&(u.preInit=[u.preInit]);u.preInit.length>0;)u.preInit.pop()();return pr(),A=O,A}})();const Qt=(j,U,A)=>{const u=new U;A.forEach(O=>u.push_back(O));const E=j.forward(u),F=[];for(let O=0;O<E.size();O++)F.push(E.get(O));return u.delete(),E.delete(),F};(async()=>{const{AsmCore:j,Vector:U}=await Zt();addEventListener("message",async A=>{const{module:u,algorithm:E,genomes:F}=A.data,{default:O}=await Kt(Object.assign({"../demo/modules/flappy.ts":()=>import("./flappy-Ch5uGr6f.js"),"../demo/modules/race.ts":()=>import("./race-BONYqLy9.js")}),`../demo/modules/${u}.ts`),se=[];for(let z=0;z<F.length;z++){const N=new j(E);N.buildGenome(F[z]);let T=-1;try{T=await O(oe=>Qt(N,U,oe),void 0)}catch{}N.delete(),se.push(T)}postMessage(se)}),postMessage(!0)})();
