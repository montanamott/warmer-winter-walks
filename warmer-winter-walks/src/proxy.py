import flask
from requests import get

MAGICBUS_API_KEY = ""   # Insert API key here

app = flask.Flask('__main__')
SITE_NAME = 'https://mbus.ltp.umich.edu/bustime/api/v3/getpredictions?key=' + MAGICBUS_API_KEY + '&format=json&top=3&stpid='

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def proxy(path):
  resp = flask.Response(get(f'{SITE_NAME}{path}').content)
  resp.headers['Access-Control-Allow-Origin'] = '*'
  return resp

app.run(host='localhost', port=8000)
