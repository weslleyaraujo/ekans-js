var Snake = (function () {
  var 
  // here is the place to inject private methods
  _private = {},

    // all attributes values goes here
    attributes = {
    };

  function Snake () {

    // set attributes
    attributes = {
      size: 3,
      initial: {
        line: 1,
      position: 1
      }
    };

    this.initialize();
  }

  _private = {
    mapper: function (snake) {
      return snake.map(function (bodypart) {
        bodypart = {
          head: false,
          tail: false,
          line: 0,
          position: 0
        };

        return bodypart;

      }.bind(this));
    },

    increase: function () {
      attributes.initial.position++;
    }
  };

  Snake.prototype.initialize = function () {
    // create the snake object
    this.data = this.create();
    this.initial();
  };

  Snake.prototype.initial = function () {
    this.data.map(function (bodypart) {
      bodypart.line = attributes.initial.line;
      bodypart.position = attributes.initial.position;
      _private.increase();
      return bodypart;
    });
  };

  Snake.prototype.create = function () {
    return window.Helpers.compose(_private.mapper, window.Helpers.size)((attributes.size - 1));
  };

  Snake.prototype.grow = function (line, position, direction) {
    var bodypart = {
      head: false,
      line: 0,
      position: 0,
      tail: false
    };

    switch (direction) {
      case 'downward' :
        bodypart.line = line++;
        bodypart.position = position;
        break;

      case 'forward' :
        bodypart.line = line;
        bodypart.position = position++;
        break;

      case 'upward' :
        bodypart.line = line--;
        bodypart.position = position;
        break;

      case 'backward' :
        bodypart.line = line;
        bodypart.position = position--;
        break;
    }

    this.data.push(bodypart);
  };

  return Snake;

}());
