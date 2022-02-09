# web

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Example Requests

<http://localhost:8080/rhc/api/properties?lower.lat=39.048306800&lower.lng=-84.363501960&upper.lat=39.123621950&upper.lng=-81.458905140>


Specifics for deployment: 

Change in webpack: 

	devServer: {
		compress: true,
		inline: true,
		port: '8080',
		allowedHosts: [
			'*',
			'vue-frontend-rhc-dmji6.ondigitalocean.app',
			'www.realhomecompare.com'
		]
	  },

front-end port: 8080
back-end port: 8888



