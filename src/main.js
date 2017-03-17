const THREE = require('three')
const BackTube = require('back-tube')

class App {
  constructor () {
    this.threeInit()
    this.threeAnimate()
    this.backTubeInit()
  }
  threeInit () {
    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
    this.camera.position.z = 1000

    this.geometry = new THREE.BoxGeometry(200, 200, 200)
    this.material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })

    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.mesh)

    this.renderer = new THREE.WebGLRenderer({ alpha: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    document.getElementById('render').appendChild(this.renderer.domElement)
  }
  threeAnimate () {
    requestAnimationFrame(() => {
      this.threeAnimate()
    })

    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.02

    this.renderer.render(this.scene, this.camera)
  }
  backTubeInit () {
    /* eslint-disable no-new */
    new BackTube(document.querySelector('#bg-video'), {
      videoId: 'vxl4gsvgEQY'
    })
  }
}

/* eslint-disable no-new */
new App()
