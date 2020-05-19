const changeVisibilityLoginBox = () => {
  var element = $('.login__box');
  var first = element.attr('display');
  var display = element.attr('display') == 'block' ? 'none' : 'block';
  element.css('display', display);
};
