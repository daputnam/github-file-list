import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'
import "./index.css";

const ErrorBox = props => {
  return (
    <div className="error-box">
     <i class="fa fa-address-book"></i>
     &nbsp;{props.children}
    </div>
  )
};

function NavItem(props) {
  return (<a href={props.url}>{props.children}</a>);
}

function Nav({ children }) {
  let items = React.Children.toArray(children);
  for(let i = items.length - 1; i >= 1; i--) {
    items.splice(i, 0,
      <span key={i} className='separator'>|</span>
); }
  return (
    <div>{items}</div>
); }

// ReactDOM.render(<Nav>
//   <NavItem url='/'>Home</NavItem>
//   <NavItem url='/about'>About</NavItem>
//   <a href='/contact'>Contact</a>
// </Nav>, document.getElementById("root"));
function Title({ children }){
  return (
    <h1>
      {children}
      <hr/>
    </h1>
  )
}
function Body({ children }){
  return (
    <h2>
      {children}
      <hr/>
    </h2>
  )
}
function Footer({ children }){
  return (
    <p>
      {children}
    </p>
  )
}
function Dialog(props){
  let items = React.Children.toArray(props.children);
  return (
    <div className="dialog">
      {items}
    </div>
  );
}
Dialog.propTypes = {
  children: PropTypes.node
}

ReactDOM.render(<Dialog>
  <Title>This is the title</Title>
  <Body>body here</Body>
  <Footer>Footer here</Footer>
</Dialog>, document.getElementById("root"));
