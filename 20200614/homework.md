We have:

```js
/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { i18nextInited } from './i18next';
import './main.css';
import './demo.css';

class Item extends React.PureComponent {
  render() {
    return (
      <div className="item">
        <div className="avatar">
          <img
            alt='doug'
            src="http://www.croop.cl/UI/twitter/images/doug.jpg"
          />
        </div>

        <span className="time">
          {this.props.time}
        </span>
        {this.props.children}
      </div>
    );
  }
}

class Header extends React.PureComponent {
  render() {
    return (
      <div className="header">

        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBottom"></div>
          <div className="circle"></div>
        </div>

        <span className="title">Timeline</span>

        <input
          type="text"
          className="searchInput"
          placeholder="Search ..." />

        <div className="fa fa-search searchIcon"></div>
      </div>
      
    );
  }
}

class AppA extends React.PureComponent {
  render() {
    return (
      <div className="demo">
        <div className="notificationsFrame">
          <div className="panel">
            <Header />
            <div className="content">
              <div className="line"></div>
              <Item time="An hour ago">
                <p>Ate lunch</p>
              </Item>

              <Item time="10 am">
                <span>Read Day two article</span>
                <p>Xxxxxx</p>
              </Item>

              <Item time="10 am">
                <span>Read Day two article</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </Item>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

i18nextInited.then(() => {
  ReactDOM.render(
    <AppA />,
    document.getElementById('page_main')
  );
});

```


We want:
```js
class App extends React.Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header />
          <Content>
            <Item time="An hour ago">
              <p>Ate lunch</p>
            </Item>

            <Item time="10 am">
              <span>Read Day two article</span>
              <p>Xxxxxx</p>
            </Item>

            <Item time="10 am">
              <span>Read Day two article</span>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </Item>
          </Content>
        </div>
      </div>
    );
  }
}
```
