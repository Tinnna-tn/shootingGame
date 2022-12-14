/**
 * 父类 Element 对象
 */
var Element = function(opts) {
  var opts = opts || {};
  // 设置坐标和尺寸
  this.x = opts.x;
  this.y = opts.y;
  this.size = opts.size;
  this.speed = opts.speed;
};
/**
 * element对象原型
 * 原型方法 move()
 */
Element.prototype = {
  move: function(x, y) {
    var addX = x || 0;
    var addY = y || 0;
    this.x += x;
    this.y += y;
  }
};
