# Cloudnet Mobile App

## Setup

Install Yarn

```bash
  npm install --global yarn
```

Install node OSX

```bash
  brew install node
```

Install dependencies

```bash
  yarn add expo-cli
  yarn add @react-navigation/stack
  yarn add @react-navigation/native
  yarn add @react-navigation/routers
  yarn add @react-navigation/botton-tabs
  yarn add react-native-gesture-handler

  yarn add react-native-screens
  yarn add react-native-countdown-circle-timer
  yarn add react-native-svg
  yarn add expo-device

```

Run project (In root directory)

```bash
  yarn start
```

##Troubleshoting

Si surge el siguiente error

```
Error: ENOSPC: System limit for number of file watchers reached
```

Es necesario correr el siguiente comando(Testeado en UBUNTU 18.04)
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```


Si surge el siguiente error(macOS Catalina)

```
Error: EMFILE, too many open files
```

Es necesario correr el siguiente comando
```
brew reinstall watchman
```


## Ejecución

Para correr en el navegador web, presionar W en la terminal, luego seleccionar la opción "run in web browser" en la ventana que aparezca.(Algunas funcionalidades fallan en esta modalidad, pero es bueno para testear la app si no se tiene un dispositivo a mano)


Para correr en Android o en iOS Expo GO, y escanear el código QR
