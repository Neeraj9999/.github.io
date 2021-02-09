function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Clock extends React.Component {
  constructor(props) {
    super();_defineProperty(this, "imageChanger",







    () => {
      // this.setState({
      //   count:Math.floor(Math.random() * 900) + 450 
      // })
      this.setState({ imageLoading: true });
      fetch(`https://source.unsplash.com/collection/190727/1600x${Math.floor(Math.random() * 900) + 450}`).
      then(res => res.blob()).
      then(res => {
        this.setState({
          imageLoading: false,
          path: URL.createObjectURL(res) });

        // setTimeout(() => this.setState({path: URL.createObjectURL(res)}) ,200)
      });

    });_defineProperty(this, "imageLoad",
    event => {
      this.setState({
        imageLoading: false });

    });this.state = { // path: "https://source.unsplash.com/collection/190727/1600x",
      path: "https://source.unsplash.com/collection/190727/1600x900", count: 900, imageLoading: false };}
  render() {
    const { path, count, imageLoading } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { className: "box" }, /*#__PURE__*/
      React.createElement("img", { src: path, onLoad: this.imageLoad }), /*#__PURE__*/
      React.createElement("div", { className: `button ${imageLoading && 'full'}`, onClick: !imageLoading ? this.imageChanger : null }, imageLoading ? null : "Change")));


  }}


function tick() {
  ReactDOM.render( /*#__PURE__*/
  React.createElement(Clock, { date: new Date() }),
  document.getElementById('root'));

}

setInterval(tick, 1000);