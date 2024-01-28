//
// подобный код работать не будет:
// -------------------------------
classExpr = `class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}`;
eval(classExpr);
point = new Point(100,100);

//
// а вот так все будет отлично:
// ----------------------------
var class_str = "(class Test {})";
var a = eval(class_str);
console.log(new a());

//
// то есть с правками:
// -----------------------------------------------
               // <- как видим скобка нужна
classExpr = `(class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
})`;
PointType = eval(classExpr);
point = new PointType(100,100);
console.log(point.x);

//
// и как видим класс стал динамическим:
// можем хранить как:
//               types["Point"] = ...
//               exprOfTypes["Point"] = ...
// ------------------------------------
classExpr = `(class Point {
  constructor(x, y) {
    this.x = x + 777;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
})`;
PointType = eval(classExpr);           // <- переписываем класс
point = new PointType(100,100);        // <- это уже новый объект
console.log(point.x);

//
// шаблон внутри класса задается так:
// как видим с вложенными декларациями особенных проблем нет
// по сути в шаблон надо бы добавить еще модель для добавления
// произвольного количества полей --
// тогда это станет полностью шаблоном
// -----------------------------------

expr = `(
class Test
{
    constructor(id)
    {
        this.id = id;                   // <- идентификатор компонента
        this.model = new Model();       // <- модель для заполнения полей
        // <- фактически препроцессор шаблонизатор внутри js:
        //    если сложная логика просто разбиваем
        this.template = ^^^
            <div id="&&{id}">test</div>
        ^^^;
    }
    changeHtml(newContent)
    {
       document.getElementById(this.id).innerHtml = newContent;
    }

}
)`;
expr = expr.replaceAll("^^^", "`");
expr = expr.replaceAll("&&", "$");
console.log(expr);

 TestType = eval(expr);
 test = new TestType("someId");
console.log(test.template);
