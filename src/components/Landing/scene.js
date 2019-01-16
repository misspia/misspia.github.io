import SceneManager from '../../sceneManager';

export default class Scene extends SceneManager {
  draw() {
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(() => this.draw());
  }
}