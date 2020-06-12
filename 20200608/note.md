## React Life Cycle

https://iandays.com/2018/07/27/reactlife/

### 30-days-of-react

https://www.newline.co/fullstack-react/30-days-of-react/

## Example 1

```js
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    text: 'Hello',
  };

  constructor() {
    super();
    console.log('constructor()', this, 1 + 5);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: 'Hi',
      });
    }, 5000);
    console.log('componentDidMount()');
  }

  render() {
    console.log('render()');
    return (
      <h1
        style={{
          color: this.state.color || 'black',
        }}
        onClick={() => {
          this.setState({
            text: '你好',
          });
        }}
        onMouseEnter={() => {
          this.setState({
            text: '你好2',
          });
        }}
        onMouseLeave={() => {
          this.setState({
            color: 'blue',
          });
        }}
      >
        {this.state.text}   from our app
      </h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('page_main')
);

// ReactDOM.render(
//   <h1>Hello world</h1>,
//   document.getElementById('page_main')
// );
```

## Example 2

```js

/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

class B extends React.Component {
  constructor(props) {
    super(props);
    console.log('B.constructor()');
  }

  componentDidMount() {
    console.log('B.componentDidMount()');
  }

  componentWillUnmount() {
    console.log('B.componentWillUnmount()');
  }

  render() {
    console.log('B.render()');
    return <div>B</div>
  }
}

class C extends React.Component {
  constructor(props) {
    super(props);
    console.log('C.constructor()');
  }

  componentDidMount() {
    console.log('C.componentDidMount()');
  }

  componentWillUnmount() {
    console.log('C.componentWillUnmount()');
  }

  render() {
    console.log('C.render()');
    return <div>C</div>
  }
}

class App extends React.Component {
  state = {
    text: 'Hello',
  };

  constructor(props) {
    super(props);
    console.log('A.constructor()');
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: 'Hi',
      });
    }, 5000);
    console.log('A.componentDidMount()');
  }

  componentWillUnmount() {
    console.log('A.componentWillUnmount()');
  }

  render() {
    console.log('A.render()');
    if (this.state.text === 'Hello') {
      return <B />
    }
    return <C />
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('page_main')
);
```

## Try it !

https://www.newline.co/fullstack-react/30-days-of-react/day-4/
