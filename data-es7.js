// exports browsers and tests

exports.name = 'ES7';
exports.target_file = 'es7/index.html';
exports.skeleton_file = 'es7/skeleton.html';

exports.browsers = {
  tr: {
    full: 'Traceur compiler',
    short: 'Traceur',
    obsolete: false, // always up-to-date version
    platformtype: 'compiler',
  },
  babel: {
    full: 'Babel',
    short: 'Babel +<br><nobr>core-js</nobr>',
    obsolete: false,
    platformtype: 'compiler',
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via --experimental flag'
  },
  es7shim: {
    full: 'es7-shim',
    short: 'es7-shim',
    platformtype: 'compiler',
    obsolete: false // always up-to-date version
  },
  ie11: {
    full: 'Internet Explorer',
    short: 'IE 11',
    obsolete: false
  },
  firefox31: {
    full: 'Firefox',
    short: 'FF 31'
  },
  firefox32: {
    full: 'Firefox',
    short: 'FF 32'
  },
  firefox34: {
    full: 'Firefox',
    short: 'FF34'
  },
  firefox35: {
    full: 'Firefox',
    short: 'FF35'
  },
  firefox39: {
    full: 'Firefox',
    short: 'FF39'
  },
  chrome30: {
    full: 'Chrome',
    short: 'CH 30',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome33: {
    full: 'Chrome',
    short: 'CH 33',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome34: {
    full: 'Chrome',
    short: 'CH 34',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome35: {
    full: 'Chrome',
    short: 'CH 35',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  chrome37: {
    full: 'Chrome',
    short: 'CH 37',
    obsolete: false,
    note_id: 'experimental-flag',
    note_html: 'Have to be enabled via "Experimental Javascript features" flag'
  },
  safari78: {
    full: 'Safari 7.0, Safari 7.1, Safari 8',
    short: 'SF 7, SF 8',
    obsolete: false
  },
  webkit: {
    full: 'WebKit r168571',
    short: 'WK',
    obsolete: false // always up-to-date
  },
  konq49: {
    full: 'Konqueror 4.13',
    short: 'KQ 4.13'
  },
  rhino17: {
    full: 'Rhino 1.7',
    short: 'RH',
    platformtype: 'engine',
    obsolete: true,
  },
  phantom: {
    full: 'PhantomJS 1.9.7 AppleWebKit/534.34',
    short: 'PH',
    platformtype: 'engine',
  },
  node: {
    full: 'Node 0.10',
    short: 'Node',
    obsolete: false, // current version
    platformtype: 'engine',
  },
  nodeharmony: {
    full: 'Node 0.11.11 harmony',
    short: 'Node harmony',
    obsolete: false, // current version
    note_id: 'harmony-flag',
    note_html: 'Have to be enabled via --harmony flag'
  },
  iojs: {
    full: 'io.js 1.0.0',
    short: 'io.js',
    obsolete: false, // current version
    platformtype: 'engine',
  },
  ejs: {
    full: 'Echo JS',
    short: 'Echo JS',
    obsolete: false, // always up-to-date version
    platformtype: 'engine',
  },
  ios7: {
    full: 'iOS Safari 7',
    short: 'iOS7',
    platformtype: 'mobile',
  },
  ios8: {
    full: 'iOS Safari 8',
    short: 'iOS8',
    platformtype: 'mobile',
  }
};

exports.tests = [
{
  name: 'Array comprehensions',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
  exec: function () {/*
    return [for (a of [1, 2, 3]) a * a][0] === 1
  */},
  res: {
    tr:          true,
    babel:       true,
    es7shim:     false,
    ejs:         false,
    ie11:        false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    firefox35:   true,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari78:    false,
    webkit:      false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Generator comprehensions',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:array_comprehensions',
  exec: function () {/*
    (for (a of [1, 2, 3]) a * a)
  */},
  res: {
    tr:          true,
    babel:       true,
    es7shim:     false,
    ejs:         false,
    ie11:        false,
    firefox31:   true,
    firefox32:   true,
    firefox33:   true,
    firefox34:   true,
    firefox35:   true,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari78:    false,
    webkit:      false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Destructuring in comprehensions',
  link: 'https://bugzilla.mozilla.org/show_bug.cgi?id=980828',
  exec: function () {/*
    return [for([a, b] of [['a', 'b']])a + b][0] === 'ab';
  */},
  res: {
    tr:          true,
    babel:       true,
    es7shim:     false,
    ejs:         false,
    ie11:        false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    firefox35:   false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari78:    false,
    webkit:      false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Exponentiation operator',
  category: 'draft',
  link: 'https://gist.github.com/rwaldron/ebe0f4d2d267370be882',
  exec: function () {/*
    return 2 ** 3 === 8;
  */},
  res: {
    tr: true,
    babel: true,
    es7shim: false,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    firefox33: true,
    firefox34: true,
    firefox35: true,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    chrome37: false,
    safari78: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Object.observe',
  link: 'http://wiki.ecmascript.org/doku.php?id=harmony:observe',
  category: 'draft',
  exec: function () {/*
    return typeof Object.observe === 'function';
  */},
  res: {
    tr: false,
    babel: false,
    es7shim: false,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    firefox33: false,
    firefox34: false,
    firefox35: false,
    chrome30: false,
    chrome33: true,
    chrome34: true,
    chrome35: true,
    chrome37: true,
    safari78: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: true,
    iojs: true,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Array.prototype.includes',
  link: 'https://github.com/tc39/Array.prototype.includes/blob/master/spec.md',
  category: 'draft',
  exec: function () {/*
    return typeof Array.prototype.includes === 'function';
  */},
  res: {
    tr: false,
    babel: true,
    es7shim: true,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    firefox33: false,
    firefox34: false,
    firefox35:   {
      val: true,
      note_id: 'includes-nightly',
      note_html: 'Only enabled in Nightly builds, before 2014-11-22 as <code>Array.prototype.contains</code>'
    },
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    chrome37: false,
    safari78: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Trailing commas in function call expressions',
  link: 'https://github.com/tc39/tc39-notes/raw/master/es6/2014-09/trailing_comma_proposal.pdf',
  category: 'proposal',
  exec: function(){/*
    function clownsEverywhere(
      param1,
      param2,
    ) { 
      return true;
    }
    
    return clownsEverywhere(
      'foo',
      'bar', 
    ) === true;
  */}
},
{
  name: 'Async functions',
  category: 'proposal',
  link: 'https://github.com/lukehoban/ecmascript-asyncawait',
  subtests: {
    'Basic support' : {
      exec: function () {/*
        return (async function(){
          return 42 + await Promise.resolve(42)
        })() instanceof Promise
      */},
      res: {
        tr:          true,
        babel:       true,
        es7shim:     false,
      }
    },
    'Arrow async functions' : {
      exec: function () {/*
        return (async () => 42 + await Promise.resolve(42))() instanceof Promise
      */},
      res: {
        tr:          true,
        babel:       true,
        es7shim:     false,
      }
    }
  }
},
{
  name: 'Typed objects',
  category: 'proposal',
  link: 'https://github.com/dslomov-chromium/typed-objects-es7',
  exec: function () {/*
    return typeof StructType !== 'undefined';
  */},
  res: {
    tr: false,
    babel: false,
    es7shim: false,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    firefox33: true,
    firefox34: true,
    firefox35: true,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    chrome37: false,
    safari78: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Object.getOwnPropertyDescriptors',
  link: 'https://gist.github.com/WebReflection/9353781',
  category: 'strawman',
  exec: function () {/*
    return typeof Object.getOwnPropertyDescriptors === 'function';
  */},
  res: {
    tr: false,
    babel: true,
    es7shim: true,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    firefox33: false,
    firefox34: false,
    firefox35: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    chrome37: false,
    safari78: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'ArrayBuffer.transfer',
  link: 'https://gist.github.com/lukewagner/2735af7eea411e18cf20',
  category: 'proposal',
  exec: function(){/*
    return typeof ArrayBuffer.transfer === 'function';
  */},
  res : {
    firefox39: true
  }
},
{
  name: 'Parallel JavaScript',
  link: 'http://wiki.ecmascript.org/doku.php?id=strawman:data_parallelism',
  category: 'proposal',
  subtests: {
    'Array.prototype.mapPar' : {
      exec: function(){/*
        return typeof Array.prototype.mapPar === 'function';
      */},
      res: {
        firefox39: false
      }
    },
    'Array.prototype.filterPar' : {
      exec: function(){/*
        return typeof Array.prototype.filterPar === 'function';
      */},
      res: {
        firefox39: false
      }
    },
    'Array.fromPar' : {
      exec: function(){/*
        return typeof Array.fromPar === 'function';
      */},
      res: {
        firefox39: false
      }
    },
    'TypedObject.fromPar' : {
      exec: function(){/*
        return typeof TypedObject.fromPar === 'function';
      */},
      res: {
        firefox39: false
      }
    },
    'Array.prototype.get' : {
      exec: function(){/*
        return typeof Array.prototype.get === 'function';
      */},
      res: {
        firefox39: false
      }
    },
    'Array.prototype.reducePar' : {
      exec: function(){/*
        return typeof Array.prototype.reducePar === 'function';
      */},
      res: {
        firefox39: false
      }
    },
    'Array.prototype.scanPar' : {
      exec: function(){/*
        return typeof Array.prototype.scanPar === 'function';
      */},
      res: {
        firefox39: false
      }
    },
    'Array.prototype.scatterPar' : {
      exec: function(){/*
        return typeof Array.prototype.scatterPar === 'function';
      */},
      res: {
        firefox39: false
      }
    },

  }
},
{
  name: 'SIMD',
  category: 'proposal',
  link: 'https://github.com/johnmccutchan/ecmascript_simd',
  subtests: {
    'basic support' : {
      exec: function () {/*
        return typeof SIMD !== 'undefined';
      */},
      res: {
        tr:          false,
        babel:       false,
        es7shim:     false,
        ejs:         false,
        ie11:        false,
        firefox31:   false,
        firefox32:   false,
        firefox33:   false,
        firefox34:   false,
        firefox35:   false,
        firefox39:   true,
        chrome30:    false,
        chrome33:    false,
        chrome34:    false,
        chrome35:    false,
        chrome37:    false,
        safari78:    false,
        webkit:      false,
        konq49:      false,
        rhino17:     false,
        phantom:     false,
        node:        false,
        nodeharmony: false,
        ios7: false,
        ios8: false
      }
    },
    'float32x4' : {
      exec: function(){/*
        return typeof SIMD.float32x4 === 'function';
      */},
      res: {
        tr:          false,
        babel:       false,
        es7shim:     false,
        ejs:         false,
        ie11:        false,
        firefox31:   false,
        firefox32:   false,
        firefox33:   false,
        firefox34:   false,
        firefox35:   false,
        firefox39:   true,
        chrome30:    false,
        chrome33:    false,
        chrome34:    false,
        chrome35:    false,
        chrome37:    false,
        safari78:    false,
        webkit:      false,
        konq49:      false,
        rhino17:     false,
        phantom:     false,
        node:        false,
        nodeharmony: false,
        ios7: false,
        ios8: false
      }
    },
    'float64x2' : {
      exec: function(){/*
        return typeof SIMD.float64x2 === 'function';
      */},
      res: {
        tr:          false,
        babel:       false,
        es7shim:     false,
        ejs:         false,
        ie11:        false,
        firefox31:   false,
        firefox32:   false,
        firefox33:   false,
        firefox34:   false,
        firefox35:   false,
        firefox39:   true,
        chrome30:    false,
        chrome33:    false,
        chrome34:    false,
        chrome35:    false,
        chrome37:    false,
        safari78:    false,
        webkit:      false,
        konq49:      false,
        rhino17:     false,
        phantom:     false,
        node:        false,
        nodeharmony: false,
        ios7: false,
        ios8: false
      }
    },
    'int32x4' : {
      exec: function(){/*
        return typeof SIMD.int32x4 === 'function';
      */},
      res: {
        tr:          false,
        babel:       false,
        es7shim:     false,
        ejs:         false,
        ie11:        false,
        firefox31:   false,
        firefox32:   false,
        firefox33:   false,
        firefox34:   false,
        firefox35:   false,
        firefox39:   true,
        chrome30:    false,
        chrome33:    false,
        chrome34:    false,
        chrome35:    false,
        chrome37:    false,
        safari78:    false,
        webkit:      false,
        konq49:      false,
        rhino17:     false,
        phantom:     false,
        node:        false,
        nodeharmony: false,
        ios7: false,
        ios8: false
      }
    },
    'SIMD.%type%.abs' : {
      exec: function(){/*
        return typeof SIMD.float32x4.abs === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.add' : {
      exec: function(){/*
        return typeof SIMD.float32x4.add === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.and' : {
      exec: function(){/*
        return typeof SIMD.float32x4.and === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.bitselect' : {
      exec: function(){/*
        return typeof SIMD.float32x4.bitselect === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.bool' : {
      exec: function(){/*
        return typeof SIMD.float32x4.bool === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.check' : {
      exec: function(){/*
        return typeof SIMD.float32x4.check === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.equal' : {
      exec: function(){/*
        return typeof SIMD.float32x4.equal === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.equivalent' : {
      exec: function(){/*
        return typeof SIMD.float32x4.equivalent === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.greaterThan' : {
      exec: function(){/*
        return typeof SIMD.float32x4.greaterThan === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.greaterThanOrEqual' : {
      exec: function(){/*
        return typeof SIMD.float32x4.greaterThanOrEqual === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.lessThan' : {
      exec: function(){/*
        return typeof SIMD.float32x4.lessThan === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.lessThanOrEqual' : {
      exec: function(){/*
        return typeof SIMD.float32x4.lessThanOrEqual === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.mul' : {
      exec: function(){/*
        return typeof SIMD.float32x4.mul === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.neg' : {
      exec: function(){/*
        return typeof SIMD.float32x4.neg === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.not' : {
      exec: function(){/*
        return typeof SIMD.float32x4.not === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.notEqual' : {
      exec: function(){/*
        return typeof SIMD.float32x4.notEqual === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.or' : {
      exec: function(){/*
        return typeof SIMD.float32x4.or === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.select' : {
      exec: function(){/*
        return typeof SIMD.float32x4.select === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.shuffle' : {
      exec: function(){/*
        return typeof SIMD.float32x4.shuffle === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.sub' : {
      exec: function(){/*
        return typeof SIMD.float32x4.sub === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.swizzle' : {
      exec: function(){/*
        return typeof SIMD.float32x4.swizzle === 'function';
      */},
      res: {
        firefox39: true
      }
    },
    'SIMD.%type%.xor' : {
      exec: function(){/*
        return typeof SIMD.float32x4.xor === 'function';
      */},
      res: {
        firefox39: true
      }
    }
  }
},
{
  name: 'Class and Property Decorators',
  category: 'proposal',
  link: 'https://github.com/wycats/javascript-decorators',
  exec: function(){/*
    class Person {
      constructor(){
        this.children = ['Tom', 'Dick', 'Harry'];
      }
      @nonenumerable
      get kidCount() { return this.children.length; }
    }

    function nonenumerable(target, name, descriptor) {
      descriptor.enumerable = false;
      return descriptor;
    }

    var guardian = new Person();

    return Object.getOwnPropertyDescriptor(guardian, 'kidCount').enumerable == false;
  */},
  res: {
    ios8: false
  }
},
{
  name: 'Async Generators',
  link: 'https://github.com/jhusain/asyncgenerator',
  category: 'proposal',
  exec: function(){/*
    async function* nums() {
      yield 1;
      yield 2;
      yield 3;
    }

    // data consumer
    async function printData() {
      for(var x on nums()) {
        console.log(x);
      }
    }

    return true;
  */},
  res: {
    babel: false
  }
},
{
  name: 'Map.prototype.toJSON',
  category: 'strawman',
  link : 'https://github.com/DavidBruant/Map-Set.prototype.toJSON',
  exec: function(){/*
    return typeof Map.prototype.toJSON === 'function';
  */},
  res: {
    tr: false,
    babel: false,
    es7shim: false,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    firefox33: false,
    firefox34: false,
    firefox35: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    chrome37: false,
    safari78: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Reflect.Realm',
  link: 'https://gist.github.com/dherman/7568885',
  exec: function () {/*
    var i, names =
      ["eval", "global", "intrinsics", "stdlib", "directEval",
      "indirectEval", "initGlobal", "nonEval"];

    if (typeof Reflect !== "object" || typeof Reflect.Realm !== "function"
        || typeof Reflect.Realm.prototype !== "object") {
      return false;
    }
    for (i = 0; i < names.length; i++) {
      if (!(names[i] in Reflect.Realm.prototype)) {
        return false;
      }
    }
    return true;
  */},
  res: {
    tr:          false,
    babel:       false,
    es7shim:     false,
    ejs:         false,
    ie11:        false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    firefox35:   false,
    firefox39:   false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari78:    false,
    webkit:      false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Set.prototype.toJSON',
  category: 'strawman',
  link: 'https://github.com/DavidBruant/Map-Set.prototype.toJSON'
  exec: function(){/*
    return typeof Map.prototype.toJSON === 'function';
  */},
  res: {
    tr: false,
    babel: false,
    es7shim: false,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    firefox33: false,
    firefox34: false,
    firefox35: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    chrome37: false,
    safari78: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Object rest properties',
  link: 'https://github.com/sebmarkbage/ecmascript-rest-spread',
  category: 'strawman',
  exec: function () {/*
    var {a, ...rest} = {a: 1, b: 2, c: 3};
    return a === 1 && rest.a === undefined && rest.b === 2 && rest.c === 3;
  */},
  res: {
    tr:          false,
    babel:       true,
    es7shim:     false,
    ejs:         false,
    ie11:        false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    firefox35:   false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari78:    false,
    webkit:      false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'Object spread properties',
  category: 'strawman',
  link: 'https://github.com/sebmarkbage/ecmascript-rest-spread',
  exec: function () {/*
    var spread = {b: 2, c: 3};
    var O = {a: 1, ...spread};
    return O.a + O.b + O.c === 6;
  */},
  res: {
    tr:          false,
    babel:       true,
    es7shim:     false,
    ejs:         false,
    ie11:        false,
    firefox31:   false,
    firefox32:   false,
    firefox33:   false,
    firefox34:   false,
    firefox35:   false,
    chrome30:    false,
    chrome33:    false,
    chrome34:    false,
    chrome35:    false,
    chrome37:    false,
    safari78:    false,
    webkit:      false,
    konq49:      false,
    rhino17:     false,
    phantom:     false,
    node:        false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'String.prototype.at',
  link: 'https://github.com/mathiasbynens/String.prototype.at',
  category: 'strawman',
  exec: function () {/*
    return 'a𠮷b'.at(1) === '𠮷';
  */},
  res: {
    tr: false,
    babel: true,
    es7shim: true,
    ejs: false,
    ie11: false,
    firefox31: false,
    firefox32: false,
    firefox33: false,
    firefox34: false,
    firefox35: false,
    chrome30: false,
    chrome33: false,
    chrome34: false,
    chrome35: false,
    chrome37: false,
    safari78: false,
    webkit: false,
    opera15: false,
    konq49: false,
    rhino17: false,
    phantom: false,
    node: false,
    nodeharmony: false,
    ios7: false,
    ios8: false
  }
},
{
  name: 'String padding',
  category: 'strawman',
  link: 'http://wiki.ecmascript.org/doku.php?id=strawman:string_padding',
  subtests: {
    'String.prototype.lpad' : {
      exec: function(){/*
        return typeof String.prototype.lpad === 'function';
      */},
      res: {
        firefox39: false
      }
    },
    'String.prototype.rpad' : {
      exec: function(){/*
        return typeof String.prototype.rpad === 'function';
      */},
      res: {
        firefox39: false
      }
    }
  }
}
];

//Shift annex B features to the bottom
exports.tests = exports.tests.reduce(function(a,e) {
  var index = ['parallel','syntax','bindings','functions','classes',
    'built-ins','built-in extensions','misc'].indexOf(e.category);
  if (index === -1) {
    console.log('"' + a.category + '" is not an ES7 category!');
  }
  (a[index] = a[index] || []).push(e);
  return a;
},[]).reduce(function(a,e) {
  return a.concat(e);
},[]);
