/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
"use strict";var define,AMDLoader,CSSLoaderPlugin,_amdLoaderGlobal=this,_commonjsGlobal="object"==typeof global?global:{};!function(e){e.global=_amdLoaderGlobal;var t=function(){function t(){this._detected=!1,this._isWindows=!1,this._isNode=!1,this._isElectronRenderer=!1,this._isWebWorker=!1}return Object.defineProperty(t.prototype,"isWindows",{get:function(){return this._detect(),this._isWindows},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isNode",{get:function(){return this._detect(),this._isNode},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isElectronRenderer",{get:function(){return this._detect(),this._isElectronRenderer},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isWebWorker",{get:function(){return this._detect(),this._isWebWorker},enumerable:!0,configurable:!0}),t.prototype._detect=function(){this._detected||(this._detected=!0,this._isWindows=t._isWindows(),this._isNode="undefined"!=typeof module&&!!module.exports,
this._isElectronRenderer="undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.electron&&"renderer"===process.type,this._isWebWorker="function"==typeof e.global.importScripts)},t._isWindows=function(){return!!("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.indexOf("Windows")>=0)||"undefined"!=typeof process&&"win32"===process.platform},t}();e.Environment=t}(AMDLoader||(AMDLoader={})),function(e){var t=function(e,t,n){this.type=e,this.detail=t,this.timestamp=n};e.LoaderEvent=t;var n=function(){function n(e){this._events=[new t(1,"",e)]}return n.prototype.record=function(n,r){this._events.push(new t(n,r,e.Utilities.getHighPerformanceTimestamp()))},n.prototype.getEvents=function(){return this._events},n}();e.LoaderEventRecorder=n;var r=function(){function e(){}return e.prototype.record=function(e,t){},e.prototype.getEvents=function(){return[]},e.INSTANCE=new e,e}();e.NullLoaderEventRecorder=r}(AMDLoader||(AMDLoader={})),function(e){var t=function(){
function t(){}return t.fileUriToFilePath=function(e,t){if(t=decodeURI(t).replace(/%23/g,"#"),e){if(/^file:\/\/\//.test(t))return t.substr(8);if(/^file:\/\//.test(t))return t.substr(5)}else if(/^file:\/\//.test(t))return t.substr(7);return t},t.startsWith=function(e,t){return e.length>=t.length&&e.substr(0,t.length)===t},t.endsWith=function(e,t){return e.length>=t.length&&e.substr(e.length-t.length)===t},t.containsQueryString=function(e){return/^[^\#]*\?/gi.test(e)},t.isAbsolutePath=function(e){return/^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(e)},t.forEachProperty=function(e,t){if(e){var n=void 0;for(n in e)e.hasOwnProperty(n)&&t(n,e[n])}},t.isEmpty=function(e){var n=!0;return t.forEachProperty(e,(function(){n=!1})),n},t.recursiveClone=function(e){if(!e||"object"!=typeof e||e instanceof RegExp)return e;var n=Array.isArray(e)?[]:{};return t.forEachProperty(e,(function(e,r){n[e]=r&&"object"==typeof r?t.recursiveClone(r):r})),n},t.generateAnonymousModule=function(){
return"===anonymous"+t.NEXT_ANONYMOUS_ID+++"==="},t.isAnonymousModule=function(e){return t.startsWith(e,"===anonymous")},t.getHighPerformanceTimestamp=function(){return this.PERFORMANCE_NOW_PROBED||(this.PERFORMANCE_NOW_PROBED=!0,this.HAS_PERFORMANCE_NOW=e.global.performance&&"function"==typeof e.global.performance.now),this.HAS_PERFORMANCE_NOW?e.global.performance.now():Date.now()},t.NEXT_ANONYMOUS_ID=1,t.PERFORMANCE_NOW_PROBED=!1,t.HAS_PERFORMANCE_NOW=!1,t}();e.Utilities=t}(AMDLoader||(AMDLoader={})),function(e){function t(e){if(e instanceof Error)return e;var t=new Error(e.message||String(e)||"Unknown Error");return e.stack&&(t.stack=e.stack),t}e.ensureError=t;var n=function(){function n(){}return n.validateConfigurationOptions=function(n){if("string"!=typeof(n=n||{}).baseUrl&&(n.baseUrl=""),"boolean"!=typeof n.isBuild&&(n.isBuild=!1),"object"!=typeof n.paths&&(n.paths={}),"object"!=typeof n.config&&(n.config={}),void 0===n.catchError&&(n.catchError=!1),void 0===n.recordStats&&(n.recordStats=!1),
"string"!=typeof n.urlArgs&&(n.urlArgs=""),"function"!=typeof n.onError&&(n.onError=function(e){return"loading"===e.phase?(console.error('Loading "'+e.moduleId+'" failed'),console.error(e),console.error("Here are the modules that depend on it:"),void console.error(e.neededBy)):"factory"===e.phase?(console.error('The factory method of "'+e.moduleId+'" has thrown an exception'),void console.error(e)):void 0}),Array.isArray(n.ignoreDuplicateModules)||(n.ignoreDuplicateModules=[]),n.baseUrl.length>0&&(e.Utilities.endsWith(n.baseUrl,"/")||(n.baseUrl+="/")),"string"!=typeof n.cspNonce&&(n.cspNonce=""),void 0===n.preferScriptTags&&(n.preferScriptTags=!1),Array.isArray(n.nodeModules)||(n.nodeModules=[]),n.nodeCachedData&&"object"==typeof n.nodeCachedData&&("string"!=typeof n.nodeCachedData.seed&&(n.nodeCachedData.seed="seed"),("number"!=typeof n.nodeCachedData.writeDelay||n.nodeCachedData.writeDelay<0)&&(n.nodeCachedData.writeDelay=7e3),!n.nodeCachedData.path||"string"!=typeof n.nodeCachedData.path)){
var r=t(new Error("INVALID cached data configuration, 'path' MUST be set"));r.phase="configuration",n.onError(r),n.nodeCachedData=void 0}return n},n.mergeConfigurationOptions=function(t,r){void 0===t&&(t=null),void 0===r&&(r=null);var o=e.Utilities.recursiveClone(r||{});return e.Utilities.forEachProperty(t,(function(t,n){"ignoreDuplicateModules"===t&&void 0!==o.ignoreDuplicateModules?o.ignoreDuplicateModules=o.ignoreDuplicateModules.concat(n):"paths"===t&&void 0!==o.paths?e.Utilities.forEachProperty(n,(function(e,t){return o.paths[e]=t})):"config"===t&&void 0!==o.config?e.Utilities.forEachProperty(n,(function(e,t){return o.config[e]=t})):o[t]=e.Utilities.recursiveClone(n)})),n.validateConfigurationOptions(o)},n}();e.ConfigurationOptionsUtil=n;var r=function(){function t(e,t){if(this._env=e,this.options=n.mergeConfigurationOptions(t),this._createIgnoreDuplicateModulesMap(),this._createNodeModulesMap(),this._createSortedPathsRules(),""===this.options.baseUrl){
if(this.options.nodeRequire&&this.options.nodeRequire.main&&this.options.nodeRequire.main.filename&&this._env.isNode){var r=this.options.nodeRequire.main.filename,o=Math.max(r.lastIndexOf("/"),r.lastIndexOf("\\"));this.options.baseUrl=r.substring(0,o+1)}if(this.options.nodeMain&&this._env.isNode){r=this.options.nodeMain,o=Math.max(r.lastIndexOf("/"),r.lastIndexOf("\\"));this.options.baseUrl=r.substring(0,o+1)}}}return t.prototype._createIgnoreDuplicateModulesMap=function(){this.ignoreDuplicateModulesMap={};for(var e=0;e<this.options.ignoreDuplicateModules.length;e++)this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[e]]=!0},t.prototype._createNodeModulesMap=function(){this.nodeModulesMap=Object.create(null);for(var e=0,t=this.options.nodeModules;e<t.length;e++){var n=t[e];this.nodeModulesMap[n]=!0}},t.prototype._createSortedPathsRules=function(){var t=this;this.sortedPathsRules=[],e.Utilities.forEachProperty(this.options.paths,(function(e,n){Array.isArray(n)?t.sortedPathsRules.push({from:e,
to:n}):t.sortedPathsRules.push({from:e,to:[n]})})),this.sortedPathsRules.sort((function(e,t){return t.from.length-e.from.length}))},t.prototype.cloneAndMerge=function(e){return new t(this._env,n.mergeConfigurationOptions(e,this.options))},t.prototype.getOptionsLiteral=function(){return this.options},t.prototype._applyPaths=function(t){for(var n,r=0,o=this.sortedPathsRules.length;r<o;r++)if(n=this.sortedPathsRules[r],e.Utilities.startsWith(t,n.from)){for(var i=[],s=0,a=n.to.length;s<a;s++)i.push(n.to[s]+t.substr(n.from.length));return i}return[t]},t.prototype._addUrlArgsToUrl=function(t){return e.Utilities.containsQueryString(t)?t+"&"+this.options.urlArgs:t+"?"+this.options.urlArgs},t.prototype._addUrlArgsIfNecessaryToUrl=function(e){return this.options.urlArgs?this._addUrlArgsToUrl(e):e},t.prototype._addUrlArgsIfNecessaryToUrls=function(e){if(this.options.urlArgs)for(var t=0,n=e.length;t<n;t++)e[t]=this._addUrlArgsToUrl(e[t]);return e},t.prototype.moduleIdToPaths=function(t){
if(!0===this.nodeModulesMap[t]||this.options.amdModulesPattern instanceof RegExp&&!this.options.amdModulesPattern.test(t))return this.isBuild()?["empty:"]:["node|"+t];var n,r=t;if(e.Utilities.endsWith(r,".js")||e.Utilities.isAbsolutePath(r))e.Utilities.endsWith(r,".js")||e.Utilities.containsQueryString(r)||(r+=".js"),n=[r];else for(var o=0,i=(n=this._applyPaths(r)).length;o<i;o++)this.isBuild()&&"empty:"===n[o]||(e.Utilities.isAbsolutePath(n[o])||(n[o]=this.options.baseUrl+n[o]),e.Utilities.endsWith(n[o],".js")||e.Utilities.containsQueryString(n[o])||(n[o]=n[o]+".js"));return this._addUrlArgsIfNecessaryToUrls(n)},t.prototype.requireToUrl=function(t){var n=t;return e.Utilities.isAbsolutePath(n)||(n=this._applyPaths(n)[0],e.Utilities.isAbsolutePath(n)||(n=this.options.baseUrl+n)),this._addUrlArgsIfNecessaryToUrl(n)},t.prototype.isBuild=function(){return this.options.isBuild},t.prototype.isDuplicateMessageIgnoredFor=function(e){return this.ignoreDuplicateModulesMap.hasOwnProperty(e)},
t.prototype.getConfigForModule=function(e){if(this.options.config)return this.options.config[e]},t.prototype.shouldCatchError=function(){return this.options.catchError},t.prototype.shouldRecordStats=function(){return this.options.recordStats},t.prototype.onError=function(e){this.options.onError(e)},t}();e.Configuration=r}(AMDLoader||(AMDLoader={})),function(e){var t=function(){function e(e){this._env=e,this._scriptLoader=null,this._callbackMap={}}return e.prototype.load=function(e,t,i,s){var a=this;if(!this._scriptLoader)if(this._env.isWebWorker)this._scriptLoader=new r;else if(this._env.isElectronRenderer){var u=e.getConfig().getOptionsLiteral().preferScriptTags;this._scriptLoader=u?new n:new o(this._env)}else this._env.isNode?this._scriptLoader=new o(this._env):this._scriptLoader=new n;var d={callback:i,errorback:s};this._callbackMap.hasOwnProperty(t)?this._callbackMap[t].push(d):(this._callbackMap[t]=[d],this._scriptLoader.load(e,t,(function(){return a.triggerCallback(t)}),(function(e){
return a.triggerErrorback(t,e)})))},e.prototype.triggerCallback=function(e){var t=this._callbackMap[e];delete this._callbackMap[e];for(var n=0;n<t.length;n++)t[n].callback()},e.prototype.triggerErrorback=function(e,t){var n=this._callbackMap[e];delete this._callbackMap[e];for(var r=0;r<n.length;r++)n[r].errorback(t)},e}(),n=function(){function t(){}return t.prototype.attachListeners=function(e,t,n){var r=function(){e.removeEventListener("load",o),e.removeEventListener("error",i)},o=function(e){r(),t()},i=function(e){r(),n(e)};e.addEventListener("load",o),e.addEventListener("error",i)},t.prototype.load=function(t,n,r,o){if(/^node\|/.test(n)){var i=t.getConfig().getOptionsLiteral().nodeRequire||e.global.nodeRequire,s=n.split("|"),a=null;try{a=i(s[1])}catch(e){return void o(e)}t.enqueueDefineAnonymousModule([],(function(){return a})),r()}else{var u=document.createElement("script");u.setAttribute("async","async"),u.setAttribute("type","text/javascript"),this.attachListeners(u,r,o),u.setAttribute("src",n)
;var d=t.getConfig().getOptionsLiteral().cspNonce;d&&u.setAttribute("nonce",d),document.getElementsByTagName("head")[0].appendChild(u)}},t}(),r=function(){function e(){}return e.prototype.load=function(e,t,n,r){try{importScripts(t),n()}catch(e){r(e)}},e}(),o=function(){function t(e){this._env=e,this._didInitialize=!1,this._didPatchNodeRequire=!1}return t.prototype._init=function(e){this._didInitialize||(this._didInitialize=!0,this._fs=e("fs"),this._vm=e("vm"),this._path=e("path"),this._crypto=e("crypto"))},t.prototype._initNodeRequire=function(e,t){var n=t.getConfig().getOptionsLiteral().nodeCachedData;if(n&&!this._didPatchNodeRequire){this._didPatchNodeRequire=!0;var r=this,o=e("module");o.prototype._compile=function(e,i){var s,a=o.wrap(e.replace(/^#!.*/,"")),u=t.getRecorder(),d=r._getCachedDataPath(n,i),l={filename:i};try{var c=r._fs.readFileSync(d);s=c.slice(0,16),l.cachedData=c.slice(16),u.record(60,d)}catch(e){u.record(61,d)}
var f=new r._vm.Script(a,l),h=f.runInThisContext(l),p=r._path.dirname(i),_=function(e){var t=e.constructor,n=function(t){try{return e.require(t)}finally{}};return n.resolve=function(n){return t._resolveFilename(n,e)},n.main=process.mainModule,n.extensions=t._extensions,n.cache=t._cache,n}(this),g=[this.exports,_,this,i,p,process,_commonjsGlobal,Buffer],v=h.apply(this.exports,g);return r._handleCachedData(f,a,d,!l.cachedData,t),r._verifyCachedData(f,a,d,s,t),v}}},t.prototype.load=function(n,r,o,i){var s=this,a=n.getConfig().getOptionsLiteral(),u=a.nodeRequire||e.global.nodeRequire,d=a.nodeInstrumenter||function(e){return e};this._init(u),this._initNodeRequire(u,n);var l=n.getRecorder();if(/^node\|/.test(r)){var c=r.split("|"),f=null;try{f=u(c[1])}catch(e){return void i(e)}n.enqueueDefineAnonymousModule([],(function(){return f})),o()}else{r=e.Utilities.fileUriToFilePath(this._env.isWindows,r)
;var h=this._path.normalize(r),p=this._getElectronRendererScriptPathOrUri(h),_=Boolean(a.nodeCachedData),g=_?this._getCachedDataPath(a.nodeCachedData,r):void 0;this._readSourceAndCachedData(h,g,l,(function(e,r,a,u){if(e)i(e);else{var l;l=r.charCodeAt(0)===t._BOM?t._PREFIX+r.substring(1)+t._SUFFIX:t._PREFIX+r+t._SUFFIX,l=d(l,h);var c={filename:p,cachedData:a},f=s._createAndEvalScript(n,l,c,o,i);s._handleCachedData(f,l,g,_&&!a,n),s._verifyCachedData(f,l,g,u,n)}}))}},t.prototype._createAndEvalScript=function(t,n,r,o,i){var s=t.getRecorder();s.record(31,r.filename);var a=new this._vm.Script(n,r),u=a.runInThisContext(r),d=t.getGlobalAMDDefineFunc(),l=!1,c=function(){return l=!0,d.apply(null,arguments)};return c.amd=d.amd,u.call(e.global,t.getGlobalAMDRequireFunc(),c,r.filename,this._path.dirname(r.filename)),s.record(32,r.filename),l?o():i(new Error("Didn't receive define call in "+r.filename+"!")),a},t.prototype._getElectronRendererScriptPathOrUri=function(e){if(!this._env.isElectronRenderer)return e
;var t=e.match(/^([a-z])\:(.*)/i);return t?"file:///"+(t[1].toUpperCase()+":"+t[2]).replace(/\\/g,"/"):"file://"+e},t.prototype._getCachedDataPath=function(e,t){var n=this._crypto.createHash("md5").update(t,"utf8").update(e.seed,"utf8").digest("hex"),r=this._path.basename(t).replace(/\.js$/,"");return this._path.join(e.path,r+"-"+n+".code")},t.prototype._handleCachedData=function(e,t,n,r,o){var i=this;e.cachedDataRejected?this._fs.unlink(n,(function(r){o.getRecorder().record(62,n),i._createAndWriteCachedData(e,t,n,o),r&&o.getConfig().onError(r)})):r&&this._createAndWriteCachedData(e,t,n,o)},t.prototype._createAndWriteCachedData=function(e,t,n,r){var o=this,i=Math.ceil(r.getConfig().getOptionsLiteral().nodeCachedData.writeDelay*(1+Math.random())),s=-1,a=0,u=void 0,d=function(){setTimeout((function(){u||(u=o._crypto.createHash("md5").update(t,"utf8").digest());var i=e.createCachedData();0===i.length||i.length===s||a>=5||(i.length<s?d():(s=i.length,o._fs.writeFile(n,Buffer.concat([u,i]),(function(e){
e&&r.getConfig().onError(e),r.getRecorder().record(63,n),d()}))))}),i*Math.pow(4,a++))};d()},t.prototype._readSourceAndCachedData=function(e,t,n,r){if(t){var o=void 0,i=void 0,s=void 0,a=2,u=function(e){e?r(e):0==--a&&r(void 0,o,i,s)};this._fs.readFile(e,{encoding:"utf8"},(function(e,t){o=t,u(e)})),this._fs.readFile(t,(function(e,r){!e&&r&&r.length>0?(s=r.slice(0,16),i=r.slice(16),n.record(60,t)):n.record(61,t),u()}))}else this._fs.readFile(e,{encoding:"utf8"},r)},t.prototype._verifyCachedData=function(e,t,n,r,o){var i=this;r&&(e.cachedDataRejected||setTimeout((function(){var e=i._crypto.createHash("md5").update(t,"utf8").digest();r.equals(e)||(o.getConfig().onError(new Error("FAILED TO VERIFY CACHED DATA, deleting stale '"+n+"' now, but a RESTART IS REQUIRED")),i._fs.unlink(n,(function(e){e&&o.getConfig().onError(e)})))}),Math.ceil(5e3*(1+Math.random()))))},t._BOM=65279,t._PREFIX="(function (require, define, __filename, __dirname) { ",t._SUFFIX="\n});",t}();e.createScriptLoader=function(e){return new t(e)}
}(AMDLoader||(AMDLoader={})),function(e){var t=function(){function t(e){var t=e.lastIndexOf("/");this.fromModulePath=-1!==t?e.substr(0,t+1):""}return t._normalizeModuleId=function(e){var t,n=e;for(t=/\/\.\//;t.test(n);)n=n.replace(t,"/");for(n=n.replace(/^\.\//g,""),t=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;t.test(n);)n=n.replace(t,"/");return n=n.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,"")},t.prototype.resolveModule=function(n){var r=n;return e.Utilities.isAbsolutePath(r)||(e.Utilities.startsWith(r,"./")||e.Utilities.startsWith(r,"../"))&&(r=t._normalizeModuleId(this.fromModulePath+r)),r},t.ROOT=new t(""),t}();e.ModuleIdResolver=t;var n=function(){function t(e,t,n,r,o,i){this.id=e,this.strId=t,this.dependencies=n,this._callback=r,this._errorback=o,this.moduleIdResolver=i,this.exports={},this.error=null,this.exportsPassedIn=!1,this.unresolvedDependenciesCount=this.dependencies.length,this._isComplete=!1}
return t._safeInvokeFunction=function(t,n){try{return{returnedValue:t.apply(e.global,n),producedError:null}}catch(e){return{returnedValue:null,producedError:e}}},t._invokeFactory=function(t,n,r,o){return t.isBuild()&&!e.Utilities.isAnonymousModule(n)?{returnedValue:null,producedError:null}:t.shouldCatchError()?this._safeInvokeFunction(r,o):{returnedValue:r.apply(e.global,o),producedError:null}},t.prototype.complete=function(n,r,o){this._isComplete=!0;var i=null;if(this._callback)if("function"==typeof this._callback){n.record(21,this.strId);var s=t._invokeFactory(r,this.strId,this._callback,o);i=s.producedError,n.record(22,this.strId),i||void 0===s.returnedValue||this.exportsPassedIn&&!e.Utilities.isEmpty(this.exports)||(this.exports=s.returnedValue)}else this.exports=this._callback;if(i){var a=e.ensureError(i);a.phase="factory",a.moduleId=this.strId,this.error=a,r.onError(a)}this.dependencies=null,this._callback=null,this._errorback=null,this.moduleIdResolver=null},t.prototype.onDependencyError=function(e){
return this._isComplete=!0,this.error=e,!!this._errorback&&(this._errorback(e),!0)},t.prototype.isComplete=function(){return this._isComplete},t}();e.Module=n;var r=function(){function e(){this._nextId=0,this._strModuleIdToIntModuleId=new Map,this._intModuleIdToStrModuleId=[],this.getModuleId("exports"),this.getModuleId("module"),this.getModuleId("require")}return e.prototype.getMaxModuleId=function(){return this._nextId},e.prototype.getModuleId=function(e){var t=this._strModuleIdToIntModuleId.get(e);return void 0===t&&(t=this._nextId++,this._strModuleIdToIntModuleId.set(e,t),this._intModuleIdToStrModuleId[t]=e),t},e.prototype.getStrModuleId=function(e){return this._intModuleIdToStrModuleId[e]},e}(),o=function(){function e(e){this.id=e}return e.EXPORTS=new e(0),e.MODULE=new e(1),e.REQUIRE=new e(2),e}();e.RegularDependency=o;var i=function(e,t,n){this.id=e,this.pluginId=t,this.pluginParam=n};e.PluginDependency=i;var s=function(){function s(t,n,o,i,s){void 0===s&&(s=0),this._env=t,this._scriptLoader=n,
this._loaderAvailableTimestamp=s,this._defineFunc=o,this._requireFunc=i,this._moduleIdProvider=new r,this._config=new e.Configuration(this._env),this._modules2=[],this._knownModules2=[],this._inverseDependencies2=[],this._inversePluginDependencies2=new Map,this._currentAnnonymousDefineCall=null,this._recorder=null,this._buildInfoPath=[],this._buildInfoDefineStack=[],this._buildInfoDependencies=[]}return s.prototype.reset=function(){return new s(this._env,this._scriptLoader,this._defineFunc,this._requireFunc,this._loaderAvailableTimestamp)},s.prototype.getGlobalAMDDefineFunc=function(){return this._defineFunc},s.prototype.getGlobalAMDRequireFunc=function(){return this._requireFunc},s._findRelevantLocationInStack=function(e,t){for(var n=function(e){return e.replace(/\\/g,"/")},r=n(e),o=t.split(/\n/),i=0;i<o.length;i++){var s=o[i].match(/(.*):(\d+):(\d+)\)?$/);if(s){var a=s[1],u=s[2],d=s[3],l=Math.max(a.lastIndexOf(" ")+1,a.lastIndexOf("(")+1);if((a=n(a=a.substr(l)))===r){var c={line:parseInt(u,10),
col:parseInt(d,10)};return 1===c.line&&(c.col-="(function (require, define, __filename, __dirname) { ".length),c}}}throw new Error("Could not correlate define call site for needle "+e)},s.prototype.getBuildInfo=function(){if(!this._config.isBuild())return null;for(var e=[],t=0,n=0,r=this._modules2.length;n<r;n++){var o=this._modules2[n];if(o){var i=this._buildInfoPath[o.id]||null,a=this._buildInfoDefineStack[o.id]||null,u=this._buildInfoDependencies[o.id];e[t++]={id:o.strId,path:i,defineLocation:i&&a?s._findRelevantLocationInStack(i,a):null,dependencies:u,shim:null,exports:o.exports}}}return e},s.prototype.getRecorder=function(){return this._recorder||(this._config.shouldRecordStats()?this._recorder=new e.LoaderEventRecorder(this._loaderAvailableTimestamp):this._recorder=e.NullLoaderEventRecorder.INSTANCE),this._recorder},s.prototype.getLoaderEvents=function(){return this.getRecorder().getEvents()},s.prototype.enqueueDefineAnonymousModule=function(e,t){
if(null!==this._currentAnnonymousDefineCall)throw new Error("Can only have one anonymous define call per script file");var n=null;this._config.isBuild()&&(n=new Error("StackLocation").stack||null),this._currentAnnonymousDefineCall={stack:n,dependencies:e,callback:t}},s.prototype.defineModule=function(e,r,o,i,s,a){var u=this;void 0===a&&(a=new t(e));var d=this._moduleIdProvider.getModuleId(e);if(this._modules2[d])this._config.isDuplicateMessageIgnoredFor(e)||console.warn("Duplicate definition of module '"+e+"'");else{var l=new n(d,e,this._normalizeDependencies(r,a),o,i,a);this._modules2[d]=l,this._config.isBuild()&&(this._buildInfoDefineStack[d]=s,this._buildInfoDependencies[d]=(l.dependencies||[]).map((function(e){return u._moduleIdProvider.getStrModuleId(e.id)}))),this._resolve(l)}},s.prototype._normalizeDependency=function(e,t){if("exports"===e)return o.EXPORTS;if("module"===e)return o.MODULE;if("require"===e)return o.REQUIRE;var n=e.indexOf("!");if(n>=0){
var r=t.resolveModule(e.substr(0,n)),s=t.resolveModule(e.substr(n+1)),a=this._moduleIdProvider.getModuleId(r+"!"+s),u=this._moduleIdProvider.getModuleId(r);return new i(a,u,s)}return new o(this._moduleIdProvider.getModuleId(t.resolveModule(e)))},s.prototype._normalizeDependencies=function(e,t){for(var n=[],r=0,o=0,i=e.length;o<i;o++)n[r++]=this._normalizeDependency(e[o],t);return n},s.prototype._relativeRequire=function(t,n,r,o){if("string"==typeof n)return this.synchronousRequire(n,t);this.defineModule(e.Utilities.generateAnonymousModule(),n,r,o,null,t)},s.prototype.synchronousRequire=function(e,n){void 0===n&&(n=new t(e));var r=this._normalizeDependency(e,n),o=this._modules2[r.id];if(!o)throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This is the first mention of this module!");if(!o.isComplete())throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This module has not been resolved completely yet.");if(o.error)throw o.error
;return o.exports},s.prototype.configure=function(t,n){var r=this._config.shouldRecordStats();this._config=n?new e.Configuration(this._env,t):this._config.cloneAndMerge(t),this._config.shouldRecordStats()&&!r&&(this._recorder=null)},s.prototype.getConfig=function(){return this._config},s.prototype._onLoad=function(e){if(null!==this._currentAnnonymousDefineCall){var t=this._currentAnnonymousDefineCall;this._currentAnnonymousDefineCall=null,this.defineModule(this._moduleIdProvider.getStrModuleId(e),t.dependencies,t.callback,null,t.stack)}},s.prototype._createLoadError=function(t,n){var r=this,o=this._moduleIdProvider.getStrModuleId(t),i=(this._inverseDependencies2[t]||[]).map((function(e){return r._moduleIdProvider.getStrModuleId(e)})),s=e.ensureError(n);return s.phase="loading",s.moduleId=o,s.neededBy=i,s},s.prototype._onLoadError=function(e,t){var r=this._createLoadError(e,t);this._modules2[e]||(this._modules2[e]=new n(e,this._moduleIdProvider.getStrModuleId(e),[],(function(){}),(function(){}),null))
;for(var o=[],i=0,s=this._moduleIdProvider.getMaxModuleId();i<s;i++)o[i]=!1;var a=!1,u=[];for(u.push(e),o[e]=!0;u.length>0;){var d=u.shift(),l=this._modules2[d];l&&(a=l.onDependencyError(r)||a);var c=this._inverseDependencies2[d];if(c)for(i=0,s=c.length;i<s;i++){var f=c[i];o[f]||(u.push(f),o[f]=!0)}}a||this._config.onError(r)},s.prototype._hasDependencyPath=function(e,t){var n=this._modules2[e];if(!n)return!1;for(var r=[],o=0,i=this._moduleIdProvider.getMaxModuleId();o<i;o++)r[o]=!1;var s=[];for(s.push(n),r[e]=!0;s.length>0;){var a=s.shift().dependencies;if(a)for(o=0,i=a.length;o<i;o++){var u=a[o];if(u.id===t)return!0;var d=this._modules2[u.id];d&&!r[u.id]&&(r[u.id]=!0,s.push(d))}}return!1},s.prototype._findCyclePath=function(e,t,n){if(e===t||50===n)return[e];var r=this._modules2[e];if(!r)return null;var o=r.dependencies;if(o)for(var i=0,s=o.length;i<s;i++){var a=this._findCyclePath(o[i].id,t,n+1);if(null!==a)return a.push(e),a}return null},s.prototype._createRequire=function(t){var n=this,r=function(e,r,o){
return n._relativeRequire(t,e,r,o)};return r.toUrl=function(e){return n._config.requireToUrl(t.resolveModule(e))},r.getStats=function(){return n.getLoaderEvents()},r.config=function(e,t){void 0===t&&(t=!1),n.configure(e,t)},r.__$__nodeRequire=e.global.nodeRequire,r},s.prototype._loadModule=function(e){var t=this;if(!this._modules2[e]&&!this._knownModules2[e]){this._knownModules2[e]=!0;var n=this._moduleIdProvider.getStrModuleId(e),r=this._config.moduleIdToPaths(n);this._env.isNode&&(-1===n.indexOf("/")||/^@[^\/]+\/[^\/]+$/.test(n))&&r.push("node|"+n);var o=-1,i=function(n){if(++o>=r.length)t._onLoadError(e,n);else{var s=r[o],a=t.getRecorder();if(t._config.isBuild()&&"empty:"===s)return t._buildInfoPath[e]=s,t.defineModule(t._moduleIdProvider.getStrModuleId(e),[],null,null,null),void t._onLoad(e);a.record(10,s),t._scriptLoader.load(t,s,(function(){t._config.isBuild()&&(t._buildInfoPath[e]=s),a.record(11,s),t._onLoad(e)}),(function(e){a.record(12,s),i(e)}))}};i(null)}},
s.prototype._loadPluginDependency=function(e,n){var r=this;if(!this._modules2[n.id]&&!this._knownModules2[n.id]){this._knownModules2[n.id]=!0;var o=function(e){r.defineModule(r._moduleIdProvider.getStrModuleId(n.id),[],e,null,null)};o.error=function(e){r._config.onError(r._createLoadError(n.id,e))},e.load(n.pluginParam,this._createRequire(t.ROOT),o,this._config.getOptionsLiteral())}},s.prototype._resolve=function(e){var t=this,n=e.dependencies;if(n)for(var r=0,s=n.length;r<s;r++){var a=n[r];if(a!==o.EXPORTS)if(a!==o.MODULE)if(a!==o.REQUIRE){var u=this._modules2[a.id];if(u&&u.isComplete()){if(u.error)return void e.onDependencyError(u.error);e.unresolvedDependenciesCount--}else if(this._hasDependencyPath(a.id,e.id)){console.warn("There is a dependency cycle between '"+this._moduleIdProvider.getStrModuleId(a.id)+"' and '"+this._moduleIdProvider.getStrModuleId(e.id)+"'. The cyclic path follows:");var d=this._findCyclePath(a.id,e.id,0)||[];d.reverse(),d.push(a.id),console.warn(d.map((function(e){
return t._moduleIdProvider.getStrModuleId(e)})).join(" => \n")),e.unresolvedDependenciesCount--}else if(this._inverseDependencies2[a.id]=this._inverseDependencies2[a.id]||[],this._inverseDependencies2[a.id].push(e.id),a instanceof i){var l=this._modules2[a.pluginId];if(l&&l.isComplete()){this._loadPluginDependency(l.exports,a);continue}var c=this._inversePluginDependencies2.get(a.pluginId);c||(c=[],this._inversePluginDependencies2.set(a.pluginId,c)),c.push(a),this._loadModule(a.pluginId)}else this._loadModule(a.id)}else e.unresolvedDependenciesCount--;else e.unresolvedDependenciesCount--;else e.exportsPassedIn=!0,e.unresolvedDependenciesCount--}0===e.unresolvedDependenciesCount&&this._onModuleComplete(e)},s.prototype._onModuleComplete=function(e){var t=this,n=this.getRecorder();if(!e.isComplete()){var r=e.dependencies,i=[];if(r)for(var s=0,a=r.length;s<a;s++){var u=r[s];if(u!==o.EXPORTS)if(u!==o.MODULE)if(u!==o.REQUIRE){var d=this._modules2[u.id];i[s]=d?d.exports:null
}else i[s]=this._createRequire(e.moduleIdResolver);else i[s]={id:e.strId,config:function(){return t._config.getConfigForModule(e.strId)}};else i[s]=e.exports}e.complete(n,this._config,i);var l=this._inverseDependencies2[e.id];if(this._inverseDependencies2[e.id]=null,l)for(s=0,a=l.length;s<a;s++){var c=l[s],f=this._modules2[c];f.unresolvedDependenciesCount--,0===f.unresolvedDependenciesCount&&this._onModuleComplete(f)}var h=this._inversePluginDependencies2.get(e.id);if(h){this._inversePluginDependencies2.delete(e.id);for(s=0,a=h.length;s<a;s++)this._loadPluginDependency(e.exports,h[s])}}},s}();e.ModuleManager=s}(AMDLoader||(AMDLoader={})),function(e){var t=new e.Environment,n=null,r=function(e,t,r){"string"!=typeof e&&(r=t,t=e,e=null),"object"==typeof t&&Array.isArray(t)||(r=t,t=null),t||(t=["require","exports","module"]),e?n.defineModule(e,t,r,null,null):n.enqueueDefineAnonymousModule(t,r)};r.amd={jQuery:!0};var o=function(e,t){void 0===t&&(t=!1),n.configure(e,t)},i=function(){if(1===arguments.length){
if(arguments[0]instanceof Object&&!Array.isArray(arguments[0]))return void o(arguments[0]);if("string"==typeof arguments[0])return n.synchronousRequire(arguments[0])}if(2!==arguments.length&&3!==arguments.length||!Array.isArray(arguments[0]))throw new Error("Unrecognized require call");n.defineModule(e.Utilities.generateAnonymousModule(),arguments[0],arguments[1],arguments[2],null)};function s(){if(void 0!==e.global.require||"undefined"!=typeof require){var o=e.global.require||require;if("function"==typeof o&&"function"==typeof o.resolve){var s=function(e){n.getRecorder().record(33,e);try{return o(e)}finally{n.getRecorder().record(34,e)}};e.global.nodeRequire=s,i.nodeRequire=s,i.__$__nodeRequire=s}}t.isNode&&!t.isElectronRenderer?(module.exports=i,require=i):(t.isElectronRenderer||(e.global.define=r),e.global.require=i)}i.config=o,i.getConfig=function(){return n.getConfig().getOptionsLiteral()},i.reset=function(){n=n.reset()},i.getBuildInfo=function(){return n.getBuildInfo()},i.getStats=function(){
return n.getLoaderEvents()},i.define=function(){return r.apply(null,arguments)},e.init=s,"function"==typeof e.global.define&&e.global.define.amd||(n=new e.ModuleManager(t,e.createScriptLoader(t),r,i,e.Utilities.getHighPerformanceTimestamp()),void 0!==e.global.require&&"function"!=typeof e.global.require&&i.config(e.global.require),(define=function(){return r.apply(null,arguments)}).amd=r.amd,"undefined"==typeof doNotInitLoader&&s())}(AMDLoader||(AMDLoader={})),function(e){var t=function(){function e(){this._pendingLoads=0}return e.prototype.attachListeners=function(e,t,n,r){var o=function(){t.removeEventListener("load",i),t.removeEventListener("error",s)},i=function(e){o(),n()},s=function(e){o(),r(e)};t.addEventListener("load",i),t.addEventListener("error",s)},e.prototype._onLoad=function(e,t){this._pendingLoads--,t()},e.prototype._onLoadError=function(e,t,n){this._pendingLoads--,t(n)},e.prototype._insertLinkNode=function(e){this._pendingLoads++
;var t=document.head||document.getElementsByTagName("head")[0],n=t.getElementsByTagName("link")||t.getElementsByTagName("script");n.length>0?t.insertBefore(e,n[n.length-1]):t.appendChild(e)},e.prototype.createLinkTag=function(e,t,n,r){var o=this,i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("data-name",e);return this.attachListeners(e,i,(function(){return o._onLoad(e,n)}),(function(t){return o._onLoadError(e,r,t)})),i.setAttribute("href",t),i},e.prototype._linkTagExists=function(e,t){var n,r,o,i,s=document.getElementsByTagName("link");for(n=0,r=s.length;n<r;n++)if(o=s[n].getAttribute("data-name"),i=s[n].getAttribute("href"),o===e||i===t)return!0;return!1},e.prototype.load=function(e,t,n,r){if(this._linkTagExists(e,t))n();else{var o=this.createLinkTag(e,t,n,r);this._insertLinkNode(o)}},e}(),n=function(){function e(){this._cssLoader=new t}return e.prototype.load=function(e,t,n){var r=t.toUrl(e+".css");this._cssLoader.load(e,r,(function(e){
n({})}),(function(e){"function"==typeof n.error&&n.error("Could not find "+r+" or it was empty")}))},e}();e.CSSPlugin=n,define("vs/css",new n)}(CSSLoaderPlugin||(CSSLoaderPlugin={}));var NLSLoaderPlugin,__spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r};!function(e){var t=function(){function e(){this._detected=!1,this._isPseudo=!1}return Object.defineProperty(e.prototype,"isPseudo",{get:function(){return this._detect(),this._isPseudo},enumerable:!0,configurable:!0}),e.prototype._detect=function(){this._detected||(this._detected=!0,this._isPseudo="undefined"!=typeof document&&document.location&&document.location.hash.indexOf("pseudo=true")>=0)},e}();function n(e,t,n){var r;return r=0===t.length?e:e.replace(/\{(\d+)\}/g,(function(e,n){var r=n[0],o=t[r],i=e
;return"string"==typeof o?i=o:"number"!=typeof o&&"boolean"!=typeof o&&null!=o||(i=String(o)),i})),n.isPseudo&&(r="［"+r.replace(/[aouei]/g,"$&$&")+"］"),r}function r(e,t,r){for(var o=[],i=3;i<arguments.length;i++)o[i-3]=arguments[i];return n(r,o,e)}function o(e,t){return function(r,o){var i=Array.prototype.slice.call(arguments,2);return n(e[r],i,t)}}var i=function(){function e(e){var t=this;this._env=e,this.localize=function(e,n){for(var o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];return r.apply(void 0,__spreadArrays([t._env,e,n],o))}}return e.prototype.setPseudoTranslation=function(e){this._env._isPseudo=e},e.prototype.create=function(e,t){return{localize:o(t[e],this._env)}},e.prototype.load=function(t,n,r,i){var s=this;if(i=i||{},t&&0!==t.length){var a=i["vs/nls"]||{},u=a.availableLanguages?function(e,t){var n=e[t];return n||((n=e["*"])||null)}(a.availableLanguages,t):null,d=".nls";null!==u&&u!==e.DEFAULT_TAG&&(d=d+"."+u);var l=function(e){
Array.isArray(e)?e.localize=o(e,s._env):e.localize=o(e[t],s._env),r(e)};"function"==typeof a.loadBundle?a.loadBundle(t,u,(function(e,r){e?n([t+".nls"],l):l(r)})):n([t+d],l)}else r({localize:this.localize})},e.DEFAULT_TAG="i-default",e}();e.NLSPlugin=i,define("vs/nls",new i(new t))}(NLSLoaderPlugin||(NLSLoaderPlugin={}));
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/2af051012b66169dde0c4dfae3f5ef48f787ff69/core/vs/loader.js.map
