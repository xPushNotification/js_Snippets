
//----------
// геттеры и сеттеры для классов js
//----------
// все вроде хорошо - но они нафиг не нужны - просто потому что глагольные убивают

let obj =
{
    inner_01:100,
    inner_02:200,
    get outer_01() {return this.inner_01;},
    set outer_01(px) {this.inner_01 = px;},
    get outer_02() {return this.inner_02;},
    // set outer_02()
};

obj.outer_01 = 777;
console.log( obj.outer_01 );   // 777
obj.outer_02 = 300;
console.log( obj.outer_02 );   // 200

