typeof(typeof(1)); // 'string'

typeof(typeof(undefined)); // 'string'

typeof(undefined); // 'undefined'

typeof(typeof(null)); // 'string'

typeof(typeof(!!true)); // 'string'

typeof(typeof(1+"")); //  'string'

typeof(1+""); // 'string'

typeof 1+""; // 'number'

typeof 10+"try"; // 'numbertry'

typeof !('true'); // 'boolean'

typeof !!('true'); // 'boolean'

typeof !!!(""); // 'boolean'

"80"+71.2; // '8071.2'

2+"2"; // '22'

2 + + "2"; // 4

2 + + "NAN" // NAN

+'1'+'2'; // '12'

typeof typeof(1) + "Hello"; // 'stringHello'

typeof NaN; // 'number'

typeof null // 'Object'


