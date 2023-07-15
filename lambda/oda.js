exports.handler = async (event, context, callback) => {
  const { parameters } = JSON.parse(event.body)
  const url = new URL('https://francisrubio.antaresph.dev/')
  parameters.forEach(param => url.searchParams.append(param.key, param.value))

  return {
    statusCode: 200,
    body: JSON.stringify({
      "webview.url": url.toString()
    })
  }
}