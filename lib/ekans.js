var Ekans = (function () {
  var 
  // here is the place to inject private methods
  _private = {},

    // all attributes values goes here
    attributes = {};

  function Ekans () {

    // delete it
    this.end();

    // all attributes values goes here
    attributes = {
      direction: '',
      speed: 0,
      died: false,
      points: 0,
      initial: {
        line: 1,
        position: 1,
        direction: 'forward',
        speed: 120,
        level: 1
      },
      keys: {
        left: 37,
        up:  38,
        right: 39,
        down: 40
      },
      elements: {
        $body: $('body'),
        $died: $('#died'),
        $won: $('#won')
      }
    };

    this.initialize();
  }

  _private = {
    next: function (bodypart) {
      var head = _private.snake.data.slice(-1)[0];
      bodypart.line = head.line;
      bodypart.position = head.position;

      switch (attributes.direction) {
        case 'forward' :
          bodypart.position++;
          break;

        case 'backward' :
          bodypart.position--;
          break;

        case 'upward' :
          bodypart.line--;
          break;

        case 'downward' :
          bodypart.line++;
          break;
      }

      return bodypart;
    },

    walk: function () {
      var bodypart = _private.snake.data[0];

      // move 'old field' snake
      _private.move(bodypart);
      bodypart = _private.setBody(bodypart);

      // get the 'next' field to walk
      bodypart = _private.next(bodypart);
      _private.snake.data.push(bodypart);
      _private.snake.data.shift();

      // is the next a part of snake?
      if (_private.isValid(bodypart) && _private.field.data[bodypart.line].line[bodypart.position].snake) {
        attributes.died = true;
      }
      // is the next part a food?
      else if (_private.isValid(bodypart) && _private.field.data[bodypart.line].line[bodypart.position].food) {
        _private.each();
        _private.eat(bodypart.line, bodypart.position);
      }
      else {
        _private.each();
      }

      _private.view.render();

      if (!attributes.died) {
        _private.timeout = setTimeout(function () {
          _private.walk();
        }, attributes.speed);
      }
      else {
        _private.died();
      }
    },

    move: function (bodypart) {
      _private.field.data[bodypart.line].line[bodypart.position].snake = false;
    },

    onKey: function (event) {
      var before = attributes.direction,
      trust = false,
      Prevent;

      switch (event.which) {
        case attributes.keys.right :
          Prevent = event.preventDefault && event.preventDefault();
          if (!attributes.died && attributes.direction !== 'backward') {
            trust = true;
            attributes.direction = 'forward';
          }
          break;

        case attributes.keys.left :
          Prevent = event.preventDefault && event.preventDefault();
          if (!attributes.died && attributes.direction !== 'forward') {
            trust = true;
            attributes.direction = 'backward';
          }
          break;

        case attributes.keys.up :
          Prevent = event.preventDefault && event.preventDefault();
          if (!attributes.died && attributes.direction !== 'downward') {
            trust = true;
            attributes.direction = 'upward';
          }
          break;

        case attributes.keys.down :
          Prevent = event.preventDefault && event.preventDefault();
          if (!attributes.died && attributes.direction !== 'upward') {
            trust = true;
            attributes.direction = 'downward';
          }
          break;
      }

      if (before !== attributes.direction && trust) {
        _private.clear();
        _private.walk();
      }
      else {
        attributes.direction = before;
      }
    },

    clear: function () {
      _private.timeout = clearTimeout(_private.timeout);
    },

    // detect if field is valid or not
    isValid: function (bodypart) {
      if (_private.field.data[bodypart.line] && _private.field.data[bodypart.line].line[bodypart.position]) {
        return true;
      }

      return false;
    },

    each: function () {
      _private.snake.data.forEach(function (bodypart) {
        // Is is a valid field
        if (_private.isValid(bodypart)) {
          field = _private.field.data[bodypart.line].line[bodypart.position];
          field.snake = true;
        }
        else {
          attributes.died = true;
        }
      });
    },

    setBody: function (bodypart) {
      bodypart.line = bodypart.line || attributes.initial.line;
      bodypart.position = bodypart.position || attributes.initial.position;

      return bodypart;
    },

    eat: function (line, position) {
      _private.snake.grow(line, position, attributes.direction);
      if (_private.total !== _private.snake.data.length) {
        _private.field.mixFood(line, position, false);
        _private.increase();
        _private.food.add();
      }
      else {
        _private.won();
      }
    },

    increase: function () {
      attributes.speed = attributes.speed - attributes.initial.level;
      attributes.points++;
    },

    died: function () {
      attributes.elements.$body.find('td').removeClass('is-food is-snake');
      attributes.elements.$body.find('.points').html(attributes.points);
      setTimeout(function () {
        attributes.elements.$died.addClass('is-visible');
      }, 100);
    },

    won: function () {
      attributes.died = true;
      attributes.elements.$died.remove();
      attributes.elements.$body.find('td').removeClass('is-food is-snake');
      setTimeout(function () {
        attributes.elements.$won.addClass('is-visible');
      }, 100);
    }
  };

  Ekans.prototype.initialize = function () {
    this.set();
  };

  Ekans.prototype.set = function () {
    // attributes
    attributes.direction = attributes.initial.direction;
    attributes.speed = attributes.initial.speed;

    // instances
    _private.snake = new Snake();
    _private.field = new Field();
    _private.food = new Food({
      snake: _private.snake,
      field: _private.field
    });

    _private.view = new FieldView({
      snake: _private.snake,
      field: _private.field
    });

    _private.total = ((_private.field.data.length * _private.field.data.length) -1 )
      _private.food.add();
  };

  Ekans.prototype.start = function () {
    this.set();
    this.bind();
    _private.walk(attributes.initial.direction);
  };

  Ekans.prototype.bind = function () {
    attributes.elements.$body.on('keydown', _private.onKey);
  };

  Ekans.prototype.end = function () {
    _private.clear();
  };

  Ekans.prototype.move = function (event) {
    _private.onKey(event);
  };

  return Ekans;

}());
