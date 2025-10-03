(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="180",rf=0,Yh=1,af=2,Lc=1,of=2,wn=3,Qn=0,Fe=1,Cn=2,Yn=0,ts=1,jh=2,Kh=3,Zh=4,hf=5,xi=100,lf=101,cf=102,uf=103,ff=104,df=200,pf=201,mf=202,_f=203,mo=204,_o=205,gf=206,vf=207,xf=208,Mf=209,yf=210,Sf=211,Ef=212,bf=213,Tf=214,go=0,vo=1,xo=2,ss=3,Mo=4,yo=5,So=6,Eo=7,Dc=0,Af=1,wf=2,jn=0,Rf=1,Cf=2,Pf=3,If=4,Lf=5,Df=6,Nf=7,Nc=300,rs=301,as=302,bo=303,To=304,ca=306,Ao=1e3,yi=1001,wo=1002,an=1003,Uf=1004,rr=1005,un=1006,Ta=1007,Si=1008,Dn=1009,Uc=1010,Fc=1011,Fs=1012,gh=1013,bi=1014,Pn=1015,qs=1016,vh=1017,xh=1018,Os=1020,Oc=35902,Gc=35899,Bc=1021,zc=1022,rn=1023,Gs=1026,Bs=1027,kc=1028,Mh=1029,Hc=1030,yh=1031,Sh=1033,zr=33776,kr=33777,Hr=33778,Vr=33779,Ro=35840,Co=35841,Po=35842,Io=35843,Lo=36196,Do=37492,No=37496,Uo=37808,Fo=37809,Oo=37810,Go=37811,Bo=37812,zo=37813,ko=37814,Ho=37815,Vo=37816,Wo=37817,Xo=37818,qo=37819,$o=37820,Yo=37821,jo=36492,Ko=36494,Zo=36495,Jo=36283,Qo=36284,th=36285,eh=36286,Ff=3200,Of=3201,Gf=0,Bf=1,Xn="",je="srgb",os="srgb-linear",Jr="linear",Zt="srgb",Pi=7680,Jh=519,zf=512,kf=513,Hf=514,Vc=515,Vf=516,Wf=517,Xf=518,qf=519,Qh=35044,tl="300 es",fn=2e3,Qr=2001;let cs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}};const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wr=Math.PI/180,nh=180/Math.PI;function $s(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]).toLowerCase()}function kt(n,t,e){return Math.max(t,Math.min(e,n))}function $f(n,t){return(n%t+t)%t}function Aa(n,t,e){return(1-e)*n+e*t}function ms(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function De(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}let ee=class Wc{constructor(t=0,e=0){Wc.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ys=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let h=i[s+0],l=i[s+1],u=i[s+2],c=i[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=h,t[e+1]=l,t[e+2]=u,t[e+3]=c;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(c!==g||h!==f||l!==d||u!==_){let m=1-a;const p=h*f+l*d+u*_+c*g,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const w=Math.sqrt(b),R=Math.atan2(w,p*E);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}const M=a*E;if(h=h*m+f*M,l=l*m+d*M,u=u*m+_*M,c=c*m+g*M,m===1-a){const w=1/Math.sqrt(h*h+l*l+u*u+c*c);h*=w,l*=w,u*=w,c*=w}}t[e]=h,t[e+1]=l,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],h=i[s+1],l=i[s+2],u=i[s+3],c=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+u*c+h*d-l*f,t[e+1]=h*_+u*f+l*c-a*d,t[e+2]=l*_+u*d+a*f-h*c,t[e+3]=u*_-a*c-h*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(i/2),u=a(s/2),c=a(r/2),f=h(i/2),d=h(s/2),_=h(r/2);switch(o){case"XYZ":this._x=f*u*c+l*d*_,this._y=l*d*c-f*u*_,this._z=l*u*_+f*d*c,this._w=l*u*c-f*d*_;break;case"YXZ":this._x=f*u*c+l*d*_,this._y=l*d*c-f*u*_,this._z=l*u*_-f*d*c,this._w=l*u*c+f*d*_;break;case"ZXY":this._x=f*u*c-l*d*_,this._y=l*d*c+f*u*_,this._z=l*u*_+f*d*c,this._w=l*u*c-f*d*_;break;case"ZYX":this._x=f*u*c-l*d*_,this._y=l*d*c+f*u*_,this._z=l*u*_-f*d*c,this._w=l*u*c+f*d*_;break;case"YZX":this._x=f*u*c+l*d*_,this._y=l*d*c+f*u*_,this._z=l*u*_-f*d*c,this._w=l*u*c-f*d*_;break;case"XZY":this._x=f*u*c-l*d*_,this._y=l*d*c-f*u*_,this._z=l*u*_+f*d*c,this._w=l*u*c+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],h=e[9],l=e[2],u=e[6],c=e[10],f=i+a+c;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-h)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>c){const d=2*Math.sqrt(1+i-a-c);this._w=(u-h)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>c){const d=2*Math.sqrt(1+a-i-c);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(h+u)/d}else{const d=2*Math.sqrt(1+c-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(h+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,h=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*h,this._y=s*u+o*h+r*a-i*l,this._z=r*u+o*l+i*h-s*a,this._w=o*u-i*a-s*h-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const h=1-a*a;if(h<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(h),u=Math.atan2(l,a),c=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*c+this._w*f,this._x=i*c+this._x*f,this._y=s*c+this._y*f,this._z=r*c+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class Xc{constructor(t=0,e=0,i=0){Xc.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(el.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(el.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),c=2*(r*i-o*e);return this.x=e+h*l+o*c-a*u,this.y=i+h*u+a*l-r*c,this.z=s+h*c+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=s*h-r*a,this.y=r*o-i*h,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return wa.copy(this).projectOnVector(t),this.sub(wa)}reflect(t){return this.sub(wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const wa=new F,el=new Ys;let Gt=class qc{constructor(t,e,i,s,r,o,a,h,l){qc.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,h,l)}set(t,e,i,s,r,o,a,h,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=h,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],h=i[6],l=i[1],u=i[4],c=i[7],f=i[2],d=i[5],_=i[8],g=s[0],m=s[3],p=s[6],E=s[1],b=s[4],M=s[7],w=s[2],R=s[5],A=s[8];return r[0]=o*g+a*E+h*w,r[3]=o*m+a*b+h*R,r[6]=o*p+a*M+h*A,r[1]=l*g+u*E+c*w,r[4]=l*m+u*b+c*R,r[7]=l*p+u*M+c*A,r[2]=f*g+d*E+_*w,r[5]=f*m+d*b+_*R,r[8]=f*p+d*M+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*h+s*r*l-s*o*h}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],u=t[8],c=u*o-a*l,f=a*h-u*r,d=l*r-o*h,_=e*c+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=c*g,t[1]=(s*l-u*i)*g,t[2]=(a*i-s*o)*g,t[3]=f*g,t[4]=(u*e-s*h)*g,t[5]=(s*r-a*e)*g,t[6]=d*g,t[7]=(i*h-l*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const h=Math.cos(r),l=Math.sin(r);return this.set(i*h,i*l,-i*(h*o+l*a)+o+t,-s*l,s*h,-s*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ra.makeScale(t,e)),this}rotate(t){return this.premultiply(Ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const Ra=new Gt;function $c(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yf(){const n=ta("canvas");return n.style.display="block",n}const nl={};function zs(n){n in nl||(nl[n]=!0,console.warn(n))}function jf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const il=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kf(){const n={enabled:!0,workingColorSpace:os,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Zt&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Zt&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?Jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[os]:{primaries:t,whitePoint:i,transfer:Jr,toXYZ:il,fromXYZ:sl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:i,transfer:Zt,toXYZ:il,fromXYZ:sl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),n}const Wt=Kf();function In(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ii,Zf=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ii===void 0&&(Ii=ta("canvas")),Ii.width=t.width,Ii.height=t.height;const s=Ii.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ii}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ta("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=In(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(In(e[i]/255)*255):e[i]=In(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jf=0,Eh=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=$s(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ca(s[o].image)):r.push(Ca(s[o]))}else r=Ca(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qf=0;const Pa=new F;let vn=class Xr extends cs{constructor(t=Xr.DEFAULT_IMAGE,e=Xr.DEFAULT_MAPPING,i=yi,s=yi,r=un,o=Si,a=rn,h=Dn,l=Xr.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=$s(),this.name="",this.source=new Eh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ao:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ao:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Nc;vn.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const h=t.elements,l=h[0],u=h[4],c=h[8],f=h[1],d=h[5],_=h[9],g=h[2],m=h[6],p=h[10];if(Math.abs(u-f)<.01&&Math.abs(c-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,M=(d+1)/2,w=(p+1)/2,R=(u+f)/4,A=(c+g)/4,L=(_+m)/4;return b>M&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=A/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=R/s,r=L/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=A/r,s=L/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(c-g)*(c-g)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(c-g)/E,this.z=(f-u)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class td extends cs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new vn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Eh(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends td{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Yc extends vn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ed extends vn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qe):Qe.fromBufferAttribute(r,o),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ar.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ar.copy(i.boundingBox)),ar.applyMatrix4(t.matrixWorld),this.union(ar)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),or.subVectors(this.max,_s),Li.subVectors(t.a,_s),Di.subVectors(t.b,_s),Ni.subVectors(t.c,_s),Gn.subVectors(Di,Li),Bn.subVectors(Ni,Di),hi.subVectors(Li,Ni);let e=[0,-Gn.z,Gn.y,0,-Bn.z,Bn.y,0,-hi.z,hi.y,Gn.z,0,-Gn.x,Bn.z,0,-Bn.x,hi.z,0,-hi.x,-Gn.y,Gn.x,0,-Bn.y,Bn.x,0,-hi.y,hi.x,0];return!Ia(e,Li,Di,Ni,or)||(e=[1,0,0,0,1,0,0,0,1],!Ia(e,Li,Di,Ni,or))?!1:(hr.crossVectors(Gn,Bn),e=[hr.x,hr.y,hr.z],Ia(e,Li,Di,Ni,or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const yn=[new F,new F,new F,new F,new F,new F,new F,new F],Qe=new F,ar=new js,Li=new F,Di=new F,Ni=new F,Gn=new F,Bn=new F,hi=new F,_s=new F,or=new F,hr=new F,li=new F;function Ia(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){li.fromArray(n,r);const a=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),h=t.dot(li),l=e.dot(li),u=i.dot(li);if(Math.max(-Math.max(h,l,u),Math.min(h,l,u))>a)return!1}return!0}const nd=new js,gs=new F,La=new F;class ua{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):nd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(gs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(La)),this.expandByPoint(gs.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Sn=new F,Da=new F,lr=new F,zn=new F,Na=new F,cr=new F,Ua=new F;class jc{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Da.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Da);const r=t.distanceTo(e)*.5,o=-this.direction.dot(lr),a=zn.dot(this.direction),h=-zn.dot(lr),l=zn.lengthSq(),u=Math.abs(1-o*o);let c,f,d,_;if(u>0)if(c=o*h-a,f=o*a-h,_=r*u,c>=0)if(f>=-_)if(f<=_){const g=1/u;c*=g,f*=g,d=c*(c+o*f+2*a)+f*(o*c+f+2*h)+l}else f=r,c=Math.max(0,-(o*f+a)),d=-c*c+f*(f+2*h)+l;else f=-r,c=Math.max(0,-(o*f+a)),d=-c*c+f*(f+2*h)+l;else f<=-_?(c=Math.max(0,-(-o*r+a)),f=c>0?-r:Math.min(Math.max(-r,-h),r),d=-c*c+f*(f+2*h)+l):f<=_?(c=0,f=Math.min(Math.max(-r,-h),r),d=f*(f+2*h)+l):(c=Math.max(0,-(o*r+a)),f=c>0?r:Math.min(Math.max(-r,-h),r),d=-c*c+f*(f+2*h)+l);else f=o>0?-r:r,c=Math.max(0,-(o*f+a)),d=-c*c+f*(f+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(Da).addScaledVector(lr,f),d}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const i=Sn.dot(this.direction),s=Sn.dot(Sn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,h=i+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,h;const l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),c>=0?(a=(t.min.z-f.z)*c,h=(t.max.z-f.z)*c):(a=(t.max.z-f.z)*c,h=(t.min.z-f.z)*c),i>h||a>s)||((a>i||i!==i)&&(i=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,i,s,r){Na.subVectors(e,t),cr.subVectors(i,t),Ua.crossVectors(Na,cr);let o=this.direction.dot(Ua),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const h=a*this.direction.dot(cr.crossVectors(zn,cr));if(h<0)return null;const l=a*this.direction.dot(Na.cross(zn));if(l<0||h+l>o)return null;const u=-a*zn.dot(Ua);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}let Se=class ih{constructor(t,e,i,s,r,o,a,h,l,u,c,f,d,_,g,m){ih.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,h,l,u,c,f,d,_,g,m)}set(t,e,i,s,r,o,a,h,l,u,c,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=h,p[2]=l,p[6]=u,p[10]=c,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ih().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),o=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),h=Math.cos(s),l=Math.sin(s),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*c,_=a*u,g=a*c;e[0]=h*u,e[4]=-h*c,e[8]=l,e[1]=d+_*l,e[5]=f-g*l,e[9]=-a*h,e[2]=g-f*l,e[6]=_+d*l,e[10]=o*h}else if(t.order==="YXZ"){const f=h*u,d=h*c,_=l*u,g=l*c;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*c,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*h}else if(t.order==="ZXY"){const f=h*u,d=h*c,_=l*u,g=l*c;e[0]=f-g*a,e[4]=-o*c,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const f=o*u,d=o*c,_=a*u,g=a*c;e[0]=h*u,e[4]=_*l-d,e[8]=f*l+g,e[1]=h*c,e[5]=g*l+f,e[9]=d*l-_,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const f=o*h,d=o*l,_=a*h,g=a*l;e[0]=h*u,e[4]=g-f*c,e[8]=_*c+d,e[1]=c,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*c+_,e[10]=f-g*c}else if(t.order==="XZY"){const f=o*h,d=o*l,_=a*h,g=a*l;e[0]=h*u,e[4]=-c,e[8]=l*u,e[1]=f*c+g,e[5]=o*u,e[9]=d*c-_,e[2]=_*c-d,e[6]=a*u,e[10]=g*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(id,t,sd)}lookAt(t,e,i){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),kn.crossVectors(i,ke),kn.lengthSq()===0&&(Math.abs(i.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),kn.crossVectors(i,ke)),kn.normalize(),ur.crossVectors(ke,kn),s[0]=kn.x,s[4]=ur.x,s[8]=ke.x,s[1]=kn.y,s[5]=ur.y,s[9]=ke.y,s[2]=kn.z,s[6]=ur.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],h=i[8],l=i[12],u=i[1],c=i[5],f=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],E=i[3],b=i[7],M=i[11],w=i[15],R=s[0],A=s[4],L=s[8],y=s[12],S=s[1],P=s[5],O=s[9],z=s[13],Y=s[2],W=s[6],X=s[10],j=s[14],k=s[3],st=s[7],ut=s[11],vt=s[15];return r[0]=o*R+a*S+h*Y+l*k,r[4]=o*A+a*P+h*W+l*st,r[8]=o*L+a*O+h*X+l*ut,r[12]=o*y+a*z+h*j+l*vt,r[1]=u*R+c*S+f*Y+d*k,r[5]=u*A+c*P+f*W+d*st,r[9]=u*L+c*O+f*X+d*ut,r[13]=u*y+c*z+f*j+d*vt,r[2]=_*R+g*S+m*Y+p*k,r[6]=_*A+g*P+m*W+p*st,r[10]=_*L+g*O+m*X+p*ut,r[14]=_*y+g*z+m*j+p*vt,r[3]=E*R+b*S+M*Y+w*k,r[7]=E*A+b*P+M*W+w*st,r[11]=E*L+b*O+M*X+w*ut,r[15]=E*y+b*z+M*j+w*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],h=t[9],l=t[13],u=t[2],c=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*h*c-s*l*c-r*a*f+i*l*f+s*a*d-i*h*d)+g*(+e*h*d-e*l*f+r*o*f-s*o*d+s*l*u-r*h*u)+m*(+e*l*c-e*a*d-r*o*c+i*o*d+r*a*u-i*l*u)+p*(-s*a*u-e*h*c+e*a*f+s*o*c-i*o*f+i*h*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],u=t[8],c=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],E=c*m*l-g*f*l+g*h*d-a*m*d-c*h*p+a*f*p,b=_*f*l-u*m*l-_*h*d+o*m*d+u*h*p-o*f*p,M=u*g*l-_*c*l+_*a*d-o*g*d-u*a*p+o*c*p,w=_*c*h-u*g*h-_*a*f+o*g*f+u*a*m-o*c*m,R=e*E+i*b+s*M+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=E*A,t[1]=(g*f*r-c*m*r-g*s*d+i*m*d+c*s*p-i*f*p)*A,t[2]=(a*m*r-g*h*r+g*s*l-i*m*l-a*s*p+i*h*p)*A,t[3]=(c*h*r-a*f*r-c*s*l+i*f*l+a*s*d-i*h*d)*A,t[4]=b*A,t[5]=(u*m*r-_*f*r+_*s*d-e*m*d-u*s*p+e*f*p)*A,t[6]=(_*h*r-o*m*r-_*s*l+e*m*l+o*s*p-e*h*p)*A,t[7]=(o*f*r-u*h*r+u*s*l-e*f*l-o*s*d+e*h*d)*A,t[8]=M*A,t[9]=(_*c*r-u*g*r-_*i*d+e*g*d+u*i*p-e*c*p)*A,t[10]=(o*g*r-_*a*r+_*i*l-e*g*l-o*i*p+e*a*p)*A,t[11]=(u*a*r-o*c*r-u*i*l+e*c*l+o*i*d-e*a*d)*A,t[12]=w*A,t[13]=(u*g*s-_*c*s+_*i*f-e*g*f-u*i*m+e*c*m)*A,t[14]=(_*a*s-o*g*s-_*i*h+e*g*h+o*i*m-e*a*m)*A,t[15]=(o*c*s-u*a*s+u*i*h-e*c*h-o*i*f+e*a*f)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,h=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*h,l*h+s*a,0,l*a+s*h,u*a+i,u*h-s*o,0,l*h-s*a,u*h+s*o,r*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,l=r+r,u=o+o,c=a+a,f=r*l,d=r*u,_=r*c,g=o*u,m=o*c,p=a*c,E=h*l,b=h*u,M=h*c,w=i.x,R=i.y,A=i.z;return s[0]=(1-(g+p))*w,s[1]=(d+M)*w,s[2]=(_-b)*w,s[3]=0,s[4]=(d-M)*R,s[5]=(1-(f+p))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(_+b)*A,s[9]=(m-E)*A,s[10]=(1-(f+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ui.set(s[0],s[1],s[2]).length();const o=Ui.set(s[4],s[5],s[6]).length(),a=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],tn.copy(this);const l=1/r,u=1/o,c=1/a;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=c,tn.elements[9]*=c,tn.elements[10]*=c,e.setFromRotationMatrix(tn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=fn,h=!1){const l=this.elements,u=2*r/(e-t),c=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s);let _,g;if(h)_=r/(o-r),g=o*r/(o-r);else if(a===fn)_=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Qr)_=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=fn,h=!1){const l=this.elements,u=2/(e-t),c=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s);let _,g;if(h)_=1/(o-r),g=o/(o-r);else if(a===fn)_=-2/(o-r),g=-(o+r)/(o-r);else if(a===Qr)_=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=c,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};const Ui=new F,tn=new Se,id=new F(0,0,0),sd=new F(1,1,1),kn=new F,ur=new F,ke=new F,rl=new Se,al=new Ys;let Ai=class Kc{constructor(t=0,e=0,i=0,s=Kc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],h=s[1],l=s[5],u=s[9],c=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return al.setFromEuler(this),this.setFromQuaternion(al,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ai.DEFAULT_ORDER="XYZ";let Zc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rd=0;const ol=new F,Fi=new Ys,En=new Se,fr=new F,vs=new F,ad=new F,od=new Ys,hl=new F(1,0,0),ll=new F(0,1,0),cl=new F(0,0,1),ul={type:"added"},hd={type:"removed"},Oi={type:"childadded",child:null},Fa={type:"childremoved",child:null};let xn=class qr extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qr.DEFAULT_UP.clone();const t=new F,e=new Ai,i=new Ys,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Gt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=qr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(ll,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return ol.copy(t).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(ll,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?fr.copy(t):fr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(vs,fr,this.up):En.lookAt(fr,vs,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(En),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ul),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hd),Fa.child=t,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ul),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let l=0,u=h.length;l<u;l++){const c=h[l];r(t.shapes,c)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(r(t.materials,this.material[h]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];s.animations.push(r(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),l=o(t.textures),u=o(t.images),c=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),c.length>0&&(i.shapes=c),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const h=[];for(const l in a){const u=a[l];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}};xn.DEFAULT_UP=new F(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new F,bn=new F,Oa=new F,Tn=new F,Gi=new F,Bi=new F,fl=new F,Ga=new F,Ba=new F,za=new F,ka=new de,Ha=new de,Va=new de;class Ze{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),en.subVectors(t,e),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){en.subVectors(s,e),bn.subVectors(i,e),Oa.subVectors(t,e);const o=en.dot(en),a=en.dot(bn),h=en.dot(Oa),l=bn.dot(bn),u=bn.dot(Oa),c=o*l-a*a;if(c===0)return r.set(0,0,0),null;const f=1/c,d=(l*h-a*u)*f,_=(o*u-a*h)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,i,s,r,o,a,h){return this.getBarycoord(t,e,i,s,Tn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Tn.x),h.addScaledVector(o,Tn.y),h.addScaledVector(a,Tn.z),h)}static getInterpolatedAttribute(t,e,i,s,r,o){return ka.setScalar(0),Ha.setScalar(0),Va.setScalar(0),ka.fromBufferAttribute(t,e),Ha.fromBufferAttribute(t,i),Va.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ka,r.x),o.addScaledVector(Ha,r.y),o.addScaledVector(Va,r.z),o}static isFrontFacing(t,e,i,s){return en.subVectors(i,e),bn.subVectors(t,e),en.cross(bn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),en.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Gi.subVectors(s,i),Bi.subVectors(r,i),Ga.subVectors(t,i);const h=Gi.dot(Ga),l=Bi.dot(Ga);if(h<=0&&l<=0)return e.copy(i);Ba.subVectors(t,s);const u=Gi.dot(Ba),c=Bi.dot(Ba);if(u>=0&&c<=u)return e.copy(s);const f=h*c-u*l;if(f<=0&&h>=0&&u<=0)return o=h/(h-u),e.copy(i).addScaledVector(Gi,o);za.subVectors(t,r);const d=Gi.dot(za),_=Bi.dot(za);if(_>=0&&d<=_)return e.copy(r);const g=d*l-h*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Bi,a);const m=u*_-d*c;if(m<=0&&c-u>=0&&d-_>=0)return fl.subVectors(r,s),a=(c-u)/(c-u+(d-_)),e.copy(s).addScaledVector(fl,a);const p=1/(m+g+f);return o=g*p,a=f*p,e.copy(i).addScaledVector(Gi,o).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Wa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Wt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Wt.workingColorSpace){if(t=$f(t,1),e=kt(e,0,1),i=kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Wa(o,r,t+1/3),this.g=Wa(o,r,t),this.b=Wa(o,r,t-1/3)}return Wt.colorSpaceToWorking(this,s),this}setStyle(t,e=je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const i=Jc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return Wt.workingToColorSpace(Te.copy(this),t),Math.round(kt(Te.r*255,0,255))*65536+Math.round(kt(Te.g*255,0,255))*256+Math.round(kt(Te.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(Te.copy(this),e);const i=Te.r,s=Te.g,r=Te.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let h,l;const u=(a+o)/2;if(a===o)h=0,l=0;else{const c=o-a;switch(l=u<=.5?c/(o+a):c/(2-o-a),o){case i:h=(s-r)/c+(s<r?6:0);break;case s:h=(r-i)/c+2;break;case r:h=(i-s)/c+4;break}h/=6}return t.h=h,t.s=l,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=je){Wt.workingToColorSpace(Te.copy(this),t);const e=Te.r,i=Te.g,s=Te.b;return t!==je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(dr);const i=Aa(Hn.h,dr.h,e),s=Aa(Hn.s,dr.s,e),r=Aa(Hn.l,dr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new jt;jt.NAMES=Jc;let ld=0;class Ks extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=ts,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mo,this.blendDst=_o,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mo&&(i.blendSrc=this.blendSrc),this.blendDst!==_o&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const h=r[a];delete h.metadata,o.push(h)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class bh extends Ks{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new F,pr=new ee;let cd=0;class mn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qh,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ms(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qh&&(t.usage=this.usage),t}}class Qc extends mn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class tu extends mn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class _n extends mn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ud=0;const $e=new Se,Xa=new xn,zi=new F,He=new js,xs=new js,xe=new F;class Fn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($c(t)?tu:Qc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,i){return $e.makeTranslation(t,e,i),this.applyMatrix4($e),this}scale(t,e,i){return $e.makeScale(t,e,i),this.applyMatrix4($e),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _n(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];He.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ua);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(He.min,xs.min),He.expandByPoint(xe),xe.addVectors(He.max,xs.max),He.expandByPoint(xe)):(He.expandByPoint(xs.min),He.expandByPoint(xs.max))}He.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],h=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)xe.fromBufferAttribute(a,l),h&&(zi.fromBufferAttribute(t,l),xe.add(zi)),s=Math.max(s,i.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],h=[];for(let L=0;L<i.count;L++)a[L]=new F,h[L]=new F;const l=new F,u=new F,c=new F,f=new ee,d=new ee,_=new ee,g=new F,m=new F;function p(L,y,S){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,S),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,y),_.fromBufferAttribute(r,S),u.sub(l),c.sub(l),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(c,-d.y).multiplyScalar(P),m.copy(c).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(P),a[L].add(g),a[y].add(g),a[S].add(g),h[L].add(m),h[y].add(m),h[S].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,y=E.length;L<y;++L){const S=E[L],P=S.start,O=S.count;for(let z=P,Y=P+O;z<Y;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new F,M=new F,w=new F,R=new F;function A(L){w.fromBufferAttribute(s,L),R.copy(w);const y=a[L];b.copy(y),b.sub(w.multiplyScalar(w.dot(y))).normalize(),M.crossVectors(R,y);const P=M.dot(h[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,P)}for(let L=0,y=E.length;L<y;++L){const S=E[L],P=S.start,O=S.count;for(let z=P,Y=P+O;z<Y;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new F,r=new F,o=new F,a=new F,h=new F,l=new F,u=new F,c=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),u.subVectors(o,r),c.subVectors(s,r),u.cross(c),a.fromBufferAttribute(i,_),h.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(u),h.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,h.x,h.y,h.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),c.subVectors(s,r),u.cross(c),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,h){const l=a.array,u=a.itemSize,c=a.normalized,f=new l.constructor(h.length*u);let d=0,_=0;for(let g=0,m=h.length;g<m;g++){a.isInterleavedBufferAttribute?d=h[g]*a.data.stride+a.offset:d=h[g]*u;for(let p=0;p<u;p++)f[_++]=l[d++]}return new mn(f,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fn,i=this.index.array,s=this.attributes;for(const a in s){const h=s[a],l=t(h,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const h=[],l=r[a];for(let u=0,c=l.length;u<c;u++){const f=l[u],d=t(f,i);h.push(d)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const l=i[h];t.data.attributes[h]=l.toJSON(t.data)}const s={};let r=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],u=[];for(let c=0,f=l.length;c<f;c++){const d=l[c];u.push(d.toJSON(t.data))}u.length>0&&(s[h]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],c=r[l];for(let f=0,d=c.length;f<d;f++)u.push(c[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const c=o[l];this.addGroup(c.start,c.count,c.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new Se,ci=new jc,mr=new ua,pl=new F,_r=new F,gr=new F,vr=new F,qa=new F,xr=new F,ml=new F,Mr=new F;class dn extends xn{constructor(t=new Fn,e=new bh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){xr.set(0,0,0);for(let h=0,l=r.length;h<l;h++){const u=a[h],c=r[h];u!==0&&(qa.fromBufferAttribute(c,t),o?xr.addScaledVector(qa,u):xr.addScaledVector(qa.sub(e),u))}e.add(xr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(mr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(mr,pl)===null||ci.origin.distanceToSquared(pl)>(t.far-t.near)**2))&&(dl.copy(r).invert(),ci.copy(t.ray).applyMatrix4(dl),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],E=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,w=b;M<w;M+=3){const R=a.getX(M),A=a.getX(M+1),L=a.getX(M+2);s=yr(this,p,t,i,l,u,c,R,A,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const E=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=yr(this,o,t,i,l,u,c,E,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],E=Math.max(m.start,d.start),b=Math.min(h.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,w=b;M<w;M+=3){const R=M,A=M+1,L=M+2;s=yr(this,p,t,i,l,u,c,R,A,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),g=Math.min(h.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const E=m,b=m+1,M=m+2;s=yr(this,o,t,i,l,u,c,E,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function fd(n,t,e,i,s,r,o,a){let h;if(t.side===Fe?h=i.intersectTriangle(o,r,s,!0,a):h=i.intersectTriangle(s,r,o,t.side===Qn,a),h===null)return null;Mr.copy(a),Mr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Mr);return l<e.near||l>e.far?null:{distance:l,point:Mr.clone(),object:n}}function yr(n,t,e,i,s,r,o,a,h,l){n.getVertexPosition(a,_r),n.getVertexPosition(h,gr),n.getVertexPosition(l,vr);const u=fd(n,t,e,i,_r,gr,vr,ml);if(u){const c=new F;Ze.getBarycoord(ml,_r,gr,vr,c),s&&(u.uv=Ze.getInterpolatedAttribute(s,a,h,l,c,new ee)),r&&(u.uv1=Ze.getInterpolatedAttribute(r,a,h,l,c,new ee)),o&&(u.normal=Ze.getInterpolatedAttribute(o,a,h,l,c,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:h,c:l,normal:new F,materialIndex:0};Ze.getNormal(_r,gr,vr,f.normal),u.face=f,u.barycoord=c}return u}class us extends Fn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const h=[],l=[],u=[],c=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(h),this.setAttribute("position",new _n(l,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(c,2));function _(g,m,p,E,b,M,w,R,A,L,y){const S=M/A,P=w/L,O=M/2,z=w/2,Y=R/2,W=A+1,X=L+1;let j=0,k=0;const st=new F;for(let ut=0;ut<X;ut++){const vt=ut*P-z;for(let Bt=0;Bt<W;Bt++){const Qt=Bt*S-O;st[g]=Qt*E,st[m]=vt*b,st[p]=Y,l.push(st.x,st.y,st.z),st[g]=0,st[m]=0,st[p]=R>0?1:-1,u.push(st.x,st.y,st.z),c.push(Bt/A),c.push(1-ut/L),j+=1}}for(let ut=0;ut<L;ut++)for(let vt=0;vt<A;vt++){const Bt=f+vt+W*ut,Qt=f+vt+W*(ut+1),ie=f+(vt+1)+W*(ut+1),Xt=f+(vt+1)+W*ut;h.push(Bt,Qt,Xt),h.push(Qt,ie,Xt),k+=6}a.addGroup(d,k,y),d+=k,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ce(n){const t={};for(let e=0;e<n.length;e++){const i=hs(n[e]);for(const s in i)t[s]=i[s]}return t}function dd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function eu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const pd={clone:hs,merge:Ce};var md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Ks{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=md,this.fragmentShader=_d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class nu extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new F,_l=new ee,gl=new ee;class Ke extends nu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nh*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,_l,gl),e.subVectors(gl,_l)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/h,e-=o.offsetY*i/l,s*=o.width/h,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Hi=1;class gd extends xn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(ki,Hi,t,e);s.layers=this.layers,this.add(s);const r=new Ke(ki,Hi,t,e);r.layers=this.layers,this.add(r);const o=new Ke(ki,Hi,t,e);o.layers=this.layers,this.add(o);const a=new Ke(ki,Hi,t,e);a.layers=this.layers,this.add(a);const h=new Ke(ki,Hi,t,e);h.layers=this.layers,this.add(h);const l=new Ke(ki,Hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,h]=e;for(const l of e)this.remove(l);if(t===fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,h,l,u]=this.children,c=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,h),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(c,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class iu extends vn{constructor(t=[],e=rs,i,s,r,o,a,h,l,u){super(t,e,i,s,r,o,a,h,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vd extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new iu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new us(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:Yn});r.uniforms.tEquirect.value=e;const o=new dn(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=un),new gd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class Sr extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xd={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],f=u.position.distanceTo(c.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xd)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Sr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}let Md=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};const Ya=new F,yd=new F,Sd=new Gt;class _i{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ya.subVectors(i,e).cross(yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ya),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Sd.getNormalMatrix(t),s=this.coplanarPoint(Ya).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new ua,Ed=new ee(.5,.5),Er=new F;class su{constructor(t=new _i,e=new _i,i=new _i,s=new _i,r=new _i,o=new _i){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],h=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],_=r[8],g=r[9],m=r[10],p=r[11],E=r[12],b=r[13],M=r[14],w=r[15];if(s[0].setComponents(l-o,d-u,p-_,w-E).normalize(),s[1].setComponents(l+o,d+u,p+_,w+E).normalize(),s[2].setComponents(l+a,d+c,p+g,w+b).normalize(),s[3].setComponents(l-a,d-c,p-g,w-b).normalize(),i)s[4].setComponents(h,f,m,M).normalize(),s[5].setComponents(l-h,d-f,p-m,w-M).normalize();else if(s[4].setComponents(l-h,d-f,p-m,w-M).normalize(),e===fn)s[5].setComponents(l+h,d+f,p+m,w+M).normalize();else if(e===Qr)s[5].setComponents(h,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){ui.center.set(0,0,0);const e=Ed.distanceTo(t.center);return ui.radius=.7071067811865476+e,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ru extends Ks{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ea=new F,na=new F,vl=new Se,Ms=new jc,br=new ua,ja=new F,xl=new F;class bd extends xn{constructor(t=new Fn,e=new ru){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ea.fromBufferAttribute(e,s-1),na.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ea.distanceTo(na);t.setAttribute("lineDistance",new _n(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(s),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;vl.copy(s).invert(),Ms.copy(t.ray).applyMatrix4(vl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const p=u.getX(g),E=u.getX(g+1),b=Tr(this,t,Ms,h,p,E,g);b&&e.push(b)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),p=Tr(this,t,Ms,h,g,m,_-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const p=Tr(this,t,Ms,h,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){const g=Tr(this,t,Ms,h,_-1,d,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Tr(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(ea.fromBufferAttribute(a,s),na.fromBufferAttribute(a,r),e.distanceSqToSegment(ea,na,ja,xl)>i)return;ja.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ja);if(!(l<t.near||l>t.far))return{distance:l,point:xl.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Ml=new F,yl=new F;class Td extends bd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ml.fromBufferAttribute(e,s),yl.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ml.distanceTo(yl);t.setAttribute("lineDistance",new _n(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class au extends vn{constructor(t,e,i=bi,s,r,o,a=an,h=an,l,u=Gs,c=1){if(u!==Gs&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:c};super(f,s,r,o,a,h,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Eh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ou extends vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}const Ar=new F,wr=new F,Ka=new F,Rr=new Ze;class Ad extends Fn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Wr*e),o=t.getIndex(),a=t.getAttribute("position"),h=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],c=new Array(3),f={},d=[];for(let _=0;_<h;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:g,b:m,c:p}=Rr;if(g.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Rr.getNormal(Ka),c[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,c[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,c[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let E=0;E<3;E++){const b=(E+1)%3,M=c[E],w=c[b],R=Rr[u[E]],A=Rr[u[b]],L=`${M}_${w}`,y=`${w}_${M}`;y in f&&f[y]?(Ka.dot(f[y].normal)<=r&&(d.push(R.x,R.y,R.z),d.push(A.x,A.y,A.z)),f[y]=null):L in f||(f[L]={index0:l[E],index1:l[b],normal:Ka.clone()})}}for(const _ in f)if(f[_]){const{index0:g,index1:m}=f[_];Ar.fromBufferAttribute(a,g),wr.fromBufferAttribute(a,m),d.push(Ar.x,Ar.y,Ar.z),d.push(wr.x,wr.y,wr.z)}this.setAttribute("position",new _n(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class fa extends Fn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),h=Math.floor(s),l=a+1,u=h+1,c=t/a,f=e/h,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const E=p*f-o;for(let b=0;b<l;b++){const M=b*c-r;_.push(M,-E,0),g.push(0,0,1),m.push(b/a),m.push(1-p/h)}}for(let p=0;p<h;p++)for(let E=0;E<a;E++){const b=E+l*p,M=E+l*(p+1),w=E+1+l*(p+1),R=E+1+l*p;d.push(b,M,R),d.push(M,w,R)}this.setIndex(d),this.setAttribute("position",new _n(_,3)),this.setAttribute("normal",new _n(g,3)),this.setAttribute("uv",new _n(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.width,t.height,t.widthSegments,t.heightSegments)}}class wd extends Ks{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rd extends Ks{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Cd extends nu{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,h=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,h=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Pd extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Sl(n,t,e,i){const s=Id(i);switch(e){case Bc:return n*t;case kc:return n*t/s.components*s.byteLength;case Mh:return n*t/s.components*s.byteLength;case Hc:return n*t*2/s.components*s.byteLength;case yh:return n*t*2/s.components*s.byteLength;case zc:return n*t*3/s.components*s.byteLength;case rn:return n*t*4/s.components*s.byteLength;case Sh:return n*t*4/s.components*s.byteLength;case zr:case kr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Vr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Co:case Io:return Math.max(n,16)*Math.max(t,8)/4;case Ro:case Po:return Math.max(n,8)*Math.max(t,8)/2;case Lo:case Do:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case No:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Go:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ko:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case qo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case $o:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case jo:case Ko:case Zo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Jo:case Qo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case th:case eh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Id(n){switch(n){case Dn:case Uc:return{byteLength:1,components:1};case Fs:case Fc:case qs:return{byteLength:2,components:1};case vh:case xh:return{byteLength:2,components:4};case bi:case gh:case Pn:return{byteLength:4,components:1};case Oc:case Gc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ld(n){const t=new WeakMap;function e(a,h){const l=a.array,u=a.usage,c=l.byteLength,f=n.createBuffer();n.bindBuffer(h,f),n.bufferData(h,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:c}}function i(a,h,l){const u=h.array,c=h.updateRanges;if(n.bindBuffer(l,a),c.length===0)n.bufferSubData(l,0,u);else{c.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<c.length;d++){const _=c[f],g=c[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,c[f]=g)}c.length=f+1;for(let d=0,_=c.length;d<_;d++){const g=c[d];n.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);h&&(n.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,h));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,h),l.version=a.version}}return{get:s,remove:r,update:o}}var Dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,np=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ip=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ym=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Am=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,km=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,c0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Dd,alphahash_pars_fragment:Nd,alphamap_fragment:Ud,alphamap_pars_fragment:Fd,alphatest_fragment:Od,alphatest_pars_fragment:Gd,aomap_fragment:Bd,aomap_pars_fragment:zd,batching_pars_vertex:kd,batching_vertex:Hd,begin_vertex:Vd,beginnormal_vertex:Wd,bsdfs:Xd,iridescence_fragment:qd,bumpmap_pars_fragment:$d,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:Zd,color_fragment:Jd,color_pars_fragment:Qd,color_pars_vertex:tp,color_vertex:ep,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:sp,displacementmap_pars_vertex:rp,displacementmap_vertex:ap,emissivemap_fragment:op,emissivemap_pars_fragment:hp,colorspace_fragment:lp,colorspace_pars_fragment:cp,envmap_fragment:up,envmap_common_pars_fragment:fp,envmap_pars_fragment:dp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:Tp,envmap_vertex:mp,fog_vertex:_p,fog_pars_vertex:gp,fog_fragment:vp,fog_pars_fragment:xp,gradientmap_pars_fragment:Mp,lightmap_pars_fragment:yp,lights_lambert_fragment:Sp,lights_lambert_pars_fragment:Ep,lights_pars_begin:bp,lights_toon_fragment:Ap,lights_toon_pars_fragment:wp,lights_phong_fragment:Rp,lights_phong_pars_fragment:Cp,lights_physical_fragment:Pp,lights_physical_pars_fragment:Ip,lights_fragment_begin:Lp,lights_fragment_maps:Dp,lights_fragment_end:Np,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Fp,logdepthbuf_pars_vertex:Op,logdepthbuf_vertex:Gp,map_fragment:Bp,map_pars_fragment:zp,map_particle_fragment:kp,map_particle_pars_fragment:Hp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Wp,morphinstance_vertex:Xp,morphcolor_vertex:qp,morphnormal_vertex:$p,morphtarget_pars_vertex:Yp,morphtarget_vertex:jp,normal_fragment_begin:Kp,normal_fragment_maps:Zp,normal_pars_fragment:Jp,normal_pars_vertex:Qp,normal_vertex:tm,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:sm,iridescence_pars_fragment:rm,opaque_fragment:am,packing:om,premultiplied_alpha_fragment:hm,project_vertex:lm,dithering_fragment:cm,dithering_pars_fragment:um,roughnessmap_fragment:fm,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:_m,shadowmask_pars_fragment:gm,skinbase_vertex:vm,skinning_pars_vertex:xm,skinning_vertex:Mm,skinnormal_vertex:ym,specularmap_fragment:Sm,specularmap_pars_fragment:Em,tonemapping_fragment:bm,tonemapping_pars_fragment:Tm,transmission_fragment:Am,transmission_pars_fragment:wm,uv_pars_fragment:Rm,uv_pars_vertex:Cm,uv_vertex:Pm,worldpos_vertex:Im,background_vert:Lm,background_frag:Dm,backgroundCube_vert:Nm,backgroundCube_frag:Um,cube_vert:Fm,cube_frag:Om,depth_vert:Gm,depth_frag:Bm,distanceRGBA_vert:zm,distanceRGBA_frag:km,equirect_vert:Hm,equirect_frag:Vm,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:qm,meshbasic_frag:$m,meshlambert_vert:Ym,meshlambert_frag:jm,meshmatcap_vert:Km,meshmatcap_frag:Zm,meshnormal_vert:Jm,meshnormal_frag:Qm,meshphong_vert:t0,meshphong_frag:e0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:a0,points_frag:o0,shadow_vert:h0,shadow_frag:l0,sprite_vert:c0,sprite_frag:u0},ot={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},cn={basic:{uniforms:Ce([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ce([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new jt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ce([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ce([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ce([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new jt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ce([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ce([ot.points,ot.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ce([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ce([ot.common,ot.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ce([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ce([ot.sprite,ot.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ce([ot.common,ot.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ce([ot.lights,ot.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};cn.physical={uniforms:Ce([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Cr={r:0,b:0,g:0},fi=new Ai,f0=new Se;function d0(n,t,e,i,s,r,o){const a=new jt(0);let h=r===!0?0:1,l,u,c=null,f=0,d=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function g(b){let M=!1;const w=_(b);w===null?p(a,h):w&&w.isColor&&(p(w,1),M=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const w=_(M);w&&(w.isCubeTexture||w.mapping===ca)?(u===void 0&&(u=new dn(new us(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:hs(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),fi.copy(M.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(f0.makeRotationFromEuler(fi)),u.material.toneMapped=Wt.getTransfer(w.colorSpace)!==Zt,(c!==w||f!==w.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,c=w,f=w.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new dn(new fa(2,2),new ti({name:"BackgroundMaterial",uniforms:hs(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(w.colorSpace)!==Zt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(c!==w||f!==w.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,c=w,f=w.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,M){b.getRGB(Cr,eu(n)),i.buffers.color.setClear(Cr.r,Cr.g,Cr.b,M,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),h=M,p(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,p(a,h)},render:g,addToRenderList:m,dispose:E}}function p0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(S,P,O,z,Y){let W=!1;const X=c(z,O,P);r!==X&&(r=X,l(r.object)),W=d(S,z,O,Y),W&&_(S,z,O,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(S,P,O,z),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function h(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function c(S,P,O){const z=O.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let W=Y[P.id];W===void 0&&(W={},Y[P.id]=W);let X=W[z];return X===void 0&&(X=f(h()),W[z]=X),X}function f(S){const P=[],O=[],z=[];for(let Y=0;Y<e;Y++)P[Y]=0,O[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:z,object:S,attributes:{},index:null}}function d(S,P,O,z){const Y=r.attributes,W=P.attributes;let X=0;const j=O.getAttributes();for(const k in j)if(j[k].location>=0){const ut=Y[k];let vt=W[k];if(vt===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),ut===void 0||ut.attribute!==vt||vt&&ut.data!==vt.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function _(S,P,O,z){const Y={},W=P.attributes;let X=0;const j=O.getAttributes();for(const k in j)if(j[k].location>=0){let ut=W[k];ut===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor));const vt={};vt.attribute=ut,ut&&ut.data&&(vt.data=ut.data),Y[k]=vt,X++}r.attributes=Y,r.attributesNum=X,r.index=z}function g(){const S=r.newAttributes;for(let P=0,O=S.length;P<O;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const O=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;O[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),Y[S]!==P&&(n.vertexAttribDivisor(S,P),Y[S]=P)}function E(){const S=r.newAttributes,P=r.enabledAttributes;for(let O=0,z=P.length;O<z;O++)P[O]!==S[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function b(S,P,O,z,Y,W,X){X===!0?n.vertexAttribIPointer(S,P,O,Y,W):n.vertexAttribPointer(S,P,O,z,Y,W)}function M(S,P,O,z){g();const Y=z.attributes,W=O.getAttributes(),X=P.defaultAttributeValues;for(const j in W){const k=W[j];if(k.location>=0){let st=Y[j];if(st===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),st!==void 0){const ut=st.normalized,vt=st.itemSize,Bt=t.get(st);if(Bt===void 0)continue;const Qt=Bt.buffer,ie=Bt.type,Xt=Bt.bytesPerElement,q=ie===n.INT||ie===n.UNSIGNED_INT||st.gpuType===gh;if(st.isInterleavedBufferAttribute){const J=st.data,mt=J.stride,Lt=st.offset;if(J.isInstancedInterleavedBuffer){for(let Tt=0;Tt<k.locationSize;Tt++)p(k.location+Tt,J.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Tt=0;Tt<k.locationSize;Tt++)m(k.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let Tt=0;Tt<k.locationSize;Tt++)b(k.location+Tt,vt/k.locationSize,ie,ut,mt*Xt,(Lt+vt/k.locationSize*Tt)*Xt,q)}else{if(st.isInstancedBufferAttribute){for(let J=0;J<k.locationSize;J++)p(k.location+J,st.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let J=0;J<k.locationSize;J++)m(k.location+J);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let J=0;J<k.locationSize;J++)b(k.location+J,vt/k.locationSize,ie,ut,vt*Xt,vt/k.locationSize*J*Xt,q)}}else if(X!==void 0){const ut=X[j];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv(k.location,ut);break;case 3:n.vertexAttrib3fv(k.location,ut);break;case 4:n.vertexAttrib4fv(k.location,ut);break;default:n.vertexAttrib1fv(k.location,ut)}}}}E()}function w(){L();for(const S in i){const P=i[S];for(const O in P){const z=P[O];for(const Y in z)u(z[Y].object),delete z[Y];delete P[O]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const O in P){const z=P[O];for(const Y in z)u(z[Y].object),delete z[Y];delete P[O]}delete i[S.id]}function A(S){for(const P in i){const O=i[P];if(O[S.id]===void 0)continue;const z=O[S.id];for(const Y in z)u(z[Y].object),delete z[Y];delete O[S.id]}}function L(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function m0(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,c){c!==0&&(n.drawArraysInstanced(i,l,u,c),e.update(u,i,c))}function a(l,u,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let d=0;for(let _=0;_<c;_++)d+=u[_];e.update(d,i,1)}function h(l,u,c,f){if(c===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,c);let _=0;for(let g=0;g<c;g++)_+=u[g]*f[g];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function _0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==rn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Dn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pn&&!L)}function h(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=h(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const c=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:c,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:w,maxSamples:R}}function g0(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new _i,a=new Gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){const d=c.length!==0||f||i!==0||s;return s=f,i=c.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,f){e=u(c,f,0)},this.setState=function(c,f,d){const _=c.clippingPlanes,g=c.clipIntersection,m=c.clipShadows,p=n.get(c);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const E=r?0:i,b=E*4;let M=p.clippingState||null;h.value=M,M=u(_,f,b,d);for(let w=0;w!==b;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(c,f,d,_){const g=c!==null?c.length:0;let m=null;if(g!==0){if(m=h.value,_!==!0||m===null){const p=d+g*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=d;b!==g;++b,M+=4)o.copy(c[b]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function v0(n){let t=new WeakMap;function e(o,a){return a===bo?o.mapping=rs:a===To&&(o.mapping=as),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bo||a===To)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const l=new vd(h.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const ji=4,El=[.125,.215,.35,.446,.526,.582],Mi=20,Za=new Cd,bl=new jt;let Ja=null,Qa=0,to=0,eo=!1;const gi=(1+Math.sqrt(5))/2,Vi=1/gi,Tl=[new F(-gi,Vi,0),new F(gi,Vi,0),new F(-Vi,0,gi),new F(Vi,0,gi),new F(0,gi,-Vi),new F(0,gi,Vi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],x0=new F;class Al{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=x0}=r;Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,i,s,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ja,Qa,to),this._renderer.xr.enabled=eo,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:qs,format:rn,colorSpace:os,depthBuffer:!1},s=wl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M0(r)),this._blurMaterial=y0(r,t,e)}return s}_compileMaterial(t){const e=new dn(this._lodPlanes[0],t);this._renderer.compile(e,Za)}_sceneToCubeUV(t,e,i,s,r){const h=new Ke(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(bl),c.toneMapping=jn,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(s),c.clearDepth(),c.setRenderTarget(null));const g=new bh({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),m=new dn(new us,g);let p=!1;const E=t.background;E?E.isColor&&(g.color.copy(E),t.background=null,p=!0):(g.color.copy(bl),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(h.up.set(0,l[b],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+u[b],r.y,r.z)):M===1?(h.up.set(0,0,l[b]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+u[b],r.z)):(h.up.set(0,l[b],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;Pr(s,M*w,b>2?w:0,w,w),c.setRenderTarget(s),p&&c.render(m,h),c.render(t,h)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=d,c.autoClear=f,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===rs||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const h=this._cubeSize;Pr(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(o,Za)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tl[(s-r-1)%Tl.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new dn(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Mi-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let E=0;for(let A=0;A<Mi;++A){const L=A/g,y=Math.exp(-L*L/2);p.push(y),A===0?E+=y:A<m&&(E+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const M=this._sizeLods[s],w=3*M*(s>b-ji?s-b+ji:0),R=4*(this._cubeSize-M);Pr(e,w,R,3*M,2*M),h.setRenderTarget(e),h.render(c,Za)}}function M0(n){const t=[],e=[],i=[];let s=n;const r=n-ji+1+El.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let h=1/a;o>n-ji?h=El[o-n+ji-1]:o===0&&(h=0),i.push(h);const l=1/(a-2),u=-l,c=1+l,f=[u,u,c,u,c,c,u,u,c,c,u,c],d=6,_=6,g=3,m=2,p=1,E=new Float32Array(g*_*d),b=new Float32Array(m*_*d),M=new Float32Array(p*_*d);for(let R=0;R<d;R++){const A=R%3*2/3-1,L=R>2?0:-1,y=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];E.set(y,g*_*R),b.set(f,m*_*R);const S=[R,R,R,R,R,R];M.set(S,p*_*R)}const w=new Fn;w.setAttribute("position",new mn(E,g)),w.setAttribute("uv",new mn(b,m)),w.setAttribute("faceIndex",new mn(M,p)),t.push(w),s>ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function wl(n,t,e){const i=new Ti(n,t,e);return i.texture.mapping=ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function y0(n,t,e){const i=new Float32Array(Mi),s=new F(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Rl(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Cl(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function S0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const h=a.mapping,l=h===bo||h===To,u=h===rs||h===as;if(l||u){let c=t.get(a);const f=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Al(n)),c=l?e.fromEquirectangular(a,c):e.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),c.texture;if(c!==void 0)return c.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Al(n)),c=l?e.fromEquirectangular(a):e.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),a.addEventListener("dispose",r),c.texture):null}}}return a}function s(a){let h=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&h++;return h===l}function r(a){const h=a.target;h.removeEventListener("dispose",r);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function E0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&zs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function b0(n,t,e,i){const s={},r=new WeakMap;function o(c){const f=c.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(c,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function h(c){const f=c.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function l(c){const f=[],d=c.index,_=c.attributes.position;let g=0;if(d!==null){const E=d.array;g=d.version;for(let b=0,M=E.length;b<M;b+=3){const w=E[b+0],R=E[b+1],A=E[b+2];f.push(w,R,R,A,A,w)}}else if(_!==void 0){const E=_.array;g=_.version;for(let b=0,M=E.length/3-1;b<M;b+=3){const w=b+0,R=b+1,A=b+2;f.push(w,R,R,A,A,w)}}else return;const m=new($c(f)?tu:Qc)(f,1);m.version=g;const p=r.get(c);p&&t.remove(p),r.set(c,m)}function u(c){const f=r.get(c);if(f){const d=c.index;d!==null&&f.version<d.version&&l(c)}else l(c);return r.get(c)}return{get:a,update:h,getWireframeAttribute:u}}function T0(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function h(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),e.update(d,i,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function c(f,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,g,0,_);let p=0;for(let E=0;E<_;E++)p+=d[E]*g[E];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=c}function A0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function w0(n,t,e){const i=new WeakMap,s=new de;function r(o,a,h){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==c){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let w=a.attributes.position.count*M,R=1;w>t.maxTextureSize&&(R=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const A=new Float32Array(w*R*4*c),L=new Yc(A,w,R,c);L.type=Pn,L.needsUpdate=!0;const y=M*4;for(let P=0;P<c;P++){const O=p[P],z=E[P],Y=b[P],W=w*R*4*P;for(let X=0;X<O.count;X++){const j=X*y;_===!0&&(s.fromBufferAttribute(O,X),A[W+j+0]=s.x,A[W+j+1]=s.y,A[W+j+2]=s.z,A[W+j+3]=0),g===!0&&(s.fromBufferAttribute(z,X),A[W+j+4]=s.x,A[W+j+5]=s.y,A[W+j+6]=s.z,A[W+j+7]=0),m===!0&&(s.fromBufferAttribute(Y,X),A[W+j+8]=s.x,A[W+j+9]=s.y,A[W+j+10]=s.z,A[W+j+11]=Y.itemSize===4?s.w:1)}}f={count:c,texture:L,size:new ee(w,R)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",g),h.getUniforms().setValue(n,"morphTargetInfluences",l)}h.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function R0(n,t,e,i){let s=new WeakMap;function r(h){const l=i.render.frame,u=h.geometry,c=t.get(h,u);if(s.get(c)!==l&&(t.update(c),s.set(c,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),s.get(h)!==l&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),s.set(h,l))),h.isSkinnedMesh){const f=h.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return c}function o(){s=new WeakMap}function a(h){const l=h.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const lu=new vn,Pl=new au(1,1),cu=new Yc,uu=new ed,fu=new iu,Il=[],Ll=[],Dl=new Float32Array(16),Nl=new Float32Array(9),Ul=new Float32Array(4);function fs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Il[s];if(r===void 0&&(r=new Float32Array(s),Il[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function _e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function da(n,t){let e=Ll[t];e===void 0&&(e=new Int32Array(t),Ll[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function C0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function P0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2fv(this.addr,t),ge(e,t)}}function I0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;n.uniform3fv(this.addr,t),ge(e,t)}}function L0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4fv(this.addr,t),ge(e,t)}}function D0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,i))return;Ul.set(i),n.uniformMatrix2fv(this.addr,!1,Ul),ge(e,i)}}function N0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,i))return;Nl.set(i),n.uniformMatrix3fv(this.addr,!1,Nl),ge(e,i)}}function U0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(_e(e,i))return;Dl.set(i),n.uniformMatrix4fv(this.addr,!1,Dl),ge(e,i)}}function F0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function O0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2iv(this.addr,t),ge(e,t)}}function G0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3iv(this.addr,t),ge(e,t)}}function B0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4iv(this.addr,t),ge(e,t)}}function z0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function k0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2uiv(this.addr,t),ge(e,t)}}function H0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3uiv(this.addr,t),ge(e,t)}}function V0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4uiv(this.addr,t),ge(e,t)}}function W0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Pl.compareFunction=Vc,r=Pl):r=lu,e.setTexture2D(t||r,s)}function X0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||uu,s)}function q0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||fu,s)}function $0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cu,s)}function Y0(n){switch(n){case 5126:return C0;case 35664:return P0;case 35665:return I0;case 35666:return L0;case 35674:return D0;case 35675:return N0;case 35676:return U0;case 5124:case 35670:return F0;case 35667:case 35671:return O0;case 35668:case 35672:return G0;case 35669:case 35673:return B0;case 5125:return z0;case 36294:return k0;case 36295:return H0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return $0}}function j0(n,t){n.uniform1fv(this.addr,t)}function K0(n,t){const e=fs(t,this.size,2);n.uniform2fv(this.addr,e)}function Z0(n,t){const e=fs(t,this.size,3);n.uniform3fv(this.addr,e)}function J0(n,t){const e=fs(t,this.size,4);n.uniform4fv(this.addr,e)}function Q0(n,t){const e=fs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function t_(n,t){const e=fs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function e_(n,t){const e=fs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function n_(n,t){n.uniform1iv(this.addr,t)}function i_(n,t){n.uniform2iv(this.addr,t)}function s_(n,t){n.uniform3iv(this.addr,t)}function r_(n,t){n.uniform4iv(this.addr,t)}function a_(n,t){n.uniform1uiv(this.addr,t)}function o_(n,t){n.uniform2uiv(this.addr,t)}function h_(n,t){n.uniform3uiv(this.addr,t)}function l_(n,t){n.uniform4uiv(this.addr,t)}function c_(n,t,e){const i=this.cache,s=t.length,r=da(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lu,r[o])}function u_(n,t,e){const i=this.cache,s=t.length,r=da(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uu,r[o])}function f_(n,t,e){const i=this.cache,s=t.length,r=da(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||fu,r[o])}function d_(n,t,e){const i=this.cache,s=t.length,r=da(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),ge(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cu,r[o])}function p_(n){switch(n){case 5126:return j0;case 35664:return K0;case 35665:return Z0;case 35666:return J0;case 35674:return Q0;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return a_;case 36294:return o_;case 36295:return h_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return d_}}class m_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Y0(e.type)}}class __{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p_(e.type)}}class g_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const no=/(\w+)(\])?(\[|\.)?/g;function Fl(n,t){n.seq.push(t),n.map[t.id]=t}function v_(n,t,e){const i=n.name,s=i.length;for(no.lastIndex=0;;){const r=no.exec(i),o=no.lastIndex;let a=r[1];const h=r[2]==="]",l=r[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===s){Fl(e,l===void 0?new m_(a,n,t):new __(a,n,t));break}else{let c=e.map[a];c===void 0&&(c=new g_(a),Fl(e,c)),e=c}}}class $r{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);v_(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],h=i[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Ol(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const x_=37297;let M_=0;function y_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Gl=new Gt;function S_(n){Wt._getMatrix(Gl,Wt.workingColorSpace,n);const t=`mat3( ${Gl.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(n)){case Jr:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Bl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+y_(n.getShaderSource(t),a)}else return r}function E_(n,t){const e=S_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b_(n,t){let e;switch(t){case Rf:e="Linear";break;case Cf:e="Reinhard";break;case Pf:e="Cineon";break;case If:e="ACESFilmic";break;case Df:e="AgX";break;case Nf:e="Neutral";break;case Lf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ir=new F;function T_(){Wt.getLuminanceCoefficients(Ir);const n=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function w_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function R_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ts(n){return n!==""}function zl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(n){return n.replace(C_,I_)}const P_=new Map;function I_(n,t){let e=Ot[t];if(e===void 0){const i=P_.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return sh(e)}const L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(n){return n.replace(L_,D_)}function D_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vl(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function N_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===of?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function U_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rs:case as:t="ENVMAP_TYPE_CUBE";break;case ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function O_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Dc:t="ENVMAP_BLENDING_MULTIPLY";break;case Af:t="ENVMAP_BLENDING_MIX";break;case wf:t="ENVMAP_BLENDING_ADD";break}return t}function G_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function B_(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const h=N_(e),l=U_(e),u=F_(e),c=O_(e),f=G_(e),d=A_(e),_=w_(r),g=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(m=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==jn?b_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,E_("linearToOutputTexel",e.outputColorSpace),T_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),o=sh(o),o=zl(o,e),o=kl(o,e),a=sh(a),a=zl(a,e),a=kl(a,e),o=Hl(o),a=Hl(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+m+o,M=E+p+a,w=Ol(s,s.VERTEX_SHADER,b),R=Ol(s,s.FRAGMENT_SHADER,M);s.attachShader(g,w),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(P){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(w)||"",Y=s.getShaderInfoLog(R)||"",W=O.trim(),X=z.trim(),j=Y.trim();let k=!0,st=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,w,R);else{const ut=Bl(s,w,"vertex"),vt=Bl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ut+`
`+vt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||j==="")&&(st=!1);st&&(P.diagnostics={runnable:k,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(w),s.deleteShader(R),L=new $r(s,g),y=R_(s,g)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,x_)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}let z_=0;class k_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new H_(t),e.set(t,i)),i}}class H_{constructor(t){this.id=z_++,this.code=t,this.usedTimes=0}}function V_(n,t,e,i,s,r,o){const a=new Zc,h=new k_,l=new Set,u=[],c=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,S,P,O,z){const Y=O.fog,W=z.geometry,X=y.isMeshStandardMaterial?O.environment:null,j=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),k=j&&j.mapping===ca?j.image.height:null,st=_[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,vt=ut!==void 0?ut.length:0;let Bt=0;W.morphAttributes.position!==void 0&&(Bt=1),W.morphAttributes.normal!==void 0&&(Bt=2),W.morphAttributes.color!==void 0&&(Bt=3);let Qt,ie,Xt,q;if(st){const qt=cn[st];Qt=qt.vertexShader,ie=qt.fragmentShader}else Qt=y.vertexShader,ie=y.fragmentShader,h.update(y),Xt=h.getVertexShaderID(y),q=h.getFragmentShaderID(y);const J=n.getRenderTarget(),mt=n.state.buffers.depth.getReversed(),Lt=z.isInstancedMesh===!0,Tt=z.isBatchedMesh===!0,Ht=!!y.map,Ee=!!y.matcap,C=!!j,se=!!y.aoMap,Nt=!!y.lightMap,Pt=!!y.bumpMap,xt=!!y.normalMap,re=!!y.displacementMap,Mt=!!y.emissiveMap,Ft=!!y.metalnessMap,ve=!!y.roughnessMap,ue=y.anisotropy>0,T=y.clearcoat>0,v=y.dispersion>0,U=y.iridescence>0,V=y.sheen>0,Z=y.transmission>0,H=ue&&!!y.anisotropyMap,bt=T&&!!y.clearcoatMap,it=T&&!!y.clearcoatNormalMap,yt=T&&!!y.clearcoatRoughnessMap,St=U&&!!y.iridescenceMap,et=U&&!!y.iridescenceThicknessMap,ft=V&&!!y.sheenColorMap,Ct=V&&!!y.sheenRoughnessMap,Et=!!y.specularMap,ht=!!y.specularColorMap,Ut=!!y.specularIntensityMap,I=Z&&!!y.transmissionMap,nt=Z&&!!y.thicknessMap,rt=!!y.gradientMap,pt=!!y.alphaMap,Q=y.alphaTest>0,$=!!y.alphaHash,gt=!!y.extensions;let Dt=jn;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Dt=n.toneMapping);const te={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:Qt,fragmentShader:ie,defines:y.defines,customVertexShaderID:Xt,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Tt,batchingColor:Tt&&z._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&z.instanceColor!==null,instancingMorph:Lt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:os,alphaToCoverage:!!y.alphaToCoverage,map:Ht,matcap:Ee,envMap:C,envMapMode:C&&j.mapping,envMapCubeUVHeight:k,aoMap:se,lightMap:Nt,bumpMap:Pt,normalMap:xt,displacementMap:f&&re,emissiveMap:Mt,normalMapObjectSpace:xt&&y.normalMapType===Bf,normalMapTangentSpace:xt&&y.normalMapType===Gf,metalnessMap:Ft,roughnessMap:ve,anisotropy:ue,anisotropyMap:H,clearcoat:T,clearcoatMap:bt,clearcoatNormalMap:it,clearcoatRoughnessMap:yt,dispersion:v,iridescence:U,iridescenceMap:St,iridescenceThicknessMap:et,sheen:V,sheenColorMap:ft,sheenRoughnessMap:Ct,specularMap:Et,specularColorMap:ht,specularIntensityMap:Ut,transmission:Z,transmissionMap:I,thicknessMap:nt,gradientMap:rt,opaque:y.transparent===!1&&y.blending===ts&&y.alphaToCoverage===!1,alphaMap:pt,alphaTest:Q,alphaHash:$,combine:y.combine,mapUv:Ht&&g(y.map.channel),aoMapUv:se&&g(y.aoMap.channel),lightMapUv:Nt&&g(y.lightMap.channel),bumpMapUv:Pt&&g(y.bumpMap.channel),normalMapUv:xt&&g(y.normalMap.channel),displacementMapUv:re&&g(y.displacementMap.channel),emissiveMapUv:Mt&&g(y.emissiveMap.channel),metalnessMapUv:Ft&&g(y.metalnessMap.channel),roughnessMapUv:ve&&g(y.roughnessMap.channel),anisotropyMapUv:H&&g(y.anisotropyMap.channel),clearcoatMapUv:bt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:it&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&g(y.sheenRoughnessMap.channel),specularMapUv:Et&&g(y.specularMap.channel),specularColorMapUv:ht&&g(y.specularColorMap.channel),specularIntensityMapUv:Ut&&g(y.specularIntensityMap.channel),transmissionMapUv:I&&g(y.transmissionMap.channel),thicknessMapUv:nt&&g(y.thicknessMap.channel),alphaMapUv:pt&&g(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(xt||ue),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(Ht||pt),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:mt,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ht&&y.map.isVideoTexture===!0&&Wt.getTransfer(y.map.colorSpace)===Zt,decodeVideoTextureEmissive:Mt&&y.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(y.emissiveMap.colorSpace)===Zt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Cn,flipSided:y.side===Fe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:gt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&y.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return te.vertexUv1s=l.has(1),te.vertexUv2s=l.has(2),te.vertexUv3s=l.has(3),l.clear(),te}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(E(S,y),b(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function E(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const S=_[y.type];let P;if(S){const O=cn[S];P=pd.clone(O.uniforms)}else P=y.uniforms;return P}function w(y,S){let P;for(let O=0,z=u.length;O<z;O++){const Y=u[O];if(Y.cacheKey===S){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new B_(n,S,y,r),u.push(P)),P}function R(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function A(y){h.remove(y)}function L(){h.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:L}}function W_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,h){n.get(o)[a]=h}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function X_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Wl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xl(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(c,f,d,_,g,m){let p=n[t];return p===void 0?(p={id:c.id,object:c,geometry:f,material:d,groupOrder:_,renderOrder:c.renderOrder,z:g,group:m},n[t]=p):(p.id=c.id,p.object=c,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=c.renderOrder,p.z=g,p.group=m),t++,p}function a(c,f,d,_,g,m){const p=o(c,f,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function h(c,f,d,_,g,m){const p=o(c,f,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(c,f){e.length>1&&e.sort(c||X_),i.length>1&&i.sort(f||Wl),s.length>1&&s.sort(f||Wl)}function u(){for(let c=t,f=n.length;c<f;c++){const d=n[c];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:h,finish:u,sort:l}}function q_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Xl,n.set(i,[o])):s>=r.length?(o=new Xl,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function $_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new jt};break;case"SpotLight":e={position:new F,direction:new F,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function Y_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let j_=0;function K_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Z_(n){const t=new $_,e=Y_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const s=new F,r=new Se,o=new Se;function a(l){let u=0,c=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,E=0,b=0,M=0,w=0,R=0,A=0;l.sort(K_);for(let y=0,S=l.length;y<S;y++){const P=l[y],O=P.color,z=P.intensity,Y=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*z,c+=O.g*z,f+=O.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],z);A++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,k=e.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=P.shadow.matrix,E++}i.directional[d]=X,d++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(z),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[g]=X;const j=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,j.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[g]=j.matrix,P.castShadow){const k=e.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.spotShadow[g]=k,i.spotShadowMap[g]=W,M++}g++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const j=P.shadow,k=e.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=P.shadow.matrix,b++}i.point[_]=X,_++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=c,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==d||L.pointLength!==_||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==M||L.numSpotMaps!==w||L.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,L.directionalLength=d,L.pointLength=_,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=M,L.numSpotMaps=w,L.numLightProbes=A,i.version=j_++)}function h(l,u){let c=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const b=l[p];if(b.isDirectionalLight){const M=i.directional[c];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),c++}else if(b.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:h,state:i}}function ql(n){const t=new Z_(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function h(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:h,pushLight:r,pushShadow:o}}function J_(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ql(n),t.set(s,[a])):r>=o.length?(a=new ql(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eg(n,t,e){let i=new su;const s=new ee,r=new ee,o=new de,a=new wd({depthPacking:Of}),h=new Rd,l={},u=e.maxTextureSize,c={[Qn]:Fe,[Fe]:Qn,[Cn]:Cn},f=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Q_,fragmentShader:tg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Fn;_.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new dn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let p=this.type;this.render=function(R,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Yn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=p!==wn&&this.type===wn,Y=p===wn&&this.type!==wn;for(let W=0,X=R.length;W<X;W++){const j=R[W],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const st=k.getFrameExtents();if(s.multiply(st),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,k.mapSize.y=r.y)),k.map===null||z===!0||Y===!0){const vt=this.type!==wn?{minFilter:an,magFilter:an}:{};k.map!==null&&k.map.dispose(),k.map=new Ti(s.x,s.y,vt),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ut=k.getViewportCount();for(let vt=0;vt<ut;vt++){const Bt=k.getViewport(vt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),O.viewport(o),k.updateMatrices(j,vt),i=k.getFrustum(),M(A,L,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===wn&&E(k,L),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,S,P)};function E(R,A){const L=t.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ti(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,L,f,g,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,L,d,g,null)}function b(R,A,L,y){let S=null;const P=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?h:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=S.uuid,z=A.uuid;let Y=l[O];Y===void 0&&(Y={},l[O]=Y);let W=Y[z];W===void 0&&(W=S.clone(),Y[z]=W,A.addEventListener("dispose",w)),S=W}if(S.visible=A.visible,S.wireframe=A.wireframe,y===wn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:c[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=n.properties.get(S);O.light=L}return S}function M(R,A,L,y,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===wn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const z=t.update(R),Y=R.material;if(Array.isArray(Y)){const W=z.groups;for(let X=0,j=W.length;X<j;X++){const k=W[X],st=Y[k.materialIndex];if(st&&st.visible){const ut=b(R,st,y,S);R.onBeforeShadow(n,R,A,L,z,ut,k),n.renderBufferDirect(L,null,z,ut,R,k),R.onAfterShadow(n,R,A,L,z,ut,k)}}}else if(Y.visible){const W=b(R,Y,y,S);R.onBeforeShadow(n,R,A,L,z,W,null),n.renderBufferDirect(L,null,z,W,R,null),R.onAfterShadow(n,R,A,L,z,W,null)}}const O=R.children;for(let z=0,Y=O.length;z<Y;z++)M(O[z],A,L,y,S)}function w(R){R.target.removeEventListener("dispose",w);for(const L in l){const y=l[L],S=R.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const ng={[go]:vo,[xo]:So,[Mo]:Eo,[ss]:yo,[vo]:go,[So]:xo,[Eo]:Mo,[yo]:ss};function ig(n,t){function e(){let I=!1;const nt=new de;let rt=null;const pt=new de(0,0,0,0);return{setMask:function(Q){rt!==Q&&!I&&(n.colorMask(Q,Q,Q,Q),rt=Q)},setLocked:function(Q){I=Q},setClear:function(Q,$,gt,Dt,te){te===!0&&(Q*=Dt,$*=Dt,gt*=Dt),nt.set(Q,$,gt,Dt),pt.equals(nt)===!1&&(n.clearColor(Q,$,gt,Dt),pt.copy(nt))},reset:function(){I=!1,rt=null,pt.set(-1,0,0,0)}}}function i(){let I=!1,nt=!1,rt=null,pt=null,Q=null;return{setReversed:function($){if(nt!==$){const gt=t.get("EXT_clip_control");$?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),nt=$;const Dt=Q;Q=null,this.setClear(Dt)}},getReversed:function(){return nt},setTest:function($){$?J(n.DEPTH_TEST):mt(n.DEPTH_TEST)},setMask:function($){rt!==$&&!I&&(n.depthMask($),rt=$)},setFunc:function($){if(nt&&($=ng[$]),pt!==$){switch($){case go:n.depthFunc(n.NEVER);break;case vo:n.depthFunc(n.ALWAYS);break;case xo:n.depthFunc(n.LESS);break;case ss:n.depthFunc(n.LEQUAL);break;case Mo:n.depthFunc(n.EQUAL);break;case yo:n.depthFunc(n.GEQUAL);break;case So:n.depthFunc(n.GREATER);break;case Eo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=$}},setLocked:function($){I=$},setClear:function($){Q!==$&&(nt&&($=1-$),n.clearDepth($),Q=$)},reset:function(){I=!1,rt=null,pt=null,Q=null,nt=!1}}}function s(){let I=!1,nt=null,rt=null,pt=null,Q=null,$=null,gt=null,Dt=null,te=null;return{setTest:function(qt){I||(qt?J(n.STENCIL_TEST):mt(n.STENCIL_TEST))},setMask:function(qt){nt!==qt&&!I&&(n.stencilMask(qt),nt=qt)},setFunc:function(qt,Mn,ln){(rt!==qt||pt!==Mn||Q!==ln)&&(n.stencilFunc(qt,Mn,ln),rt=qt,pt=Mn,Q=ln)},setOp:function(qt,Mn,ln){($!==qt||gt!==Mn||Dt!==ln)&&(n.stencilOp(qt,Mn,ln),$=qt,gt=Mn,Dt=ln)},setLocked:function(qt){I=qt},setClear:function(qt){te!==qt&&(n.clearStencil(qt),te=qt)},reset:function(){I=!1,nt=null,rt=null,pt=null,Q=null,$=null,gt=null,Dt=null,te=null}}}const r=new e,o=new i,a=new s,h=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,E=null,b=null,M=null,w=null,R=null,A=new jt(0,0,0),L=0,y=!1,S=null,P=null,O=null,z=null,Y=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=j>=2);let st=null,ut={};const vt=n.getParameter(n.SCISSOR_BOX),Bt=n.getParameter(n.VIEWPORT),Qt=new de().fromArray(vt),ie=new de().fromArray(Bt);function Xt(I,nt,rt,pt){const Q=new Uint8Array(4),$=n.createTexture();n.bindTexture(I,$),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<rt;gt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(nt,0,n.RGBA,1,1,pt,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(nt+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return $}const q={};q[n.TEXTURE_2D]=Xt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Xt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Xt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Xt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(ss),Pt(!1),xt(Yh),J(n.CULL_FACE),se(Yn);function J(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function mt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Lt(I,nt){return c[I]!==nt?(n.bindFramebuffer(I,nt),c[I]=nt,I===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=nt),I===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=nt),!0):!1}function Tt(I,nt){let rt=d,pt=!1;if(I){rt=f.get(nt),rt===void 0&&(rt=[],f.set(nt,rt));const Q=I.textures;if(rt.length!==Q.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let $=0,gt=Q.length;$<gt;$++)rt[$]=n.COLOR_ATTACHMENT0+$;rt.length=Q.length,pt=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,pt=!0);pt&&n.drawBuffers(rt)}function Ht(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const Ee={[xi]:n.FUNC_ADD,[lf]:n.FUNC_SUBTRACT,[cf]:n.FUNC_REVERSE_SUBTRACT};Ee[uf]=n.MIN,Ee[ff]=n.MAX;const C={[df]:n.ZERO,[pf]:n.ONE,[mf]:n.SRC_COLOR,[mo]:n.SRC_ALPHA,[yf]:n.SRC_ALPHA_SATURATE,[xf]:n.DST_COLOR,[gf]:n.DST_ALPHA,[_f]:n.ONE_MINUS_SRC_COLOR,[_o]:n.ONE_MINUS_SRC_ALPHA,[Mf]:n.ONE_MINUS_DST_COLOR,[vf]:n.ONE_MINUS_DST_ALPHA,[Sf]:n.CONSTANT_COLOR,[Ef]:n.ONE_MINUS_CONSTANT_COLOR,[bf]:n.CONSTANT_ALPHA,[Tf]:n.ONE_MINUS_CONSTANT_ALPHA};function se(I,nt,rt,pt,Q,$,gt,Dt,te,qt){if(I===Yn){g===!0&&(mt(n.BLEND),g=!1);return}if(g===!1&&(J(n.BLEND),g=!0),I!==hf){if(I!==m||qt!==y){if((p!==xi||M!==xi)&&(n.blendEquation(n.FUNC_ADD),p=xi,M=xi),qt)switch(I){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jh:n.blendFunc(n.ONE,n.ONE);break;case Kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Kh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,b=null,w=null,R=null,A.set(0,0,0),L=0,m=I,y=qt}return}Q=Q||nt,$=$||rt,gt=gt||pt,(nt!==p||Q!==M)&&(n.blendEquationSeparate(Ee[nt],Ee[Q]),p=nt,M=Q),(rt!==E||pt!==b||$!==w||gt!==R)&&(n.blendFuncSeparate(C[rt],C[pt],C[$],C[gt]),E=rt,b=pt,w=$,R=gt),(Dt.equals(A)===!1||te!==L)&&(n.blendColor(Dt.r,Dt.g,Dt.b,te),A.copy(Dt),L=te),m=I,y=!1}function Nt(I,nt){I.side===Cn?mt(n.CULL_FACE):J(n.CULL_FACE);let rt=I.side===Fe;nt&&(rt=!rt),Pt(rt),I.blending===ts&&I.transparent===!1?se(Yn):se(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const pt=I.stencilWrite;a.setTest(pt),pt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Mt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(I){S!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),S=I)}function xt(I){I!==rf?(J(n.CULL_FACE),I!==P&&(I===Yh?n.cullFace(n.BACK):I===af?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):mt(n.CULL_FACE),P=I}function re(I){I!==O&&(X&&n.lineWidth(I),O=I)}function Mt(I,nt,rt){I?(J(n.POLYGON_OFFSET_FILL),(z!==nt||Y!==rt)&&(n.polygonOffset(nt,rt),z=nt,Y=rt)):mt(n.POLYGON_OFFSET_FILL)}function Ft(I){I?J(n.SCISSOR_TEST):mt(n.SCISSOR_TEST)}function ve(I){I===void 0&&(I=n.TEXTURE0+W-1),st!==I&&(n.activeTexture(I),st=I)}function ue(I,nt,rt){rt===void 0&&(st===null?rt=n.TEXTURE0+W-1:rt=st);let pt=ut[rt];pt===void 0&&(pt={type:void 0,texture:void 0},ut[rt]=pt),(pt.type!==I||pt.texture!==nt)&&(st!==rt&&(n.activeTexture(rt),st=rt),n.bindTexture(I,nt||q[I]),pt.type=I,pt.texture=nt)}function T(){const I=ut[st];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(I){Qt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Qt.copy(I))}function Ct(I){ie.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ie.copy(I))}function Et(I,nt){let rt=l.get(nt);rt===void 0&&(rt=new WeakMap,l.set(nt,rt));let pt=rt.get(I);pt===void 0&&(pt=n.getUniformBlockIndex(nt,I.name),rt.set(I,pt))}function ht(I,nt){const pt=l.get(nt).get(I);h.get(nt)!==pt&&(n.uniformBlockBinding(nt,pt,I.__bindingPointIndex),h.set(nt,pt))}function Ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},st=null,ut={},c={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,E=null,b=null,M=null,w=null,R=null,A=new jt(0,0,0),L=0,y=!1,S=null,P=null,O=null,z=null,Y=null,Qt.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:mt,bindFramebuffer:Lt,drawBuffers:Tt,useProgram:Ht,setBlending:se,setMaterial:Nt,setFlipSided:Pt,setCullFace:xt,setLineWidth:re,setPolygonOffset:Mt,setScissorTest:Ft,activeTexture:ve,bindTexture:ue,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:St,texImage3D:et,updateUBOMapping:Et,uniformBlockBinding:ht,texStorage2D:it,texStorage3D:yt,texSubImage2D:V,texSubImage3D:Z,compressedTexSubImage2D:H,compressedTexSubImage3D:bt,scissor:ft,viewport:Ct,reset:Ut}}function sg(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ee,u=new WeakMap;let c;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return d?new OffscreenCanvas(T,v):ta("canvas")}function g(T,v,U){let V=1;const Z=ue(T);if((Z.width>U||Z.height>U)&&(V=U/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const H=Math.floor(V*Z.width),bt=Math.floor(V*Z.height);c===void 0&&(c=_(H,bt));const it=v?_(H,bt):c;return it.width=H,it.height=bt,it.getContext("2d").drawImage(T,0,0,H,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+H+"x"+bt+")."),it}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,v,U,V,Z=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let H=v;if(v===n.RED&&(U===n.FLOAT&&(H=n.R32F),U===n.HALF_FLOAT&&(H=n.R16F),U===n.UNSIGNED_BYTE&&(H=n.R8)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(H=n.R8UI),U===n.UNSIGNED_SHORT&&(H=n.R16UI),U===n.UNSIGNED_INT&&(H=n.R32UI),U===n.BYTE&&(H=n.R8I),U===n.SHORT&&(H=n.R16I),U===n.INT&&(H=n.R32I)),v===n.RG&&(U===n.FLOAT&&(H=n.RG32F),U===n.HALF_FLOAT&&(H=n.RG16F),U===n.UNSIGNED_BYTE&&(H=n.RG8)),v===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(H=n.RG8UI),U===n.UNSIGNED_SHORT&&(H=n.RG16UI),U===n.UNSIGNED_INT&&(H=n.RG32UI),U===n.BYTE&&(H=n.RG8I),U===n.SHORT&&(H=n.RG16I),U===n.INT&&(H=n.RG32I)),v===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(H=n.RGB8UI),U===n.UNSIGNED_SHORT&&(H=n.RGB16UI),U===n.UNSIGNED_INT&&(H=n.RGB32UI),U===n.BYTE&&(H=n.RGB8I),U===n.SHORT&&(H=n.RGB16I),U===n.INT&&(H=n.RGB32I)),v===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),U===n.UNSIGNED_INT&&(H=n.RGBA32UI),U===n.BYTE&&(H=n.RGBA8I),U===n.SHORT&&(H=n.RGBA16I),U===n.INT&&(H=n.RGBA32I)),v===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),v===n.RGBA){const bt=Z?Jr:Wt.getTransfer(V);U===n.FLOAT&&(H=n.RGBA32F),U===n.HALF_FLOAT&&(H=n.RGBA16F),U===n.UNSIGNED_BYTE&&(H=bt===Zt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function M(T,v){let U;return T?v===null||v===bi||v===Os?U=n.DEPTH24_STENCIL8:v===Pn?U=n.DEPTH32F_STENCIL8:v===Fs&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===bi||v===Os?U=n.DEPTH_COMPONENT24:v===Pn?U=n.DEPTH_COMPONENT32F:v===Fs&&(U=n.DEPTH_COMPONENT16),U}function w(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==an&&T.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function R(T){const v=T.target;v.removeEventListener("dispose",R),L(v),v.isVideoTexture&&u.delete(v)}function A(T){const v=T.target;v.removeEventListener("dispose",A),S(v)}function L(T){const v=i.get(T);if(v.__webglInit===void 0)return;const U=T.source,V=f.get(U);if(V){const Z=V[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(T),Object.keys(V).length===0&&f.delete(U)}i.remove(T)}function y(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const U=T.source,V=f.get(U);delete V[v.__cacheKey],o.memory.textures--}function S(T){const v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let Z=0;Z<v.__webglFramebuffer[V].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[V][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=T.textures;for(let V=0,Z=U.length;V<Z;V++){const H=i.get(U[V]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(U[V])}i.remove(T)}let P=0;function O(){P=0}function z(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function Y(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function W(T,v){const U=i.get(T);if(T.isVideoTexture&&Ft(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){const V=T.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,T,v);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function X(T,v){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){q(U,T,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function j(T,v){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){q(U,T,v);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function k(T,v){const U=i.get(T);if(T.version>0&&U.__version!==T.version){J(U,T,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}const st={[Ao]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[wo]:n.MIRRORED_REPEAT},ut={[an]:n.NEAREST,[Uf]:n.NEAREST_MIPMAP_NEAREST,[rr]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Ta]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},vt={[zf]:n.NEVER,[qf]:n.ALWAYS,[kf]:n.LESS,[Vc]:n.LEQUAL,[Hf]:n.EQUAL,[Xf]:n.GEQUAL,[Vf]:n.GREATER,[Wf]:n.NOTEQUAL};function Bt(T,v){if(v.type===Pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===un||v.magFilter===Ta||v.magFilter===rr||v.magFilter===Si||v.minFilter===un||v.minFilter===Ta||v.minFilter===rr||v.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,st[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,st[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,st[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ut[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,vt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==rr&&v.minFilter!==Si||v.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Qt(T,v){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",R));const V=v.source;let Z=f.get(V);Z===void 0&&(Z={},f.set(V,Z));const H=Y(v);if(H!==T.__cacheKey){Z[H]===void 0&&(Z[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Z[H].usedTimes++;const bt=Z[T.__cacheKey];bt!==void 0&&(Z[T.__cacheKey].usedTimes--,bt.usedTimes===0&&y(v)),T.__cacheKey=H,T.__webglTexture=Z[H].texture}return U}function ie(T,v,U){return Math.floor(Math.floor(T/U)/v)}function Xt(T,v,U,V){const H=T.updateRanges;if(H.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,U,V,v.data);else{H.sort((et,ft)=>et.start-ft.start);let bt=0;for(let et=1;et<H.length;et++){const ft=H[bt],Ct=H[et],Et=ft.start+ft.count,ht=ie(Ct.start,v.width,4),Ut=ie(ft.start,v.width,4);Ct.start<=Et+1&&ht===Ut&&ie(Ct.start+Ct.count-1,v.width,4)===ht?ft.count=Math.max(ft.count,Ct.start+Ct.count-ft.start):(++bt,H[bt]=Ct)}H.length=bt+1;const it=n.getParameter(n.UNPACK_ROW_LENGTH),yt=n.getParameter(n.UNPACK_SKIP_PIXELS),St=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let et=0,ft=H.length;et<ft;et++){const Ct=H[et],Et=Math.floor(Ct.start/4),ht=Math.ceil(Ct.count/4),Ut=Et%v.width,I=Math.floor(Et/v.width),nt=ht,rt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ut),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Ut,I,nt,rt,U,V,v.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,it),n.pixelStorei(n.UNPACK_SKIP_PIXELS,yt),n.pixelStorei(n.UNPACK_SKIP_ROWS,St)}}function q(T,v,U){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const Z=Qt(T,v),H=v.source;e.bindTexture(V,T.__webglTexture,n.TEXTURE0+U);const bt=i.get(H);if(H.version!==bt.__version||Z===!0){e.activeTexture(n.TEXTURE0+U);const it=Wt.getPrimaries(Wt.workingColorSpace),yt=v.colorSpace===Xn?null:Wt.getPrimaries(v.colorSpace),St=v.colorSpace===Xn||it===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let et=g(v.image,!1,s.maxTextureSize);et=ve(v,et);const ft=r.convert(v.format,v.colorSpace),Ct=r.convert(v.type);let Et=b(v.internalFormat,ft,Ct,v.colorSpace,v.isVideoTexture);Bt(V,v);let ht;const Ut=v.mipmaps,I=v.isVideoTexture!==!0,nt=bt.__version===void 0||Z===!0,rt=H.dataReady,pt=w(v,et);if(v.isDepthTexture)Et=M(v.format===Bs,v.type),nt&&(I?e.texStorage2D(n.TEXTURE_2D,1,Et,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,Et,et.width,et.height,0,ft,Ct,null));else if(v.isDataTexture)if(Ut.length>0){I&&nt&&e.texStorage2D(n.TEXTURE_2D,pt,Et,Ut[0].width,Ut[0].height);for(let Q=0,$=Ut.length;Q<$;Q++)ht=Ut[Q],I?rt&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ht.width,ht.height,ft,Ct,ht.data):e.texImage2D(n.TEXTURE_2D,Q,Et,ht.width,ht.height,0,ft,Ct,ht.data);v.generateMipmaps=!1}else I?(nt&&e.texStorage2D(n.TEXTURE_2D,pt,Et,et.width,et.height),rt&&Xt(v,et,ft,Ct)):e.texImage2D(n.TEXTURE_2D,0,Et,et.width,et.height,0,ft,Ct,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&nt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,Et,Ut[0].width,Ut[0].height,et.depth);for(let Q=0,$=Ut.length;Q<$;Q++)if(ht=Ut[Q],v.format!==rn)if(ft!==null)if(I){if(rt)if(v.layerUpdates.size>0){const gt=Sl(ht.width,ht.height,v.format,v.type);for(const Dt of v.layerUpdates){const te=ht.data.subarray(Dt*gt/ht.data.BYTES_PER_ELEMENT,(Dt+1)*gt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Dt,ht.width,ht.height,1,ft,te)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ht.width,ht.height,et.depth,ft,ht.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Et,ht.width,ht.height,et.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ht.width,ht.height,et.depth,ft,Ct,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Et,ht.width,ht.height,et.depth,0,ft,Ct,ht.data)}else{I&&nt&&e.texStorage2D(n.TEXTURE_2D,pt,Et,Ut[0].width,Ut[0].height);for(let Q=0,$=Ut.length;Q<$;Q++)ht=Ut[Q],v.format!==rn?ft!==null?I?rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ht.width,ht.height,ft,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Et,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?rt&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ht.width,ht.height,ft,Ct,ht.data):e.texImage2D(n.TEXTURE_2D,Q,Et,ht.width,ht.height,0,ft,Ct,ht.data)}else if(v.isDataArrayTexture)if(I){if(nt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,Et,et.width,et.height,et.depth),rt)if(v.layerUpdates.size>0){const Q=Sl(et.width,et.height,v.format,v.type);for(const $ of v.layerUpdates){const gt=et.data.subarray($*Q/et.data.BYTES_PER_ELEMENT,($+1)*Q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,et.width,et.height,1,ft,Ct,gt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ft,Ct,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,et.width,et.height,et.depth,0,ft,Ct,et.data);else if(v.isData3DTexture)I?(nt&&e.texStorage3D(n.TEXTURE_3D,pt,Et,et.width,et.height,et.depth),rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ft,Ct,et.data)):e.texImage3D(n.TEXTURE_3D,0,Et,et.width,et.height,et.depth,0,ft,Ct,et.data);else if(v.isFramebufferTexture){if(nt)if(I)e.texStorage2D(n.TEXTURE_2D,pt,Et,et.width,et.height);else{let Q=et.width,$=et.height;for(let gt=0;gt<pt;gt++)e.texImage2D(n.TEXTURE_2D,gt,Et,Q,$,0,ft,Ct,null),Q>>=1,$>>=1}}else if(Ut.length>0){if(I&&nt){const Q=ue(Ut[0]);e.texStorage2D(n.TEXTURE_2D,pt,Et,Q.width,Q.height)}for(let Q=0,$=Ut.length;Q<$;Q++)ht=Ut[Q],I?rt&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ft,Ct,ht):e.texImage2D(n.TEXTURE_2D,Q,Et,ft,Ct,ht);v.generateMipmaps=!1}else if(I){if(nt){const Q=ue(et);e.texStorage2D(n.TEXTURE_2D,pt,Et,Q.width,Q.height)}rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,Ct,et)}else e.texImage2D(n.TEXTURE_2D,0,Et,ft,Ct,et);m(v)&&p(V),bt.__version=H.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function J(T,v,U){if(v.image.length!==6)return;const V=Qt(T,v),Z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+U);const H=i.get(Z);if(Z.version!==H.__version||V===!0){e.activeTexture(n.TEXTURE0+U);const bt=Wt.getPrimaries(Wt.workingColorSpace),it=v.colorSpace===Xn?null:Wt.getPrimaries(v.colorSpace),yt=v.colorSpace===Xn||bt===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const St=v.isCompressedTexture||v.image[0].isCompressedTexture,et=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!St&&!et?ft[$]=g(v.image[$],!0,s.maxCubemapSize):ft[$]=et?v.image[$].image:v.image[$],ft[$]=ve(v,ft[$]);const Ct=ft[0],Et=r.convert(v.format,v.colorSpace),ht=r.convert(v.type),Ut=b(v.internalFormat,Et,ht,v.colorSpace),I=v.isVideoTexture!==!0,nt=H.__version===void 0||V===!0,rt=Z.dataReady;let pt=w(v,Ct);Bt(n.TEXTURE_CUBE_MAP,v);let Q;if(St){I&&nt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Ut,Ct.width,Ct.height);for(let $=0;$<6;$++){Q=ft[$].mipmaps;for(let gt=0;gt<Q.length;gt++){const Dt=Q[gt];v.format!==rn?Et!==null?I?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt,0,0,Dt.width,Dt.height,Et,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt,Ut,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt,0,0,Dt.width,Dt.height,Et,ht,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt,Ut,Dt.width,Dt.height,0,Et,ht,Dt.data)}}}else{if(Q=v.mipmaps,I&&nt){Q.length>0&&pt++;const $=ue(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Ut,$.width,$.height)}for(let $=0;$<6;$++)if(et){I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,Et,ht,ft[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ut,ft[$].width,ft[$].height,0,Et,ht,ft[$].data);for(let gt=0;gt<Q.length;gt++){const te=Q[gt].image[$].image;I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt+1,0,0,te.width,te.height,Et,ht,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt+1,Ut,te.width,te.height,0,Et,ht,te.data)}}else{I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Et,ht,ft[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ut,Et,ht,ft[$]);for(let gt=0;gt<Q.length;gt++){const Dt=Q[gt];I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt+1,0,0,Et,ht,Dt.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,gt+1,Ut,Et,ht,Dt.image[$])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),H.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function mt(T,v,U,V,Z,H){const bt=r.convert(U.format,U.colorSpace),it=r.convert(U.type),yt=b(U.internalFormat,bt,it,U.colorSpace),St=i.get(v),et=i.get(U);if(et.__renderTarget=v,!St.__hasExternalTextures){const ft=Math.max(1,v.width>>H),Ct=Math.max(1,v.height>>H);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,H,yt,ft,Ct,v.depth,0,bt,it,null):e.texImage2D(Z,H,yt,ft,Ct,0,bt,it,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Mt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,Z,et.__webglTexture,0,re(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,Z,et.__webglTexture,H),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(T,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){const V=v.depthTexture,Z=V&&V.isDepthTexture?V.type:null,H=M(v.stencilBuffer,Z),bt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=re(v);Mt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,H,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,H,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,H,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,T)}else{const V=v.textures;for(let Z=0;Z<V.length;Z++){const H=V[Z],bt=r.convert(H.format,H.colorSpace),it=r.convert(H.type),yt=b(H.internalFormat,bt,it,H.colorSpace),St=re(v);U&&Mt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,yt,v.width,v.height):Mt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,yt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,yt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(v.depthTexture);V.__renderTarget=v,(!V.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const Z=V.__webglTexture,H=re(v);if(v.depthTexture.format===Gs)Mt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Bs)Mt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ht(T){const v=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const V=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=V}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const V=T.texture.mipmaps;V&&V.length>0?Tt(v.__webglFramebuffer[0],T):Tt(v.__webglFramebuffer,T)}else if(U){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),Lt(v.__webglDepthbuffer[V],T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,H)}}else{const V=T.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Lt(v.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,H)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(T,v,U){const V=i.get(T);v!==void 0&&mt(V.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Ht(T)}function C(T){const v=T.texture,U=i.get(T),V=i.get(v);T.addEventListener("dispose",A);const Z=T.textures,H=T.isWebGLCubeRenderTarget===!0,bt=Z.length>1;if(bt||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,o.memory.textures++),H){U.__webglFramebuffer=[];for(let it=0;it<6;it++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[it]=[];for(let yt=0;yt<v.mipmaps.length;yt++)U.__webglFramebuffer[it][yt]=n.createFramebuffer()}else U.__webglFramebuffer[it]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let it=0;it<v.mipmaps.length;it++)U.__webglFramebuffer[it]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(bt)for(let it=0,yt=Z.length;it<yt;it++){const St=i.get(Z[it]);St.__webglTexture===void 0&&(St.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Mt(T)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let it=0;it<Z.length;it++){const yt=Z[it];U.__webglColorRenderbuffer[it]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[it]);const St=r.convert(yt.format,yt.colorSpace),et=r.convert(yt.type),ft=b(yt.internalFormat,St,et,yt.colorSpace,T.isXRRenderTarget===!0),Ct=re(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,ft,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,U.__webglColorRenderbuffer[it])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(U.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,v);for(let it=0;it<6;it++)if(v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)mt(U.__webglFramebuffer[it][yt],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt);else mt(U.__webglFramebuffer[it],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let it=0,yt=Z.length;it<yt;it++){const St=Z[it],et=i.get(St);let ft=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,et.__webglTexture),Bt(ft,St),mt(U.__webglFramebuffer,T,St,n.COLOR_ATTACHMENT0+it,ft,0),m(St)&&p(ft)}e.unbindTexture()}else{let it=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(it=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,V.__webglTexture),Bt(it,v),v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)mt(U.__webglFramebuffer[yt],T,v,n.COLOR_ATTACHMENT0,it,yt);else mt(U.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,it,0);m(v)&&p(it),e.unbindTexture()}T.depthBuffer&&Ht(T)}function se(T){const v=T.textures;for(let U=0,V=v.length;U<V;U++){const Z=v[U];if(m(Z)){const H=E(T),bt=i.get(Z).__webglTexture;e.bindTexture(H,bt),p(H),e.unbindTexture()}}}const Nt=[],Pt=[];function xt(T){if(T.samples>0){if(Mt(T)===!1){const v=T.textures,U=T.width,V=T.height;let Z=n.COLOR_BUFFER_BIT;const H=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(T),it=v.length>1;if(it)for(let St=0;St<v.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const yt=T.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let St=0;St<v.length;St++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),it){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[St]);const et=i.get(v[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,U,V,0,0,U,V,Z,n.NEAREST),h===!0&&(Nt.length=0,Pt.length=0,Nt.push(n.COLOR_ATTACHMENT0+St),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Nt.push(H),Pt.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Pt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),it)for(let St=0;St<v.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,bt.__webglColorRenderbuffer[St]);const et=i.get(v[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,et,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&h){const v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function re(T){return Math.min(s.maxSamples,T.samples)}function Mt(T){const v=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ft(T){const v=o.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function ve(T,v){const U=T.colorSpace,V=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==os&&U!==Xn&&(Wt.getTransfer(U)===Zt?(V!==rn||Z!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function ue(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=k,this.rebindTextures=Ee,this.setupRenderTarget=C,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Mt}function rg(n,t){function e(i,s=Xn){let r;const o=Wt.getTransfer(s);if(i===Dn)return n.UNSIGNED_BYTE;if(i===vh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Oc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uc)return n.BYTE;if(i===Fc)return n.SHORT;if(i===Fs)return n.UNSIGNED_SHORT;if(i===gh)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===qs)return n.HALF_FLOAT;if(i===Bc)return n.ALPHA;if(i===zc)return n.RGB;if(i===rn)return n.RGBA;if(i===Gs)return n.DEPTH_COMPONENT;if(i===Bs)return n.DEPTH_STENCIL;if(i===kc)return n.RED;if(i===Mh)return n.RED_INTEGER;if(i===Hc)return n.RG;if(i===yh)return n.RG_INTEGER;if(i===Sh)return n.RGBA_INTEGER;if(i===zr||i===kr||i===Hr||i===Vr)if(o===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ro||i===Co||i===Po||i===Io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lo||i===Do||i===No)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Lo||i===Do)return o===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===No)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uo||i===Fo||i===Oo||i===Go||i===Bo||i===zo||i===ko||i===Ho||i===Vo||i===Wo||i===Xo||i===qo||i===$o||i===Yo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Uo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Go)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ko)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ho)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$o)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jo||i===Ko||i===Zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===jo)return o===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jo||i===Qo||i===th||i===eh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===th)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,og=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new ou(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ti({vertexShader:ag,fragmentShader:og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dn(new fa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lg extends cs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",h=1,l=null,u=null,c=null,f=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",m=new hg,p={},E=e.getContextAttributes();let b=null,M=null;const w=[],R=[],A=new ee;let L=null;const y=new Ke;y.viewport=new de;const S=new Ke;S.viewport=new de;const P=[y,S],O=new Pd;let z=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=w[q];return J===void 0&&(J=new $a,w[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=w[q];return J===void 0&&(J=new $a,w[q]=J),J.getGripSpace()},this.getHand=function(q){let J=w[q];return J===void 0&&(J=new $a,w[q]=J),J.getHandSpace()};function W(q){const J=R.indexOf(q.inputSource);if(J===-1)return;const mt=w[J];mt!==void 0&&(mt.update(q.inputSource,q.frame,l||o),mt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let q=0;q<w.length;q++){const J=R[q];J!==null&&(R[q]=null,w[q].disconnect(J))}z=null,Y=null,m.reset();for(const q in p)delete p[q];t.setRenderTarget(b),d=null,f=null,c=null,s=null,M=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c===null&&g&&(c=new XRWebGLBinding(s,e)),c},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),E.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Lt=null,Tt=null;E.depth&&(Tt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=E.stencil?Bs:Gs,Lt=E.stencil?Os:bi);const Ht={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};c=this.getBinding(),f=c.createProjectionLayer(Ht),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Ti(f.textureWidth,f.textureHeight,{format:rn,type:Dn,depthTexture:new au(f.textureWidth,f.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const mt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ti(d.framebufferWidth,d.framebufferHeight,{format:rn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(q){for(let J=0;J<q.removed.length;J++){const mt=q.removed[J],Lt=R.indexOf(mt);Lt>=0&&(R[Lt]=null,w[Lt].disconnect(mt))}for(let J=0;J<q.added.length;J++){const mt=q.added[J];let Lt=R.indexOf(mt);if(Lt===-1){for(let Ht=0;Ht<w.length;Ht++)if(Ht>=R.length){R.push(mt),Lt=Ht;break}else if(R[Ht]===null){R[Ht]=mt,Lt=Ht;break}if(Lt===-1)break}const Tt=w[Lt];Tt&&Tt.connect(mt)}}const k=new F,st=new F;function ut(q,J,mt){k.setFromMatrixPosition(J.matrixWorld),st.setFromMatrixPosition(mt.matrixWorld);const Lt=k.distanceTo(st),Tt=J.projectionMatrix.elements,Ht=mt.projectionMatrix.elements,Ee=Tt[14]/(Tt[10]-1),C=Tt[14]/(Tt[10]+1),se=(Tt[9]+1)/Tt[5],Nt=(Tt[9]-1)/Tt[5],Pt=(Tt[8]-1)/Tt[0],xt=(Ht[8]+1)/Ht[0],re=Ee*Pt,Mt=Ee*xt,Ft=Lt/(-Pt+xt),ve=Ft*-Pt;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ve),q.translateZ(Ft),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ue=Ee+Ft,T=C+Ft,v=re-ve,U=Mt+(Lt-ve),V=se*C/T*ue,Z=Nt*C/T*ue;q.projectionMatrix.makePerspective(v,U,V,Z,ue,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function vt(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let J=q.near,mt=q.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),O.near=S.near=y.near=J,O.far=S.far=y.far=mt,(z!==O.near||Y!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,Y=O.far),O.layers.mask=q.layers.mask|6,y.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const Lt=q.parent,Tt=O.cameras;vt(O,Lt);for(let Ht=0;Ht<Tt.length;Ht++)vt(Tt[Ht],Lt);Tt.length===2?ut(O,y,S):O.projectionMatrix.copy(y.projectionMatrix),Bt(q,O,Lt)};function Bt(q,J,mt){mt===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=nh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return h},this.setFoveation=function(q){h=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return p[q]};let Qt=null;function ie(q,J){if(u=J.getViewerPose(l||o),_=J,u!==null){const mt=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Lt=!1;mt.length!==O.cameras.length&&(O.cameras.length=0,Lt=!0);for(let C=0;C<mt.length;C++){const se=mt[C];let Nt=null;if(d!==null)Nt=d.getViewport(se);else{const xt=c.getViewSubImage(f,se);Nt=xt.viewport,C===0&&(t.setRenderTargetTextures(M,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(M))}let Pt=P[C];Pt===void 0&&(Pt=new Ke,Pt.layers.enable(C),Pt.viewport=new de,P[C]=Pt),Pt.matrix.fromArray(se.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(se.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),C===0&&(O.matrix.copy(Pt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Lt===!0&&O.cameras.push(Pt)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){c=i.getBinding();const C=c.getDepthInformation(mt[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(Tt&&Tt.includes("camera-access")&&g){t.state.unbindTexture(),c=i.getBinding();for(let C=0;C<mt.length;C++){const se=mt[C].camera;if(se){let Nt=p[se];Nt||(Nt=new ou,p[se]=Nt);const Pt=c.getCameraImage(se);Nt.sourceTexture=Pt}}}}for(let mt=0;mt<w.length;mt++){const Lt=R[mt],Tt=w[mt];Lt!==null&&Tt!==void 0&&Tt.update(Lt,J,l||o)}Qt&&Qt(q,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const Xt=new hu;Xt.setAnimationLoop(ie),this.setAnimationLoop=function(q){Qt=q},this.dispose=function(){}}}const di=new Ai,cg=new Se;function ug(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,eu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),c(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?h(m,p,E,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),b=E.envMap,M=E.envMapRotation;b&&(m.envMap.value=b,di.copy(M),di.x*=-1,di.y*=-1,di.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(di)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function h(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fg(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(E,b){const M=b.program;i.uniformBlockBinding(E,M)}function l(E,b){let M=s[E.id];M===void 0&&(_(E),M=u(E),s[E.id]=M,E.addEventListener("dispose",m));const w=b.program;i.updateUBOMapping(E,w);const R=t.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function u(E){const b=c();E.__bindingPointIndex=b;const M=n.createBuffer(),w=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function c(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=s[E.id],M=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,A=M.length;R<A;R++){const L=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,S=L.length;y<S;y++){const P=L[y];if(d(P,R,y,w)===!0){const O=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let W=0;W<z.length;W++){const X=z[W],j=g(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,O+Y,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,b,M,w){const R=E.value,A=b+"_"+M;if(w[A]===void 0)return typeof R=="number"||typeof R=="boolean"?w[A]=R:w[A]=R.clone(),!0;{const L=w[A];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return w[A]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function _(E){const b=E.uniforms;let M=0;const w=16;for(let A=0,L=b.length;A<L;A++){const y=Array.isArray(b[A])?b[A]:[b[A]];for(let S=0,P=y.length;S<P;S++){const O=y[S],z=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,W=z.length;Y<W;Y++){const X=z[Y],j=g(X),k=M%w,st=k%j.boundary,ut=k+st;M+=st,ut!==0&&w-ut<j.storage&&(M+=w-ut),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=j.storage}}}const R=M%w;return R>0&&(M+=w-R),E.__size=M,E.__cache={},this}function g(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:h,update:l,dispose:p}}class dg{constructor(t={}){const{canvas:e=Yf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let w=!1;this._outputColorSpace=je;let R=0,A=0,L=null,y=-1,S=null;const P=new de,O=new de;let z=null;const Y=new jt(0);let W=0,X=e.width,j=e.height,k=1,st=null,ut=null;const vt=new de(0,0,X,j),Bt=new de(0,0,X,j);let Qt=!1;const ie=new su;let Xt=!1,q=!1;const J=new Se,mt=new F,Lt=new de,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function Ee(){return L===null?k:1}let C=i;function se(x,D){return e.getContext(x,D)}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_h}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",Q,!1),C===null){const D="webgl2";if(C=se(D,x),C===null)throw se(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Nt,Pt,xt,re,Mt,Ft,ve,ue,T,v,U,V,Z,H,bt,it,yt,St,et,ft,Ct,Et,ht,Ut;function I(){Nt=new E0(C),Nt.init(),Et=new rg(C,Nt),Pt=new _0(C,Nt,t,Et),xt=new ig(C,Nt),Pt.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),re=new A0(C),Mt=new W_,Ft=new sg(C,Nt,xt,Mt,Pt,Et,re),ve=new v0(M),ue=new S0(M),T=new Ld(C),ht=new p0(C,T),v=new b0(C,T,re,ht),U=new R0(C,v,T,re),et=new w0(C,Pt,Ft),it=new g0(Mt),V=new V_(M,ve,ue,Nt,Pt,ht,it),Z=new ug(M,Mt),H=new q_,bt=new J_(Nt),St=new d0(M,ve,ue,xt,U,d,h),yt=new eg(M,U,Pt),Ut=new fg(C,re,Pt,xt),ft=new m0(C,Nt,re),Ct=new T0(C,Nt,re),re.programs=V.programs,M.capabilities=Pt,M.extensions=Nt,M.properties=Mt,M.renderLists=H,M.shadowMap=yt,M.state=xt,M.info=re}I();const nt=new lg(M,C);this.xr=nt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=Nt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Nt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(x){x!==void 0&&(k=x,this.setSize(X,j,!1))},this.getSize=function(x){return x.set(X,j)},this.setSize=function(x,D,G=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,j=D,e.width=Math.floor(x*k),e.height=Math.floor(D*k),G===!0&&(e.style.width=x+"px",e.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(X*k,j*k).floor()},this.setDrawingBufferSize=function(x,D,G){X=x,j=D,k=G,e.width=Math.floor(x*G),e.height=Math.floor(D*G),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(vt)},this.setViewport=function(x,D,G,B){x.isVector4?vt.set(x.x,x.y,x.z,x.w):vt.set(x,D,G,B),xt.viewport(P.copy(vt).multiplyScalar(k).round())},this.getScissor=function(x){return x.copy(Bt)},this.setScissor=function(x,D,G,B){x.isVector4?Bt.set(x.x,x.y,x.z,x.w):Bt.set(x,D,G,B),xt.scissor(O.copy(Bt).multiplyScalar(k).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(x){xt.setScissorTest(Qt=x)},this.setOpaqueSort=function(x){st=x},this.setTransparentSort=function(x){ut=x},this.getClearColor=function(x){return x.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,G=!0){let B=0;if(x){let N=!1;if(L!==null){const tt=L.texture.format;N=tt===Sh||tt===yh||tt===Mh}if(N){const tt=L.texture.type,lt=tt===Dn||tt===bi||tt===Fs||tt===Os||tt===vh||tt===xh,_t=St.getClearColor(),dt=St.getClearAlpha(),Rt=_t.r,It=_t.g,At=_t.b;lt?(_[0]=Rt,_[1]=It,_[2]=At,_[3]=dt,C.clearBufferuiv(C.COLOR,0,_)):(g[0]=Rt,g[1]=It,g[2]=At,g[3]=dt,C.clearBufferiv(C.COLOR,0,g))}else B|=C.COLOR_BUFFER_BIT}D&&(B|=C.DEPTH_BUFFER_BIT),G&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),St.dispose(),H.dispose(),bt.dispose(),Mt.dispose(),ve.dispose(),ue.dispose(),U.dispose(),ht.dispose(),Ut.dispose(),V.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",ln),nt.removeEventListener("sessionend",Hh),ai.stop()};function rt(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const x=re.autoReset,D=yt.enabled,G=yt.autoUpdate,B=yt.needsUpdate,N=yt.type;I(),re.autoReset=x,yt.enabled=D,yt.autoUpdate=G,yt.needsUpdate=B,yt.type=N}function Q(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $(x){const D=x.target;D.removeEventListener("dispose",$),gt(D)}function gt(x){Dt(x),Mt.remove(x)}function Dt(x){const D=Mt.get(x).programs;D!==void 0&&(D.forEach(function(G){V.releaseProgram(G)}),x.isShaderMaterial&&V.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,G,B,N,tt){D===null&&(D=Tt);const lt=N.isMesh&&N.matrixWorld.determinant()<0,_t=Ju(x,D,G,B,N);xt.setMaterial(B,lt);let dt=G.index,Rt=1;if(B.wireframe===!0){if(dt=v.getWireframeAttribute(G),dt===void 0)return;Rt=2}const It=G.drawRange,At=G.attributes.position;let zt=It.start*Rt,Kt=(It.start+It.count)*Rt;tt!==null&&(zt=Math.max(zt,tt.start*Rt),Kt=Math.min(Kt,(tt.start+tt.count)*Rt)),dt!==null?(zt=Math.max(zt,0),Kt=Math.min(Kt,dt.count)):At!=null&&(zt=Math.max(zt,0),Kt=Math.min(Kt,At.count));const le=Kt-zt;if(le<0||le===1/0)return;ht.setup(N,B,_t,G,dt);let ne,Jt=ft;if(dt!==null&&(ne=T.get(dt),Jt=Ct,Jt.setIndex(ne)),N.isMesh)B.wireframe===!0?(xt.setLineWidth(B.wireframeLinewidth*Ee()),Jt.setMode(C.LINES)):Jt.setMode(C.TRIANGLES);else if(N.isLine){let wt=B.linewidth;wt===void 0&&(wt=1),xt.setLineWidth(wt*Ee()),N.isLineSegments?Jt.setMode(C.LINES):N.isLineLoop?Jt.setMode(C.LINE_LOOP):Jt.setMode(C.LINE_STRIP)}else N.isPoints?Jt.setMode(C.POINTS):N.isSprite&&Jt.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const wt=N._multiDrawStarts,ae=N._multiDrawCounts,Vt=N._multiDrawCount,Be=dt?T.get(dt).bytesPerElement:1,Ci=Mt.get(B).currentProgram.getUniforms();for(let ze=0;ze<Vt;ze++)Ci.setValue(C,"_gl_DrawID",ze),Jt.render(wt[ze]/Be,ae[ze])}else if(N.isInstancedMesh)Jt.renderInstances(zt,le,N.count);else if(G.isInstancedBufferGeometry){const wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ae=Math.min(G.instanceCount,wt);Jt.renderInstances(zt,le,ae)}else Jt.render(zt,le)};function te(x,D,G){x.transparent===!0&&x.side===Cn&&x.forceSinglePass===!1?(x.side=Fe,x.needsUpdate=!0,sr(x,D,G),x.side=Qn,x.needsUpdate=!0,sr(x,D,G),x.side=Cn):sr(x,D,G)}this.compile=function(x,D,G=null){G===null&&(G=x),p=bt.get(G),p.init(D),b.push(p),G.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==G&&x.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const tt=N.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const _t=tt[lt];te(_t,G,N),B.add(_t)}else te(tt,G,N),B.add(tt)}),p=b.pop(),B},this.compileAsync=function(x,D,G=null){const B=this.compile(x,D,G);return new Promise(N=>{function tt(){if(B.forEach(function(lt){Mt.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){N(x);return}setTimeout(tt,10)}Nt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let qt=null;function Mn(x){qt&&qt(x)}function ln(){ai.stop()}function Hh(){ai.start()}const ai=new hu;ai.setAnimationLoop(Mn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(x){qt=x,nt.setAnimationLoop(x),x===null?ai.stop():ai.start()},nt.addEventListener("sessionstart",ln),nt.addEventListener("sessionend",Hh),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(D),D=nt.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,D,L),p=bt.get(x,b.length),p.init(D),b.push(p),J.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ie.setFromProjectionMatrix(J,fn,D.reversedDepth),q=this.localClippingEnabled,Xt=it.init(this.clippingPlanes,q),m=H.get(x,E.length),m.init(),E.push(m),nt.enabled===!0&&nt.isPresenting===!0){const tt=M.xr.getDepthSensingMesh();tt!==null&&Ea(tt,D,-1/0,M.sortObjects)}Ea(x,D,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(st,ut),Ht=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Ht&&St.addToRenderList(m,x),this.info.render.frame++,Xt===!0&&it.beginShadows();const G=p.state.shadowsArray;yt.render(G,x,D),Xt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(p.setupLights(),D.isArrayCamera){const tt=D.cameras;if(N.length>0)for(let lt=0,_t=tt.length;lt<_t;lt++){const dt=tt[lt];Wh(B,N,x,dt)}Ht&&St.render(x);for(let lt=0,_t=tt.length;lt<_t;lt++){const dt=tt[lt];Vh(m,x,dt,dt.viewport)}}else N.length>0&&Wh(B,N,x,D),Ht&&St.render(x),Vh(m,x,D);L!==null&&A===0&&(Ft.updateMultisampleRenderTarget(L),Ft.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(M,x,D),ht.resetDefaultState(),y=-1,S=null,b.pop(),b.length>0?(p=b[b.length-1],Xt===!0&&it.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ea(x,D,G,B){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ie.intersectsSprite(x)){B&&Lt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(J);const lt=U.update(x),_t=x.material;_t.visible&&m.push(x,lt,_t,G,Lt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ie.intersectsObject(x))){const lt=U.update(x),_t=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Lt.copy(x.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Lt.copy(lt.boundingSphere.center)),Lt.applyMatrix4(x.matrixWorld).applyMatrix4(J)),Array.isArray(_t)){const dt=lt.groups;for(let Rt=0,It=dt.length;Rt<It;Rt++){const At=dt[Rt],zt=_t[At.materialIndex];zt&&zt.visible&&m.push(x,lt,zt,G,Lt.z,At)}}else _t.visible&&m.push(x,lt,_t,G,Lt.z,null)}}const tt=x.children;for(let lt=0,_t=tt.length;lt<_t;lt++)Ea(tt[lt],D,G,B)}function Vh(x,D,G,B){const N=x.opaque,tt=x.transmissive,lt=x.transparent;p.setupLightsView(G),Xt===!0&&it.setGlobalState(M.clippingPlanes,G),B&&xt.viewport(P.copy(B)),N.length>0&&ir(N,D,G),tt.length>0&&ir(tt,D,G),lt.length>0&&ir(lt,D,G),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Wh(x,D,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Ti(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?qs:Dn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[B.id],lt=B.viewport||P;tt.setSize(lt.z*M.transmissionResolutionScale,lt.w*M.transmissionResolutionScale);const _t=M.getRenderTarget(),dt=M.getActiveCubeFace(),Rt=M.getActiveMipmapLevel();M.setRenderTarget(tt),M.getClearColor(Y),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),Ht&&St.render(G);const It=M.toneMapping;M.toneMapping=jn;const At=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),Xt===!0&&it.setGlobalState(M.clippingPlanes,B),ir(x,G,B),Ft.updateMultisampleRenderTarget(tt),Ft.updateRenderTargetMipmap(tt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Kt=0,le=D.length;Kt<le;Kt++){const ne=D[Kt],Jt=ne.object,wt=ne.geometry,ae=ne.material,Vt=ne.group;if(ae.side===Cn&&Jt.layers.test(B.layers)){const Be=ae.side;ae.side=Fe,ae.needsUpdate=!0,Xh(Jt,G,B,wt,ae,Vt),ae.side=Be,ae.needsUpdate=!0,zt=!0}}zt===!0&&(Ft.updateMultisampleRenderTarget(tt),Ft.updateRenderTargetMipmap(tt))}M.setRenderTarget(_t,dt,Rt),M.setClearColor(Y,W),At!==void 0&&(B.viewport=At),M.toneMapping=It}function ir(x,D,G){const B=D.isScene===!0?D.overrideMaterial:null;for(let N=0,tt=x.length;N<tt;N++){const lt=x[N],_t=lt.object,dt=lt.geometry,Rt=lt.group;let It=lt.material;It.allowOverride===!0&&B!==null&&(It=B),_t.layers.test(G.layers)&&Xh(_t,D,G,dt,It,Rt)}}function Xh(x,D,G,B,N,tt){x.onBeforeRender(M,D,G,B,N,tt),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(M,D,G,B,x,tt),N.transparent===!0&&N.side===Cn&&N.forceSinglePass===!1?(N.side=Fe,N.needsUpdate=!0,M.renderBufferDirect(G,D,B,N,x,tt),N.side=Qn,N.needsUpdate=!0,M.renderBufferDirect(G,D,B,N,x,tt),N.side=Cn):M.renderBufferDirect(G,D,B,N,x,tt),x.onAfterRender(M,D,G,B,N,tt)}function sr(x,D,G){D.isScene!==!0&&(D=Tt);const B=Mt.get(x),N=p.state.lights,tt=p.state.shadowsArray,lt=N.state.version,_t=V.getParameters(x,N.state,tt,D,G),dt=V.getProgramCacheKey(_t);let Rt=B.programs;B.environment=x.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(x.isMeshStandardMaterial?ue:ve).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Rt===void 0&&(x.addEventListener("dispose",$),Rt=new Map,B.programs=Rt);let It=Rt.get(dt);if(It!==void 0){if(B.currentProgram===It&&B.lightsStateVersion===lt)return $h(x,_t),It}else _t.uniforms=V.getUniforms(x),x.onBeforeCompile(_t,M),It=V.acquireProgram(_t,dt),Rt.set(dt,It),B.uniforms=_t.uniforms;const At=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(At.clippingPlanes=it.uniform),$h(x,_t),B.needsLights=tf(x),B.lightsStateVersion=lt,B.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=It,B.uniformsList=null,It}function qh(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=$r.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function $h(x,D){const G=Mt.get(x);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function Ju(x,D,G,B,N){D.isScene!==!0&&(D=Tt),Ft.resetTextureUnits();const tt=D.fog,lt=B.isMeshStandardMaterial?D.environment:null,_t=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:os,dt=(B.isMeshStandardMaterial?ue:ve).get(B.envMap||lt),Rt=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,It=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),At=!!G.morphAttributes.position,zt=!!G.morphAttributes.normal,Kt=!!G.morphAttributes.color;let le=jn;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(le=M.toneMapping);const ne=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Jt=ne!==void 0?ne.length:0,wt=Mt.get(B),ae=p.state.lights;if(Xt===!0&&(q===!0||x!==S)){const Re=x===S&&B.id===y;it.setState(B,x,Re)}let Vt=!1;B.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ae.state.version||wt.outputColorSpace!==_t||N.isBatchedMesh&&wt.batching===!1||!N.isBatchedMesh&&wt.batching===!0||N.isBatchedMesh&&wt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&wt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&wt.instancing===!1||!N.isInstancedMesh&&wt.instancing===!0||N.isSkinnedMesh&&wt.skinning===!1||!N.isSkinnedMesh&&wt.skinning===!0||N.isInstancedMesh&&wt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&wt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&wt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&wt.instancingMorph===!1&&N.morphTexture!==null||wt.envMap!==dt||B.fog===!0&&wt.fog!==tt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==it.numPlanes||wt.numIntersection!==it.numIntersection)||wt.vertexAlphas!==Rt||wt.vertexTangents!==It||wt.morphTargets!==At||wt.morphNormals!==zt||wt.morphColors!==Kt||wt.toneMapping!==le||wt.morphTargetsCount!==Jt)&&(Vt=!0):(Vt=!0,wt.__version=B.version);let Be=wt.currentProgram;Vt===!0&&(Be=sr(B,D,N));let Ci=!1,ze=!1,ps=!1;const oe=Be.getUniforms(),Xe=wt.uniforms;if(xt.useProgram(Be.program)&&(Ci=!0,ze=!0,ps=!0),B.id!==y&&(y=B.id,ze=!0),Ci||S!==x){xt.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),oe.setValue(C,"projectionMatrix",x.projectionMatrix),oe.setValue(C,"viewMatrix",x.matrixWorldInverse);const Le=oe.map.cameraPosition;Le!==void 0&&Le.setValue(C,mt.setFromMatrixPosition(x.matrixWorld)),Pt.logarithmicDepthBuffer&&oe.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,ze=!0,ps=!0)}if(N.isSkinnedMesh){oe.setOptional(C,N,"bindMatrix"),oe.setOptional(C,N,"bindMatrixInverse");const Re=N.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),oe.setValue(C,"boneTexture",Re.boneTexture,Ft))}N.isBatchedMesh&&(oe.setOptional(C,N,"batchingTexture"),oe.setValue(C,"batchingTexture",N._matricesTexture,Ft),oe.setOptional(C,N,"batchingIdTexture"),oe.setValue(C,"batchingIdTexture",N._indirectTexture,Ft),oe.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&oe.setValue(C,"batchingColorTexture",N._colorsTexture,Ft));const qe=G.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&et.update(N,G,Be),(ze||wt.receiveShadow!==N.receiveShadow)&&(wt.receiveShadow=N.receiveShadow,oe.setValue(C,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Xe.envMap.value=dt,Xe.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Xe.envMapIntensity.value=D.environmentIntensity),ze&&(oe.setValue(C,"toneMappingExposure",M.toneMappingExposure),wt.needsLights&&Qu(Xe,ps),tt&&B.fog===!0&&Z.refreshFogUniforms(Xe,tt),Z.refreshMaterialUniforms(Xe,B,k,j,p.state.transmissionRenderTarget[x.id]),$r.upload(C,qh(wt),Xe,Ft)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&($r.upload(C,qh(wt),Xe,Ft),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(C,"center",N.center),oe.setValue(C,"modelViewMatrix",N.modelViewMatrix),oe.setValue(C,"normalMatrix",N.normalMatrix),oe.setValue(C,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Re=B.uniformsGroups;for(let Le=0,ba=Re.length;Le<ba;Le++){const oi=Re[Le];Ut.update(oi,Be),Ut.bind(oi,Be)}}return Be}function Qu(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function tf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,D,G){const B=Mt.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Mt.get(x.texture).__webglTexture=D,Mt.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const G=Mt.get(x);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0};const ef=C.createFramebuffer();this.setRenderTarget=function(x,D=0,G=0){L=x,R=D,A=G;let B=!0,N=null,tt=!1,lt=!1;if(x){const dt=Mt.get(x);if(dt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(C.FRAMEBUFFER,null),B=!1;else if(dt.__webglFramebuffer===void 0)Ft.setupRenderTarget(x);else if(dt.__hasExternalTextures)Ft.rebindTextures(x,Mt.get(x.texture).__webglTexture,Mt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const At=x.depthTexture;if(dt.__boundDepthTexture!==At){if(At!==null&&Mt.has(At)&&(x.width!==At.image.width||x.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(x)}}const Rt=x.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const It=Mt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(It[D])?N=It[D][G]:N=It[D],tt=!0):x.samples>0&&Ft.useMultisampledRTT(x)===!1?N=Mt.get(x).__webglMultisampledFramebuffer:Array.isArray(It)?N=It[G]:N=It,P.copy(x.viewport),O.copy(x.scissor),z=x.scissorTest}else P.copy(vt).multiplyScalar(k).floor(),O.copy(Bt).multiplyScalar(k).floor(),z=Qt;if(G!==0&&(N=ef),xt.bindFramebuffer(C.FRAMEBUFFER,N)&&B&&xt.drawBuffers(x,N),xt.viewport(P),xt.scissor(O),xt.setScissorTest(z),tt){const dt=Mt.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,dt.__webglTexture,G)}else if(lt){const dt=D;for(let Rt=0;Rt<x.textures.length;Rt++){const It=Mt.get(x.textures[Rt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Rt,It.__webglTexture,G,dt)}}else if(x!==null&&G!==0){const dt=Mt.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,dt.__webglTexture,G)}y=-1},this.readRenderTargetPixels=function(x,D,G,B,N,tt,lt,_t=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=Mt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&lt!==void 0&&(dt=dt[lt]),dt){xt.bindFramebuffer(C.FRAMEBUFFER,dt);try{const Rt=x.textures[_t],It=Rt.format,At=Rt.type;if(!Pt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-B&&G>=0&&G<=x.height-N&&(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_t),C.readPixels(D,G,B,N,Et.convert(It),Et.convert(At),tt))}finally{const Rt=L!==null?Mt.get(L).__webglFramebuffer:null;xt.bindFramebuffer(C.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(x,D,G,B,N,tt,lt,_t=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=Mt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&lt!==void 0&&(dt=dt[lt]),dt)if(D>=0&&D<=x.width-B&&G>=0&&G<=x.height-N){xt.bindFramebuffer(C.FRAMEBUFFER,dt);const Rt=x.textures[_t],It=Rt.format,At=Rt.type;if(!Pt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const zt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,zt),C.bufferData(C.PIXEL_PACK_BUFFER,tt.byteLength,C.STREAM_READ),x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_t),C.readPixels(D,G,B,N,Et.convert(It),Et.convert(At),0);const Kt=L!==null?Mt.get(L).__webglFramebuffer:null;xt.bindFramebuffer(C.FRAMEBUFFER,Kt);const le=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await jf(C,le,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,zt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,tt),C.deleteBuffer(zt),C.deleteSync(le),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,G=0){const B=Math.pow(2,-G),N=Math.floor(x.image.width*B),tt=Math.floor(x.image.height*B),lt=D!==null?D.x:0,_t=D!==null?D.y:0;Ft.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,lt,_t,N,tt),xt.unbindTexture()};const nf=C.createFramebuffer(),sf=C.createFramebuffer();this.copyTextureToTexture=function(x,D,G=null,B=null,N=0,tt=null){tt===null&&(N!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=N,N=0):tt=0);let lt,_t,dt,Rt,It,At,zt,Kt,le;const ne=x.isCompressedTexture?x.mipmaps[tt]:x.image;if(G!==null)lt=G.max.x-G.min.x,_t=G.max.y-G.min.y,dt=G.isBox3?G.max.z-G.min.z:1,Rt=G.min.x,It=G.min.y,At=G.isBox3?G.min.z:0;else{const qe=Math.pow(2,-N);lt=Math.floor(ne.width*qe),_t=Math.floor(ne.height*qe),x.isDataArrayTexture?dt=ne.depth:x.isData3DTexture?dt=Math.floor(ne.depth*qe):dt=1,Rt=0,It=0,At=0}B!==null?(zt=B.x,Kt=B.y,le=B.z):(zt=0,Kt=0,le=0);const Jt=Et.convert(D.format),wt=Et.convert(D.type);let ae;D.isData3DTexture?(Ft.setTexture3D(D,0),ae=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ft.setTexture2DArray(D,0),ae=C.TEXTURE_2D_ARRAY):(Ft.setTexture2D(D,0),ae=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const Vt=C.getParameter(C.UNPACK_ROW_LENGTH),Be=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ci=C.getParameter(C.UNPACK_SKIP_PIXELS),ze=C.getParameter(C.UNPACK_SKIP_ROWS),ps=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ne.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ne.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Rt),C.pixelStorei(C.UNPACK_SKIP_ROWS,It),C.pixelStorei(C.UNPACK_SKIP_IMAGES,At);const oe=x.isDataArrayTexture||x.isData3DTexture,Xe=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const qe=Mt.get(x),Re=Mt.get(D),Le=Mt.get(qe.__renderTarget),ba=Mt.get(Re.__renderTarget);xt.bindFramebuffer(C.READ_FRAMEBUFFER,Le.__webglFramebuffer),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,ba.__webglFramebuffer);for(let oi=0;oi<dt;oi++)oe&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.get(x).__webglTexture,N,At+oi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.get(D).__webglTexture,tt,le+oi)),C.blitFramebuffer(Rt,It,lt,_t,zt,Kt,lt,_t,C.DEPTH_BUFFER_BIT,C.NEAREST);xt.bindFramebuffer(C.READ_FRAMEBUFFER,null),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||Mt.has(x)){const qe=Mt.get(x),Re=Mt.get(D);xt.bindFramebuffer(C.READ_FRAMEBUFFER,nf),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,sf);for(let Le=0;Le<dt;Le++)oe?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,qe.__webglTexture,N,At+Le):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,qe.__webglTexture,N),Xe?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Re.__webglTexture,tt,le+Le):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Re.__webglTexture,tt),N!==0?C.blitFramebuffer(Rt,It,lt,_t,zt,Kt,lt,_t,C.COLOR_BUFFER_BIT,C.NEAREST):Xe?C.copyTexSubImage3D(ae,tt,zt,Kt,le+Le,Rt,It,lt,_t):C.copyTexSubImage2D(ae,tt,zt,Kt,Rt,It,lt,_t);xt.bindFramebuffer(C.READ_FRAMEBUFFER,null),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Xe?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(ae,tt,zt,Kt,le,lt,_t,dt,Jt,wt,ne.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(ae,tt,zt,Kt,le,lt,_t,dt,Jt,ne.data):C.texSubImage3D(ae,tt,zt,Kt,le,lt,_t,dt,Jt,wt,ne):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,tt,zt,Kt,lt,_t,Jt,wt,ne.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,tt,zt,Kt,ne.width,ne.height,Jt,ne.data):C.texSubImage2D(C.TEXTURE_2D,tt,zt,Kt,lt,_t,Jt,wt,ne);C.pixelStorei(C.UNPACK_ROW_LENGTH,Vt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Be),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ci),C.pixelStorei(C.UNPACK_SKIP_ROWS,ze),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ps),tt===0&&D.generateMipmaps&&C.generateMipmap(ae),xt.unbindTexture()},this.initRenderTarget=function(x){Mt.get(x).__webglFramebuffer===void 0&&Ft.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ft.setTextureCube(x,0):x.isData3DTexture?Ft.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ft.setTexture2DArray(x,0):Ft.setTexture2D(x,0),xt.unbindTexture()},this.resetState=function(){R=0,A=0,L=null,xt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const du="175",pu=300,$l=1e3,Lr=1001,Yl=1002,rh=1006,pg=1008,mg=1009,_g=1023,gg="",Dr=2e3,jl=2001;class Ah{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kl=1234567;const mu=Math.PI/180,_u=180/Math.PI;function pa(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]).toLowerCase()}function ce(n,t,e){return Math.max(t,Math.min(e,n))}function gu(n,t){return(n%t+t)%t}function vg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function xg(n,t,e){return n!==t?(e-n)/(t-n):0}function vu(n,t,e){return(1-e)*n+e*t}function Mg(n,t,e,i){return vu(n,t,1-Math.exp(-e*i))}function yg(n,t=1){return t-Math.abs(gu(n,t*2)-t)}function Sg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Eg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function bg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Tg(n,t){return n+Math.random()*(t-n)}function Ag(n){return n*(.5-Math.random())}function wg(n){n!==void 0&&(Kl=n);let t=Kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rg(n){return n*mu}function Cg(n){return n*_u}function Pg(n){return(n&n-1)===0&&n!==0}function Ig(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dg(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),h=o(e/2),l=r((t+i)/2),u=o((t+i)/2),c=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*u,h*c,h*f,a*l);break;case"YZY":n.set(h*f,a*u,h*c,a*l);break;case"ZXZ":n.set(h*c,h*f,a*u,a*l);break;case"XZX":n.set(a*u,h*_,h*d,a*l);break;case"YXY":n.set(h*d,a*u,h*_,a*l);break;case"ZYZ":n.set(h*_,h*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ng(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ug(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const We={DEG2RAD:mu,RAD2DEG:_u,generateUUID:pa,clamp:ce,euclideanModulo:gu,mapLinear:vg,inverseLerp:xg,lerp:vu,damp:Mg,pingpong:yg,smoothstep:Sg,smootherstep:Eg,randInt:bg,randFloat:Tg,randFloatSpread:Ag,seededRandom:wg,degToRad:Rg,radToDeg:Cg,isPowerOfTwo:Pg,ceilPowerOfTwo:Ig,floorPowerOfTwo:Lg,setQuaternionFromProperEuler:Dg,normalize:Ug,denormalize:Ng};class Ps{constructor(t=0,e=0){Ps.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zs{constructor(t,e,i,s,r,o,a,h,l){Zs.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,h,l)}set(t,e,i,s,r,o,a,h,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=h,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],h=i[6],l=i[1],u=i[4],c=i[7],f=i[2],d=i[5],_=i[8],g=s[0],m=s[3],p=s[6],E=s[1],b=s[4],M=s[7],w=s[2],R=s[5],A=s[8];return r[0]=o*g+a*E+h*w,r[3]=o*m+a*b+h*R,r[6]=o*p+a*M+h*A,r[1]=l*g+u*E+c*w,r[4]=l*m+u*b+c*R,r[7]=l*p+u*M+c*A,r[2]=f*g+d*E+_*w,r[5]=f*m+d*b+_*R,r[8]=f*p+d*M+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*h+s*r*l-s*o*h}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],u=t[8],c=u*o-a*l,f=a*h-u*r,d=l*r-o*h,_=e*c+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=c*g,t[1]=(s*l-u*i)*g,t[2]=(a*i-s*o)*g,t[3]=f*g,t[4]=(u*e-s*h)*g,t[5]=(s*r-a*e)*g,t[6]=d*g,t[7]=(i*h-l*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const h=Math.cos(r),l=Math.sin(r);return this.set(i*h,i*l,-i*(h*o+l*a)+o+t,-s*l,s*h,-s*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(io.makeScale(t,e)),this}rotate(t){return this.premultiply(io.makeRotation(-t)),this}translate(t,e){return this.premultiply(io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const io=new Zs;function Zl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function so(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}let Wi;class Fg{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Wi===void 0&&(Wi=Zl("canvas")),Wi.width=t.width,Wi.height=t.height;const s=Wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Wi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zl("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=so(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(so(e[i]/255)*255):e[i]=so(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Og=0;class Gg{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=pa(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ro(s[o].image)):r.push(ro(s[o]))}else r=ro(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ro(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bg=0;class Kn extends Ah{constructor(t=Kn.DEFAULT_IMAGE,e=Kn.DEFAULT_MAPPING,i=Lr,s=Lr,r=rh,o=pg,a=_g,h=mg,l=Kn.DEFAULT_ANISOTROPY,u=gg){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=pa(),this.name="",this.source=new Gg(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new Ps(0,0),this.repeat=new Ps(1,1),this.center=new Ps(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zs,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $l:t.x=t.x-Math.floor(t.x);break;case Lr:t.x=t.x<0?0:1;break;case Yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $l:t.y=t.y-Math.floor(t.y);break;case Lr:t.y=t.y<0?0:1;break;case Yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=pu;Kn.DEFAULT_ANISOTROPY=1;class si{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let h=i[s+0],l=i[s+1],u=i[s+2],c=i[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=h,t[e+1]=l,t[e+2]=u,t[e+3]=c;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(c!==g||h!==f||l!==d||u!==_){let m=1-a;const p=h*f+l*d+u*_+c*g,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const w=Math.sqrt(b),R=Math.atan2(w,p*E);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}const M=a*E;if(h=h*m+f*M,l=l*m+d*M,u=u*m+_*M,c=c*m+g*M,m===1-a){const w=1/Math.sqrt(h*h+l*l+u*u+c*c);h*=w,l*=w,u*=w,c*=w}}t[e]=h,t[e+1]=l,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],h=i[s+1],l=i[s+2],u=i[s+3],c=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+u*c+h*d-l*f,t[e+1]=h*_+u*f+l*c-a*d,t[e+2]=l*_+u*d+a*f-h*c,t[e+3]=u*_-a*c-h*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(i/2),u=a(s/2),c=a(r/2),f=h(i/2),d=h(s/2),_=h(r/2);switch(o){case"XYZ":this._x=f*u*c+l*d*_,this._y=l*d*c-f*u*_,this._z=l*u*_+f*d*c,this._w=l*u*c-f*d*_;break;case"YXZ":this._x=f*u*c+l*d*_,this._y=l*d*c-f*u*_,this._z=l*u*_-f*d*c,this._w=l*u*c+f*d*_;break;case"ZXY":this._x=f*u*c-l*d*_,this._y=l*d*c+f*u*_,this._z=l*u*_+f*d*c,this._w=l*u*c-f*d*_;break;case"ZYX":this._x=f*u*c-l*d*_,this._y=l*d*c+f*u*_,this._z=l*u*_-f*d*c,this._w=l*u*c+f*d*_;break;case"YZX":this._x=f*u*c+l*d*_,this._y=l*d*c+f*u*_,this._z=l*u*_-f*d*c,this._w=l*u*c-f*d*_;break;case"XZY":this._x=f*u*c-l*d*_,this._y=l*d*c-f*u*_,this._z=l*u*_+f*d*c,this._w=l*u*c+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],h=e[9],l=e[2],u=e[6],c=e[10],f=i+a+c;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-h)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>c){const d=2*Math.sqrt(1+i-a-c);this._w=(u-h)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>c){const d=2*Math.sqrt(1+a-i-c);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(h+u)/d}else{const d=2*Math.sqrt(1+c-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(h+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,h=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*h,this._y=s*u+o*h+r*a-i*l,this._z=r*u+o*l+i*h-s*a,this._w=o*u-i*a-s*h-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const h=1-a*a;if(h<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(h),u=Math.atan2(l,a),c=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*c+this._w*f,this._x=i*c+this._x*f,this._y=s*c+this._y*f,this._z=r*c+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class me{constructor(t=0,e=0,i=0){me.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),c=2*(r*i-o*e);return this.x=e+h*l+o*c-a*u,this.y=i+h*u+a*l-r*c,this.z=s+h*c+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=s*h-r*a,this.y=r*o-i*h,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new me,Jl=new si;class Ln{constructor(t,e,i,s,r,o,a,h,l,u,c,f,d,_,g,m){Ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,h,l,u,c,f,d,_,g,m)}set(t,e,i,s,r,o,a,h,l,u,c,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=h,p[2]=l,p[6]=u,p[10]=c,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ln().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),h=Math.cos(s),l=Math.sin(s),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*c,_=a*u,g=a*c;e[0]=h*u,e[4]=-h*c,e[8]=l,e[1]=d+_*l,e[5]=f-g*l,e[9]=-a*h,e[2]=g-f*l,e[6]=_+d*l,e[10]=o*h}else if(t.order==="YXZ"){const f=h*u,d=h*c,_=l*u,g=l*c;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*c,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*h}else if(t.order==="ZXY"){const f=h*u,d=h*c,_=l*u,g=l*c;e[0]=f-g*a,e[4]=-o*c,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const f=o*u,d=o*c,_=a*u,g=a*c;e[0]=h*u,e[4]=_*l-d,e[8]=f*l+g,e[1]=h*c,e[5]=g*l+f,e[9]=d*l-_,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const f=o*h,d=o*l,_=a*h,g=a*l;e[0]=h*u,e[4]=g-f*c,e[8]=_*c+d,e[1]=c,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*c+_,e[10]=f-g*c}else if(t.order==="XZY"){const f=o*h,d=o*l,_=a*h,g=a*l;e[0]=h*u,e[4]=-c,e[8]=l*u,e[1]=f*c+g,e[5]=o*u,e[9]=d*c-_,e[2]=_*c-d,e[6]=a*u,e[10]=g*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zg,t,kg)}lookAt(t,e,i){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Wn.crossVectors(i,Ve),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Wn.crossVectors(i,Ve)),Wn.normalize(),Nr.crossVectors(Ve,Wn),s[0]=Wn.x,s[4]=Nr.x,s[8]=Ve.x,s[1]=Wn.y,s[5]=Nr.y,s[9]=Ve.y,s[2]=Wn.z,s[6]=Nr.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],h=i[8],l=i[12],u=i[1],c=i[5],f=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],E=i[3],b=i[7],M=i[11],w=i[15],R=s[0],A=s[4],L=s[8],y=s[12],S=s[1],P=s[5],O=s[9],z=s[13],Y=s[2],W=s[6],X=s[10],j=s[14],k=s[3],st=s[7],ut=s[11],vt=s[15];return r[0]=o*R+a*S+h*Y+l*k,r[4]=o*A+a*P+h*W+l*st,r[8]=o*L+a*O+h*X+l*ut,r[12]=o*y+a*z+h*j+l*vt,r[1]=u*R+c*S+f*Y+d*k,r[5]=u*A+c*P+f*W+d*st,r[9]=u*L+c*O+f*X+d*ut,r[13]=u*y+c*z+f*j+d*vt,r[2]=_*R+g*S+m*Y+p*k,r[6]=_*A+g*P+m*W+p*st,r[10]=_*L+g*O+m*X+p*ut,r[14]=_*y+g*z+m*j+p*vt,r[3]=E*R+b*S+M*Y+w*k,r[7]=E*A+b*P+M*W+w*st,r[11]=E*L+b*O+M*X+w*ut,r[15]=E*y+b*z+M*j+w*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],h=t[9],l=t[13],u=t[2],c=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*h*c-s*l*c-r*a*f+i*l*f+s*a*d-i*h*d)+g*(+e*h*d-e*l*f+r*o*f-s*o*d+s*l*u-r*h*u)+m*(+e*l*c-e*a*d-r*o*c+i*o*d+r*a*u-i*l*u)+p*(-s*a*u-e*h*c+e*a*f+s*o*c-i*o*f+i*h*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],u=t[8],c=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],E=c*m*l-g*f*l+g*h*d-a*m*d-c*h*p+a*f*p,b=_*f*l-u*m*l-_*h*d+o*m*d+u*h*p-o*f*p,M=u*g*l-_*c*l+_*a*d-o*g*d-u*a*p+o*c*p,w=_*c*h-u*g*h-_*a*f+o*g*f+u*a*m-o*c*m,R=e*E+i*b+s*M+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=E*A,t[1]=(g*f*r-c*m*r-g*s*d+i*m*d+c*s*p-i*f*p)*A,t[2]=(a*m*r-g*h*r+g*s*l-i*m*l-a*s*p+i*h*p)*A,t[3]=(c*h*r-a*f*r-c*s*l+i*f*l+a*s*d-i*h*d)*A,t[4]=b*A,t[5]=(u*m*r-_*f*r+_*s*d-e*m*d-u*s*p+e*f*p)*A,t[6]=(_*h*r-o*m*r-_*s*l+e*m*l+o*s*p-e*h*p)*A,t[7]=(o*f*r-u*h*r+u*s*l-e*f*l-o*s*d+e*h*d)*A,t[8]=M*A,t[9]=(_*c*r-u*g*r-_*i*d+e*g*d+u*i*p-e*c*p)*A,t[10]=(o*g*r-_*a*r+_*i*l-e*g*l-o*i*p+e*a*p)*A,t[11]=(u*a*r-o*c*r-u*i*l+e*c*l+o*i*d-e*a*d)*A,t[12]=w*A,t[13]=(u*g*s-_*c*s+_*i*f-e*g*f-u*i*m+e*c*m)*A,t[14]=(_*a*s-o*g*s-_*i*h+e*g*h+o*i*m-e*a*m)*A,t[15]=(o*c*s-u*a*s+u*i*h-e*c*h-o*i*f+e*a*f)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,h=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*h,l*h+s*a,0,l*a+s*h,u*a+i,u*h-s*o,0,l*h-s*a,u*h+s*o,r*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,l=r+r,u=o+o,c=a+a,f=r*l,d=r*u,_=r*c,g=o*u,m=o*c,p=a*c,E=h*l,b=h*u,M=h*c,w=i.x,R=i.y,A=i.z;return s[0]=(1-(g+p))*w,s[1]=(d+M)*w,s[2]=(_-b)*w,s[3]=0,s[4]=(d-M)*R,s[5]=(1-(f+p))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(_+b)*A,s[9]=(m-E)*A,s[10]=(1-(f+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Xi.set(s[0],s[1],s[2]).length();const o=Xi.set(s[4],s[5],s[6]).length(),a=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const l=1/r,u=1/o,c=1/a;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=c,nn.elements[9]*=c,nn.elements[10]*=c,e.setFromRotationMatrix(nn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Dr){const h=this.elements,l=2*r/(e-t),u=2*r/(i-s),c=(e+t)/(e-t),f=(i+s)/(i-s);let d,_;if(a===Dr)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===jl)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=u,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Dr){const h=this.elements,l=1/(e-t),u=1/(i-s),c=1/(o-r),f=(e+t)*l,d=(i+s)*u;let _,g;if(a===Dr)_=(o+r)*c,g=-2*c;else if(a===jl)_=r*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=2*l,h[4]=0,h[8]=0,h[12]=-f,h[1]=0,h[5]=2*u,h[9]=0,h[13]=-d,h[2]=0,h[6]=0,h[10]=g,h[14]=-_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Xi=new me,nn=new Ln,zg=new me(0,0,0),kg=new me(1,1,1),Wn=new me,Nr=new me,Ve=new me,Ql=new Ln,tc=new si;class ei{constructor(t=0,e=0,i=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],h=s[1],l=s[5],u=s[9],c=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Hg{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vg=0;const ec=new me,qi=new si,An=new Ln,Ur=new me,ys=new me,Wg=new me,Xg=new si,nc=new me(1,0,0),ic=new me(0,1,0),sc=new me(0,0,1),rc={type:"added"},qg={type:"removed"},$i={type:"childadded",child:null},oo={type:"childremoved",child:null};class Zn extends Ah{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const t=new me,e=new ei,i=new si,s=new me(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ln},normalMatrix:{value:new Zs}}),this.matrix=new Ln,this.matrixWorld=new Ln,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(sc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ur.copy(t):Ur.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(ys,Ur,this.up):An.lookAt(Ur,ys,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(An),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rc),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qg),oo.child=t,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rc),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,Wg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Xg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let l=0,u=h.length;l<u;l++){const c=h[l];r(t.shapes,c)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(r(t.materials,this.material[h]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];s.animations.push(r(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),l=o(t.textures),u=o(t.images),c=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),c.length>0&&(i.shapes=c),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const h=[];for(const l in a){const u=a[l];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Zn.DEFAULT_UP=new me(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $g extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Yg extends Kn{constructor(t,e,i,s,r=rh,o=rh,a,h,l){super(t,e,i,s,r,o,a,h,l),this.isVideoTexture=!0,this.generateMipmaps=!1;const u=this;function c(){u.needsUpdate=!0,t.requestVideoFrameCallback(c)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(c)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);class jg{constructor(){this.EARTH=4007501668e-2,this.HALF_EARTH=2003750834e-2}project(t,e){return[this.#t(t),this.#l(e)]}unproject(t){return[this.#e(t[0]),this.#s(t[1])]}#t(t){return t/180*this.HALF_EARTH}#l(t){var e=Math.log(Math.tan((90+t)*Math.PI/360))/(Math.PI/180);return e*this.HALF_EARTH/180}#e(t){return t/this.HALF_EARTH*180}#s(t){var e=t/this.HALF_EARTH*180;return e=180/Math.PI*(2*Math.atan(Math.exp(e*Math.PI/180))-Math.PI/2),e}getID(){return"epsg:3857"}}class wh{constructor(){this.eventHandlers={}}on(t,e){this.eventHandlers[t]=e}emit(t,...e){this.eventHandlers[t]?.call(this,...e)}}class Kg extends wh{#t;#l;#e;#s;#h;#r;#n;#o;#a;#i;constructor(t,e,i={},s=null){super(),this.scene=t,this.camera=e,this.#t=new jg,this.#e=null,this.#s=0,this.#h=100,this.#r=null,this.setGpsOptions(i),this.#n=null,this.#o=0,this.#a=0,this.#i=s}setProjection(t){this.#t=t}setGpsOptions(t={}){t.gpsMinDistance!==void 0&&(this.#s=t.gpsMinDistance),t.gpsMinAccuracy!==void 0&&(this.#h=t.gpsMinAccuracy)}async startGps(){if(this.#i){const t=await(await this.#i.sendData("/gps/start",{gpsMinDistance:this.#s,gpsMinAccuracy:this.#h})).json();this.#a=t.session}return this.#r===null?(this.#r=navigator.geolocation.watchPosition(t=>{this.#u(t)},t=>{this.emit("gpserror",t)},{enableHighAccuracy:!0}),!0):!1}stopGps(){return this.#r!==null?(navigator.geolocation.clearWatch(this.#r),this.#r=null,!0):!1}fakeGps(t,e,i=null,s=0){i!==null&&this.setElevation(i),this.#u({coords:{longitude:t,latitude:e,accuracy:s}})}lonLatToWorldCoords(t,e){const i=this.#t.project(t,e);if(this.#n)i[0]-=this.#n[0],i[1]-=this.#n[1];else throw"No initial position determined";return[i[0],-i[1]]}add(t,e,i,s,r={}){t.properties=r,this.#c(t,e,i,s),this.scene.add(t),this.#i?.sendData("/object/new",{position:t.position,x:t.position.x,z:t.position.z,session:this.#a,properties:r})}#c(t,e,i,s){const r=this.lonLatToWorldCoords(e,i);s!==void 0&&(t.position.y=s),[t.position.x,t.position.z]=r}setElevation(t){this.camera.position.y=t}#f(t,e){this.#n=this.#t.project(t,e)}#u(t){let e=Number.MAX_VALUE;this.#o++,this.#i?.sendData("/gps/new",{gpsCount:this.#o,lat:t.coords.latitude,lon:t.coords.longitude,acc:t.coords.accuracy,session:this.#a}),t.coords.accuracy<=this.#h&&(this.#e===null?this.#e={latitude:t.coords.latitude,longitude:t.coords.longitude}:e=this.#d(this.#e,t.coords),e>=this.#s&&(this.#e.longitude=t.coords.longitude,this.#e.latitude=t.coords.latitude,this.#n||(this.#f(t.coords.longitude,t.coords.latitude),this.#i?.sendData("/worldorigin/new",{gpsCount:this.#o,lat:t.coords.latitude,lon:t.coords.longitude,session:this.#a,initialPosition:this.#n})),this.#c(this.camera,t.coords.longitude,t.coords.latitude),this.#i?.sendData("/gps/accepted",{gpsCount:this.#o,cameraX:this.camera.position.x,cameraZ:this.camera.position.z,session:this.#a,distMoved:e}),this.emit("gpsupdate",{position:t,distMoved:e})))}#d(t,e){const i=We.degToRad(e.longitude-t.longitude),s=We.degToRad(e.latitude-t.latitude),r=Math.sin(s/2)*Math.sin(s/2)+Math.cos(We.degToRad(t.latitude))*Math.cos(We.degToRad(e.latitude))*(Math.sin(i/2)*Math.sin(i/2));return 2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))*6371e3}}class Zg extends wh{#t;constructor(t={video:{facingMode:"environment"}},e){super(),this.sceneWebcam=new $g,e?this.#t=document.querySelector(e):(this.#t=document.createElement("video"),this.#t.setAttribute("autoplay",!0),this.#t.setAttribute("playsinline",!0),this.#t.style.display="none",document.body.appendChild(this.#t)),this.texture=new Yg(this.#t),navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(t).then(i=>{this.#t.addEventListener("loadedmetadata",()=>{this.#t.setAttribute("width",this.#t.videoWidth),this.#t.setAttribute("height",this.#t.videoHeight),this.#t.play(),this.emit("webcamstarted",{texture:this.texture})}),this.#t.srcObject=i}).catch(i=>{this.emit("webcamerror",{code:i.name,message:i.message})}):this.emit("webcamerror",{code:"LOCAR_NO_MEDIA_DEVICES_API",message:"Media devices API not supported"})}dispose(){this.texture.dispose()}}const Ss=navigator.userAgent.match(/iPhone|iPad|iPod/i)||/Macintosh/i.test(navigator.userAgent)&&navigator.maxTouchPoints!=null&&navigator.maxTouchPoints>1,Jg=new me(0,0,1),ac=new ei,Qg=new si,t1=new si(-Math.sqrt(.5),0,0,Math.sqrt(.5));class e1 extends Ah{constructor(t,e={}){super(),this.eventEmitter=new wh;const i=this;this.object=t,this.object.rotation.reorder("YXZ"),this.enabled=!0,this.deviceOrientation=null,this.screenOrientation=0,this.alphaOffset=0,this.orientationOffset=0,this.initialOffset=null,this.lastCompassY=void 0,this.lastOrientation=null,this.TWO_PI=2*Math.PI,this.HALF_PI=.5*Math.PI,this.orientationChangeEventName="ondeviceorientationabsolute"in window?"deviceorientationabsolute":"deviceorientation",console.log("Device Orientation Event Name:",this.orientationChangeEventName),this.smoothingFactor=e.smoothingFactor||1,this.enablePermissionDialog=e.enablePermissionDialog??!0;const s=function({alpha:a,beta:h,gamma:l,webkitCompassHeading:u}){if(Ss){const c=360-u;i.alphaOffset=We.degToRad(c-a),i.deviceOrientation={alpha:a,beta:h,gamma:l,webkitCompassHeading:u}}else a<0&&(a+=360),i.deviceOrientation={alpha:a,beta:h,gamma:l};window.dispatchEvent(new CustomEvent("camera-rotation-change",{detail:{cameraRotation:t.rotation}}))},r=function(){i.screenOrientation=window.orientation||0,Ss&&(i.screenOrientation===90?i.orientationOffset=-i.HALF_PI:i.screenOrientation===-90?i.orientationOffset=i.HALF_PI:i.orientationOffset=0)},o=function(a,h,l,u,c){ac.set(l,h,-u,"YXZ"),a.setFromEuler(ac),a.multiply(t1),a.multiply(Qg.setFromAxisAngle(Jg,-c))};this.connect=function(){r(),window.addEventListener("orientationchange",r),window.addEventListener(i.orientationChangeEventName,s),i.enabled=!0},this.disconnect=function(){window.removeEventListener("orientationchange",r),window.removeEventListener(i.orientationChangeEventName,s),i.enabled=!1,i.initialOffset=!1,i.deviceOrientation=null},this.requestOrientationPermissions=function(){window.DeviceOrientationEvent!==void 0&&typeof window.DeviceOrientationEvent.requestPermission=="function"?window.DeviceOrientationEvent.requestPermission().then(a=>{a==="granted"?this.eventEmitter.emit("deviceorientationgranted",{target:this}):this.eventEmitter.emit("deviceorientationerror",{code:"LOCAR_DEVICE_ORIENTATION_PERMISSION_DENIED",message:"Permission for device orientation denied - AR will not work correctly"})}).catch(function(a){this.eventEmitter.emit("deviceorientationerror",{code:"LOCAR_DEVICE_ORIENTATION_PERMISSION_FAILED",message:"Permission request for device orientation failed - AR will not work correctly"})}):this.eventEmitter.emit("deviceorientationerror",{code:"LOCAR_DEVICE_ORIENTATION_INTERNAL_ERROR",message:"Internal error: no requestPermission() found although requestOrientationPermissions() was called - please raise an issue on GitHub"})},this.update=function({theta:a=0}={theta:0}){if(i.enabled===!1)return;const h=i.deviceOrientation;if(h){let l=h.alpha?We.degToRad(h.alpha)+i.alphaOffset:0,u=h.beta?We.degToRad(h.beta):0,c=h.gamma?We.degToRad(h.gamma):0;const f=i.screenOrientation?We.degToRad(i.screenOrientation):0;if(i.smoothingFactor<1){if(i.lastOrientation){const d=i.smoothingFactor;l=i._getSmoothedAngle(l,i.lastOrientation.alpha,d),u=i._getSmoothedAngle(u+Math.PI,i.lastOrientation.beta,d),c=i._getSmoothedAngle(c+i.HALF_PI,i.lastOrientation.gamma,d,Math.PI)}else u+=Math.PI,c+=i.HALF_PI;i.lastOrientation={alpha:l,beta:u,gamma:c}}if(Ss){const d=new si;o(d,l,i.smoothingFactor<1?u-Math.PI:u,i.smoothingFactor<1?c-Math.PI/2:c,f);const _=new ei().setFromQuaternion(d,"YXZ");let g=We.degToRad(360-h.webkitCompassHeading);i.smoothingFactor<1&&i.lastCompassY!==void 0&&(g=i._getSmoothedAngle(g,i.lastCompassY,i.smoothingFactor)),i.lastCompassY=g,_.y=g+(i.orientationOffset||0),d.setFromEuler(_),i.object.quaternion.copy(d)}else o(i.object.quaternion,Ss?l+i.alphaOffset:l,i.smoothingFactor<1?u-Math.PI:u,i.smoothingFactor<1?c-Math.PI/2:c,f)}},this.getCorrectedHeading=function(){const{deviceOrientation:a}=i;if(!a)return 0;let h=0;return Ss?(h=360-a.webkitCompassHeading,i.orientationOffset&&(h+=i.orientationOffset*(180/Math.PI),h=(h+360)%360)):(a.absolute===!0||i.orientationChangeEventName,h=a.alpha?a.alpha:0,h=(360-h)%360,h<0&&(h+=360)),h},this._orderAngle=function(a,h,l=i.TWO_PI){return h>a&&Math.abs(h-a)<l/2||a>h&&Math.abs(h-a)>l/2?{left:a,right:h}:{left:h,right:a}},this._getSmoothedAngle=function(a,h,l,u=i.TWO_PI){const c=i._orderAngle(a,h,u),f=c.left,d=c.right;c.left=0,c.right-=f,c.right<0&&(c.right+=u);let _=d==h?(1-l)*c.right+l*c.left:l*c.right+(1-l)*c.left;return _+=f,_>=u&&(_-=u),_},this.updateAlphaOffset=function(){i.initialOffset=!1},this.dispose=function(){i.disconnect()},this.getAlpha=function(){const{deviceOrientation:a}=i;return a&&a.alpha?We.degToRad(a.alpha)+i.alphaOffset:0},this.getBeta=function(){const{deviceOrientation:a}=i;return a&&a.beta?We.degToRad(a.beta):0},this.getGamma=function(){const{deviceOrientation:a}=i;return a&&a.gamma?We.degToRad(a.gamma):0},this.obtainPermissionGesture=function(){const a=document.createElement("div"),h=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div");document.body.appendChild(a);const c={display:"flex",position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1,backgroundColor:"rgba(0,0,0,0.6)",justifyContent:"center",alignItems:"center"},f={backgroundColor:"white",padding:"6px",borderRadius:"3px",width:"36rem",height:"24rem"},d={width:"100%",height:"70%",display:"flex",justifyContent:"center",alignItems:"center"},_={display:"inline-flex",width:"100%",height:"30%",justifyContent:"center",alignItems:"center"};for(let p in c)a.style[p]=c[p];for(let p in f)h.style[p]=f[p];for(let p in d)l.style[p]=d[p];for(let p in _)u.style[p]=_[p];a.appendChild(h),h.appendChild(l),h.appendChild(u),l.innerHTML='<div style="font-size: 24pt; margin: 1rem;">This immersive website requires access to your device motion sensors.</div>';const g=()=>{this.requestOrientationPermissions(),a.style.display="none"},m=document.createElement("button");m.addEventListener("click",g),m.style.width="50%",m.style.height="80%",m.style.fontSize="20pt",m.appendChild(document.createTextNode("OK")),u.appendChild(m),document.body.appendChild(a)}}on(t,e){this.eventEmitter.on(t,e)}init(){window.DeviceOrientationEvent===void 0?this.eventEmitter.emit("deviceorientationerror",{code:"LOCAR_DEVICE_ORIENTATION_NOT_SUPPORTED",message:"Device orientation API not supported"}):window.isSecureContext===!1?this.eventEmitter.emit("deviceorientationerror",{code:"LOCAR_DEVICE_ORIENTATION_NO_HTTPS",message:"DeviceOrientationEvent is only available in secure contexts (https)"}):typeof window.DeviceOrientationEvent.requestPermission=="function"&&this.enablePermissionDialog?this.obtainPermissionGesture():this.eventEmitter.emit("deviceorientationgranted",{target:this})}}function n1(n){n("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),n("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),n("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");for(var t=1;t<=60;++t)n("EPSG:"+(32600+t),"+proj=utm +zone="+t+" +datum=WGS84 +units=m"),n("EPSG:"+(32700+t),"+proj=utm +zone="+t+" +south +datum=WGS84 +units=m");n.WGS84=n["EPSG:4326"],n["EPSG:3785"]=n["EPSG:3857"],n.GOOGLE=n["EPSG:3857"],n["EPSG:900913"]=n["EPSG:3857"],n["EPSG:102113"]=n["EPSG:3857"]}var wi=1,Ri=2,ns=3,i1=4,ah=5,oc=6378137,s1=6356752314e-3,hc=.0066943799901413165,Is=484813681109536e-20,K=Math.PI/2,r1=.16666666666666666,a1=.04722222222222222,o1=.022156084656084655,at=1e-10,Me=.017453292519943295,pn=57.29577951308232,$t=Math.PI/4,ks=Math.PI*2,fe=3.14159265359,Ge={};Ge.greenwich=0;Ge.lisbon=-9.131906111111;Ge.paris=2.337229166667;Ge.bogota=-74.080916666667;Ge.madrid=-3.687938888889;Ge.rome=12.452333333333;Ge.bern=7.439583333333;Ge.jakarta=106.807719444444;Ge.ferro=-17.666666666667;Ge.brussels=4.367975;Ge.stockholm=18.058277777778;Ge.athens=23.7163375;Ge.oslo=10.722916666667;const h1={mm:{to_meter:.001},cm:{to_meter:.01},ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937},fath:{to_meter:1.8288},kmi:{to_meter:1852},"us-ch":{to_meter:20.1168402336805},"us-mi":{to_meter:1609.34721869444},km:{to_meter:1e3},"ind-ft":{to_meter:.30479841},"ind-yd":{to_meter:.91439523},mi:{to_meter:1609.344},yd:{to_meter:.9144},ch:{to_meter:20.1168},link:{to_meter:.201168},dm:{to_meter:.1},in:{to_meter:.0254},"ind-ch":{to_meter:20.11669506},"us-in":{to_meter:.025400050800101},"us-yd":{to_meter:.914401828803658}};var lc=/[\s_\-\/\(\)]/g;function ni(n,t){if(n[t])return n[t];for(var e=Object.keys(n),i=t.toLowerCase().replace(lc,""),s=-1,r,o;++s<e.length;)if(r=e[s],o=r.toLowerCase().replace(lc,""),o===i)return n[r]}function oh(n){var t={},e=n.split("+").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,h){var l=h.split("=");return l.push(!0),a[l[0].toLowerCase()]=l[1],a},{}),i,s,r,o={proj:"projName",datum:"datumCode",rf:function(a){t.rf=parseFloat(a)},lat_0:function(a){t.lat0=a*Me},lat_1:function(a){t.lat1=a*Me},lat_2:function(a){t.lat2=a*Me},lat_ts:function(a){t.lat_ts=a*Me},lon_0:function(a){t.long0=a*Me},lon_1:function(a){t.long1=a*Me},lon_2:function(a){t.long2=a*Me},alpha:function(a){t.alpha=parseFloat(a)*Me},gamma:function(a){t.rectified_grid_angle=parseFloat(a)*Me},lonc:function(a){t.longc=a*Me},x_0:function(a){t.x0=parseFloat(a)},y_0:function(a){t.y0=parseFloat(a)},k_0:function(a){t.k0=parseFloat(a)},k:function(a){t.k0=parseFloat(a)},a:function(a){t.a=parseFloat(a)},b:function(a){t.b=parseFloat(a)},r:function(a){t.a=t.b=parseFloat(a)},r_a:function(){t.R_A=!0},zone:function(a){t.zone=parseInt(a,10)},south:function(){t.utmSouth=!0},towgs84:function(a){t.datum_params=a.split(",").map(function(h){return parseFloat(h)})},to_meter:function(a){t.to_meter=parseFloat(a)},units:function(a){t.units=a;var h=ni(h1,a);h&&(t.to_meter=h.to_meter)},from_greenwich:function(a){t.from_greenwich=a*Me},pm:function(a){var h=ni(Ge,a);t.from_greenwich=(h||parseFloat(a))*Me},nadgrids:function(a){a==="@null"?t.datumCode="none":t.nadgrids=a},axis:function(a){var h="ewnsud";a.length===3&&h.indexOf(a.substr(0,1))!==-1&&h.indexOf(a.substr(1,1))!==-1&&h.indexOf(a.substr(2,1))!==-1&&(t.axis=a)},approx:function(){t.approx=!0}};for(i in e)s=e[i],i in o?(r=o[i],typeof r=="function"?r(s):t[r]=s):t[i]=s;return typeof t.datumCode=="string"&&t.datumCode!=="WGS84"&&(t.datumCode=t.datumCode.toLowerCase()),t}class xu{static getId(t){const e=t.find(i=>Array.isArray(i)&&i[0]==="ID");return e&&e.length>=3?{authority:e[1],code:parseInt(e[2],10)}:null}static convertUnit(t,e="unit"){if(!t||t.length<3)return{type:e,name:"unknown",conversion_factor:null};const i=t[1],s=parseFloat(t[2])||null,r=t.find(a=>Array.isArray(a)&&a[0]==="ID"),o=r?{authority:r[1],code:parseInt(r[2],10)}:null;return{type:e,name:i,conversion_factor:s,id:o}}static convertAxis(t){const e=t[1]||"Unknown";let i;const s=e.match(/^\((.)\)$/);if(s){const l=s[1].toUpperCase();if(l==="E")i="east";else if(l==="N")i="north";else if(l==="U")i="up";else throw new Error(`Unknown axis abbreviation: ${l}`)}else i=t[2]?t[2].toLowerCase():"unknown";const r=t.find(l=>Array.isArray(l)&&l[0]==="ORDER"),o=r?parseInt(r[1],10):null,a=t.find(l=>Array.isArray(l)&&(l[0]==="LENGTHUNIT"||l[0]==="ANGLEUNIT"||l[0]==="SCALEUNIT")),h=this.convertUnit(a);return{name:e,direction:i,unit:h,order:o}}static extractAxes(t){return t.filter(e=>Array.isArray(e)&&e[0]==="AXIS").map(e=>this.convertAxis(e)).sort((e,i)=>(e.order||0)-(i.order||0))}static convert(t,e={}){switch(t[0]){case"PROJCRS":e.type="ProjectedCRS",e.name=t[1],e.base_crs=t.find(f=>Array.isArray(f)&&f[0]==="BASEGEOGCRS")?this.convert(t.find(f=>Array.isArray(f)&&f[0]==="BASEGEOGCRS")):null,e.conversion=t.find(f=>Array.isArray(f)&&f[0]==="CONVERSION")?this.convert(t.find(f=>Array.isArray(f)&&f[0]==="CONVERSION")):null;const i=t.find(f=>Array.isArray(f)&&f[0]==="CS");i&&(e.coordinate_system={type:i[1],axis:this.extractAxes(t)});const s=t.find(f=>Array.isArray(f)&&f[0]==="LENGTHUNIT");if(s){const f=this.convertUnit(s);e.coordinate_system.unit=f}e.id=this.getId(t);break;case"BASEGEOGCRS":case"GEOGCRS":e.type="GeographicCRS",e.name=t[1];const r=t.find(f=>Array.isArray(f)&&(f[0]==="DATUM"||f[0]==="ENSEMBLE"));if(r){const f=this.convert(r);r[0]==="ENSEMBLE"?e.datum_ensemble=f:e.datum=f;const d=t.find(_=>Array.isArray(_)&&_[0]==="PRIMEM");d&&d[1]!=="Greenwich"&&(f.prime_meridian={name:d[1],longitude:parseFloat(d[2])})}e.coordinate_system={type:"ellipsoidal",axis:this.extractAxes(t)},e.id=this.getId(t);break;case"DATUM":e.type="GeodeticReferenceFrame",e.name=t[1],e.ellipsoid=t.find(f=>Array.isArray(f)&&f[0]==="ELLIPSOID")?this.convert(t.find(f=>Array.isArray(f)&&f[0]==="ELLIPSOID")):null;break;case"ENSEMBLE":e.type="DatumEnsemble",e.name=t[1],e.members=t.filter(f=>Array.isArray(f)&&f[0]==="MEMBER").map(f=>({type:"DatumEnsembleMember",name:f[1],id:this.getId(f)}));const o=t.find(f=>Array.isArray(f)&&f[0]==="ENSEMBLEACCURACY");o&&(e.accuracy=parseFloat(o[1]));const a=t.find(f=>Array.isArray(f)&&f[0]==="ELLIPSOID");a&&(e.ellipsoid=this.convert(a)),e.id=this.getId(t);break;case"ELLIPSOID":e.type="Ellipsoid",e.name=t[1],e.semi_major_axis=parseFloat(t[2]),e.inverse_flattening=parseFloat(t[3]),t.find(f=>Array.isArray(f)&&f[0]==="LENGTHUNIT")&&this.convert(t.find(f=>Array.isArray(f)&&f[0]==="LENGTHUNIT"),e);break;case"CONVERSION":e.type="Conversion",e.name=t[1],e.method=t.find(f=>Array.isArray(f)&&f[0]==="METHOD")?this.convert(t.find(f=>Array.isArray(f)&&f[0]==="METHOD")):null,e.parameters=t.filter(f=>Array.isArray(f)&&f[0]==="PARAMETER").map(f=>this.convert(f));break;case"METHOD":e.type="Method",e.name=t[1],e.id=this.getId(t);break;case"PARAMETER":e.type="Parameter",e.name=t[1],e.value=parseFloat(t[2]),e.unit=this.convertUnit(t.find(f=>Array.isArray(f)&&(f[0]==="LENGTHUNIT"||f[0]==="ANGLEUNIT"||f[0]==="SCALEUNIT"))),e.id=this.getId(t);break;case"BOUNDCRS":e.type="BoundCRS";const h=t.find(f=>Array.isArray(f)&&f[0]==="SOURCECRS");if(h){const f=h.find(d=>Array.isArray(d));e.source_crs=f?this.convert(f):null}const l=t.find(f=>Array.isArray(f)&&f[0]==="TARGETCRS");if(l){const f=l.find(d=>Array.isArray(d));e.target_crs=f?this.convert(f):null}const u=t.find(f=>Array.isArray(f)&&f[0]==="ABRIDGEDTRANSFORMATION");u?e.transformation=this.convert(u):e.transformation=null;break;case"ABRIDGEDTRANSFORMATION":if(e.type="Transformation",e.name=t[1],e.method=t.find(f=>Array.isArray(f)&&f[0]==="METHOD")?this.convert(t.find(f=>Array.isArray(f)&&f[0]==="METHOD")):null,e.parameters=t.filter(f=>Array.isArray(f)&&(f[0]==="PARAMETER"||f[0]==="PARAMETERFILE")).map(f=>{if(f[0]==="PARAMETER")return this.convert(f);if(f[0]==="PARAMETERFILE")return{name:f[1],value:f[2],id:{authority:"EPSG",code:8656}}}),e.parameters.length===7){const f=e.parameters[6];f.name==="Scale difference"&&(f.value=Math.round((f.value-1)*1e12)/1e6)}e.id=this.getId(t);break;case"AXIS":e.coordinate_system||(e.coordinate_system={type:"unspecified",axis:[]}),e.coordinate_system.axis.push(this.convertAxis(t));break;case"LENGTHUNIT":const c=this.convertUnit(t,"LinearUnit");e.coordinate_system&&e.coordinate_system.axis&&e.coordinate_system.axis.forEach(f=>{f.unit||(f.unit=c)}),c.conversion_factor&&c.conversion_factor!==1&&e.semi_major_axis&&(e.semi_major_axis={value:e.semi_major_axis,unit:c});break;default:e.keyword=t[0];break}return e}}class l1 extends xu{static convert(t,e={}){return super.convert(t,e),e.coordinate_system&&e.coordinate_system.subtype==="Cartesian"&&delete e.coordinate_system,e.usage&&delete e.usage,e}}class c1 extends xu{static convert(t,e={}){super.convert(t,e);const i=t.find(r=>Array.isArray(r)&&r[0]==="CS");i&&(e.coordinate_system={subtype:i[1],axis:this.extractAxes(t)});const s=t.find(r=>Array.isArray(r)&&r[0]==="USAGE");if(s){const r=s.find(h=>Array.isArray(h)&&h[0]==="SCOPE"),o=s.find(h=>Array.isArray(h)&&h[0]==="AREA"),a=s.find(h=>Array.isArray(h)&&h[0]==="BBOX");e.usage={},r&&(e.usage.scope=r[1]),o&&(e.usage.area=o[1]),a&&(e.usage.bbox=a.slice(1))}return e}}function u1(n){return n.find(t=>Array.isArray(t)&&t[0]==="USAGE")?"2019":(n.find(t=>Array.isArray(t)&&t[0]==="CS")||n[0]==="BOUNDCRS"||n[0]==="PROJCRS"||n[0]==="GEOGCRS","2015")}function f1(n){return(u1(n)==="2019"?c1:l1).convert(n)}function d1(n){const t=n.toUpperCase();return t.includes("PROJCRS")||t.includes("GEOGCRS")||t.includes("BOUNDCRS")||t.includes("VERTCRS")||t.includes("LENGTHUNIT")||t.includes("ANGLEUNIT")||t.includes("SCALEUNIT")?"WKT2":(t.includes("PROJCS")||t.includes("GEOGCS")||t.includes("LOCAL_CS")||t.includes("VERT_CS")||t.includes("UNIT"),"WKT1")}var Hs=1,Mu=2,yu=3,ia=4,Su=5,Rh=-1,p1=/\s/,m1=/[A-Za-z]/,_1=/[A-Za-z84_]/,ma=/[,\]]/,Eu=/[\d\.E\-\+]/;function On(n){if(typeof n!="string")throw new Error("not a string");this.text=n.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=Hs}On.prototype.readCharicter=function(){var n=this.text[this.place++];if(this.state!==ia)for(;p1.test(n);){if(this.place>=this.text.length)return;n=this.text[this.place++]}switch(this.state){case Hs:return this.neutral(n);case Mu:return this.keyword(n);case ia:return this.quoted(n);case Su:return this.afterquote(n);case yu:return this.number(n);case Rh:return}};On.prototype.afterquote=function(n){if(n==='"'){this.word+='"',this.state=ia;return}if(ma.test(n)){this.word=this.word.trim(),this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in afterquote yet, index '+this.place)};On.prototype.afterItem=function(n){if(n===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=Hs;return}if(n==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=Hs,this.currentObject=this.stack.pop(),this.currentObject||(this.state=Rh);return}};On.prototype.number=function(n){if(Eu.test(n)){this.word+=n;return}if(ma.test(n)){this.word=parseFloat(this.word),this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in number yet, index '+this.place)};On.prototype.quoted=function(n){if(n==='"'){this.state=Su;return}this.word+=n};On.prototype.keyword=function(n){if(_1.test(n)){this.word+=n;return}if(n==="["){var t=[];t.push(this.word),this.level++,this.root===null?this.root=t:this.currentObject.push(t),this.stack.push(this.currentObject),this.currentObject=t,this.state=Hs;return}if(ma.test(n)){this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in keyword yet, index '+this.place)};On.prototype.neutral=function(n){if(m1.test(n)){this.word=n,this.state=Mu;return}if(n==='"'){this.word="",this.state=ia;return}if(Eu.test(n)){this.word=n,this.state=yu;return}if(ma.test(n)){this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in neutral yet, index '+this.place)};On.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===Rh)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function g1(n){var t=new On(n);return t.output()}function ho(n,t,e){Array.isArray(t)&&(e.unshift(t),t=null);var i=t?{}:n,s=e.reduce(function(r,o){return Ki(o,r),r},i);t&&(n[t]=s)}function Ki(n,t){if(!Array.isArray(n)){t[n]=!0;return}var e=n.shift();if(e==="PARAMETER"&&(e=n.shift()),n.length===1){if(Array.isArray(n[0])){t[e]={},Ki(n[0],t[e]);return}t[e]=n[0];return}if(!n.length){t[e]=!0;return}if(e==="TOWGS84"){t[e]=n;return}if(e==="AXIS"){e in t||(t[e]=[]),t[e].push(n);return}Array.isArray(e)||(t[e]={});var i;switch(e){case"UNIT":case"PRIMEM":case"VERT_DATUM":t[e]={name:n[0].toLowerCase(),convert:n[1]},n.length===3&&Ki(n[2],t[e]);return;case"SPHEROID":case"ELLIPSOID":t[e]={name:n[0],a:n[1],rf:n[2]},n.length===4&&Ki(n[3],t[e]);return;case"EDATUM":case"ENGINEERINGDATUM":case"LOCAL_DATUM":case"DATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":n[0]=["name",n[0]],ho(t,e,n);return;case"COMPD_CS":case"COMPOUNDCRS":case"FITTED_CS":case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"ENGCRS":case"ENGINEERINGCRS":n[0]=["name",n[0]],ho(t,e,n),t[e].type=e;return;default:for(i=-1;++i<n.length;)if(!Array.isArray(n[i]))return Ki(n,t[e]);return ho(t,e,n)}}var v1=.017453292519943295;function sn(n){return n*v1}function bu(n){const t=(n.projName||"").toLowerCase().replace(/_/g," ");!n.long0&&n.longc&&(t==="albers conic equal area"||t==="lambert azimuthal equal area")&&(n.long0=n.longc),!n.lat_ts&&n.lat1&&(t==="stereographic south pole"||t==="polar stereographic (variant b)")?(n.lat0=sn(n.lat1>0?90:-90),n.lat_ts=n.lat1,delete n.lat1):!n.lat_ts&&n.lat0&&(t==="polar stereographic"||t==="polar stereographic (variant a)")&&(n.lat_ts=n.lat0,n.lat0=sn(n.lat0>0?90:-90),delete n.lat1)}function cc(n){let t={units:null,to_meter:void 0};return typeof n=="string"?(t.units=n.toLowerCase(),t.units==="metre"&&(t.units="meter"),t.units==="meter"&&(t.to_meter=1)):n&&n.name&&(t.units=n.name.toLowerCase(),t.units==="metre"&&(t.units="meter"),t.to_meter=n.conversion_factor),t}function uc(n){return typeof n=="object"?n.value*n.unit.conversion_factor:n}function fc(n,t){n.ellipsoid.radius?(t.a=n.ellipsoid.radius,t.rf=0):(t.a=uc(n.ellipsoid.semi_major_axis),n.ellipsoid.inverse_flattening!==void 0?t.rf=n.ellipsoid.inverse_flattening:n.ellipsoid.semi_major_axis!==void 0&&n.ellipsoid.semi_minor_axis!==void 0&&(t.rf=t.a/(t.a-uc(n.ellipsoid.semi_minor_axis))))}function sa(n,t={}){return!n||typeof n!="object"?n:n.type==="BoundCRS"?(sa(n.source_crs,t),n.transformation&&(n.transformation.method&&n.transformation.method.name==="NTv2"?t.nadgrids=n.transformation.parameters[0].value:t.datum_params=n.transformation.parameters.map(e=>e.value)),t):(Object.keys(n).forEach(e=>{const i=n[e];if(i!==null)switch(e){case"name":if(t.srsCode)break;t.name=i,t.srsCode=i;break;case"type":i==="GeographicCRS"?t.projName="longlat":i==="ProjectedCRS"&&n.conversion&&n.conversion.method&&(t.projName=n.conversion.method.name);break;case"datum":case"datum_ensemble":i.ellipsoid&&(t.ellps=i.ellipsoid.name,fc(i,t)),i.prime_meridian&&(t.from_greenwich=i.prime_meridian.longitude*Math.PI/180);break;case"ellipsoid":t.ellps=i.name,fc(i,t);break;case"prime_meridian":t.long0=(i.longitude||0)*Math.PI/180;break;case"coordinate_system":if(i.axis){if(t.axis=i.axis.map(s=>{const r=s.direction;if(r==="east")return"e";if(r==="north")return"n";if(r==="west")return"w";if(r==="south")return"s";throw new Error(`Unknown axis direction: ${r}`)}).join("")+"u",i.unit){const{units:s,to_meter:r}=cc(i.unit);t.units=s,t.to_meter=r}else if(i.axis[0]&&i.axis[0].unit){const{units:s,to_meter:r}=cc(i.axis[0].unit);t.units=s,t.to_meter=r}}break;case"id":i.authority&&i.code&&(t.title=i.authority+":"+i.code);break;case"conversion":i.method&&i.method.name&&(t.projName=i.method.name),i.parameters&&i.parameters.forEach(s=>{const r=s.name.toLowerCase().replace(/\s+/g,"_"),o=s.value;s.unit&&s.unit.conversion_factor?t[r]=o*s.unit.conversion_factor:s.unit==="degree"?t[r]=o*Math.PI/180:t[r]=o});break;case"unit":i.name&&(t.units=i.name.toLowerCase(),t.units==="metre"&&(t.units="meter")),i.conversion_factor&&(t.to_meter=i.conversion_factor);break;case"base_crs":sa(i,t),t.datumCode=i.id?i.id.authority+"_"+i.id.code:i.name;break}}),t.latitude_of_false_origin!==void 0&&(t.lat0=t.latitude_of_false_origin),t.longitude_of_false_origin!==void 0&&(t.long0=t.longitude_of_false_origin),t.latitude_of_standard_parallel!==void 0&&(t.lat0=t.latitude_of_standard_parallel,t.lat1=t.latitude_of_standard_parallel),t.latitude_of_1st_standard_parallel!==void 0&&(t.lat1=t.latitude_of_1st_standard_parallel),t.latitude_of_2nd_standard_parallel!==void 0&&(t.lat2=t.latitude_of_2nd_standard_parallel),t.latitude_of_projection_centre!==void 0&&(t.lat0=t.latitude_of_projection_centre),t.longitude_of_projection_centre!==void 0&&(t.longc=t.longitude_of_projection_centre),t.easting_at_false_origin!==void 0&&(t.x0=t.easting_at_false_origin),t.northing_at_false_origin!==void 0&&(t.y0=t.northing_at_false_origin),t.latitude_of_natural_origin!==void 0&&(t.lat0=t.latitude_of_natural_origin),t.longitude_of_natural_origin!==void 0&&(t.long0=t.longitude_of_natural_origin),t.longitude_of_origin!==void 0&&(t.long0=t.longitude_of_origin),t.false_easting!==void 0&&(t.x0=t.false_easting),t.easting_at_projection_centre&&(t.x0=t.easting_at_projection_centre),t.false_northing!==void 0&&(t.y0=t.false_northing),t.northing_at_projection_centre&&(t.y0=t.northing_at_projection_centre),t.standard_parallel_1!==void 0&&(t.lat1=t.standard_parallel_1),t.standard_parallel_2!==void 0&&(t.lat2=t.standard_parallel_2),t.scale_factor_at_natural_origin!==void 0&&(t.k0=t.scale_factor_at_natural_origin),t.scale_factor_at_projection_centre!==void 0&&(t.k0=t.scale_factor_at_projection_centre),t.scale_factor_on_pseudo_standard_parallel!==void 0&&(t.k0=t.scale_factor_on_pseudo_standard_parallel),t.azimuth!==void 0&&(t.alpha=t.azimuth),t.azimuth_at_projection_centre!==void 0&&(t.alpha=t.azimuth_at_projection_centre),t.angle_from_rectified_to_skew_grid&&(t.rectified_grid_angle=t.angle_from_rectified_to_skew_grid),bu(t),t)}var x1=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function M1(n,t){var e=t[0],i=t[1];!(e in n)&&i in n&&(n[e]=n[i],t.length===3&&(n[e]=t[2](n[e])))}function Tu(n){for(var t=Object.keys(n),e=0,i=t.length;e<i;++e){var s=t[e];x1.indexOf(s)!==-1&&y1(n[s]),typeof n[s]=="object"&&Tu(n[s])}}function y1(n){if(n.AUTHORITY){var t=Object.keys(n.AUTHORITY)[0];t&&t in n.AUTHORITY&&(n.title=t+":"+n.AUTHORITY[t])}if(n.type==="GEOGCS"?n.projName="longlat":n.type==="LOCAL_CS"?(n.projName="identity",n.local=!0):typeof n.PROJECTION=="object"?n.projName=Object.keys(n.PROJECTION)[0]:n.projName=n.PROJECTION,n.AXIS){for(var e="",i=0,s=n.AXIS.length;i<s;++i){var r=[n.AXIS[i][0].toLowerCase(),n.AXIS[i][1].toLowerCase()];r[0].indexOf("north")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="north"?e+="n":r[0].indexOf("south")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="south"?e+="s":r[0].indexOf("east")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="east"?e+="e":(r[0].indexOf("west")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="west")&&(e+="w")}e.length===2&&(e+="u"),e.length===3&&(n.axis=e)}n.UNIT&&(n.units=n.UNIT.name.toLowerCase(),n.units==="metre"&&(n.units="meter"),n.UNIT.convert&&(n.type==="GEOGCS"?n.DATUM&&n.DATUM.SPHEROID&&(n.to_meter=n.UNIT.convert*n.DATUM.SPHEROID.a):n.to_meter=n.UNIT.convert));var o=n.GEOGCS;n.type==="GEOGCS"&&(o=n),o&&(o.DATUM?n.datumCode=o.DATUM.name.toLowerCase():n.datumCode=o.name.toLowerCase(),n.datumCode.slice(0,2)==="d_"&&(n.datumCode=n.datumCode.slice(2)),n.datumCode==="new_zealand_1949"&&(n.datumCode="nzgd49"),(n.datumCode==="wgs_1984"||n.datumCode==="world_geodetic_system_1984")&&(n.PROJECTION==="Mercator_Auxiliary_Sphere"&&(n.sphere=!0),n.datumCode="wgs84"),n.datumCode==="belge_1972"&&(n.datumCode="rnb72"),o.DATUM&&o.DATUM.SPHEROID&&(n.ellps=o.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),n.ellps.toLowerCase().slice(0,13)==="international"&&(n.ellps="intl"),n.a=o.DATUM.SPHEROID.a,n.rf=parseFloat(o.DATUM.SPHEROID.rf,10)),o.DATUM&&o.DATUM.TOWGS84&&(n.datum_params=o.DATUM.TOWGS84),~n.datumCode.indexOf("osgb_1936")&&(n.datumCode="osgb36"),~n.datumCode.indexOf("osni_1952")&&(n.datumCode="osni52"),(~n.datumCode.indexOf("tm65")||~n.datumCode.indexOf("geodetic_datum_of_1965"))&&(n.datumCode="ire65"),n.datumCode==="ch1903+"&&(n.datumCode="ch1903"),~n.datumCode.indexOf("israel")&&(n.datumCode="isr93")),n.b&&!isFinite(n.b)&&(n.b=n.a),n.rectified_grid_angle&&(n.rectified_grid_angle=sn(n.rectified_grid_angle));function a(u){var c=n.to_meter||1;return u*c}var h=function(u){return M1(n,u)},l=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",sn],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",sn],["x0","false_easting",a],["y0","false_northing",a],["long0","central_meridian",sn],["lat0","latitude_of_origin",sn],["lat0","standard_parallel_1",sn],["lat1","standard_parallel_1",sn],["lat2","standard_parallel_2",sn],["azimuth","Azimuth"],["alpha","azimuth",sn],["srsCode","name"]];l.forEach(h),bu(n)}function hh(n){if(typeof n=="object")return sa(n);const t=d1(n);var e=g1(n);if(t==="WKT2"){const r=f1(e);return sa(r)}var i=e[0],s={};return Ki(e,s),Tu(s),s[i]}function Pe(n){var t=this;if(arguments.length===2){var e=arguments[1];typeof e=="string"?e.charAt(0)==="+"?Pe[n]=oh(arguments[1]):Pe[n]=hh(arguments[1]):Pe[n]=e}else if(arguments.length===1){if(Array.isArray(n))return n.map(function(i){return Array.isArray(i)?Pe.apply(t,i):Pe(i)});if(typeof n=="string"){if(n in Pe)return Pe[n]}else"EPSG"in n?Pe["EPSG:"+n.EPSG]=n:"ESRI"in n?Pe["ESRI:"+n.ESRI]=n:"IAU2000"in n?Pe["IAU2000:"+n.IAU2000]=n:console.log(n);return}}n1(Pe);function S1(n){return typeof n=="string"}function E1(n){return n in Pe}function b1(n){return n.indexOf("+")!==0&&n.indexOf("[")!==-1||typeof n=="object"&&!("srsCode"in n)}var T1=["3857","900913","3785","102113"];function A1(n){var t=ni(n,"authority");if(t){var e=ni(t,"epsg");return e&&T1.indexOf(e)>-1}}function w1(n){var t=ni(n,"extension");if(t)return ni(t,"proj4")}function R1(n){return n[0]==="+"}function C1(n){if(S1(n)){if(E1(n))return Pe[n];if(b1(n)){var t=hh(n);if(A1(t))return Pe["EPSG:3857"];var e=w1(t);return e?oh(e):t}if(R1(n))return oh(n)}else return"projName"in n?n:hh(n)}function dc(n,t){n=n||{};var e,i;if(!t)return n;for(i in t)e=t[i],e!==void 0&&(n[i]=e);return n}function gn(n,t,e){var i=n*t;return e/Math.sqrt(1-i*i)}function Js(n){return n<0?-1:1}function ct(n){return Math.abs(n)<=fe?n:n-Js(n)*ks}function on(n,t,e){var i=n*e,s=.5*n;return i=Math.pow((1-i)/(1+i),s),Math.tan(.5*(K-t))/i}function Vs(n,t){for(var e=.5*n,i,s,r=K-2*Math.atan(t),o=0;o<=15;o++)if(i=n*Math.sin(r),s=K-2*Math.atan(t*Math.pow((1-i)/(1+i),e))-r,r+=s,Math.abs(s)<=1e-10)return r;return-9999}function P1(){var n=this.b/this.a;this.es=1-n*n,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=gn(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function I1(n){var t=n.x,e=n.y;if(e*pn>90&&e*pn<-90&&t*pn>180&&t*pn<-180)return null;var i,s;if(Math.abs(Math.abs(e)-K)<=at)return null;if(this.sphere)i=this.x0+this.a*this.k0*ct(t-this.long0),s=this.y0+this.a*this.k0*Math.log(Math.tan($t+.5*e));else{var r=Math.sin(e),o=on(this.e,e,r);i=this.x0+this.a*this.k0*ct(t-this.long0),s=this.y0-this.a*this.k0*Math.log(o)}return n.x=i,n.y=s,n}function L1(n){var t=n.x-this.x0,e=n.y-this.y0,i,s;if(this.sphere)s=K-2*Math.atan(Math.exp(-e/(this.a*this.k0)));else{var r=Math.exp(-e/(this.a*this.k0));if(s=Vs(this.e,r),s===-9999)return null}return i=ct(this.long0+t/(this.a*this.k0)),n.x=i,n.y=s,n}var D1=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","Mercator_Variant_A","merc"];const N1={init:P1,forward:I1,inverse:L1,names:D1};function U1(){}function pc(n){return n}var F1=["longlat","identity"];const O1={init:U1,forward:pc,inverse:pc,names:F1};var G1=[N1,O1],vi={},Zi=[];function Au(n,t){var e=Zi.length;return n.names?(Zi[e]=n,n.names.forEach(function(i){vi[i.toLowerCase()]=e}),this):(console.log(t),!0)}function wu(n){return n.replace(/[-\(\)\s]+/g," ").trim().replace(/ /g,"_")}function B1(n){if(!n)return!1;var t=n.toLowerCase();if(typeof vi[t]<"u"&&Zi[vi[t]]||(t=wu(t),t in vi&&Zi[vi[t]]))return Zi[vi[t]]}function z1(){G1.forEach(Au)}const k1={start:z1,add:Au,get:B1};var Ru={MERIT:{a:6378137,rf:298.257,ellipseName:"MERIT 1983"},SGS85:{a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"},GRS80:{a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"},IAU76:{a:6378140,rf:298.257,ellipseName:"IAU 1976"},airy:{a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"},APL4:{a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"},NWL9D:{a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"},mod_airy:{a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"},andrae:{a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"},aust_SA:{a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"},GRS67:{a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"},bessel:{a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"},bess_nam:{a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"},clrk66:{a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"},clrk80:{a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."},clrk80ign:{a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"},clrk58:{a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"},CPM:{a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"},delmbr:{a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"},engelis:{a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"},evrst30:{a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"},evrst48:{a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"},evrst56:{a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"},evrst69:{a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"},evrstSS:{a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"},fschr60:{a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"},fschr60m:{a:6378155,rf:298.3,ellipseName:"Fischer 1960"},fschr68:{a:6378150,rf:298.3,ellipseName:"Fischer 1968"},helmert:{a:6378200,rf:298.3,ellipseName:"Helmert 1906"},hough:{a:6378270,rf:297,ellipseName:"Hough"},intl:{a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"},kaula:{a:6378163,rf:298.24,ellipseName:"Kaula 1961"},lerch:{a:6378139,rf:298.257,ellipseName:"Lerch 1979"},mprts:{a:6397300,rf:191,ellipseName:"Maupertius 1738"},new_intl:{a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"},plessis:{a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"},krass:{a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"},SEasia:{a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"},walbeck:{a:6376896,b:63558348467e-4,ellipseName:"Walbeck"},WGS60:{a:6378165,rf:298.3,ellipseName:"WGS 60"},WGS66:{a:6378145,rf:298.25,ellipseName:"WGS 66"},WGS7:{a:6378135,rf:298.26,ellipseName:"WGS 72"},WGS84:{a:6378137,rf:298.257223563,ellipseName:"WGS 84"},sphere:{a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"}};const H1=Ru.WGS84;function V1(n,t,e,i){var s=n*n,r=t*t,o=(s-r)/s,a=0;i?(n*=1-o*(r1+o*(a1+o*o1)),s=n*n,o=0):a=Math.sqrt(o);var h=(s-r)/r;return{es:o,e:a,ep2:h}}function W1(n,t,e,i,s){if(!n){var r=ni(Ru,i);r||(r=H1),n=r.a,t=r.b,e=r.rf}return e&&!t&&(t=(1-1/e)*n),(e===0||Math.abs(n-t)<at)&&(s=!0,t=n),{a:n,b:t,rf:e,sphere:s}}var Yr={wgs84:{towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},ch1903:{towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},ggrs87:{towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},nad83:{towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},nad27:{nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},potsdam:{towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},carthage:{towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},hermannskogel:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"},mgi:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Militar-Geographische Institut"},osni52:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"},ire65:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},rassadiran:{towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},nzgd49:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},osgb36:{towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Ordnance Survey of Great Britain 1936"},s_jtsk:{towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},beduaram:{towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},gunung_segara:{towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},rnb72:{towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"},EPSG_5451:{towgs84:"6.41,-49.05,-11.28,1.5657,0.5242,6.9718,-5.7649"},IGNF_LURESG:{towgs84:"-192.986,13.673,-39.309,-0.4099,-2.9332,2.6881,0.43"},EPSG_4614:{towgs84:"-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065"},EPSG_4615:{towgs84:"-494.088,-312.129,279.877,-1.423,-1.013,1.59,-0.748"},ESRI_37241:{towgs84:"-76.822,257.457,-12.817,2.136,-0.033,-2.392,-0.031"},ESRI_37249:{towgs84:"-440.296,58.548,296.265,1.128,10.202,4.559,-0.438"},ESRI_37245:{towgs84:"-511.151,-181.269,139.609,1.05,2.703,1.798,3.071"},EPSG_4178:{towgs84:"24.9,-126.4,-93.2,-0.063,-0.247,-0.041,1.01"},EPSG_4622:{towgs84:"-472.29,-5.63,-304.12,0.4362,-0.8374,0.2563,1.8984"},EPSG_4625:{towgs84:"126.93,547.94,130.41,-2.7867,5.1612,-0.8584,13.8227"},EPSG_5252:{towgs84:"0.023,0.036,-0.068,0.00176,0.00912,-0.01136,0.00439"},EPSG_4314:{towgs84:"597.1,71.4,412.1,0.894,0.068,-1.563,7.58"},EPSG_4282:{towgs84:"-178.3,-316.7,-131.5,5.278,6.077,10.979,19.166"},EPSG_4231:{towgs84:"-83.11,-97.38,-117.22,0.0276,-0.2167,0.2147,0.1218"},EPSG_4274:{towgs84:"-230.994,102.591,25.199,0.633,-0.239,0.9,1.95"},EPSG_4134:{towgs84:"-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006"},EPSG_4254:{towgs84:"18.38,192.45,96.82,0.056,-0.142,-0.2,-0.0013"},EPSG_4159:{towgs84:"-194.513,-63.978,-25.759,-3.4027,3.756,-3.352,-0.9175"},EPSG_4687:{towgs84:"0.072,-0.507,-0.245,0.0183,-0.0003,0.007,-0.0093"},EPSG_4227:{towgs84:"-83.58,-397.54,458.78,-17.595,-2.847,4.256,3.225"},EPSG_4746:{towgs84:"599.4,72.4,419.2,-0.062,-0.022,-2.723,6.46"},EPSG_4745:{towgs84:"612.4,77,440.2,-0.054,0.057,-2.797,2.55"},EPSG_6311:{towgs84:"8.846,-4.394,-1.122,-0.00237,-0.146528,0.130428,0.783926"},EPSG_4289:{towgs84:"565.7381,50.4018,465.2904,-1.91514,1.60363,-9.09546,4.07244"},EPSG_4230:{towgs84:"-68.863,-134.888,-111.49,-0.53,-0.14,0.57,-3.4"},EPSG_4154:{towgs84:"-123.02,-158.95,-168.47"},EPSG_4156:{towgs84:"570.8,85.7,462.8,4.998,1.587,5.261,3.56"},EPSG_4299:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4179:{towgs84:"33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84"},EPSG_4313:{towgs84:"-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747"},EPSG_4194:{towgs84:"163.511,127.533,-159.789"},EPSG_4195:{towgs84:"105,326,-102.5"},EPSG_4196:{towgs84:"-45,417,-3.5"},EPSG_4611:{towgs84:"-162.619,-276.959,-161.764,0.067753,-2.243649,-1.158827,-1.094246"},EPSG_4633:{towgs84:"137.092,131.66,91.475,-1.9436,-11.5993,-4.3321,-7.4824"},EPSG_4641:{towgs84:"-408.809,366.856,-412.987,1.8842,-0.5308,2.1655,-121.0993"},EPSG_4643:{towgs84:"-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002"},EPSG_4300:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4188:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4660:{towgs84:"982.6087,552.753,-540.873,32.39344,-153.25684,-96.2266,16.805"},EPSG_4662:{towgs84:"97.295,-263.247,310.882,-1.5999,0.8386,3.1409,13.3259"},EPSG_3906:{towgs84:"577.88891,165.22205,391.18289,4.9145,-0.94729,-13.05098,7.78664"},EPSG_4307:{towgs84:"-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547"},EPSG_6892:{towgs84:"-76.269,-16.683,68.562,-6.275,10.536,-4.286,-13.686"},EPSG_4690:{towgs84:"221.597,152.441,176.523,2.403,1.3893,0.884,11.4648"},EPSG_4691:{towgs84:"218.769,150.75,176.75,3.5231,2.0037,1.288,10.9817"},EPSG_4629:{towgs84:"72.51,345.411,79.241,-1.5862,-0.8826,-0.5495,1.3653"},EPSG_4630:{towgs84:"165.804,216.213,180.26,-0.6251,-0.4515,-0.0721,7.4111"},EPSG_4692:{towgs84:"217.109,86.452,23.711,0.0183,-0.0003,0.007,-0.0093"},EPSG_9333:{towgs84:"0,0,0,-8.393,0.749,-10.276,0"},EPSG_9059:{towgs84:"0,0,0"},EPSG_4312:{towgs84:"601.705,84.263,485.227,4.7354,1.3145,5.393,-2.3887"},EPSG_4123:{towgs84:"-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496"},EPSG_4309:{towgs84:"-124.45,183.74,44.64,-0.4384,0.5446,-0.9706,-2.1365"},ESRI_104106:{towgs84:"-283.088,-70.693,117.445,-1.157,0.059,-0.652,-4.058"},EPSG_4281:{towgs84:"-219.247,-73.802,269.529"},EPSG_4322:{towgs84:"0,0,4.5"},EPSG_4324:{towgs84:"0,0,1.9"},EPSG_4284:{towgs84:"43.822,-108.842,-119.585,1.455,-0.761,0.737,0.549"},EPSG_4277:{towgs84:"446.448,-125.157,542.06,0.15,0.247,0.842,-20.489"},EPSG_4207:{towgs84:"-282.1,-72.2,120,-1.529,0.145,-0.89,-4.46"},EPSG_4688:{towgs84:"347.175,1077.618,2623.677,33.9058,-70.6776,9.4013,186.0647"},EPSG_4689:{towgs84:"410.793,54.542,80.501,-2.5596,-2.3517,-0.6594,17.3218"},EPSG_4720:{towgs84:"0,0,4.5"},EPSG_4273:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},EPSG_4240:{towgs84:"204.64,834.74,293.8"},EPSG_4817:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},ESRI_104131:{towgs84:"426.62,142.62,460.09,4.98,4.49,-12.42,-17.1"},EPSG_4265:{towgs84:"-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68"},EPSG_4263:{towgs84:"-111.92,-87.85,114.5,1.875,0.202,0.219,0.032"},EPSG_4298:{towgs84:"-689.5937,623.84046,-65.93566,-0.02331,1.17094,-0.80054,5.88536"},EPSG_4270:{towgs84:"-253.4392,-148.452,386.5267,0.15605,0.43,-0.1013,-0.0424"},EPSG_4229:{towgs84:"-121.8,98.1,-10.7"},EPSG_4220:{towgs84:"-55.5,-348,-229.2"},EPSG_4214:{towgs84:"12.646,-155.176,-80.863"},EPSG_4232:{towgs84:"-345,3,223"},EPSG_4238:{towgs84:"-1.977,-13.06,-9.993,0.364,0.254,0.689,-1.037"},EPSG_4168:{towgs84:"-170,33,326"},EPSG_4131:{towgs84:"199,931,318.9"},EPSG_4152:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_5228:{towgs84:"572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378"},EPSG_8351:{towgs84:"485.021,169.465,483.839,7.786342,4.397554,4.102655,0"},EPSG_4683:{towgs84:"-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06"},EPSG_4133:{towgs84:"0,0,0"},EPSG_7373:{towgs84:"0.819,-0.5762,-1.6446,-0.00378,-0.03317,0.00318,0.0693"},EPSG_9075:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9072:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9294:{towgs84:"1.16835,-1.42001,-2.24431,-0.00822,-0.05508,0.01818,0.23388"},EPSG_4212:{towgs84:"-267.434,173.496,181.814,-13.4704,8.7154,7.3926,14.7492"},EPSG_4191:{towgs84:"-44.183,-0.58,-38.489,2.3867,2.7072,-3.5196,-8.2703"},EPSG_4237:{towgs84:"52.684,-71.194,-13.975,-0.312,-0.1063,-0.3729,1.0191"},EPSG_4740:{towgs84:"-1.08,-0.27,-0.9"},EPSG_4124:{towgs84:"419.3836,99.3335,591.3451,0.850389,1.817277,-7.862238,-0.99496"},EPSG_5681:{towgs84:"584.9636,107.7175,413.8067,1.1155,0.2824,-3.1384,7.9922"},EPSG_4141:{towgs84:"23.772,17.49,17.859,-0.3132,-1.85274,1.67299,-5.4262"},EPSG_4204:{towgs84:"-85.645,-273.077,-79.708,2.289,-1.421,2.532,3.194"},EPSG_4319:{towgs84:"226.702,-193.337,-35.371,-2.229,-4.391,9.238,0.9798"},EPSG_4200:{towgs84:"24.82,-131.21,-82.66"},EPSG_4130:{towgs84:"0,0,0"},EPSG_4127:{towgs84:"-82.875,-57.097,-156.768,-2.158,1.524,-0.982,-0.359"},EPSG_4149:{towgs84:"674.374,15.056,405.346"},EPSG_4617:{towgs84:"-0.991,1.9072,0.5129,1.25033e-7,4.6785e-8,5.6529e-8,0"},EPSG_4663:{towgs84:"-210.502,-66.902,-48.476,2.094,-15.067,-5.817,0.485"},EPSG_4664:{towgs84:"-211.939,137.626,58.3,-0.089,0.251,0.079,0.384"},EPSG_4665:{towgs84:"-105.854,165.589,-38.312,-0.003,-0.026,0.024,-0.048"},EPSG_4666:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},EPSG_4756:{towgs84:"-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188"},EPSG_4723:{towgs84:"-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925"},EPSG_4726:{towgs84:"8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081"},EPSG_4267:{towgs84:"-8.0,160.0,176.0"},EPSG_5365:{towgs84:"-0.16959,0.35312,0.51846,0.03385,-0.16325,0.03446,0.03693"},EPSG_4218:{towgs84:"304.5,306.5,-318.1"},EPSG_4242:{towgs84:"-33.722,153.789,94.959,-8.581,-4.478,4.54,8.95"},EPSG_4216:{towgs84:"-292.295,248.758,429.447,4.9971,2.99,6.6906,1.0289"},ESRI_104105:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},ESRI_104129:{towgs84:"0,0,0"},EPSG_4673:{towgs84:"174.05,-25.49,112.57"},EPSG_4202:{towgs84:"-124,-60,154"},EPSG_4203:{towgs84:"-117.763,-51.51,139.061,0.292,0.443,0.277,-0.191"},EPSG_3819:{towgs84:"595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408"},EPSG_8694:{towgs84:"-93.799,-132.737,-219.073,-1.844,0.648,-6.37,-0.169"},EPSG_4145:{towgs84:"275.57,676.78,229.6"},EPSG_4283:{towgs84:"61.55,-10.87,-40.19,39.4924,32.7221,32.8979,-9.994"},EPSG_4317:{towgs84:"2.3287,-147.0425,-92.0802,-0.3092483,0.32482185,0.49729934,5.68906266"},EPSG_4272:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993"},EPSG_4248:{towgs84:"-307.7,265.3,-363.5"},EPSG_5561:{towgs84:"24,-121,-76"},EPSG_5233:{towgs84:"-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338"},ESRI_104130:{towgs84:"-86,-98,-119"},ESRI_104102:{towgs84:"682,-203,480"},ESRI_37207:{towgs84:"7,-10,-26"},EPSG_4675:{towgs84:"59.935,118.4,-10.871"},ESRI_104109:{towgs84:"-89.121,-348.182,260.871"},ESRI_104112:{towgs84:"-185.583,-230.096,281.361"},ESRI_104113:{towgs84:"25.1,-275.6,222.6"},IGNF_WGS72G:{towgs84:"0,12,6"},IGNF_NTFG:{towgs84:"-168,-60,320"},IGNF_EFATE57G:{towgs84:"-127,-769,472"},IGNF_PGP50G:{towgs84:"324.8,153.6,172.1"},IGNF_REUN47G:{towgs84:"94,-948,-1262"},IGNF_CSG67G:{towgs84:"-186,230,110"},IGNF_GUAD48G:{towgs84:"-467,-16,-300"},IGNF_TAHI51G:{towgs84:"162,117,154"},IGNF_TAHAAG:{towgs84:"65,342,77"},IGNF_NUKU72G:{towgs84:"84,274,65"},IGNF_PETRELS72G:{towgs84:"365,194,166"},IGNF_WALL78G:{towgs84:"253,-133,-127"},IGNF_MAYO50G:{towgs84:"-382,-59,-262"},IGNF_TANNAG:{towgs84:"-139,-967,436"},IGNF_IGN72G:{towgs84:"-13,-348,292"},IGNF_ATIGG:{towgs84:"1118,23,66"},IGNF_FANGA84G:{towgs84:"150.57,158.33,118.32"},IGNF_RUSAT84G:{towgs84:"202.13,174.6,-15.74"},IGNF_KAUE70G:{towgs84:"126.74,300.1,-75.49"},IGNF_MOP90G:{towgs84:"-10.8,-1.8,12.77"},IGNF_MHPF67G:{towgs84:"338.08,212.58,-296.17"},IGNF_TAHI79G:{towgs84:"160.61,116.05,153.69"},IGNF_ANAA92G:{towgs84:"1.5,3.84,4.81"},IGNF_MARQUI72G:{towgs84:"330.91,-13.92,58.56"},IGNF_APAT86G:{towgs84:"143.6,197.82,74.05"},IGNF_TUBU69G:{towgs84:"237.17,171.61,-77.84"},IGNF_STPM50G:{towgs84:"11.363,424.148,373.13"},EPSG_4150:{towgs84:"674.374,15.056,405.346"},EPSG_4754:{towgs84:"-208.4058,-109.8777,-2.5764"},ESRI_104101:{towgs84:"374,150,588"},EPSG_4693:{towgs84:"0,-0.15,0.68"},EPSG_6207:{towgs84:"293.17,726.18,245.36"},EPSG_4153:{towgs84:"-133.63,-157.5,-158.62"},EPSG_4132:{towgs84:"-241.54,-163.64,396.06"},EPSG_4221:{towgs84:"-154.5,150.7,100.4"},EPSG_4266:{towgs84:"-80.7,-132.5,41.1"},EPSG_4193:{towgs84:"-70.9,-151.8,-41.4"},EPSG_5340:{towgs84:"-0.41,0.46,-0.35"},EPSG_4246:{towgs84:"-294.7,-200.1,525.5"},EPSG_4318:{towgs84:"-3.2,-5.7,2.8"},EPSG_4121:{towgs84:"-199.87,74.79,246.62"},EPSG_4223:{towgs84:"-260.1,5.5,432.2"},EPSG_4158:{towgs84:"-0.465,372.095,171.736"},EPSG_4285:{towgs84:"-128.16,-282.42,21.93"},EPSG_4613:{towgs84:"-404.78,685.68,45.47"},EPSG_4607:{towgs84:"195.671,332.517,274.607"},EPSG_4475:{towgs84:"-381.788,-57.501,-256.673"},EPSG_4208:{towgs84:"-157.84,308.54,-146.6"},EPSG_4743:{towgs84:"70.995,-335.916,262.898"},EPSG_4710:{towgs84:"-323.65,551.39,-491.22"},EPSG_7881:{towgs84:"-0.077,0.079,0.086"},EPSG_4682:{towgs84:"283.729,735.942,261.143"},EPSG_4739:{towgs84:"-156,-271,-189"},EPSG_4679:{towgs84:"-80.01,253.26,291.19"},EPSG_4750:{towgs84:"-56.263,16.136,-22.856"},EPSG_4644:{towgs84:"-10.18,-350.43,291.37"},EPSG_4695:{towgs84:"-103.746,-9.614,-255.95"},EPSG_4292:{towgs84:"-355,21,72"},EPSG_4302:{towgs84:"-61.702,284.488,472.052"},EPSG_4143:{towgs84:"-124.76,53,466.79"},EPSG_4606:{towgs84:"-153,153,307"},EPSG_4699:{towgs84:"-770.1,158.4,-498.2"},EPSG_4247:{towgs84:"-273.5,110.6,-357.9"},EPSG_4160:{towgs84:"8.88,184.86,106.69"},EPSG_4161:{towgs84:"-233.43,6.65,173.64"},EPSG_9251:{towgs84:"-9.5,122.9,138.2"},EPSG_9253:{towgs84:"-78.1,101.6,133.3"},EPSG_4297:{towgs84:"-198.383,-240.517,-107.909"},EPSG_4269:{towgs84:"0,0,0"},EPSG_4301:{towgs84:"-147,506,687"},EPSG_4618:{towgs84:"-59,-11,-52"},EPSG_4612:{towgs84:"0,0,0"},EPSG_4678:{towgs84:"44.585,-131.212,-39.544"},EPSG_4250:{towgs84:"-130,29,364"},EPSG_4144:{towgs84:"214,804,268"},EPSG_4147:{towgs84:"-17.51,-108.32,-62.39"},EPSG_4259:{towgs84:"-254.1,-5.36,-100.29"},EPSG_4164:{towgs84:"-76,-138,67"},EPSG_4211:{towgs84:"-378.873,676.002,-46.255"},EPSG_4182:{towgs84:"-422.651,-172.995,84.02"},EPSG_4224:{towgs84:"-143.87,243.37,-33.52"},EPSG_4225:{towgs84:"-205.57,168.77,-4.12"},EPSG_5527:{towgs84:"-67.35,3.88,-38.22"},EPSG_4752:{towgs84:"98,390,-22"},EPSG_4310:{towgs84:"-30,190,89"},EPSG_9248:{towgs84:"-192.26,65.72,132.08"},EPSG_4680:{towgs84:"124.5,-63.5,-281"},EPSG_4701:{towgs84:"-79.9,-158,-168.9"},EPSG_4706:{towgs84:"-146.21,112.63,4.05"},EPSG_4805:{towgs84:"682,-203,480"},EPSG_4201:{towgs84:"-165,-11,206"},EPSG_4210:{towgs84:"-157,-2,-299"},EPSG_4183:{towgs84:"-104,167,-38"},EPSG_4139:{towgs84:"11,72,-101"},EPSG_4668:{towgs84:"-86,-98,-119"},EPSG_4717:{towgs84:"-2,151,181"},EPSG_4732:{towgs84:"102,52,-38"},EPSG_4280:{towgs84:"-377,681,-50"},EPSG_4209:{towgs84:"-138,-105,-289"},EPSG_4261:{towgs84:"31,146,47"},EPSG_4658:{towgs84:"-73,46,-86"},EPSG_4721:{towgs84:"265.025,384.929,-194.046"},EPSG_4222:{towgs84:"-136,-108,-292"},EPSG_4601:{towgs84:"-255,-15,71"},EPSG_4602:{towgs84:"725,685,536"},EPSG_4603:{towgs84:"72,213.7,93"},EPSG_4605:{towgs84:"9,183,236"},EPSG_4621:{towgs84:"137,248,-430"},EPSG_4657:{towgs84:"-28,199,5"},EPSG_4316:{towgs84:"103.25,-100.4,-307.19"},EPSG_4642:{towgs84:"-13,-348,292"},EPSG_4698:{towgs84:"145,-187,103"},EPSG_4192:{towgs84:"-206.1,-174.7,-87.7"},EPSG_4311:{towgs84:"-265,120,-358"},EPSG_4135:{towgs84:"58,-283,-182"},ESRI_104138:{towgs84:"198,-226,-347"},EPSG_4245:{towgs84:"-11,851,5"},EPSG_4142:{towgs84:"-125,53,467"},EPSG_4213:{towgs84:"-106,-87,188"},EPSG_4253:{towgs84:"-133,-77,-51"},EPSG_4129:{towgs84:"-132,-110,-335"},EPSG_4713:{towgs84:"-77,-128,142"},EPSG_4239:{towgs84:"217,823,299"},EPSG_4146:{towgs84:"295,736,257"},EPSG_4155:{towgs84:"-83,37,124"},EPSG_4165:{towgs84:"-173,253,27"},EPSG_4672:{towgs84:"175,-38,113"},EPSG_4236:{towgs84:"-637,-549,-203"},EPSG_4251:{towgs84:"-90,40,88"},EPSG_4271:{towgs84:"-2,374,172"},EPSG_4175:{towgs84:"-88,4,101"},EPSG_4716:{towgs84:"298,-304,-375"},EPSG_4315:{towgs84:"-23,259,-9"},EPSG_4744:{towgs84:"-242.2,-144.9,370.3"},EPSG_4244:{towgs84:"-97,787,86"},EPSG_4293:{towgs84:"616,97,-251"},EPSG_4714:{towgs84:"-127,-769,472"},EPSG_4736:{towgs84:"260,12,-147"},EPSG_6883:{towgs84:"-235,-110,393"},EPSG_6894:{towgs84:"-63,176,185"},EPSG_4205:{towgs84:"-43,-163,45"},EPSG_4256:{towgs84:"41,-220,-134"},EPSG_4262:{towgs84:"639,405,60"},EPSG_4604:{towgs84:"174,359,365"},EPSG_4169:{towgs84:"-115,118,426"},EPSG_4620:{towgs84:"-106,-129,165"},EPSG_4184:{towgs84:"-203,141,53"},EPSG_4616:{towgs84:"-289,-124,60"},EPSG_9403:{towgs84:"-307,-92,127"},EPSG_4684:{towgs84:"-133,-321,50"},EPSG_4708:{towgs84:"-491,-22,435"},EPSG_4707:{towgs84:"114,-116,-333"},EPSG_4709:{towgs84:"145,75,-272"},EPSG_4712:{towgs84:"-205,107,53"},EPSG_4711:{towgs84:"124,-234,-25"},EPSG_4718:{towgs84:"230,-199,-752"},EPSG_4719:{towgs84:"211,147,111"},EPSG_4724:{towgs84:"208,-435,-229"},EPSG_4725:{towgs84:"189,-79,-202"},EPSG_4735:{towgs84:"647,1777,-1124"},EPSG_4722:{towgs84:"-794,119,-298"},EPSG_4728:{towgs84:"-307,-92,127"},EPSG_4734:{towgs84:"-632,438,-609"},EPSG_4727:{towgs84:"912,-58,1227"},EPSG_4729:{towgs84:"185,165,42"},EPSG_4730:{towgs84:"170,42,84"},EPSG_4733:{towgs84:"276,-57,149"},ESRI_37218:{towgs84:"230,-199,-752"},ESRI_37240:{towgs84:"-7,215,225"},ESRI_37221:{towgs84:"252,-209,-751"},ESRI_4305:{towgs84:"-123,-206,219"},ESRI_104139:{towgs84:"-73,-247,227"},EPSG_4748:{towgs84:"51,391,-36"},EPSG_4219:{towgs84:"-384,664,-48"},EPSG_4255:{towgs84:"-333,-222,114"},EPSG_4257:{towgs84:"-587.8,519.75,145.76"},EPSG_4646:{towgs84:"-963,510,-359"},EPSG_6881:{towgs84:"-24,-203,268"},EPSG_6882:{towgs84:"-183,-15,273"},EPSG_4715:{towgs84:"-104,-129,239"},IGNF_RGF93GDD:{towgs84:"0,0,0"},IGNF_RGM04GDD:{towgs84:"0,0,0"},IGNF_RGSPM06GDD:{towgs84:"0,0,0"},IGNF_RGTAAF07GDD:{towgs84:"0,0,0"},IGNF_RGFG95GDD:{towgs84:"0,0,0"},IGNF_RGNCG:{towgs84:"0,0,0"},IGNF_RGPFGDD:{towgs84:"0,0,0"},IGNF_ETRS89G:{towgs84:"0,0,0"},IGNF_RGR92GDD:{towgs84:"0,0,0"},EPSG_4173:{towgs84:"0,0,0"},EPSG_4180:{towgs84:"0,0,0"},EPSG_4619:{towgs84:"0,0,0"},EPSG_4667:{towgs84:"0,0,0"},EPSG_4075:{towgs84:"0,0,0"},EPSG_6706:{towgs84:"0,0,0"},EPSG_7798:{towgs84:"0,0,0"},EPSG_4661:{towgs84:"0,0,0"},EPSG_4669:{towgs84:"0,0,0"},EPSG_8685:{towgs84:"0,0,0"},EPSG_4151:{towgs84:"0,0,0"},EPSG_9702:{towgs84:"0,0,0"},EPSG_4758:{towgs84:"0,0,0"},EPSG_4761:{towgs84:"0,0,0"},EPSG_4765:{towgs84:"0,0,0"},EPSG_8997:{towgs84:"0,0,0"},EPSG_4023:{towgs84:"0,0,0"},EPSG_4670:{towgs84:"0,0,0"},EPSG_4694:{towgs84:"0,0,0"},EPSG_4148:{towgs84:"0,0,0"},EPSG_4163:{towgs84:"0,0,0"},EPSG_4167:{towgs84:"0,0,0"},EPSG_4189:{towgs84:"0,0,0"},EPSG_4190:{towgs84:"0,0,0"},EPSG_4176:{towgs84:"0,0,0"},EPSG_4659:{towgs84:"0,0,0"},EPSG_3824:{towgs84:"0,0,0"},EPSG_3889:{towgs84:"0,0,0"},EPSG_4046:{towgs84:"0,0,0"},EPSG_4081:{towgs84:"0,0,0"},EPSG_4558:{towgs84:"0,0,0"},EPSG_4483:{towgs84:"0,0,0"},EPSG_5013:{towgs84:"0,0,0"},EPSG_5264:{towgs84:"0,0,0"},EPSG_5324:{towgs84:"0,0,0"},EPSG_5354:{towgs84:"0,0,0"},EPSG_5371:{towgs84:"0,0,0"},EPSG_5373:{towgs84:"0,0,0"},EPSG_5381:{towgs84:"0,0,0"},EPSG_5393:{towgs84:"0,0,0"},EPSG_5489:{towgs84:"0,0,0"},EPSG_5593:{towgs84:"0,0,0"},EPSG_6135:{towgs84:"0,0,0"},EPSG_6365:{towgs84:"0,0,0"},EPSG_5246:{towgs84:"0,0,0"},EPSG_7886:{towgs84:"0,0,0"},EPSG_8431:{towgs84:"0,0,0"},EPSG_8427:{towgs84:"0,0,0"},EPSG_8699:{towgs84:"0,0,0"},EPSG_8818:{towgs84:"0,0,0"},EPSG_4757:{towgs84:"0,0,0"},EPSG_9140:{towgs84:"0,0,0"},EPSG_8086:{towgs84:"0,0,0"},EPSG_4686:{towgs84:"0,0,0"},EPSG_4737:{towgs84:"0,0,0"},EPSG_4702:{towgs84:"0,0,0"},EPSG_4747:{towgs84:"0,0,0"},EPSG_4749:{towgs84:"0,0,0"},EPSG_4674:{towgs84:"0,0,0"},EPSG_4755:{towgs84:"0,0,0"},EPSG_4759:{towgs84:"0,0,0"},EPSG_4762:{towgs84:"0,0,0"},EPSG_4763:{towgs84:"0,0,0"},EPSG_4764:{towgs84:"0,0,0"},EPSG_4166:{towgs84:"0,0,0"},EPSG_4170:{towgs84:"0,0,0"},EPSG_5546:{towgs84:"0,0,0"},EPSG_7844:{towgs84:"0,0,0"},EPSG_4818:{towgs84:"589,76,480"}};for(var X1 in Yr){var lo=Yr[X1];lo.datumName&&(Yr[lo.datumName]=lo)}function q1(n,t,e,i,s,r,o){var a={};return n===void 0||n==="none"?a.datum_type=ah:a.datum_type=i1,t&&(a.datum_params=t.map(parseFloat),(a.datum_params[0]!==0||a.datum_params[1]!==0||a.datum_params[2]!==0)&&(a.datum_type=wi),a.datum_params.length>3&&(a.datum_params[3]!==0||a.datum_params[4]!==0||a.datum_params[5]!==0||a.datum_params[6]!==0)&&(a.datum_type=Ri,a.datum_params[3]*=Is,a.datum_params[4]*=Is,a.datum_params[5]*=Is,a.datum_params[6]=a.datum_params[6]/1e6+1)),o&&(a.datum_type=ns,a.grids=o),a.a=e,a.b=i,a.es=s,a.ep2=r,a}var Ch={};function $1(n,t,e){return t instanceof ArrayBuffer?Y1(n,t,e):{ready:j1(n,t)}}function Y1(n,t,e){var i=!0;e!==void 0&&e.includeErrorFields===!1&&(i=!1);var s=new DataView(t),r=J1(s),o=Q1(s,r),a=tv(s,o,r,i),h={header:o,subgrids:a};return Ch[n]=h,h}async function j1(n,t){for(var e=[],i=await t.getImageCount(),s=i-1;s>=0;s--){var r=await t.getImage(s),o=await r.readRasters(),a=o,h=[r.getWidth(),r.getHeight()],l=r.getBoundingBox().map(mc),u=[r.fileDirectory.ModelPixelScale[0],r.fileDirectory.ModelPixelScale[1]].map(mc),c=l[0]+(h[0]-1)*u[0],f=l[3]-(h[1]-1)*u[1],d=a[0],_=a[1],g=[];for(let E=h[1]-1;E>=0;E--)for(let b=h[0]-1;b>=0;b--){var m=E*h[0]+b;g.push([-$n(_[m]),$n(d[m])])}e.push({del:u,lim:h,ll:[-c,f],cvs:g})}var p={header:{nSubgrids:i},subgrids:e};return Ch[n]=p,p}function K1(n){if(n===void 0)return null;var t=n.split(",");return t.map(Z1)}function Z1(n){if(n.length===0)return null;var t=n[0]==="@";return t&&(n=n.slice(1)),n==="null"?{name:"null",mandatory:!t,grid:null,isNull:!0}:{name:n,mandatory:!t,grid:Ch[n]||null,isNull:!1}}function mc(n){return n*Math.PI/180}function $n(n){return n/3600*Math.PI/180}function J1(n){var t=n.getInt32(8,!1);return t===11?!1:(t=n.getInt32(8,!0),t!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function Q1(n,t){return{nFields:n.getInt32(8,t),nSubgridFields:n.getInt32(24,t),nSubgrids:n.getInt32(40,t),shiftType:lh(n,56,64).trim(),fromSemiMajorAxis:n.getFloat64(120,t),fromSemiMinorAxis:n.getFloat64(136,t),toSemiMajorAxis:n.getFloat64(152,t),toSemiMinorAxis:n.getFloat64(168,t)}}function lh(n,t,e){return String.fromCharCode.apply(null,new Uint8Array(n.buffer.slice(t,e)))}function tv(n,t,e,i){for(var s=176,r=[],o=0;o<t.nSubgrids;o++){var a=nv(n,s,e),h=iv(n,s,a,e,i),l=Math.round(1+(a.upperLongitude-a.lowerLongitude)/a.longitudeInterval),u=Math.round(1+(a.upperLatitude-a.lowerLatitude)/a.latitudeInterval);r.push({ll:[$n(a.lowerLongitude),$n(a.lowerLatitude)],del:[$n(a.longitudeInterval),$n(a.latitudeInterval)],lim:[l,u],count:a.gridNodeCount,cvs:ev(h)});var c=16;i===!1&&(c=8),s+=176+a.gridNodeCount*c}return r}function ev(n){return n.map(function(t){return[$n(t.longitudeShift),$n(t.latitudeShift)]})}function nv(n,t,e){return{name:lh(n,t+8,t+16).trim(),parent:lh(n,t+24,t+24+8).trim(),lowerLatitude:n.getFloat64(t+72,e),upperLatitude:n.getFloat64(t+88,e),lowerLongitude:n.getFloat64(t+104,e),upperLongitude:n.getFloat64(t+120,e),latitudeInterval:n.getFloat64(t+136,e),longitudeInterval:n.getFloat64(t+152,e),gridNodeCount:n.getInt32(t+168,e)}}function iv(n,t,e,i,s){var r=t+176,o=16;s===!1&&(o=8);for(var a=[],h=0;h<e.gridNodeCount;h++){var l={latitudeShift:n.getFloat32(r+h*o,i),longitudeShift:n.getFloat32(r+h*o+4,i)};s!==!1&&(l.latitudeAccuracy=n.getFloat32(r+h*o+8,i),l.longitudeAccuracy=n.getFloat32(r+h*o+12,i)),a.push(l)}return a}function hn(n,t){if(!(this instanceof hn))return new hn(n);this.forward=null,this.inverse=null,this.init=null,this.name,this.names=null,this.title,t=t||function(l){if(l)throw l};var e=C1(n);if(typeof e!="object"){t("Could not parse to valid json: "+n);return}var i=hn.projections.get(e.projName);if(!i){t("Could not get projection name from: "+n);return}if(e.datumCode&&e.datumCode!=="none"){var s=ni(Yr,e.datumCode);s&&(e.datum_params=e.datum_params||(s.towgs84?s.towgs84.split(","):null),e.ellps=s.ellipse,e.datumName=s.datumName?s.datumName:e.datumCode)}e.k0=e.k0||1,e.axis=e.axis||"enu",e.ellps=e.ellps||"wgs84",e.lat1=e.lat1||e.lat0;var r=W1(e.a,e.b,e.rf,e.ellps,e.sphere),o=V1(r.a,r.b,r.rf,e.R_A),a=K1(e.nadgrids),h=e.datum||q1(e.datumCode,e.datum_params,r.a,r.b,o.es,o.ep2,a);dc(this,e),dc(this,i),this.a=r.a,this.b=r.b,this.rf=r.rf,this.sphere=r.sphere,this.es=o.es,this.e=o.e,this.ep2=o.ep2,this.datum=h,"init"in this&&typeof this.init=="function"&&this.init(),t(null,this)}hn.projections=k1;hn.projections.start();function sv(n,t){return n.datum_type!==t.datum_type||n.a!==t.a||Math.abs(n.es-t.es)>5e-11?!1:n.datum_type===wi?n.datum_params[0]===t.datum_params[0]&&n.datum_params[1]===t.datum_params[1]&&n.datum_params[2]===t.datum_params[2]:n.datum_type===Ri?n.datum_params[0]===t.datum_params[0]&&n.datum_params[1]===t.datum_params[1]&&n.datum_params[2]===t.datum_params[2]&&n.datum_params[3]===t.datum_params[3]&&n.datum_params[4]===t.datum_params[4]&&n.datum_params[5]===t.datum_params[5]&&n.datum_params[6]===t.datum_params[6]:!0}function Cu(n,t,e){var i=n.x,s=n.y,r=n.z?n.z:0,o,a,h,l;if(s<-K&&s>-1.001*K)s=-K;else if(s>K&&s<1.001*K)s=K;else{if(s<-K)return{x:-1/0,y:-1/0,z:n.z};if(s>K)return{x:1/0,y:1/0,z:n.z}}return i>Math.PI&&(i-=2*Math.PI),a=Math.sin(s),l=Math.cos(s),h=a*a,o=e/Math.sqrt(1-t*h),{x:(o+r)*l*Math.cos(i),y:(o+r)*l*Math.sin(i),z:(o*(1-t)+r)*a}}function Pu(n,t,e,i){var s=1e-12,r=s*s,o=30,a,h,l,u,c,f,d,_,g,m,p,E,b,M=n.x,w=n.y,R=n.z?n.z:0,A,L,y;if(a=Math.sqrt(M*M+w*w),h=Math.sqrt(M*M+w*w+R*R),a/e<s){if(A=0,h/e<s)return L=K,y=-i,{x:n.x,y:n.y,z:n.z}}else A=Math.atan2(w,M);l=R/h,u=a/h,c=1/Math.sqrt(1-t*(2-t)*u*u),_=u*(1-t)*c,g=l*c,b=0;do b++,d=e/Math.sqrt(1-t*g*g),y=a*_+R*g-d*(1-t*g*g),f=t*d/(d+y),c=1/Math.sqrt(1-f*(2-f)*u*u),m=u*(1-f)*c,p=l*c,E=p*_-m*g,_=m,g=p;while(E*E>r&&b<o);return L=Math.atan(p/Math.abs(m)),{x:A,y:L,z:y}}function rv(n,t,e){if(t===wi)return{x:n.x+e[0],y:n.y+e[1],z:n.z+e[2]};if(t===Ri){var i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],h=e[5],l=e[6];return{x:l*(n.x-h*n.y+a*n.z)+i,y:l*(h*n.x+n.y-o*n.z)+s,z:l*(-a*n.x+o*n.y+n.z)+r}}}function av(n,t,e){if(t===wi)return{x:n.x-e[0],y:n.y-e[1],z:n.z-e[2]};if(t===Ri){var i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],h=e[5],l=e[6],u=(n.x-i)/l,c=(n.y-s)/l,f=(n.z-r)/l;return{x:u+h*c-a*f,y:-h*u+c+o*f,z:a*u-o*c+f}}}function Fr(n){return n===wi||n===Ri}function ov(n,t,e){if(sv(n,t)||n.datum_type===ah||t.datum_type===ah)return e;var i=n.a,s=n.es;if(n.datum_type===ns){var r=_c(n,!1,e);if(r!==0)return;i=oc,s=hc}var o=t.a,a=t.b,h=t.es;if(t.datum_type===ns&&(o=oc,a=s1,h=hc),s===h&&i===o&&!Fr(n.datum_type)&&!Fr(t.datum_type))return e;if(e=Cu(e,s,i),Fr(n.datum_type)&&(e=rv(e,n.datum_type,n.datum_params)),Fr(t.datum_type)&&(e=av(e,t.datum_type,t.datum_params)),e=Pu(e,h,o,a),t.datum_type===ns){var l=_c(t,!0,e);if(l!==0)return}return e}function _c(n,t,e){if(n.grids===null||n.grids.length===0)return console.log("Grid shift grids not found"),-1;var i={x:-e.x,y:e.y},s={x:Number.NaN,y:Number.NaN},r=[];t:for(var o=0;o<n.grids.length;o++){var a=n.grids[o];if(r.push(a.name),a.isNull){s=i;break}if(a.grid===null){if(a.mandatory)return console.log("Unable to find mandatory grid '"+a.name+"'"),-1;continue}for(var h=a.grid.subgrids,l=0,u=h.length;l<u;l++){var c=h[l],f=(Math.abs(c.del[1])+Math.abs(c.del[0]))/1e4,d=c.ll[0]-f,_=c.ll[1]-f,g=c.ll[0]+(c.lim[0]-1)*c.del[0]+f,m=c.ll[1]+(c.lim[1]-1)*c.del[1]+f;if(!(_>i.y||d>i.x||m<i.y||g<i.x)&&(s=hv(i,t,c),!isNaN(s.x)))break t}}return isNaN(s.x)?(console.log("Failed to find a grid shift table for location '"+-i.x*pn+" "+i.y*pn+" tried: '"+r+"'"),-1):(e.x=-s.x,e.y=s.y,0)}function hv(n,t,e){var i={x:Number.NaN,y:Number.NaN};if(isNaN(n.x))return i;var s={x:n.x,y:n.y};s.x-=e.ll[0],s.y-=e.ll[1],s.x=ct(s.x-Math.PI)+Math.PI;var r=gc(s,e);if(t){if(isNaN(r.x))return i;r.x=s.x-r.x,r.y=s.y-r.y;var o=9,a=1e-12,h,l;do{if(l=gc(r,e),isNaN(l.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}h={x:s.x-(l.x+r.x),y:s.y-(l.y+r.y)},r.x+=h.x,r.y+=h.y}while(o--&&Math.abs(h.x)>a&&Math.abs(h.y)>a);if(o<0)return console.log("Inverse grid shift iterator failed to converge."),i;i.x=ct(r.x+e.ll[0]),i.y=r.y+e.ll[1]}else isNaN(r.x)||(i.x=n.x+r.x,i.y=n.y+r.y);return i}function gc(n,t){var e={x:n.x/t.del[0],y:n.y/t.del[1]},i={x:Math.floor(e.x),y:Math.floor(e.y)},s={x:e.x-1*i.x,y:e.y-1*i.y},r={x:Number.NaN,y:Number.NaN},o;if(i.x<0||i.x>=t.lim[0]||i.y<0||i.y>=t.lim[1])return r;o=i.y*t.lim[0]+i.x;var a={x:t.cvs[o][0],y:t.cvs[o][1]};o++;var h={x:t.cvs[o][0],y:t.cvs[o][1]};o+=t.lim[0];var l={x:t.cvs[o][0],y:t.cvs[o][1]};o--;var u={x:t.cvs[o][0],y:t.cvs[o][1]},c=s.x*s.y,f=s.x*(1-s.y),d=(1-s.x)*(1-s.y),_=(1-s.x)*s.y;return r.x=d*a.x+f*h.x+_*u.x+c*l.x,r.y=d*a.y+f*h.y+_*u.y+c*l.y,r}function vc(n,t,e){var i=e.x,s=e.y,r=e.z||0,o,a,h,l={};for(h=0;h<3;h++)if(!(t&&h===2&&e.z===void 0))switch(h===0?(o=i,"ew".indexOf(n.axis[h])!==-1?a="x":a="y"):h===1?(o=s,"ns".indexOf(n.axis[h])!==-1?a="y":a="x"):(o=r,a="z"),n.axis[h]){case"e":l[a]=o;break;case"w":l[a]=-o;break;case"n":l[a]=o;break;case"s":l[a]=-o;break;case"u":e[a]!==void 0&&(l.z=o);break;case"d":e[a]!==void 0&&(l.z=-o);break;default:return null}return l}function Iu(n){var t={x:n[0],y:n[1]};return n.length>2&&(t.z=n[2]),n.length>3&&(t.m=n[3]),t}function lv(n){xc(n.x),xc(n.y)}function xc(n){if(typeof Number.isFinite=="function"){if(Number.isFinite(n))return;throw new TypeError("coordinates must be finite numbers")}if(typeof n!="number"||n!==n||!isFinite(n))throw new TypeError("coordinates must be finite numbers")}function cv(n,t){return(n.datum.datum_type===wi||n.datum.datum_type===Ri||n.datum.datum_type===ns)&&t.datumCode!=="WGS84"||(t.datum.datum_type===wi||t.datum.datum_type===Ri||t.datum.datum_type===ns)&&n.datumCode!=="WGS84"}function ra(n,t,e,i){var s;Array.isArray(e)?e=Iu(e):e={x:e.x,y:e.y,z:e.z,m:e.m};var r=e.z!==void 0;if(lv(e),n.datum&&t.datum&&cv(n,t)&&(s=new hn("WGS84"),e=ra(n,s,e,i),n=s),i&&n.axis!=="enu"&&(e=vc(n,!1,e)),n.projName==="longlat")e={x:e.x*Me,y:e.y*Me,z:e.z||0};else if(n.to_meter&&(e={x:e.x*n.to_meter,y:e.y*n.to_meter,z:e.z||0}),e=n.inverse(e),!e)return;if(n.from_greenwich&&(e.x+=n.from_greenwich),e=ov(n.datum,t.datum,e),!!e)return e=e,t.from_greenwich&&(e={x:e.x-t.from_greenwich,y:e.y,z:e.z||0}),t.projName==="longlat"?e={x:e.x*pn,y:e.y*pn,z:e.z||0}:(e=t.forward(e),t.to_meter&&(e={x:e.x/t.to_meter,y:e.y/t.to_meter,z:e.z||0})),i&&t.axis!=="enu"?vc(t,!0,e):(e&&!r&&delete e.z,e)}var Mc=hn("WGS84");function co(n,t,e,i){var s,r,o;return Array.isArray(e)?(s=ra(n,t,e,i)||{x:NaN,y:NaN},e.length>2?typeof n.name<"u"&&n.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"?typeof s.z=="number"?[s.x,s.y,s.z].concat(e.slice(3)):[s.x,s.y,e[2]].concat(e.slice(3)):[s.x,s.y].concat(e.slice(2)):[s.x,s.y]):(r=ra(n,t,e,i),o=Object.keys(e),o.length===2||o.forEach(function(a){if(typeof n.name<"u"&&n.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"){if(a==="x"||a==="y"||a==="z")return}else if(a==="x"||a==="y")return;r[a]=e[a]}),r)}function Or(n){return n instanceof hn?n:typeof n=="object"&&"oProj"in n?n.oProj:hn(n)}function uv(n,t,e){var i,s,r=!1,o;return typeof t>"u"?(s=Or(n),i=Mc,r=!0):(typeof t.x<"u"||Array.isArray(t))&&(e=t,s=Or(n),i=Mc,r=!0),i||(i=Or(n)),s||(s=Or(t)),e?co(i,s,e):(o={forward:function(a,h){return co(i,s,a,h)},inverse:function(a,h){return co(s,i,a,h)}},r&&(o.oProj=s),o)}var yc=6,Lu="AJSAJS",Du="AFAFAF",Ji=65,Ne=73,Ye=79,As=86,ws=90;const fv={forward:Nu,inverse:dv,toPoint:Uu};function Nu(n,t){return t=t||5,_v(pv({lat:n[1],lon:n[0]}),t)}function dv(n){var t=Ph(Ou(n.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat,t.lon,t.lat]:[t.left,t.bottom,t.right,t.top]}function Uu(n){var t=Ph(Ou(n.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat]:[(t.left+t.right)/2,(t.top+t.bottom)/2]}function uo(n){return n*(Math.PI/180)}function Sc(n){return 180*(n/Math.PI)}function pv(n){var t=n.lat,e=n.lon,i=6378137,s=.00669438,r=.9996,o,a,h,l,u,c,f,d=uo(t),_=uo(e),g,m;m=Math.floor((e+180)/6)+1,e===180&&(m=60),t>=56&&t<64&&e>=3&&e<12&&(m=32),t>=72&&t<84&&(e>=0&&e<9?m=31:e>=9&&e<21?m=33:e>=21&&e<33?m=35:e>=33&&e<42&&(m=37)),o=(m-1)*6-180+3,g=uo(o),a=s/(1-s),h=i/Math.sqrt(1-s*Math.sin(d)*Math.sin(d)),l=Math.tan(d)*Math.tan(d),u=a*Math.cos(d)*Math.cos(d),c=Math.cos(d)*(_-g),f=i*((1-s/4-3*s*s/64-5*s*s*s/256)*d-(3*s/8+3*s*s/32+45*s*s*s/1024)*Math.sin(2*d)+(15*s*s/256+45*s*s*s/1024)*Math.sin(4*d)-35*s*s*s/3072*Math.sin(6*d));var p=r*h*(c+(1-l+u)*c*c*c/6+(5-18*l+l*l+72*u-58*a)*c*c*c*c*c/120)+5e5,E=r*(f+h*Math.tan(d)*(c*c/2+(5-l+9*u+4*u*u)*c*c*c*c/24+(61-58*l+l*l+600*u-330*a)*c*c*c*c*c*c/720));return t<0&&(E+=1e7),{northing:Math.round(E),easting:Math.round(p),zoneNumber:m,zoneLetter:mv(t)}}function Ph(n){var t=n.northing,e=n.easting,i=n.zoneLetter,s=n.zoneNumber;if(s<0||s>60)return null;var r=.9996,o=6378137,a=.00669438,h,l=(1-Math.sqrt(1-a))/(1+Math.sqrt(1-a)),u,c,f,d,_,g,m,p,E,b=e-5e5,M=t;i<"N"&&(M-=1e7),m=(s-1)*6-180+3,h=a/(1-a),g=M/r,p=g/(o*(1-a/4-3*a*a/64-5*a*a*a/256)),E=p+(3*l/2-27*l*l*l/32)*Math.sin(2*p)+(21*l*l/16-55*l*l*l*l/32)*Math.sin(4*p)+151*l*l*l/96*Math.sin(6*p),u=o/Math.sqrt(1-a*Math.sin(E)*Math.sin(E)),c=Math.tan(E)*Math.tan(E),f=h*Math.cos(E)*Math.cos(E),d=o*(1-a)/Math.pow(1-a*Math.sin(E)*Math.sin(E),1.5),_=b/(u*r);var w=E-u*Math.tan(E)/d*(_*_/2-(5+3*c+10*f-4*f*f-9*h)*_*_*_*_/24+(61+90*c+298*f+45*c*c-252*h-3*f*f)*_*_*_*_*_*_/720);w=Sc(w);var R=(_-(1+2*c+f)*_*_*_/6+(5-2*f+28*c-3*f*f+8*h+24*c*c)*_*_*_*_*_/120)/Math.cos(E);R=m+Sc(R);var A;if(n.accuracy){var L=Ph({northing:n.northing+n.accuracy,easting:n.easting+n.accuracy,zoneLetter:n.zoneLetter,zoneNumber:n.zoneNumber});A={top:L.lat,right:L.lon,bottom:w,left:R}}else A={lat:w,lon:R};return A}function mv(n){var t="Z";return 84>=n&&n>=72?t="X":72>n&&n>=64?t="W":64>n&&n>=56?t="V":56>n&&n>=48?t="U":48>n&&n>=40?t="T":40>n&&n>=32?t="S":32>n&&n>=24?t="R":24>n&&n>=16?t="Q":16>n&&n>=8?t="P":8>n&&n>=0?t="N":0>n&&n>=-8?t="M":-8>n&&n>=-16?t="L":-16>n&&n>=-24?t="K":-24>n&&n>=-32?t="J":-32>n&&n>=-40?t="H":-40>n&&n>=-48?t="G":-48>n&&n>=-56?t="F":-56>n&&n>=-64?t="E":-64>n&&n>=-72?t="D":-72>n&&n>=-80&&(t="C"),t}function _v(n,t){var e="00000"+n.easting,i="00000"+n.northing;return n.zoneNumber+n.zoneLetter+gv(n.easting,n.northing,n.zoneNumber)+e.substr(e.length-5,t)+i.substr(i.length-5,t)}function gv(n,t,e){var i=Fu(e),s=Math.floor(n/1e5),r=Math.floor(t/1e5)%20;return vv(s,r,i)}function Fu(n){var t=n%yc;return t===0&&(t=yc),t}function vv(n,t,e){var i=e-1,s=Lu.charCodeAt(i),r=Du.charCodeAt(i),o=s+n-1,a=r+t,h=!1;o>ws&&(o=o-ws+Ji-1,h=!0),(o===Ne||s<Ne&&o>Ne||(o>Ne||s<Ne)&&h)&&o++,(o===Ye||s<Ye&&o>Ye||(o>Ye||s<Ye)&&h)&&(o++,o===Ne&&o++),o>ws&&(o=o-ws+Ji-1),a>As?(a=a-As+Ji-1,h=!0):h=!1,(a===Ne||r<Ne&&a>Ne||(a>Ne||r<Ne)&&h)&&a++,(a===Ye||r<Ye&&a>Ye||(a>Ye||r<Ye)&&h)&&(a++,a===Ne&&a++),a>As&&(a=a-As+Ji-1);var l=String.fromCharCode(o)+String.fromCharCode(a);return l}function Ou(n){if(n&&n.length===0)throw"MGRSPoint coverting from nothing";for(var t=n.length,e=null,i="",s,r=0;!/[A-Z]/.test(s=n.charAt(r));){if(r>=2)throw"MGRSPoint bad conversion from: "+n;i+=s,r++}var o=parseInt(i,10);if(r===0||r+3>t)throw"MGRSPoint bad conversion from: "+n;var a=n.charAt(r++);if(a<="A"||a==="B"||a==="Y"||a>="Z"||a==="I"||a==="O")throw"MGRSPoint zone letter "+a+" not handled: "+n;e=n.substring(r,r+=2);for(var h=Fu(o),l=xv(e.charAt(0),h),u=Mv(e.charAt(1),h);u<yv(a);)u+=2e6;var c=t-r;if(c%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+n;var f=c/2,d=0,_=0,g,m,p,E,b;return f>0&&(g=1e5/Math.pow(10,f),m=n.substring(r,r+f),d=parseFloat(m)*g,p=n.substring(r+f),_=parseFloat(p)*g),E=d+l,b=_+u,{easting:E,northing:b,zoneLetter:a,zoneNumber:o,accuracy:g}}function xv(n,t){for(var e=Lu.charCodeAt(t-1),i=1e5,s=!1;e!==n.charCodeAt(0);){if(e++,e===Ne&&e++,e===Ye&&e++,e>ws){if(s)throw"Bad character: "+n;e=Ji,s=!0}i+=1e5}return i}function Mv(n,t){if(n>"V")throw"MGRSPoint given invalid Northing "+n;for(var e=Du.charCodeAt(t-1),i=0,s=!1;e!==n.charCodeAt(0);){if(e++,e===Ne&&e++,e===Ye&&e++,e>As){if(s)throw"Bad character: "+n;e=Ji,s=!0}i+=1e5}return i}function yv(n){var t;switch(n){case"C":t=11e5;break;case"D":t=2e6;break;case"E":t=28e5;break;case"F":t=37e5;break;case"G":t=46e5;break;case"H":t=55e5;break;case"J":t=64e5;break;case"K":t=73e5;break;case"L":t=82e5;break;case"M":t=91e5;break;case"N":t=0;break;case"P":t=8e5;break;case"Q":t=17e5;break;case"R":t=26e5;break;case"S":t=35e5;break;case"T":t=44e5;break;case"U":t=53e5;break;case"V":t=62e5;break;case"W":t=7e6;break;case"X":t=79e5;break;default:t=-1}if(t>=0)return t;throw"Invalid zone letter: "+n}function ls(n,t,e){if(!(this instanceof ls))return new ls(n,t,e);if(Array.isArray(n))this.x=n[0],this.y=n[1],this.z=n[2]||0;else if(typeof n=="object")this.x=n.x,this.y=n.y,this.z=n.z||0;else if(typeof n=="string"&&typeof t>"u"){var i=n.split(",");this.x=parseFloat(i[0]),this.y=parseFloat(i[1]),this.z=parseFloat(i[2])||0}else this.x=n,this.y=t,this.z=e||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}ls.fromMGRS=function(n){return new ls(Uu(n))};ls.prototype.toMGRS=function(n){return Nu([this.x,this.y],n)};var Sv=1,Ev=.25,Ec=.046875,bc=.01953125,Tc=.01068115234375,bv=.75,Tv=.46875,Av=.013020833333333334,wv=.007120768229166667,Rv=.3645833333333333,Cv=.005696614583333333,Pv=.3076171875;function Ih(n){var t=[];t[0]=Sv-n*(Ev+n*(Ec+n*(bc+n*Tc))),t[1]=n*(bv-n*(Ec+n*(bc+n*Tc)));var e=n*n;return t[2]=e*(Tv-n*(Av+n*wv)),e*=n,t[3]=e*(Rv-n*Cv),t[4]=e*n*Pv,t}function ds(n,t,e,i){return e*=t,t*=t,i[0]*n-e*(i[1]+t*(i[2]+t*(i[3]+t*i[4])))}var Iv=20;function Lh(n,t,e){for(var i=1/(1-t),s=n,r=Iv;r;--r){var o=Math.sin(s),a=1-t*o*o;if(a=(ds(s,o,Math.cos(s),e)-n)*(a*Math.sqrt(a))*i,s-=a,Math.abs(a)<at)return s}return s}function Lv(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=Ih(this.es),this.ml0=ds(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function Dv(n){var t=n.x,e=n.y,i=ct(t-this.long0),s,r,o,a=Math.sin(e),h=Math.cos(e);if(this.es){var u=h*i,c=Math.pow(u,2),f=this.ep2*Math.pow(h,2),d=Math.pow(f,2),_=Math.abs(h)>at?Math.tan(e):0,g=Math.pow(_,2),m=Math.pow(g,2);s=1-this.es*Math.pow(a,2),u=u/Math.sqrt(s);var p=ds(e,a,h,this.en);r=this.a*(this.k0*u*(1+c/6*(1-g+f+c/20*(5-18*g+m+14*f-58*g*f+c/42*(61+179*m-m*g-479*g)))))+this.x0,o=this.a*(this.k0*(p-this.ml0+a*i*u/2*(1+c/12*(5-g+9*f+4*d+c/30*(61+m-58*g+270*f-330*g*f+c/56*(1385+543*m-m*g-3111*g))))))+this.y0}else{var l=h*Math.sin(i);if(Math.abs(Math.abs(l)-1)<at)return 93;if(r=.5*this.a*this.k0*Math.log((1+l)/(1-l))+this.x0,o=h*Math.cos(i)/Math.sqrt(1-Math.pow(l,2)),l=Math.abs(o),l>=1){if(l-1>at)return 93;o=0}else o=Math.acos(o);e<0&&(o=-o),o=this.a*this.k0*(o-this.lat0)+this.y0}return n.x=r,n.y=o,n}function Nv(n){var t,e,i,s,r=(n.x-this.x0)*(1/this.a),o=(n.y-this.y0)*(1/this.a);if(this.es)if(t=this.ml0+o/this.k0,e=Lh(t,this.es,this.en),Math.abs(e)<K){var c=Math.sin(e),f=Math.cos(e),d=Math.abs(f)>at?Math.tan(e):0,_=this.ep2*Math.pow(f,2),g=Math.pow(_,2),m=Math.pow(d,2),p=Math.pow(m,2);t=1-this.es*Math.pow(c,2);var E=r*Math.sqrt(t)/this.k0,b=Math.pow(E,2);t=t*d,i=e-t*b/(1-this.es)*.5*(1-b/12*(5+3*m-9*_*m+_-4*g-b/30*(61+90*m-252*_*m+45*p+46*_-b/56*(1385+3633*m+4095*p+1574*p*m)))),s=ct(this.long0+E*(1-b/6*(1+2*m+_-b/20*(5+28*m+24*p+8*_*m+6*_-b/42*(61+662*m+1320*p+720*p*m))))/f)}else i=K*Js(o),s=0;else{var a=Math.exp(r/this.k0),h=.5*(a-1/a),l=this.lat0+o/this.k0,u=Math.cos(l);t=Math.sqrt((1-Math.pow(u,2))/(1+Math.pow(h,2))),i=Math.asin(t),o<0&&(i=-i),h===0&&u===0?s=0:s=ct(Math.atan2(h,u)+this.long0)}return n.x=s,n.y=i,n}var Uv=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const jr={init:Lv,forward:Dv,inverse:Nv,names:Uv};function Gu(n){var t=Math.exp(n);return t=(t-1/t)/2,t}function Ue(n,t){n=Math.abs(n),t=Math.abs(t);var e=Math.max(n,t),i=Math.min(n,t)/(e||1);return e*Math.sqrt(1+Math.pow(i,2))}function Fv(n){var t=1+n,e=t-1;return e===0?n:n*Math.log(t)/e}function Ov(n){var t=Math.abs(n);return t=Fv(t*(1+t/(Ue(1,t)+1))),n<0?-t:t}function Dh(n,t){for(var e=2*Math.cos(2*t),i=n.length-1,s=n[i],r=0,o;--i>=0;)o=-r+e*s+n[i],r=s,s=o;return t+o*Math.sin(2*t)}function Gv(n,t){for(var e=2*Math.cos(t),i=n.length-1,s=n[i],r=0,o;--i>=0;)o=-r+e*s+n[i],r=s,s=o;return Math.sin(t)*o}function Bv(n){var t=Math.exp(n);return t=(t+1/t)/2,t}function Bu(n,t,e){for(var i=Math.sin(t),s=Math.cos(t),r=Gu(e),o=Bv(e),a=2*s*o,h=-2*i*r,l=n.length-1,u=n[l],c=0,f=0,d=0,_,g;--l>=0;)_=f,g=c,f=u,c=d,u=-_+a*f-h*c+n[l],d=-g+h*f+a*c;return a=i*o,h=s*r,[a*u-h*d,a*d+h*u]}function zv(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(jr.init.apply(this),this.forward=jr.forward,this.inverse=jr.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var n=this.es/(1+Math.sqrt(1-this.es)),t=n/(2-n),e=t;this.cgb[0]=t*(2+t*(-2/3+t*(-2+t*(116/45+t*(26/45+t*(-2854/675)))))),this.cbg[0]=t*(-2+t*(2/3+t*(4/3+t*(-82/45+t*(32/45+t*(4642/4725)))))),e=e*t,this.cgb[1]=e*(7/3+t*(-8/5+t*(-227/45+t*(2704/315+t*(2323/945))))),this.cbg[1]=e*(5/3+t*(-16/15+t*(-13/9+t*(904/315+t*(-1522/945))))),e=e*t,this.cgb[2]=e*(56/15+t*(-136/35+t*(-1262/105+t*(73814/2835)))),this.cbg[2]=e*(-26/15+t*(34/21+t*(8/5+t*(-12686/2835)))),e=e*t,this.cgb[3]=e*(4279/630+t*(-332/35+t*(-399572/14175))),this.cbg[3]=e*(1237/630+t*(-12/5+t*(-24832/14175))),e=e*t,this.cgb[4]=e*(4174/315+t*(-144838/6237)),this.cbg[4]=e*(-734/315+t*(109598/31185)),e=e*t,this.cgb[5]=e*(601676/22275),this.cbg[5]=e*(444337/155925),e=Math.pow(t,2),this.Qn=this.k0/(1+t)*(1+e*(1/4+e*(1/64+e/256))),this.utg[0]=t*(-.5+t*(2/3+t*(-37/96+t*(1/360+t*(81/512+t*(-96199/604800)))))),this.gtu[0]=t*(.5+t*(-2/3+t*(5/16+t*(41/180+t*(-127/288+t*(7891/37800)))))),this.utg[1]=e*(-1/48+t*(-1/15+t*(437/1440+t*(-46/105+t*(1118711/3870720))))),this.gtu[1]=e*(13/48+t*(-3/5+t*(557/1440+t*(281/630+t*(-1983433/1935360))))),e=e*t,this.utg[2]=e*(-17/480+t*(37/840+t*(209/4480+t*(-5569/90720)))),this.gtu[2]=e*(61/240+t*(-103/140+t*(15061/26880+t*(167603/181440)))),e=e*t,this.utg[3]=e*(-4397/161280+t*(11/504+t*(830251/7257600))),this.gtu[3]=e*(49561/161280+t*(-179/168+t*(6601661/7257600))),e=e*t,this.utg[4]=e*(-4583/161280+t*(108847/3991680)),this.gtu[4]=e*(34729/80640+t*(-3418889/1995840)),e=e*t,this.utg[5]=e*(-20648693/638668800),this.gtu[5]=e*(212378941/319334400);var i=Dh(this.cbg,this.lat0);this.Zb=-this.Qn*(i+Gv(this.gtu,2*i))}function kv(n){var t=ct(n.x-this.long0),e=n.y;e=Dh(this.cbg,e);var i=Math.sin(e),s=Math.cos(e),r=Math.sin(t),o=Math.cos(t);e=Math.atan2(i,o*s),t=Math.atan2(r*s,Ue(i,s*o)),t=Ov(Math.tan(t));var a=Bu(this.gtu,2*e,2*t);e=e+a[0],t=t+a[1];var h,l;return Math.abs(t)<=2.623395162778?(h=this.a*(this.Qn*t)+this.x0,l=this.a*(this.Qn*e+this.Zb)+this.y0):(h=1/0,l=1/0),n.x=h,n.y=l,n}function Hv(n){var t=(n.x-this.x0)*(1/this.a),e=(n.y-this.y0)*(1/this.a);e=(e-this.Zb)/this.Qn,t=t/this.Qn;var i,s;if(Math.abs(t)<=2.623395162778){var r=Bu(this.utg,2*e,2*t);e=e+r[0],t=t+r[1],t=Math.atan(Gu(t));var o=Math.sin(e),a=Math.cos(e),h=Math.sin(t),l=Math.cos(t);e=Math.atan2(o*l,Ue(h,l*a)),t=Math.atan2(h,l*a),i=ct(t+this.long0),s=Dh(this.cgb,e)}else i=1/0,s=1/0;return n.x=i,n.y=s,n}var Vv=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","Gauss Kruger","Gauss_Kruger","tmerc"];const Kr={init:zv,forward:kv,inverse:Hv,names:Vv};function Wv(n,t){if(n===void 0){if(n=Math.floor((ct(t)+Math.PI)*30/Math.PI)+1,n<0)return 0;if(n>60)return 60}return n}var Xv="etmerc";function qv(){var n=Wv(this.zone,this.long0);if(n===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(n)-183)*Me,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,Kr.init.apply(this),this.forward=Kr.forward,this.inverse=Kr.inverse}var $v=["Universal Transverse Mercator System","utm"];const Yv={init:qv,names:$v,dependsOn:Xv};function Nh(n,t){return Math.pow((1-n)/(1+n),t)}var jv=20;function Kv(){var n=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*n*n),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(n/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+$t)/(Math.pow(Math.tan(.5*this.lat0+$t),this.C)*Nh(this.e*n,this.ratexp))}function Zv(n){var t=n.x,e=n.y;return n.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*e+$t),this.C)*Nh(this.e*Math.sin(e),this.ratexp))-K,n.x=this.C*t,n}function Jv(n){for(var t=1e-14,e=n.x/this.C,i=n.y,s=Math.pow(Math.tan(.5*i+$t)/this.K,1/this.C),r=jv;r>0&&(i=2*Math.atan(s*Nh(this.e*Math.sin(n.y),-.5*this.e))-K,!(Math.abs(i-n.y)<t));--r)n.y=i;return r?(n.x=e,n.y=i,n):null}const Uh={init:Kv,forward:Zv,inverse:Jv};function Qv(){Uh.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function tx(n){var t,e,i,s;return n.x=ct(n.x-this.long0),Uh.forward.apply(this,[n]),t=Math.sin(n.y),e=Math.cos(n.y),i=Math.cos(n.x),s=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*e*i),n.x=s*e*Math.sin(n.x),n.y=s*(this.cosc0*t-this.sinc0*e*i),n.x=this.a*n.x+this.x0,n.y=this.a*n.y+this.y0,n}function ex(n){var t,e,i,s,r;if(n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,n.x/=this.k0,n.y/=this.k0,r=Ue(n.x,n.y)){var o=2*Math.atan2(r,this.R2);t=Math.sin(o),e=Math.cos(o),s=Math.asin(e*this.sinc0+n.y*t*this.cosc0/r),i=Math.atan2(n.x*t,r*this.cosc0*e-n.y*this.sinc0*t)}else s=this.phic0,i=0;return n.x=i,n.y=s,Uh.inverse.apply(this,[n]),n.x=ct(n.x+this.long0),n}var nx=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const ix={init:Qv,forward:tx,inverse:ex,names:nx};function Fh(n,t,e){return t*=e,Math.tan(.5*(K+n))*Math.pow((1-t)/(1+t),.5*e)}function sx(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=at&&(this.k0=.5*(1+Js(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=at&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=at&&Math.abs(Math.cos(this.lat_ts))>at&&(this.k0=.5*this.cons*gn(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/on(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=gn(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(Fh(this.lat0,this.sinlat0,this.e))-K,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function rx(n){var t=n.x,e=n.y,i=Math.sin(e),s=Math.cos(e),r,o,a,h,l,u,c=ct(t-this.long0);return Math.abs(Math.abs(t-this.long0)-Math.PI)<=at&&Math.abs(e+this.lat0)<=at?(n.x=NaN,n.y=NaN,n):this.sphere?(r=2*this.k0/(1+this.sinlat0*i+this.coslat0*s*Math.cos(c)),n.x=this.a*r*s*Math.sin(c)+this.x0,n.y=this.a*r*(this.coslat0*i-this.sinlat0*s*Math.cos(c))+this.y0,n):(o=2*Math.atan(Fh(e,i,this.e))-K,h=Math.cos(o),a=Math.sin(o),Math.abs(this.coslat0)<=at?(l=on(this.e,e*this.con,this.con*i),u=2*this.a*this.k0*l/this.cons,n.x=this.x0+u*Math.sin(t-this.long0),n.y=this.y0-this.con*u*Math.cos(t-this.long0),n):(Math.abs(this.sinlat0)<at?(r=2*this.a*this.k0/(1+h*Math.cos(c)),n.y=r*a):(r=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*a+this.cosX0*h*Math.cos(c))),n.y=r*(this.cosX0*a-this.sinX0*h*Math.cos(c))+this.y0),n.x=r*h*Math.sin(c)+this.x0,n))}function ax(n){n.x-=this.x0,n.y-=this.y0;var t,e,i,s,r,o=Math.sqrt(n.x*n.x+n.y*n.y);if(this.sphere){var a=2*Math.atan(o/(2*this.a*this.k0));return t=this.long0,e=this.lat0,o<=at?(n.x=t,n.y=e,n):(e=Math.asin(Math.cos(a)*this.sinlat0+n.y*Math.sin(a)*this.coslat0/o),Math.abs(this.coslat0)<at?this.lat0>0?t=ct(this.long0+Math.atan2(n.x,-1*n.y)):t=ct(this.long0+Math.atan2(n.x,n.y)):t=ct(this.long0+Math.atan2(n.x*Math.sin(a),o*this.coslat0*Math.cos(a)-n.y*this.sinlat0*Math.sin(a))),n.x=t,n.y=e,n)}else if(Math.abs(this.coslat0)<=at){if(o<=at)return e=this.lat0,t=this.long0,n.x=t,n.y=e,n;n.x*=this.con,n.y*=this.con,i=o*this.cons/(2*this.a*this.k0),e=this.con*Vs(this.e,i),t=this.con*ct(this.con*this.long0+Math.atan2(n.x,-1*n.y))}else s=2*Math.atan(o*this.cosX0/(2*this.a*this.k0*this.ms1)),t=this.long0,o<=at?r=this.X0:(r=Math.asin(Math.cos(s)*this.sinX0+n.y*Math.sin(s)*this.cosX0/o),t=ct(this.long0+Math.atan2(n.x*Math.sin(s),o*this.cosX0*Math.cos(s)-n.y*this.sinX0*Math.sin(s)))),e=-1*Vs(this.e,Math.tan(.5*(K+r)));return n.x=t,n.y=e,n}var ox=["stere","Stereographic_South_Pole","Polar_Stereographic_variant_A","Polar_Stereographic_variant_B","Polar_Stereographic"];const hx={init:sx,forward:rx,inverse:ax,names:ox,ssfn_:Fh};function lx(){var n=this.lat0;this.lambda0=this.long0;var t=Math.sin(n),e=this.a,i=this.rf,s=1/i,r=2*s-Math.pow(s,2),o=this.e=Math.sqrt(r);this.R=this.k0*e*Math.sqrt(1-r)/(1-r*Math.pow(t,2)),this.alpha=Math.sqrt(1+r/(1-r)*Math.pow(Math.cos(n),4)),this.b0=Math.asin(t/this.alpha);var a=Math.log(Math.tan(Math.PI/4+this.b0/2)),h=Math.log(Math.tan(Math.PI/4+n/2)),l=Math.log((1+o*t)/(1-o*t));this.K=a-this.alpha*h+this.alpha*o/2*l}function cx(n){var t=Math.log(Math.tan(Math.PI/4-n.y/2)),e=this.e/2*Math.log((1+this.e*Math.sin(n.y))/(1-this.e*Math.sin(n.y))),i=-this.alpha*(t+e)+this.K,s=2*(Math.atan(Math.exp(i))-Math.PI/4),r=this.alpha*(n.x-this.lambda0),o=Math.atan(Math.sin(r)/(Math.sin(this.b0)*Math.tan(s)+Math.cos(this.b0)*Math.cos(r))),a=Math.asin(Math.cos(this.b0)*Math.sin(s)-Math.sin(this.b0)*Math.cos(s)*Math.cos(r));return n.y=this.R/2*Math.log((1+Math.sin(a))/(1-Math.sin(a)))+this.y0,n.x=this.R*o+this.x0,n}function ux(n){for(var t=n.x-this.x0,e=n.y-this.y0,i=t/this.R,s=2*(Math.atan(Math.exp(e/this.R))-Math.PI/4),r=Math.asin(Math.cos(this.b0)*Math.sin(s)+Math.sin(this.b0)*Math.cos(s)*Math.cos(i)),o=Math.atan(Math.sin(i)/(Math.cos(this.b0)*Math.cos(i)-Math.sin(this.b0)*Math.tan(s))),a=this.lambda0+o/this.alpha,h=0,l=r,u=-1e3,c=0;Math.abs(l-u)>1e-7;){if(++c>20)return;h=1/this.alpha*(Math.log(Math.tan(Math.PI/4+r/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(l))/2)),u=l,l=2*Math.atan(Math.exp(h))-Math.PI/2}return n.x=a,n.y=l,n}var fx=["somerc"];const dx={init:lx,forward:cx,inverse:ux,names:fx};var Yi=1e-7;function px(n){var t=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],e=typeof n.projName=="object"?Object.keys(n.projName)[0]:n.projName;return"no_uoff"in n||"no_off"in n||t.indexOf(e)!==-1||t.indexOf(wu(e))!==-1}function mx(){var n,t,e,i,s,r,o,a,h,l,u=0,c,f=0,d=0,_=0,g=0,m=0,p=0;this.no_off=px(this),this.no_rot="no_rot"in this;var E=!1;"alpha"in this&&(E=!0);var b=!1;if("rectified_grid_angle"in this&&(b=!0),E&&(p=this.alpha),b&&(u=this.rectified_grid_angle),E||b)f=this.longc;else if(d=this.long1,g=this.lat1,_=this.long2,m=this.lat2,Math.abs(g-m)<=Yi||(n=Math.abs(g))<=Yi||Math.abs(n-K)<=Yi||Math.abs(Math.abs(this.lat0)-K)<=Yi||Math.abs(Math.abs(m)-K)<=Yi)throw new Error;var M=1-this.es;t=Math.sqrt(M),Math.abs(this.lat0)>at?(a=Math.sin(this.lat0),e=Math.cos(this.lat0),n=1-this.es*a*a,this.B=e*e,this.B=Math.sqrt(1+this.es*this.B*this.B/M),this.A=this.B*this.k0*t/n,i=this.B*t/(e*Math.sqrt(n)),s=i*i-1,s<=0?s=0:(s=Math.sqrt(s),this.lat0<0&&(s=-s)),this.E=s+=i,this.E*=Math.pow(on(this.e,this.lat0,a),this.B)):(this.B=1/t,this.A=this.k0,this.E=i=s=1),E||b?(E?(c=Math.asin(Math.sin(p)/i),b||(u=p)):(c=u,p=Math.asin(i*Math.sin(c))),this.lam0=f-Math.asin(.5*(s-1/s)*Math.tan(c))/this.B):(r=Math.pow(on(this.e,g,Math.sin(g)),this.B),o=Math.pow(on(this.e,m,Math.sin(m)),this.B),s=this.E/r,h=(o-r)/(o+r),l=this.E*this.E,l=(l-o*r)/(l+o*r),n=d-_,n<-Math.PI?_-=ks:n>Math.PI&&(_+=ks),this.lam0=ct(.5*(d+_)-Math.atan(l*Math.tan(.5*this.B*(d-_))/h)/this.B),c=Math.atan(2*Math.sin(this.B*ct(d-this.lam0))/(s-1/s)),u=p=Math.asin(i*Math.sin(c))),this.singam=Math.sin(c),this.cosgam=Math.cos(c),this.sinrot=Math.sin(u),this.cosrot=Math.cos(u),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(i*i-1)/Math.cos(p))),this.lat0<0&&(this.u_0=-this.u_0)),s=.5*c,this.v_pole_n=this.ArB*Math.log(Math.tan($t-s)),this.v_pole_s=this.ArB*Math.log(Math.tan($t+s))}function _x(n){var t={},e,i,s,r,o,a,h,l;if(n.x=n.x-this.lam0,Math.abs(Math.abs(n.y)-K)>at){if(o=this.E/Math.pow(on(this.e,n.y,Math.sin(n.y)),this.B),a=1/o,e=.5*(o-a),i=.5*(o+a),r=Math.sin(this.B*n.x),s=(e*this.singam-r*this.cosgam)/i,Math.abs(Math.abs(s)-1)<at)throw new Error;l=.5*this.ArB*Math.log((1-s)/(1+s)),a=Math.cos(this.B*n.x),Math.abs(a)<Yi?h=this.A*n.x:h=this.ArB*Math.atan2(e*this.cosgam+r*this.singam,a)}else l=n.y>0?this.v_pole_n:this.v_pole_s,h=this.ArB*n.y;return this.no_rot?(t.x=h,t.y=l):(h-=this.u_0,t.x=l*this.cosrot+h*this.sinrot,t.y=h*this.cosrot-l*this.sinrot),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function gx(n){var t,e,i,s,r,o,a,h={};if(n.x=(n.x-this.x0)*(1/this.a),n.y=(n.y-this.y0)*(1/this.a),this.no_rot?(e=n.y,t=n.x):(e=n.x*this.cosrot-n.y*this.sinrot,t=n.y*this.cosrot+n.x*this.sinrot+this.u_0),i=Math.exp(-this.BrA*e),s=.5*(i-1/i),r=.5*(i+1/i),o=Math.sin(this.BrA*t),a=(o*this.cosgam+s*this.singam)/r,Math.abs(Math.abs(a)-1)<at)h.x=0,h.y=a<0?-K:K;else{if(h.y=this.E/Math.sqrt((1+a)/(1-a)),h.y=Vs(this.e,Math.pow(h.y,1/this.B)),h.y===1/0)throw new Error;h.x=-this.rB*Math.atan2(s*this.cosgam-o*this.singam,Math.cos(this.BrA*t))}return h.x+=this.lam0,h}var vx=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Variant_B","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const xx={init:mx,forward:_x,inverse:gx,names:vx};function Mx(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<at)){var n=this.b/this.a;this.e=Math.sqrt(1-n*n);var t=Math.sin(this.lat1),e=Math.cos(this.lat1),i=gn(this.e,t,e),s=on(this.e,this.lat1,t),r=Math.sin(this.lat2),o=Math.cos(this.lat2),a=gn(this.e,r,o),h=on(this.e,this.lat2,r),l=Math.abs(Math.abs(this.lat0)-K)<at?0:on(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>at?this.ns=Math.log(i/a)/Math.log(s/h):this.ns=t,isNaN(this.ns)&&(this.ns=t),this.f0=i/(this.ns*Math.pow(s,this.ns)),this.rh=this.a*this.f0*Math.pow(l,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function yx(n){var t=n.x,e=n.y;Math.abs(2*Math.abs(e)-Math.PI)<=at&&(e=Js(e)*(K-2*at));var i=Math.abs(Math.abs(e)-K),s,r;if(i>at)s=on(this.e,e,Math.sin(e)),r=this.a*this.f0*Math.pow(s,this.ns);else{if(i=e*this.ns,i<=0)return null;r=0}var o=this.ns*ct(t-this.long0);return n.x=this.k0*(r*Math.sin(o))+this.x0,n.y=this.k0*(this.rh-r*Math.cos(o))+this.y0,n}function Sx(n){var t,e,i,s,r,o=(n.x-this.x0)/this.k0,a=this.rh-(n.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(o*o+a*a),e=1):(t=-Math.sqrt(o*o+a*a),e=-1);var h=0;if(t!==0&&(h=Math.atan2(e*o,e*a)),t!==0||this.ns>0){if(e=1/this.ns,i=Math.pow(t/(this.a*this.f0),e),s=Vs(this.e,i),s===-9999)return null}else s=-K;return r=ct(h/this.ns+this.long0),n.x=r,n.y=s,n}var Ex=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const bx={init:Mx,forward:yx,inverse:Sx,names:Ex};function Tx(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function Ax(n){var t,e,i,s,r,o,a,h=n.x,l=n.y,u=ct(h-this.long0);return t=Math.pow((1+this.e*Math.sin(l))/(1-this.e*Math.sin(l)),this.alfa*this.e/2),e=2*(Math.atan(this.k*Math.pow(Math.tan(l/2+this.s45),this.alfa)/t)-this.s45),i=-u*this.alfa,s=Math.asin(Math.cos(this.ad)*Math.sin(e)+Math.sin(this.ad)*Math.cos(e)*Math.cos(i)),r=Math.asin(Math.cos(e)*Math.sin(i)/Math.cos(s)),o=this.n*r,a=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(s/2+this.s45),this.n),n.y=a*Math.cos(o)/1,n.x=a*Math.sin(o)/1,this.czech||(n.y*=-1,n.x*=-1),n}function wx(n){var t,e,i,s,r,o,a,h,l=n.x;n.x=n.y,n.y=l,this.czech||(n.y*=-1,n.x*=-1),o=Math.sqrt(n.x*n.x+n.y*n.y),r=Math.atan2(n.y,n.x),s=r/Math.sin(this.s0),i=2*(Math.atan(Math.pow(this.ro0/o,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(i)-Math.sin(this.ad)*Math.cos(i)*Math.cos(s)),e=Math.asin(Math.cos(i)*Math.sin(s)/Math.cos(t)),n.x=this.long0-e/this.alfa,a=t,h=0;var u=0;do n.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(t/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(a))/(1-this.e*Math.sin(a)),this.e/2))-this.s45),Math.abs(a-n.y)<1e-10&&(h=1),a=n.y,u+=1;while(h===0&&u<15);return u>=15?null:n}var Rx=["Krovak","krovak"];const Cx={init:Tx,forward:Ax,inverse:wx,names:Rx};function Ie(n,t,e,i,s){return n*s-t*Math.sin(2*s)+e*Math.sin(4*s)-i*Math.sin(6*s)}function Qs(n){return 1-.25*n*(1+n/16*(3+1.25*n))}function tr(n){return .375*n*(1+.25*n*(1+.46875*n))}function er(n){return .05859375*n*n*(1+.75*n)}function nr(n){return n*n*n*(35/3072)}function Oh(n,t,e){var i=t*e;return n/Math.sqrt(1-i*i)}function ri(n){return Math.abs(n)<K?n:n-Js(n)*Math.PI}function aa(n,t,e,i,s){var r,o;r=n/t;for(var a=0;a<15;a++)if(o=(n-(t*r-e*Math.sin(2*r)+i*Math.sin(4*r)-s*Math.sin(6*r)))/(t-2*e*Math.cos(2*r)+4*i*Math.cos(4*r)-6*s*Math.cos(6*r)),r+=o,Math.abs(o)<=1e-10)return r;return NaN}function Px(){this.sphere||(this.e0=Qs(this.es),this.e1=tr(this.es),this.e2=er(this.es),this.e3=nr(this.es),this.ml0=this.a*Ie(this.e0,this.e1,this.e2,this.e3,this.lat0))}function Ix(n){var t,e,i=n.x,s=n.y;if(i=ct(i-this.long0),this.sphere)t=this.a*Math.asin(Math.cos(s)*Math.sin(i)),e=this.a*(Math.atan2(Math.tan(s),Math.cos(i))-this.lat0);else{var r=Math.sin(s),o=Math.cos(s),a=Oh(this.a,this.e,r),h=Math.tan(s)*Math.tan(s),l=i*Math.cos(s),u=l*l,c=this.es*o*o/(1-this.es),f=this.a*Ie(this.e0,this.e1,this.e2,this.e3,s);t=a*l*(1-u*h*(1/6-(8-h+8*c)*u/120)),e=f-this.ml0+a*r/o*u*(.5+(5-h+6*c)*u/24)}return n.x=t+this.x0,n.y=e+this.y0,n}function Lx(n){n.x-=this.x0,n.y-=this.y0;var t=n.x/this.a,e=n.y/this.a,i,s;if(this.sphere){var r=e+this.lat0;i=Math.asin(Math.sin(r)*Math.cos(t)),s=Math.atan2(Math.tan(t),Math.cos(r))}else{var o=this.ml0/this.a+e,a=aa(o,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(a)-K)<=at)return n.x=this.long0,n.y=K,e<0&&(n.y*=-1),n;var h=Oh(this.a,this.e,Math.sin(a)),l=h*h*h/this.a/this.a*(1-this.es),u=Math.pow(Math.tan(a),2),c=t*this.a/h,f=c*c;i=a-h*Math.tan(a)/l*c*c*(.5-(1+3*u)*c*c/24),s=c*(1-f*(u/3+(1+3*u)*u*f/15))/Math.cos(a)}return n.x=ct(s+this.long0),n.y=ri(i),n}var Dx=["Cassini","Cassini_Soldner","cass"];const Nx={init:Px,forward:Ix,inverse:Lx,names:Dx};function Jn(n,t){var e;return n>1e-7?(e=n*t,(1-n*n)*(t/(1-e*e)-.5/n*Math.log((1-e)/(1+e)))):2*t}var ch=1,uh=2,fh=3,Zr=4;function Ux(){var n=Math.abs(this.lat0);if(Math.abs(n-K)<at?this.mode=this.lat0<0?ch:uh:Math.abs(n)<at?this.mode=fh:this.mode=Zr,this.es>0){var t;switch(this.qp=Jn(this.e,1),this.mmf=.5/(1-this.es),this.apa=Wx(this.es),this.mode){case uh:this.dd=1;break;case ch:this.dd=1;break;case fh:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case Zr:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=Jn(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===Zr&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function Fx(n){var t,e,i,s,r,o,a,h,l,u,c=n.x,f=n.y;if(c=ct(c-this.long0),this.sphere){if(r=Math.sin(f),u=Math.cos(f),i=Math.cos(c),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e=this.mode===this.EQUIT?1+u*i:1+this.sinph0*r+this.cosph0*u*i,e<=at)return null;e=Math.sqrt(2/e),t=e*u*Math.sin(c),e*=this.mode===this.EQUIT?r:this.cosph0*r-this.sinph0*u*i}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(i=-i),Math.abs(f+this.lat0)<at)return null;e=$t-f*.5,e=2*(this.mode===this.S_POLE?Math.cos(e):Math.sin(e)),t=e*Math.sin(c),e*=i}}else{switch(a=0,h=0,l=0,i=Math.cos(c),s=Math.sin(c),r=Math.sin(f),o=Jn(this.e,r),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(a=o/this.qp,h=Math.sqrt(1-a*a)),this.mode){case this.OBLIQ:l=1+this.sinb1*a+this.cosb1*h*i;break;case this.EQUIT:l=1+h*i;break;case this.N_POLE:l=K+f,o=this.qp-o;break;case this.S_POLE:l=f-K,o=this.qp+o;break}if(Math.abs(l)<at)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:l=Math.sqrt(2/l),this.mode===this.OBLIQ?e=this.ymf*l*(this.cosb1*a-this.sinb1*h*i):e=(l=Math.sqrt(2/(1+h*i)))*a*this.ymf,t=this.xmf*l*h*s;break;case this.N_POLE:case this.S_POLE:o>=0?(t=(l=Math.sqrt(o))*s,e=i*(this.mode===this.S_POLE?l:-l)):t=e=0;break}}return n.x=this.a*t+this.x0,n.y=this.a*e+this.y0,n}function Ox(n){n.x-=this.x0,n.y-=this.y0;var t=n.x/this.a,e=n.y/this.a,i,s,r,o,a,h,l;if(this.sphere){var u=0,c,f=0;if(c=Math.sqrt(t*t+e*e),s=c*.5,s>1)return null;switch(s=2*Math.asin(s),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(f=Math.sin(s),u=Math.cos(s)),this.mode){case this.EQUIT:s=Math.abs(c)<=at?0:Math.asin(e*f/c),t*=f,e=u*c;break;case this.OBLIQ:s=Math.abs(c)<=at?this.lat0:Math.asin(u*this.sinph0+e*f*this.cosph0/c),t*=f*this.cosph0,e=(u-Math.sin(s)*this.sinph0)*c;break;case this.N_POLE:e=-e,s=K-s;break;case this.S_POLE:s-=K;break}i=e===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(t,e)}else{if(l=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t/=this.dd,e*=this.dd,h=Math.sqrt(t*t+e*e),h<at)return n.x=this.long0,n.y=this.lat0,n;o=2*Math.asin(.5*h/this.rq),r=Math.cos(o),t*=o=Math.sin(o),this.mode===this.OBLIQ?(l=r*this.sinb1+e*o*this.cosb1/h,a=this.qp*l,e=h*this.cosb1*r-e*this.sinb1*o):(l=e*o/h,a=this.qp*l,e=h*r)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(e=-e),a=t*t+e*e,!a)return n.x=this.long0,n.y=this.lat0,n;l=1-a/this.qp,this.mode===this.S_POLE&&(l=-l)}i=Math.atan2(t,e),s=Xx(Math.asin(l),this.apa)}return n.x=ct(this.long0+i),n.y=s,n}var Gx=.3333333333333333,Bx=.17222222222222222,zx=.10257936507936508,kx=.06388888888888888,Hx=.0664021164021164,Vx=.016415012942191543;function Wx(n){var t,e=[];return e[0]=n*Gx,t=n*n,e[0]+=t*Bx,e[1]=t*kx,t*=n,e[0]+=t*zx,e[1]+=t*Hx,e[2]=t*Vx,e}function Xx(n,t){var e=n+n;return n+t[0]*Math.sin(e)+t[1]*Math.sin(e+e)+t[2]*Math.sin(e+e+e)}var qx=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const $x={init:Ux,forward:Fx,inverse:Ox,names:qx,S_POLE:ch,N_POLE:uh,EQUIT:fh,OBLIQ:Zr};function ii(n){return Math.abs(n)>1&&(n=n>1?1:-1),Math.asin(n)}function Yx(){Math.abs(this.lat1+this.lat2)<at||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=gn(this.e3,this.sin_po,this.cos_po),this.qs1=Jn(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=gn(this.e3,this.sin_po,this.cos_po),this.qs2=Jn(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=Jn(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>at?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function jx(n){var t=n.x,e=n.y;this.sin_phi=Math.sin(e),this.cos_phi=Math.cos(e);var i=Jn(this.e3,this.sin_phi),s=this.a*Math.sqrt(this.c-this.ns0*i)/this.ns0,r=this.ns0*ct(t-this.long0),o=s*Math.sin(r)+this.x0,a=this.rh-s*Math.cos(r)+this.y0;return n.x=o,n.y=a,n}function Kx(n){var t,e,i,s,r,o;return n.x-=this.x0,n.y=this.rh-n.y+this.y0,this.ns0>=0?(t=Math.sqrt(n.x*n.x+n.y*n.y),i=1):(t=-Math.sqrt(n.x*n.x+n.y*n.y),i=-1),s=0,t!==0&&(s=Math.atan2(i*n.x,i*n.y)),i=t*this.ns0/this.a,this.sphere?o=Math.asin((this.c-i*i)/(2*this.ns0)):(e=(this.c-i*i)/this.ns0,o=this.phi1z(this.e3,e)),r=ct(s/this.ns0+this.long0),n.x=r,n.y=o,n}function Zx(n,t){var e,i,s,r,o,a=ii(.5*t);if(n<at)return a;for(var h=n*n,l=1;l<=25;l++)if(e=Math.sin(a),i=Math.cos(a),s=n*e,r=1-s*s,o=.5*r*r/i*(t/(1-h)-e/r+.5/n*Math.log((1-s)/(1+s))),a=a+o,Math.abs(o)<=1e-7)return a;return null}var Jx=["Albers_Conic_Equal_Area","Albers_Equal_Area","Albers","aea"];const Qx={init:Yx,forward:jx,inverse:Kx,names:Jx,phi1z:Zx};function tM(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function eM(n){var t,e,i,s,r,o,a,h,l=n.x,u=n.y;return i=ct(l-this.long0),t=Math.sin(u),e=Math.cos(u),s=Math.cos(i),o=this.sin_p14*t+this.cos_p14*e*s,r=1,o>0||Math.abs(o)<=at?(a=this.x0+this.a*r*e*Math.sin(i)/o,h=this.y0+this.a*r*(this.cos_p14*t-this.sin_p14*e*s)/o):(a=this.x0+this.infinity_dist*e*Math.sin(i),h=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*e*s)),n.x=a,n.y=h,n}function nM(n){var t,e,i,s,r,o;return n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,n.x/=this.k0,n.y/=this.k0,(t=Math.sqrt(n.x*n.x+n.y*n.y))?(s=Math.atan2(t,this.rc),e=Math.sin(s),i=Math.cos(s),o=ii(i*this.sin_p14+n.y*e*this.cos_p14/t),r=Math.atan2(n.x*e,t*this.cos_p14*i-n.y*this.sin_p14*e),r=ct(this.long0+r)):(o=this.phic0,r=0),n.x=r,n.y=o,n}var iM=["gnom"];const sM={init:tM,forward:eM,inverse:nM,names:iM};function rM(n,t){var e=1-(1-n*n)/(2*n)*Math.log((1-n)/(1+n));if(Math.abs(Math.abs(t)-e)<1e-6)return t<0?-1*K:K;for(var i=Math.asin(.5*t),s,r,o,a,h=0;h<30;h++)if(r=Math.sin(i),o=Math.cos(i),a=n*r,s=Math.pow(1-a*a,2)/(2*o)*(t/(1-n*n)-r/(1-a*a)+.5/n*Math.log((1-a)/(1+a))),i+=s,Math.abs(s)<=1e-10)return i;return NaN}function aM(){this.sphere||(this.k0=gn(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function oM(n){var t=n.x,e=n.y,i,s,r=ct(t-this.long0);if(this.sphere)i=this.x0+this.a*r*Math.cos(this.lat_ts),s=this.y0+this.a*Math.sin(e)/Math.cos(this.lat_ts);else{var o=Jn(this.e,Math.sin(e));i=this.x0+this.a*this.k0*r,s=this.y0+this.a*o*.5/this.k0}return n.x=i,n.y=s,n}function hM(n){n.x-=this.x0,n.y-=this.y0;var t,e;return this.sphere?(t=ct(this.long0+n.x/this.a/Math.cos(this.lat_ts)),e=Math.asin(n.y/this.a*Math.cos(this.lat_ts))):(e=rM(this.e,2*n.y*this.k0/this.a),t=ct(this.long0+n.x/(this.a*this.k0))),n.x=t,n.y=e,n}var lM=["cea"];const cM={init:aM,forward:oM,inverse:hM,names:lM};function uM(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function fM(n){var t=n.x,e=n.y,i=ct(t-this.long0),s=ri(e-this.lat0);return n.x=this.x0+this.a*i*this.rc,n.y=this.y0+this.a*s,n}function dM(n){var t=n.x,e=n.y;return n.x=ct(this.long0+(t-this.x0)/(this.a*this.rc)),n.y=ri(this.lat0+(e-this.y0)/this.a),n}var pM=["Equirectangular","Equidistant_Cylindrical","Equidistant_Cylindrical_Spherical","eqc"];const mM={init:uM,forward:fM,inverse:dM,names:pM};var Ac=20;function _M(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Qs(this.es),this.e1=tr(this.es),this.e2=er(this.es),this.e3=nr(this.es),this.ml0=this.a*Ie(this.e0,this.e1,this.e2,this.e3,this.lat0)}function gM(n){var t=n.x,e=n.y,i,s,r,o=ct(t-this.long0);if(r=o*Math.sin(e),this.sphere)Math.abs(e)<=at?(i=this.a*o,s=-1*this.a*this.lat0):(i=this.a*Math.sin(r)/Math.tan(e),s=this.a*(ri(e-this.lat0)+(1-Math.cos(r))/Math.tan(e)));else if(Math.abs(e)<=at)i=this.a*o,s=-1*this.ml0;else{var a=Oh(this.a,this.e,Math.sin(e))/Math.tan(e);i=a*Math.sin(r),s=this.a*Ie(this.e0,this.e1,this.e2,this.e3,e)-this.ml0+a*(1-Math.cos(r))}return n.x=i+this.x0,n.y=s+this.y0,n}function vM(n){var t,e,i,s,r,o,a,h,l;if(i=n.x-this.x0,s=n.y-this.y0,this.sphere)if(Math.abs(s+this.a*this.lat0)<=at)t=ct(i/this.a+this.long0),e=0;else{o=this.lat0+s/this.a,a=i*i/this.a/this.a+o*o,h=o;var u;for(r=Ac;r;--r)if(u=Math.tan(h),l=-1*(o*(h*u+1)-h-.5*(h*h+a)*u)/((h-o)/u-1),h+=l,Math.abs(l)<=at){e=h;break}t=ct(this.long0+Math.asin(i*Math.tan(h)/this.a)/Math.sin(e))}else if(Math.abs(s+this.ml0)<=at)e=0,t=ct(this.long0+i/this.a);else{o=(this.ml0+s)/this.a,a=i*i/this.a/this.a+o*o,h=o;var c,f,d,_,g;for(r=Ac;r;--r)if(g=this.e*Math.sin(h),c=Math.sqrt(1-g*g)*Math.tan(h),f=this.a*Ie(this.e0,this.e1,this.e2,this.e3,h),d=this.e0-2*this.e1*Math.cos(2*h)+4*this.e2*Math.cos(4*h)-6*this.e3*Math.cos(6*h),_=f/this.a,l=(o*(c*_+1)-_-.5*c*(_*_+a))/(this.es*Math.sin(2*h)*(_*_+a-2*o*_)/(4*c)+(o-_)*(c*d-2/Math.sin(2*h))-d),h-=l,Math.abs(l)<=at){e=h;break}c=Math.sqrt(1-this.es*Math.pow(Math.sin(e),2))*Math.tan(e),t=ct(this.long0+Math.asin(i*c/this.a)/Math.sin(e))}return n.x=t,n.y=e,n}var xM=["Polyconic","American_Polyconic","poly"];const MM={init:_M,forward:gM,inverse:vM,names:xM};function yM(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function SM(n){var t,e=n.x,i=n.y,s=i-this.lat0,r=e-this.long0,o=s/Is*1e-5,a=r,h=1,l=0;for(t=1;t<=10;t++)h=h*o,l=l+this.A[t]*h;var u=l,c=a,f=1,d=0,_,g,m=0,p=0;for(t=1;t<=6;t++)_=f*u-d*c,g=d*u+f*c,f=_,d=g,m=m+this.B_re[t]*f-this.B_im[t]*d,p=p+this.B_im[t]*f+this.B_re[t]*d;return n.x=p*this.a+this.x0,n.y=m*this.a+this.y0,n}function EM(n){var t,e=n.x,i=n.y,s=e-this.x0,r=i-this.y0,o=r/this.a,a=s/this.a,h=1,l=0,u,c,f=0,d=0;for(t=1;t<=6;t++)u=h*o-l*a,c=l*o+h*a,h=u,l=c,f=f+this.C_re[t]*h-this.C_im[t]*l,d=d+this.C_im[t]*h+this.C_re[t]*l;for(var _=0;_<this.iterations;_++){var g=f,m=d,p,E,b=o,M=a;for(t=2;t<=6;t++)p=g*f-m*d,E=m*f+g*d,g=p,m=E,b=b+(t-1)*(this.B_re[t]*g-this.B_im[t]*m),M=M+(t-1)*(this.B_im[t]*g+this.B_re[t]*m);g=1,m=0;var w=this.B_re[1],R=this.B_im[1];for(t=2;t<=6;t++)p=g*f-m*d,E=m*f+g*d,g=p,m=E,w=w+t*(this.B_re[t]*g-this.B_im[t]*m),R=R+t*(this.B_im[t]*g+this.B_re[t]*m);var A=w*w+R*R;f=(b*w+M*R)/A,d=(M*w-b*R)/A}var L=f,y=d,S=1,P=0;for(t=1;t<=9;t++)S=S*L,P=P+this.D[t]*S;var O=this.lat0+P*Is*1e5,z=this.long0+y;return n.x=z,n.y=O,n}var bM=["New_Zealand_Map_Grid","nzmg"];const TM={init:yM,forward:SM,inverse:EM,names:bM};function AM(){}function wM(n){var t=n.x,e=n.y,i=ct(t-this.long0),s=this.x0+this.a*i,r=this.y0+this.a*Math.log(Math.tan(Math.PI/4+e/2.5))*1.25;return n.x=s,n.y=r,n}function RM(n){n.x-=this.x0,n.y-=this.y0;var t=ct(this.long0+n.x/this.a),e=2.5*(Math.atan(Math.exp(.8*n.y/this.a))-Math.PI/4);return n.x=t,n.y=e,n}var CM=["Miller_Cylindrical","mill"];const PM={init:AM,forward:wM,inverse:RM,names:CM};var IM=20;function LM(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=Ih(this.es)}function DM(n){var t,e,i=n.x,s=n.y;if(i=ct(i-this.long0),this.sphere){if(!this.m)s=this.n!==1?Math.asin(this.n*Math.sin(s)):s;else for(var r=this.n*Math.sin(s),o=IM;o;--o){var a=(this.m*s+Math.sin(s)-r)/(this.m+Math.cos(s));if(s-=a,Math.abs(a)<at)break}t=this.a*this.C_x*i*(this.m+Math.cos(s)),e=this.a*this.C_y*s}else{var h=Math.sin(s),l=Math.cos(s);e=this.a*ds(s,h,l,this.en),t=this.a*i*l/Math.sqrt(1-this.es*h*h)}return n.x=t,n.y=e,n}function NM(n){var t,e,i,s;return n.x-=this.x0,i=n.x/this.a,n.y-=this.y0,t=n.y/this.a,this.sphere?(t/=this.C_y,i=i/(this.C_x*(this.m+Math.cos(t))),this.m?t=ii((this.m*t+Math.sin(t))/this.n):this.n!==1&&(t=ii(Math.sin(t)/this.n)),i=ct(i+this.long0),t=ri(t)):(t=Lh(n.y/this.a,this.es,this.en),s=Math.abs(t),s<K?(s=Math.sin(t),e=this.long0+n.x*Math.sqrt(1-this.es*s*s)/(this.a*Math.cos(t)),i=ct(e)):s-at<K&&(i=this.long0)),n.x=i,n.y=t,n}var UM=["Sinusoidal","sinu"];const FM={init:LM,forward:DM,inverse:NM,names:UM};function OM(){}function GM(n){for(var t=n.x,e=n.y,i=ct(t-this.long0),s=e,r=Math.PI*Math.sin(e);;){var o=-(s+Math.sin(s)-r)/(1+Math.cos(s));if(s+=o,Math.abs(o)<at)break}s/=2,Math.PI/2-Math.abs(e)<at&&(i=0);var a=.900316316158*this.a*i*Math.cos(s)+this.x0,h=1.4142135623731*this.a*Math.sin(s)+this.y0;return n.x=a,n.y=h,n}function BM(n){var t,e;n.x-=this.x0,n.y-=this.y0,e=n.y/(1.4142135623731*this.a),Math.abs(e)>.999999999999&&(e=.999999999999),t=Math.asin(e);var i=ct(this.long0+n.x/(.900316316158*this.a*Math.cos(t)));i<-Math.PI&&(i=-Math.PI),i>Math.PI&&(i=Math.PI),e=(2*t+Math.sin(2*t))/Math.PI,Math.abs(e)>1&&(e=1);var s=Math.asin(e);return n.x=i,n.y=s,n}var zM=["Mollweide","moll"];const kM={init:OM,forward:GM,inverse:BM,names:zM};function HM(){Math.abs(this.lat1+this.lat2)<at||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Qs(this.es),this.e1=tr(this.es),this.e2=er(this.es),this.e3=nr(this.es),this.sin_phi=Math.sin(this.lat1),this.cos_phi=Math.cos(this.lat1),this.ms1=gn(this.e,this.sin_phi,this.cos_phi),this.ml1=Ie(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<at?this.ns=this.sin_phi:(this.sin_phi=Math.sin(this.lat2),this.cos_phi=Math.cos(this.lat2),this.ms2=gn(this.e,this.sin_phi,this.cos_phi),this.ml2=Ie(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=Ie(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function VM(n){var t=n.x,e=n.y,i;if(this.sphere)i=this.a*(this.g-e);else{var s=Ie(this.e0,this.e1,this.e2,this.e3,e);i=this.a*(this.g-s)}var r=this.ns*ct(t-this.long0),o=this.x0+i*Math.sin(r),a=this.y0+this.rh-i*Math.cos(r);return n.x=o,n.y=a,n}function WM(n){n.x-=this.x0,n.y=this.rh-n.y+this.y0;var t,e,i,s;this.ns>=0?(e=Math.sqrt(n.x*n.x+n.y*n.y),t=1):(e=-Math.sqrt(n.x*n.x+n.y*n.y),t=-1);var r=0;if(e!==0&&(r=Math.atan2(t*n.x,t*n.y)),this.sphere)return s=ct(this.long0+r/this.ns),i=ri(this.g-e/this.a),n.x=s,n.y=i,n;var o=this.g-e/this.a;return i=aa(o,this.e0,this.e1,this.e2,this.e3),s=ct(this.long0+r/this.ns),n.x=s,n.y=i,n}var XM=["Equidistant_Conic","eqdc"];const qM={init:HM,forward:VM,inverse:WM,names:XM};function $M(){this.R=this.a}function YM(n){var t=n.x,e=n.y,i=ct(t-this.long0),s,r;Math.abs(e)<=at&&(s=this.x0+this.R*i,r=this.y0);var o=ii(2*Math.abs(e/Math.PI));(Math.abs(i)<=at||Math.abs(Math.abs(e)-K)<=at)&&(s=this.x0,e>=0?r=this.y0+Math.PI*this.R*Math.tan(.5*o):r=this.y0+Math.PI*this.R*-Math.tan(.5*o));var a=.5*Math.abs(Math.PI/i-i/Math.PI),h=a*a,l=Math.sin(o),u=Math.cos(o),c=u/(l+u-1),f=c*c,d=c*(2/l-1),_=d*d,g=Math.PI*this.R*(a*(c-_)+Math.sqrt(h*(c-_)*(c-_)-(_+h)*(f-_)))/(_+h);i<0&&(g=-g),s=this.x0+g;var m=h+c;return g=Math.PI*this.R*(d*m-a*Math.sqrt((_+h)*(h+1)-m*m))/(_+h),e>=0?r=this.y0+g:r=this.y0-g,n.x=s,n.y=r,n}function jM(n){var t,e,i,s,r,o,a,h,l,u,c,f,d;return n.x-=this.x0,n.y-=this.y0,c=Math.PI*this.R,i=n.x/c,s=n.y/c,r=i*i+s*s,o=-Math.abs(s)*(1+r),a=o-2*s*s+i*i,h=-2*o+1+2*s*s+r*r,d=s*s/h+(2*a*a*a/h/h/h-9*o*a/h/h)/27,l=(o-a*a/3/h)/h,u=2*Math.sqrt(-l/3),c=3*d/l/u,Math.abs(c)>1&&(c>=0?c=1:c=-1),f=Math.acos(c)/3,n.y>=0?e=(-u*Math.cos(f+Math.PI/3)-a/3/h)*Math.PI:e=-(-u*Math.cos(f+Math.PI/3)-a/3/h)*Math.PI,Math.abs(i)<at?t=this.long0:t=ct(this.long0+Math.PI*(r-1+Math.sqrt(1+2*(i*i-s*s)+r*r))/2/i),n.x=t,n.y=e,n}var KM=["Van_der_Grinten_I","VanDerGrinten","Van_der_Grinten","vandg"];const ZM={init:$M,forward:YM,inverse:jM,names:KM};function JM(n,t,e,i,s,r){const o=i-t,a=Math.atan((1-r)*Math.tan(n)),h=Math.atan((1-r)*Math.tan(e)),l=Math.sin(a),u=Math.cos(a),c=Math.sin(h),f=Math.cos(h);let d=o,_,g=100,m,p,E,b,M,w,R,A,L,y,S,P,O,z;do{if(m=Math.sin(d),p=Math.cos(d),E=Math.sqrt(f*m*(f*m)+(u*c-l*f*p)*(u*c-l*f*p)),E===0)return{azi1:0,s12:0};b=l*c+u*f*p,M=Math.atan2(E,b),w=u*f*m/E,R=1-w*w,A=R!==0?b-2*l*c/R:0,L=r/16*R*(4+r*(4-3*R)),_=d,d=o+(1-L)*r*w*(M+L*E*(A+L*b*(-1+2*A*A)))}while(Math.abs(d-_)>1e-12&&--g>0);return g===0?{azi1:NaN,s12:NaN}:(y=R*(s*s-s*(1-r)*(s*(1-r)))/(s*(1-r)*(s*(1-r))),S=1+y/16384*(4096+y*(-768+y*(320-175*y))),P=y/1024*(256+y*(-128+y*(74-47*y))),O=P*E*(A+P/4*(b*(-1+2*A*A)-P/6*A*(-3+4*E*E)*(-3+4*A*A))),z=s*(1-r)*S*(M-O),{azi1:Math.atan2(f*m,u*c-l*f*p),s12:z})}function QM(n,t,e,i,s,r){const o=Math.atan((1-r)*Math.tan(n)),a=Math.sin(o),h=Math.cos(o),l=Math.sin(e),u=Math.cos(e),c=Math.atan2(a,h*u),f=h*l,d=1-f*f,_=d*(s*s-s*(1-r)*(s*(1-r)))/(s*(1-r)*(s*(1-r))),g=1+_/16384*(4096+_*(-768+_*(320-175*_))),m=_/1024*(256+_*(-128+_*(74-47*_)));let p=i/(s*(1-r)*g),E,b=100,M,w,R,A;do M=Math.cos(2*c+p),w=Math.sin(p),R=Math.cos(p),A=m*w*(M+m/4*(R*(-1+2*M*M)-m/6*M*(-3+4*w*w)*(-3+4*M*M))),E=p,p=i/(s*(1-r)*g)+A;while(Math.abs(p-E)>1e-12&&--b>0);if(b===0)return{lat2:NaN,lon2:NaN};const L=a*w-h*R*u,y=Math.atan2(a*R+h*w*u,(1-r)*Math.sqrt(f*f+L*L)),S=Math.atan2(w*l,h*R-a*w*u),P=r/16*d*(4+r*(4-3*d)),O=S-(1-P)*r*f*(p+P*w*(M+P*R*(-1+2*M*M))),z=t+O;return{lat2:y,lon2:z}}function ty(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0),this.f=this.es/(1+Math.sqrt(1-this.es))}function ey(n){var t=n.x,e=n.y,i=Math.sin(n.y),s=Math.cos(n.y),r=ct(t-this.long0),o,a,h,l,u,c,f,d,_,g,m;return this.sphere?Math.abs(this.sin_p12-1)<=at?(n.x=this.x0+this.a*(K-e)*Math.sin(r),n.y=this.y0-this.a*(K-e)*Math.cos(r),n):Math.abs(this.sin_p12+1)<=at?(n.x=this.x0+this.a*(K+e)*Math.sin(r),n.y=this.y0+this.a*(K+e)*Math.cos(r),n):(_=this.sin_p12*i+this.cos_p12*s*Math.cos(r),f=Math.acos(_),d=f?f/Math.sin(f):1,n.x=this.x0+this.a*d*s*Math.sin(r),n.y=this.y0+this.a*d*(this.cos_p12*i-this.sin_p12*s*Math.cos(r)),n):(o=Qs(this.es),a=tr(this.es),h=er(this.es),l=nr(this.es),Math.abs(this.sin_p12-1)<=at?(u=this.a*Ie(o,a,h,l,K),c=this.a*Ie(o,a,h,l,e),n.x=this.x0+(u-c)*Math.sin(r),n.y=this.y0-(u-c)*Math.cos(r),n):Math.abs(this.sin_p12+1)<=at?(u=this.a*Ie(o,a,h,l,K),c=this.a*Ie(o,a,h,l,e),n.x=this.x0+(u+c)*Math.sin(r),n.y=this.y0+(u+c)*Math.cos(r),n):Math.abs(t)<at&&Math.abs(e-this.lat0)<at?(n.x=n.y=0,n):(g=JM(this.lat0,this.long0,e,t,this.a,this.f),m=g.azi1,n.x=g.s12*Math.sin(m),n.y=g.s12*Math.cos(m),n))}function ny(n){n.x-=this.x0,n.y-=this.y0;var t,e,i,s,r,o,a,h,l,u,c,f,d,_,g,m;return this.sphere?(t=Math.sqrt(n.x*n.x+n.y*n.y),t>2*K*this.a?void 0:(e=t/this.a,i=Math.sin(e),s=Math.cos(e),r=this.long0,Math.abs(t)<=at?o=this.lat0:(o=ii(s*this.sin_p12+n.y*i*this.cos_p12/t),a=Math.abs(this.lat0)-K,Math.abs(a)<=at?this.lat0>=0?r=ct(this.long0+Math.atan2(n.x,-n.y)):r=ct(this.long0-Math.atan2(-n.x,n.y)):r=ct(this.long0+Math.atan2(n.x*i,t*this.cos_p12*s-n.y*this.sin_p12*i))),n.x=r,n.y=o,n)):(h=Qs(this.es),l=tr(this.es),u=er(this.es),c=nr(this.es),Math.abs(this.sin_p12-1)<=at?(f=this.a*Ie(h,l,u,c,K),t=Math.sqrt(n.x*n.x+n.y*n.y),d=f-t,o=aa(d/this.a,h,l,u,c),r=ct(this.long0+Math.atan2(n.x,-1*n.y)),n.x=r,n.y=o,n):Math.abs(this.sin_p12+1)<=at?(f=this.a*Ie(h,l,u,c,K),t=Math.sqrt(n.x*n.x+n.y*n.y),d=t-f,o=aa(d/this.a,h,l,u,c),r=ct(this.long0+Math.atan2(n.x,n.y)),n.x=r,n.y=o,n):(_=Math.atan2(n.x,n.y),g=Math.sqrt(n.x*n.x+n.y*n.y),m=QM(this.lat0,this.long0,_,g,this.a,this.f),n.x=m.lon2,n.y=m.lat2,n))}var iy=["Azimuthal_Equidistant","aeqd"];const sy={init:ty,forward:ey,inverse:ny,names:iy};function ry(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function ay(n){var t,e,i,s,r,o,a,h,l=n.x,u=n.y;return i=ct(l-this.long0),t=Math.sin(u),e=Math.cos(u),s=Math.cos(i),o=this.sin_p14*t+this.cos_p14*e*s,r=1,(o>0||Math.abs(o)<=at)&&(a=this.a*r*e*Math.sin(i),h=this.y0+this.a*r*(this.cos_p14*t-this.sin_p14*e*s)),n.x=a,n.y=h,n}function oy(n){var t,e,i,s,r,o,a;return n.x-=this.x0,n.y-=this.y0,t=Math.sqrt(n.x*n.x+n.y*n.y),e=ii(t/this.a),i=Math.sin(e),s=Math.cos(e),o=this.long0,Math.abs(t)<=at?(a=this.lat0,n.x=o,n.y=a,n):(a=ii(s*this.sin_p14+n.y*i*this.cos_p14/t),r=Math.abs(this.lat0)-K,Math.abs(r)<=at?(this.lat0>=0?o=ct(this.long0+Math.atan2(n.x,-n.y)):o=ct(this.long0-Math.atan2(-n.x,n.y)),n.x=o,n.y=a,n):(o=ct(this.long0+Math.atan2(n.x*i,t*this.cos_p14*s-n.y*this.sin_p14*i)),n.x=o,n.y=a,n))}var hy=["ortho"];const ly={init:ry,forward:ay,inverse:oy,names:hy};var he={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},Yt={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function cy(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=K-$t/2?this.face=he.TOP:this.lat0<=-(K-$t/2)?this.face=he.BOTTOM:Math.abs(this.long0)<=$t?this.face=he.FRONT:Math.abs(this.long0)<=K+$t?this.face=this.long0>0?he.RIGHT:he.LEFT:this.face=he.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function uy(n){var t={x:0,y:0},e,i,s,r,o,a,h={value:0};if(n.x-=this.long0,this.es!==0?e=Math.atan(this.one_minus_f_squared*Math.tan(n.y)):e=n.y,i=n.x,this.face===he.TOP)r=K-e,i>=$t&&i<=K+$t?(h.value=Yt.AREA_0,s=i-K):i>K+$t||i<=-(K+$t)?(h.value=Yt.AREA_1,s=i>0?i-fe:i+fe):i>-(K+$t)&&i<=-$t?(h.value=Yt.AREA_2,s=i+K):(h.value=Yt.AREA_3,s=i);else if(this.face===he.BOTTOM)r=K+e,i>=$t&&i<=K+$t?(h.value=Yt.AREA_0,s=-i+K):i<$t&&i>=-$t?(h.value=Yt.AREA_1,s=-i):i<-$t&&i>=-(K+$t)?(h.value=Yt.AREA_2,s=-i-K):(h.value=Yt.AREA_3,s=i>0?-i+fe:-i-fe);else{var l,u,c,f,d,_,g;this.face===he.RIGHT?i=is(i,+K):this.face===he.BACK?i=is(i,+fe):this.face===he.LEFT&&(i=is(i,-K)),f=Math.sin(e),d=Math.cos(e),_=Math.sin(i),g=Math.cos(i),l=d*g,u=d*_,c=f,this.face===he.FRONT?(r=Math.acos(l),s=Gr(r,c,u,h)):this.face===he.RIGHT?(r=Math.acos(u),s=Gr(r,c,-l,h)):this.face===he.BACK?(r=Math.acos(-l),s=Gr(r,c,-u,h)):this.face===he.LEFT?(r=Math.acos(-u),s=Gr(r,c,l,h)):(r=s=0,h.value=Yt.AREA_0)}return a=Math.atan(12/fe*(s+Math.acos(Math.sin(s)*Math.cos($t))-K)),o=Math.sqrt((1-Math.cos(r))/(Math.cos(a)*Math.cos(a))/(1-Math.cos(Math.atan(1/Math.cos(s))))),h.value===Yt.AREA_1?a+=K:h.value===Yt.AREA_2?a+=fe:h.value===Yt.AREA_3&&(a+=1.5*fe),t.x=o*Math.cos(a),t.y=o*Math.sin(a),t.x=t.x*this.a+this.x0,t.y=t.y*this.a+this.y0,n.x=t.x,n.y=t.y,n}function fy(n){var t={lam:0,phi:0},e,i,s,r,o,a,h,l,u,c={value:0};if(n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,i=Math.atan(Math.sqrt(n.x*n.x+n.y*n.y)),e=Math.atan2(n.y,n.x),n.x>=0&&n.x>=Math.abs(n.y)?c.value=Yt.AREA_0:n.y>=0&&n.y>=Math.abs(n.x)?(c.value=Yt.AREA_1,e-=K):n.x<0&&-n.x>=Math.abs(n.y)?(c.value=Yt.AREA_2,e=e<0?e+fe:e-fe):(c.value=Yt.AREA_3,e+=K),u=fe/12*Math.tan(e),o=Math.sin(u)/(Math.cos(u)-1/Math.sqrt(2)),a=Math.atan(o),s=Math.cos(e),r=Math.tan(i),h=1-s*s*r*r*(1-Math.cos(Math.atan(1/Math.cos(a)))),h<-1?h=-1:h>1&&(h=1),this.face===he.TOP)l=Math.acos(h),t.phi=K-l,c.value===Yt.AREA_0?t.lam=a+K:c.value===Yt.AREA_1?t.lam=a<0?a+fe:a-fe:c.value===Yt.AREA_2?t.lam=a-K:t.lam=a;else if(this.face===he.BOTTOM)l=Math.acos(h),t.phi=l-K,c.value===Yt.AREA_0?t.lam=-a+K:c.value===Yt.AREA_1?t.lam=-a:c.value===Yt.AREA_2?t.lam=-a-K:t.lam=a<0?-a-fe:-a+fe;else{var f,d,_;f=h,u=f*f,u>=1?_=0:_=Math.sqrt(1-u)*Math.sin(a),u+=_*_,u>=1?d=0:d=Math.sqrt(1-u),c.value===Yt.AREA_1?(u=d,d=-_,_=u):c.value===Yt.AREA_2?(d=-d,_=-_):c.value===Yt.AREA_3&&(u=d,d=_,_=-u),this.face===he.RIGHT?(u=f,f=-d,d=u):this.face===he.BACK?(f=-f,d=-d):this.face===he.LEFT&&(u=f,f=d,d=-u),t.phi=Math.acos(-_)-K,t.lam=Math.atan2(d,f),this.face===he.RIGHT?t.lam=is(t.lam,-K):this.face===he.BACK?t.lam=is(t.lam,-fe):this.face===he.LEFT&&(t.lam=is(t.lam,+K))}if(this.es!==0){var g,m,p;g=t.phi<0?1:0,m=Math.tan(t.phi),p=this.b/Math.sqrt(m*m+this.one_minus_f_squared),t.phi=Math.atan(Math.sqrt(this.a*this.a-p*p)/(this.one_minus_f*p)),g&&(t.phi=-t.phi)}return t.lam+=this.long0,n.x=t.lam,n.y=t.phi,n}function Gr(n,t,e,i){var s;return n<at?(i.value=Yt.AREA_0,s=0):(s=Math.atan2(t,e),Math.abs(s)<=$t?i.value=Yt.AREA_0:s>$t&&s<=K+$t?(i.value=Yt.AREA_1,s-=K):s>K+$t||s<=-(K+$t)?(i.value=Yt.AREA_2,s=s>=0?s-fe:s+fe):(i.value=Yt.AREA_3,s+=K)),s}function is(n,t){var e=n+t;return e<-fe?e+=ks:e>+fe&&(e-=ks),e}var dy=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const py={init:cy,forward:uy,inverse:fy,names:dy};var dh=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],Rs=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],zu=.8487,ku=1.3523,Hu=pn/5,my=1/Hu,Qi=18,oa=function(n,t){return n[0]+t*(n[1]+t*(n[2]+t*n[3]))},_y=function(n,t){return n[1]+t*(2*n[2]+t*3*n[3])};function gy(n,t,e,i){for(var s=t;i;--i){var r=n(s);if(s-=r,Math.abs(r)<e)break}return s}function vy(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function xy(n){var t=ct(n.x-this.long0),e=Math.abs(n.y),i=Math.floor(e*Hu);i<0?i=0:i>=Qi&&(i=Qi-1),e=pn*(e-my*i);var s={x:oa(dh[i],e)*t,y:oa(Rs[i],e)};return n.y<0&&(s.y=-s.y),s.x=s.x*this.a*zu+this.x0,s.y=s.y*this.a*ku+this.y0,s}function My(n){var t={x:(n.x-this.x0)/(this.a*zu),y:Math.abs(n.y-this.y0)/(this.a*ku)};if(t.y>=1)t.x/=dh[Qi][0],t.y=n.y<0?-K:K;else{var e=Math.floor(t.y*Qi);for(e<0?e=0:e>=Qi&&(e=Qi-1);;)if(Rs[e][0]>t.y)--e;else if(Rs[e+1][0]<=t.y)++e;else break;var i=Rs[e],s=5*(t.y-i[0])/(Rs[e+1][0]-i[0]);s=gy(function(r){return(oa(i,r)-t.y)/_y(i,r)},s,at,100),t.x/=oa(dh[e],s),t.y=(5*e+s)*Me,n.y<0&&(t.y=-t.y)}return t.x=ct(t.x+this.long0),t}var yy=["Robinson","robin"];const Sy={init:vy,forward:xy,inverse:My,names:yy};function Ey(){this.name="geocent"}function by(n){var t=Cu(n,this.es,this.a);return t}function Ty(n){var t=Pu(n,this.es,this.a,this.b);return t}var Ay=["Geocentric","geocentric","geocent","Geocent"];const wy={init:Ey,forward:by,inverse:Ty,names:Ay};var we={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},Es={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function Ry(){if(Object.keys(Es).forEach((function(e){if(typeof this[e]>"u")this[e]=Es[e].def;else{if(Es[e].num&&isNaN(this[e]))throw new Error("Invalid parameter value, must be numeric "+e+" = "+this[e]);Es[e].num&&(this[e]=parseFloat(this[e]))}Es[e].degrees&&(this[e]=this[e]*Me)}).bind(this)),Math.abs(Math.abs(this.lat0)-K)<at?this.mode=this.lat0<0?we.S_POLE:we.N_POLE:Math.abs(this.lat0)<at?this.mode=we.EQUIT:(this.mode=we.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var n=this.tilt,t=this.azi;this.cg=Math.cos(t),this.sg=Math.sin(t),this.cw=Math.cos(n),this.sw=Math.sin(n)}function Cy(n){n.x-=this.long0;var t=Math.sin(n.y),e=Math.cos(n.y),i=Math.cos(n.x),s,r;switch(this.mode){case we.OBLIQ:r=this.sinph0*t+this.cosph0*e*i;break;case we.EQUIT:r=e*i;break;case we.S_POLE:r=-t;break;case we.N_POLE:r=t;break}switch(r=this.pn1/(this.p-r),s=r*e*Math.sin(n.x),this.mode){case we.OBLIQ:r*=this.cosph0*t-this.sinph0*e*i;break;case we.EQUIT:r*=t;break;case we.N_POLE:r*=-(e*i);break;case we.S_POLE:r*=e*i;break}var o,a;return o=r*this.cg+s*this.sg,a=1/(o*this.sw*this.h1+this.cw),s=(s*this.cg-r*this.sg)*this.cw*a,r=o*a,n.x=s*this.a,n.y=r*this.a,n}function Py(n){n.x/=this.a,n.y/=this.a;var t={x:n.x,y:n.y},e,i,s;s=1/(this.pn1-n.y*this.sw),e=this.pn1*n.x*s,i=this.pn1*n.y*this.cw*s,n.x=e*this.cg+i*this.sg,n.y=i*this.cg-e*this.sg;var r=Ue(n.x,n.y);if(Math.abs(r)<at)t.x=0,t.y=n.y;else{var o,a;switch(a=1-r*r*this.pfact,a=(this.p-Math.sqrt(a))/(this.pn1/r+r/this.pn1),o=Math.sqrt(1-a*a),this.mode){case we.OBLIQ:t.y=Math.asin(o*this.sinph0+n.y*a*this.cosph0/r),n.y=(o-this.sinph0*Math.sin(t.y))*r,n.x*=a*this.cosph0;break;case we.EQUIT:t.y=Math.asin(n.y*a/r),n.y=o*r,n.x*=a;break;case we.N_POLE:t.y=Math.asin(o),n.y=-n.y;break;case we.S_POLE:t.y=-Math.asin(o);break}t.x=Math.atan2(n.x,n.y)}return n.x=t.x+this.long0,n.y=t.y,n}var Iy=["Tilted_Perspective","tpers"];const Ly={init:Ry,forward:Cy,inverse:Py,names:Iy};function Dy(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var n=1-this.es,t=1/n;this.radius_p=Math.sqrt(n),this.radius_p2=n,this.radius_p_inv2=t,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function Ny(n){var t=n.x,e=n.y,i,s,r,o;if(t=t-this.long0,this.shape==="ellipse"){e=Math.atan(this.radius_p2*Math.tan(e));var a=this.radius_p/Ue(this.radius_p*Math.cos(e),Math.sin(e));if(s=a*Math.cos(t)*Math.cos(e),r=a*Math.sin(t)*Math.cos(e),o=a*Math.sin(e),(this.radius_g-s)*s-r*r-o*o*this.radius_p_inv2<0)return n.x=Number.NaN,n.y=Number.NaN,n;i=this.radius_g-s,this.flip_axis?(n.x=this.radius_g_1*Math.atan(r/Ue(o,i)),n.y=this.radius_g_1*Math.atan(o/i)):(n.x=this.radius_g_1*Math.atan(r/i),n.y=this.radius_g_1*Math.atan(o/Ue(r,i)))}else this.shape==="sphere"&&(i=Math.cos(e),s=Math.cos(t)*i,r=Math.sin(t)*i,o=Math.sin(e),i=this.radius_g-s,this.flip_axis?(n.x=this.radius_g_1*Math.atan(r/Ue(o,i)),n.y=this.radius_g_1*Math.atan(o/i)):(n.x=this.radius_g_1*Math.atan(r/i),n.y=this.radius_g_1*Math.atan(o/Ue(r,i))));return n.x=n.x*this.a,n.y=n.y*this.a,n}function Uy(n){var t=-1,e=0,i=0,s,r,o,a;if(n.x=n.x/this.a,n.y=n.y/this.a,this.shape==="ellipse"){this.flip_axis?(i=Math.tan(n.y/this.radius_g_1),e=Math.tan(n.x/this.radius_g_1)*Ue(1,i)):(e=Math.tan(n.x/this.radius_g_1),i=Math.tan(n.y/this.radius_g_1)*Ue(1,e));var h=i/this.radius_p;if(s=e*e+h*h+t*t,r=2*this.radius_g*t,o=r*r-4*s*this.C,o<0)return n.x=Number.NaN,n.y=Number.NaN,n;a=(-r-Math.sqrt(o))/(2*s),t=this.radius_g+a*t,e*=a,i*=a,n.x=Math.atan2(e,t),n.y=Math.atan(i*Math.cos(n.x)/t),n.y=Math.atan(this.radius_p_inv2*Math.tan(n.y))}else if(this.shape==="sphere"){if(this.flip_axis?(i=Math.tan(n.y/this.radius_g_1),e=Math.tan(n.x/this.radius_g_1)*Math.sqrt(1+i*i)):(e=Math.tan(n.x/this.radius_g_1),i=Math.tan(n.y/this.radius_g_1)*Math.sqrt(1+e*e)),s=e*e+i*i+t*t,r=2*this.radius_g*t,o=r*r-4*s*this.C,o<0)return n.x=Number.NaN,n.y=Number.NaN,n;a=(-r-Math.sqrt(o))/(2*s),t=this.radius_g+a*t,e*=a,i*=a,n.x=Math.atan2(e,t),n.y=Math.atan(i*Math.cos(n.x)/t)}return n.x=n.x+this.long0,n}var Fy=["Geostationary Satellite View","Geostationary_Satellite","geos"];const Oy={init:Dy,forward:Ny,inverse:Uy,names:Fy};var Ls=1.340264,Ds=-.081106,Ns=893e-6,Us=.003796,ha=Math.sqrt(3)/2;function Gy(){this.es=0,this.long0=this.long0!==void 0?this.long0:0}function By(n){var t=ct(n.x-this.long0),e=n.y,i=Math.asin(ha*Math.sin(e)),s=i*i,r=s*s*s;return n.x=t*Math.cos(i)/(ha*(Ls+3*Ds*s+r*(7*Ns+9*Us*s))),n.y=i*(Ls+Ds*s+r*(Ns+Us*s)),n.x=this.a*n.x+this.x0,n.y=this.a*n.y+this.y0,n}function zy(n){n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a;var t=1e-9,e=12,i=n.y,s,r,o,a,h,l;for(l=0;l<e&&(s=i*i,r=s*s*s,o=i*(Ls+Ds*s+r*(Ns+Us*s))-n.y,a=Ls+3*Ds*s+r*(7*Ns+9*Us*s),i-=h=o/a,!(Math.abs(h)<t));++l);return s=i*i,r=s*s*s,n.x=ha*n.x*(Ls+3*Ds*s+r*(7*Ns+9*Us*s))/Math.cos(i),n.y=Math.asin(Math.sin(i)/ha),n.x=ct(n.x+this.long0),n}var ky=["eqearth","Equal Earth","Equal_Earth"];const Hy={init:Gy,forward:By,inverse:zy,names:ky};var Ws=1e-10;function Vy(){var n;if(this.phi1=this.lat1,Math.abs(this.phi1)<Ws)throw new Error;this.es?(this.en=Ih(this.es),this.m1=ds(this.phi1,this.am1=Math.sin(this.phi1),n=Math.cos(this.phi1),this.en),this.am1=n/(Math.sqrt(1-this.es*this.am1*this.am1)*this.am1),this.inverse=Xy,this.forward=Wy):(Math.abs(this.phi1)+Ws>=K?this.cphi1=0:this.cphi1=1/Math.tan(this.phi1),this.inverse=$y,this.forward=qy)}function Wy(n){var t=ct(n.x-(this.long0||0)),e=n.y,i,s,r;return i=this.am1+this.m1-ds(e,s=Math.sin(e),r=Math.cos(e),this.en),s=r*t/(i*Math.sqrt(1-this.es*s*s)),n.x=i*Math.sin(s),n.y=this.am1-i*Math.cos(s),n.x=this.a*n.x+(this.x0||0),n.y=this.a*n.y+(this.y0||0),n}function Xy(n){n.x=(n.x-(this.x0||0))/this.a,n.y=(n.y-(this.y0||0))/this.a;var t,e,i,s;if(e=Ue(n.x,n.y=this.am1-n.y),s=Lh(this.am1+this.m1-e,this.es,this.en),(t=Math.abs(s))<K)t=Math.sin(s),i=e*Math.atan2(n.x,n.y)*Math.sqrt(1-this.es*t*t)/Math.cos(s);else if(Math.abs(t-K)<=Ws)i=0;else throw new Error;return n.x=ct(i+(this.long0||0)),n.y=ri(s),n}function qy(n){var t=ct(n.x-(this.long0||0)),e=n.y,i,s;return s=this.cphi1+this.phi1-e,Math.abs(s)>Ws?(n.x=s*Math.sin(i=t*Math.cos(e)/s),n.y=this.cphi1-s*Math.cos(i)):n.x=n.y=0,n.x=this.a*n.x+(this.x0||0),n.y=this.a*n.y+(this.y0||0),n}function $y(n){n.x=(n.x-(this.x0||0))/this.a,n.y=(n.y-(this.y0||0))/this.a;var t,e,i=Ue(n.x,n.y=this.cphi1-n.y);if(e=this.cphi1+this.phi1-i,Math.abs(e)>K)throw new Error;return Math.abs(Math.abs(e)-K)<=Ws?t=0:t=i*Math.atan2(n.x,n.y)/Math.cos(e),n.x=ct(t+(this.long0||0)),n.y=ri(e),n}var Yy=["bonne","Bonne (Werner lat_1=90)"];const jy={init:Vy,names:Yy};function Ky(n){n.Proj.projections.add(jr),n.Proj.projections.add(Kr),n.Proj.projections.add(Yv),n.Proj.projections.add(ix),n.Proj.projections.add(hx),n.Proj.projections.add(dx),n.Proj.projections.add(xx),n.Proj.projections.add(bx),n.Proj.projections.add(Cx),n.Proj.projections.add(Nx),n.Proj.projections.add($x),n.Proj.projections.add(Qx),n.Proj.projections.add(sM),n.Proj.projections.add(cM),n.Proj.projections.add(mM),n.Proj.projections.add(MM),n.Proj.projections.add(TM),n.Proj.projections.add(PM),n.Proj.projections.add(FM),n.Proj.projections.add(kM),n.Proj.projections.add(qM),n.Proj.projections.add(ZM),n.Proj.projections.add(sy),n.Proj.projections.add(ly),n.Proj.projections.add(py),n.Proj.projections.add(Sy),n.Proj.projections.add(wy),n.Proj.projections.add(Ly),n.Proj.projections.add(Oy),n.Proj.projections.add(Hy),n.Proj.projections.add(jy)}const _a=Object.assign(uv,{defaultDatum:"WGS84",Proj:hn,WGS84:new hn("WGS84"),Point:ls,toPoint:Iu,defs:Pe,nadgrid:$1,transform:ra,mgrs:fv,version:"__VERSION__"});Ky(_a);const wc={latitude:47.410139353884134,longitude:9.332826022676095},ga=5,Zy=[16724838,16762173,5231045,3711337,6717162,16156595],Jy=.6,Vu="EPSG:4326",Wu="EPSG:2056",Br=50,Xu="https://www.geoportal.ch",Qy="https://www.geoportal.ch/services/wfs",tS="geoportal:a111_avdm01_amtlverm_fla",eS="1000000",ph="locar.projectedAuth";_a.defs(Vu,"+proj=longlat +datum=WGS84 +no_defs");_a.defs(Wu,"+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs");const Xs=new Ke(80,window.innerWidth/window.innerHeight,.001,1e3),va=new dg({canvas:document.getElementById("glscene")});va.setSize(window.innerWidth,window.innerHeight);const xa=new Md,Nn=new Kg(xa,Xs),qu=new Zg({video:{facingMode:"environment"}},null);qu.on("webcamstarted",n=>{xa.background=n.texture});qu.on("webcamerror",n=>{alert(`Webcam error: code ${n.code} message ${n.message}`)});window.addEventListener("resize",()=>{va.setSize(window.innerWidth,window.innerHeight),Xs.aspect=window.innerWidth/window.innerHeight,Xs.updateProjectionMatrix()});let Un=!1,Je=null;const ye={latitude:wc.latitude,longitude:wc.longitude};let Ei=null,fo=!1,Cs=null,qn=null;const Ma=new e1(Xs);Ma.on("deviceorientationgranted",n=>{n.target.connect()});Ma.on("deviceorientationerror",n=>{alert(`Device orientation error: code ${n.code} message ${n.message}`)});Ma.init();Nn.on("gpserror",n=>{alert(`GPS error: ${n.code}`)});Nn.on("gpsupdate",n=>{const{latitude:t,longitude:e}=n.position.coords;dS(t,e),Un?Gh():(ye.latitude=t,ye.longitude=e,Je=Ku(),Nn.add(Je,ye.longitude,ye.latitude),Un=!0,ya()),Oe?.classList.contains("projected-open")&&zh().catch(i=>console.error("Error refreshing projected buildings",i))});Nn.startGps();const $u=document.getElementById("fakeLat"),Yu=document.getElementById("fakeLon"),nS=document.getElementById("setFakeLoc"),iS=document.getElementById("resumeRealGps"),sS=document.getElementById("moveNorth"),rS=document.getElementById("moveSouth"),aS=document.getElementById("moveWest"),oS=document.getElementById("moveEast"),hS=document.getElementById("removePoi"),lS=document.getElementById("resetPoi"),ju=document.getElementById("deviceCoords"),Rc=document.getElementById("poiCoords"),Cc=document.getElementById("gpsinput"),bs=document.getElementById("gpsinputToggle"),la=document.getElementById("projectedToggle"),Oe=document.getElementById("projectedPanel"),cS=document.getElementById("projectedClose"),Rn=document.getElementById("projectedStatus"),pi=document.getElementById("projectedList"),uS=document.getElementById("projectedAuthButton"),po=document.getElementById("projectedAuthStatus");yS();mh();nS.addEventListener("click",()=>{const n=parseFloat($u.value),t=parseFloat(Yu.value);if(Number.isNaN(n)||Number.isNaN(t)){alert("Please enter valid numeric latitude / longitude values.");return}alert("Using fake input GPS, not real GPS location"),Nn.stopGps(),Nn.fakeGps(t,n)});iS.addEventListener("click",()=>{alert("Resuming real GPS updates"),ju.textContent="waiting for GPS…",Nn.startGps()});sS.addEventListener("click",()=>Sa(ga,0));rS.addEventListener("click",()=>Sa(-ga,0));aS.addEventListener("click",()=>Sa(0,-ga));oS.addEventListener("click",()=>Sa(0,ga));hS.addEventListener("click",pS);lS.addEventListener("click",mS);bs&&Cc&&bs.addEventListener("click",()=>{const n=Cc.classList.toggle("gpsinput-collapsed");bs.setAttribute("aria-expanded",(!n).toString()),bs.textContent=n?"► Controls":"▼ Controls",bs.title=n?"Show testing controls":"Hide testing controls"});la&&Oe&&la.addEventListener("click",()=>{Oe.classList.contains("projected-open")?Bh():_S(!0)});cS?.addEventListener("click",()=>Bh());uS?.addEventListener("click",MS);document.addEventListener("keydown",n=>{n.key==="Escape"&&Oe?.classList.contains("projected-open")&&Bh()});va.setAnimationLoop(fS);function fS(){Ma?.update(),va.render(xa,Xs)}function Ku(){const n=new us(12,12,12),t=Zy.map(r=>new bh({color:r,opacity:Jy,transparent:!0})),e=new dn(n,t),i=new ru({color:16777215,opacity:.3,transparent:!0}),s=new Ad(n);return e.add(new Td(s,i)),e.name="Example POI",e}function Gh(){if(!Un||!Je)return;const[n,t]=Nn.lonLatToWorldCoords(ye.longitude,ye.latitude);Je.position.x=n,Je.position.z=t}function ya(){$u.value=ye.latitude.toFixed(8),Yu.value=ye.longitude.toFixed(8),Un?Rc.textContent=`${ye.latitude.toFixed(6)}°, ${ye.longitude.toFixed(6)}°`:Rc.textContent="none"}function Sa(n,t){if(!Un||!Je){alert("The AR scene is still initialising. Try again when the red marker is visible.");return}const e=111132,i=Math.max(Math.cos(ye.latitude*Math.PI/180)*e,1e-6);ye.latitude+=n/e,ye.longitude+=t/i,Gh(),ya()}function dS(n,t){Number.isFinite(n)&&Number.isFinite(t)&&(ju.textContent=`${n.toFixed(6)}°, ${t.toFixed(6)}°`,Ei={latitude:n,longitude:t})}function pS(){if(!Un||!Je){alert("No cube to remove right now.");return}xa.remove(Je),Je=null,Un=!1,ya()}function mS(){if(!Ei){alert("Device location not available yet. Wait for GPS before resetting the cube.");return}ye.latitude=Ei.latitude,ye.longitude=Ei.longitude,!Un||!Je?(Je=Ku(),Nn.add(Je,ye.longitude,ye.latitude),Un=!0):Gh(),ya()}function _S(n=!1){Oe&&(Oe.classList.add("projected-open"),Oe.setAttribute("aria-hidden","false"),la?.setAttribute("aria-expanded","true"),n&&(Cs=null),zh(n).catch(t=>{console.error("Error loading projected buildings",t)}))}function Bh(){Oe&&(Oe.classList.remove("projected-open"),Oe.setAttribute("aria-hidden","true"),la?.setAttribute("aria-expanded","false"))}async function zh(n=!1){if(!Oe||!Rn||!pi)return;if(!Ei){Rn.textContent="Waiting for GPS fix before requesting projected buildings.",pi.replaceChildren();return}const[t,e]=_a(Vu,Wu,[Ei.longitude,Ei.latitude]),i={xmin:t-Br,ymin:e-Br,xmax:t+Br,ymax:e+Br},s=`${i.xmin.toFixed(2)}|${i.ymin.toFixed(2)}|${i.xmax.toFixed(2)}|${i.ymax.toFixed(2)}`;if(!n&&Cs===s&&pi.childElementCount>0){Rn.textContent=`${pi.childElementCount} projected building${pi.childElementCount===1?"":"s"} listed.`;return}if(!fo){fo=!0,Oe.dataset.loading="true",Rn.textContent="Loading projected buildings…",pi.replaceChildren();try{const r=new URLSearchParams({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:"2.0.0",TYPENAMES:tS,COUNT:eS,SRSNAME:"urn:ogc:def:crs:EPSG::2056",BBOX:`${i.xmin},${i.ymin},${i.xmax},${i.ymax},urn:ogc:def:crs:EPSG::2056`}),o=`${Qy}?${r.toString()}`,a=new Headers({Accept:"application/xml"}),h=xS();h&&a.set("Authorization",h);const l=await fetch(o,{headers:a});if(!l.ok)throw new Error(`Geoportal request failed (${l.status})`);const u=await l.text(),c=gS(u);if(c.length===0){Rn.textContent="No projected buildings found within the current search radius.",Cs=s;return}const f=document.createDocumentFragment();c.forEach(d=>{const _=document.createElement("li");_.className="projected-item";const g=document.createElement("h3");if(g.textContent=d.usage,_.appendChild(g),d.status){const m=document.createElement("p");m.textContent=`Status: ${d.status}`,_.appendChild(m)}if(d.area){const m=document.createElement("p");m.textContent=`Area: ${vS(d.area)} m²`,_.appendChild(m)}if(d.identifier||d.nbident){const m=document.createElement("p"),p=[];d.identifier&&p.push(`ID ${d.identifier}`),d.nbident&&p.push(`NB ${d.nbident}`),m.textContent=p.join(" · "),_.appendChild(m)}if(d.statusDate){const m=document.createElement("p");m.textContent=`Valid since: ${d.statusDate}`,_.appendChild(m)}f.appendChild(_)}),pi.appendChild(f),Rn.textContent=`${c.length} projected building${c.length===1?"":"s"} found.`,Cs=s}catch(r){throw Rn.textContent=`Unable to load projected buildings: ${r.message}`,Cs=null,r}finally{fo=!1,delete Oe.dataset.loading}}}function gS(n){const e=new DOMParser().parseFromString(n,"application/xml");if(e.querySelector("parsererror"))throw new Error("Invalid XML returned by Geoportal service.");return Array.from(e.getElementsByTagNameNS(Xu,"a111_avdm01_amtlverm_fla")).map(r=>{const o=mi(r,"a111_avdm01_projboden_fla_status");return!o||o.toLowerCase()!=="projektiert"?null:{status:o,usage:mi(r,"a111_avdm01_projboden_fla_gebhauptnutzung")||"Unspecified usage",area:mi(r,"a111_avdm01_projboden_fla_flaeche"),identifier:mi(r,"a111_avdm01_projboden_fla_identifikator")||mi(r,"id"),nbident:mi(r,"a111_avdm01_projboden_fla_nbident"),statusDate:mi(r,"a111_avdm01_projboden_fla_gueltigereintrag")}}).filter(Boolean)}function mi(n,t){const e=n.getElementsByTagNameNS(Xu,t);if(!e||e.length===0)return null;const i=e[0].textContent;return i?i.trim():null}function vS(n){const t=Number.parseFloat(n);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:1}):n}function xS(){return kh()}function MS(){if(typeof window>"u")return;const n=kh(),t=n?n.replace(/^basic\s+/i,""):"",i=window.prompt(`Enter the Base64 credentials for the Geoportal WFS access.
Example: dXNlcjpwYXNz (the part after "Basic "). Leave blank to clear the stored token.`,t);if(i===null)return;const s=i.trim();if(s.length===0){Pc(null),Rn&&(Rn.textContent="Credentials cleared. Re-open the menu to retry."),mh();return}let r=s;/^basic\s+/i.test(r)||(r=`Basic ${r}`),Pc(r),mh(),Oe?.classList.contains("projected-open")&&zh(!0).catch(o=>console.error("Error refreshing projected buildings",o))}function mh(){if(!po)return;kh()?po.textContent="Credentials stored and will be used for Geoportal requests.":po.textContent="No credentials stored."}function Pc(n){const t=n?n.trim():"";t.length>0?(qn=t,Ic(t)):(qn=null,Ic(null))}function kh(){if(qn&&qn.length>0)return qn;const n=Zu();return qn=n&&n.length>0?n:null,qn}function yS(){qn=Zu()}function Zu(){if(typeof window>"u"||typeof window.localStorage>"u")return null;try{const n=window.localStorage.getItem(ph);if(n&&n.trim().length>0)return n.trim()}catch(n){console.warn("Unable to access localStorage for projected auth token.",n)}return null}function Ic(n){if(!(typeof window>"u"||typeof window.localStorage>"u"))try{n&&n.trim().length>0?window.localStorage.setItem(ph,n.trim()):window.localStorage.removeItem(ph)}catch(t){console.warn("Unable to persist projected auth token.",t)}}
