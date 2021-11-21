const delay = ms => {
	return new Promise(r => setTimeout(() => r(), ms))
}
delay(2000).then(() => {
	console.log('2 seconds')
})

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
// 	console.log('Fetching todo started...')
// 	return delay(2000)
// 		.then(() => fetch(url))
// 		.then(response => response.json())
// 	//здесь мы отправили промис запрос на сервер через фетч, а затем у полученого ответа запросили json формат
// }
// fetchTodos()
// 	.then(data => {
// 		console.log(data, "data")
// 	})
// 	.catch(err => {
// 		console.error(err, "error")
// 	})

async function fetchAsyncTodos() {
	console.log('Fetching todo started...')
	try {
		await delay(2000)
		const response = await fetch(url)
		const data = await response.json()
		console.log(data, "data")
	}
	catch (e) {
		console.error(e, "Error")
	}
	finally {

	}
}
fetchAsyncTodos()