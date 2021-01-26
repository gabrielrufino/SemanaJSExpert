# Zoom Clone

### Aprendizados

1. Uso da tag `video` para exibição de um vídeo

```html
<video
  muted
  loop
  controls
  src=""
>
</video>
```

2. Acessar câmera e microfone no navegador

```js
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
})
```

3. Inicializar uma instância a partir de um método estático

```js
class Something {
  constructor({ prop }) {
    this.prop = prop
  }

  static initialize(params) {
    const instance = new Something(params)
    return instance
  }
}

const a = new Something({ prop: 1 })
const b = Something.initialize({ prop: 2 })
```

4. Padrão de projeto `Builder` no JavaScript

```js
class Something {
  constructor(a) {
    this.a = a
    this.b = 0
    this.c = 0

    this.sum = a
  }

  setB(b) {
    this.b = b
    return this
  }

  setC(c) {
    this.c = c
    return this
  }

  calcSum() {
    this.sum = this.a + this.b + this.c
  }
}

const something = new Something(1)

something
  .setB(2)
  .setC(3)
  .calcSum()

console.log(something.sum) // 6
```

5. Uso do `npx` dá prioridade à binários dentro da `node_modules`

```bash
$ npm i -g nodemon
$ nodemon index.js # Runs the global nodemon
$ npx nodemon index.js # Runs the local nodemon (node_modules)
```

6. Uso do atributo `defer` para determinar que um script apenas será executado quando a página terminar de carregar

```html
<script src="app.js" defer></script>
```

7. Uso do `window.onload` para escrever código que será executado quando a página terminar de carregar

```js
window.onload = () => {
  alert('Carregou!')
}
```

8. Definir headers de resposta da api usando módulo `http` no node

```js
response.writeHead({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, POST, GET'
})
```

9. Pegar endereço e porta usando módulo `http` do node

```js
server.listen(1000, () => {
  const { address, port } = server.address()
  console.info(`app running at ${address}:${port}`)
})
```

10. Juntar conexão socket à uma sala usando `socket.io`

```js
const roomId = 123
socket.join(roomId)
```

11. Emitir mensagem em broadcast para clientes de uma sala usando `socket.io`

```js
const roomId = 123
socket.to(roomId).broadcast.emit('event')
```

---
