
//----------
// unit тесты:
//----------

/*
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
<div id="mocha"></div>
<script>mocha.run();</script>
*/

function pow(x,n){ return 8; }

describe(
    "pow",
    function()
    {
        it(
            "возводит число в степень n",
            function()
            {
                assert.equal(pow(2,3), 8);
                assert.equal(pow(3,4), 81);
            }
        ); // it
        it(
            "3 в степени 3 будет 27",
            function()
            {
                assert.equal(pow(3,3), 27);
            }
        ); // it
    } // f:lambda
);

