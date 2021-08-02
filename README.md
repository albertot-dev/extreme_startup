# Extreme Startup

Un proyecto basado en [The Extreme Startup]('https://github.com/rchatley/extreme_startup') de @Robert Chatley, con el que podrás crear una pequeña competición de programación.

Los participantes tendrán que adaptar su código según la "demanda del mercado".

El proyecto original está desarrollado con ruby y pero yo he querido "pasarlo" a NodeJS e incluso tiene una parte de Angular.

Si quieres utilizar este proyecto intenta que los participantes no vean el código, ya que podrían hacer trampas.

## Como empezar

---

### Docker

```shell script
docker build -t extreme_startup .
docker run -d -p 80:3000 extreme_startup
```

### Nativo (sin docker)

- Instalar NodeJS
- Instalar las dependencias del proyecto NodeJS

```shell script
#En el raíz del proyecto
npm i
```

- Instalar las dependencias del proyecto Angular

```shell script
#Cambiando al directorio extrem-startup-front
npm i
```

- Construir la parte de front

```shell script
#directorio extrem-startup-front
npm run build
```

- Iniciar el servidor del juego

```shell script
#directorio raiz del proyecto
npm run start
```

## Notas para organizador

Para acceder al front del servidor tienes que abrir un navegador e introducir http://localhost:3001.

Desde este front podrás añadir participantes, o incluso ellos mismos podrán inscribirse y ver la clasificiación, así como un log de su partida.

Para el manejo de la partida tendrás que acceder a la ruta "/control-panel", desde donde podrás iniciar el juego, pausarlo, pasar de ronda y resetear el juego.

Establece un limite de tiempo por ronda sabiendo que hay 8 rondas. Cada ronda añade nuevas preguntas a la partida.

## Como funciona?

El servidor lanzará una pregunta cada X tiempo al servidor de cada participante inscrito. Estos servidores/participantes tendrán que implementar tan rápido como puedan una funcionalidad para contestar estas preguntas, cuanto antes desarrollen la función antes empezarán a ganar puntos.
