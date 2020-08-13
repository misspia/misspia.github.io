import App from './App';

export default class WebGLApp {
  constructor() {
    this.app = new App();
  }

  setup(canvas) {
    this.app.setup(canvas);
  }

  render() {
    this.app.render();
  }

  setState(state) {
    console.debug('[setState]', state)
  }

  resize = (width, height) => {
    this.app.resize(width, height);
  }
}
