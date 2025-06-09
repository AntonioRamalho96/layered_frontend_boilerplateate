from flask import Flask
from flask_cors import CORS

import random

app = Flask(__name__)
cors = CORS(app)

@app.route("/")
def hello_world():
    return str(int(random.random()*100))

if __name__ == "__main__":
    app.run(debug=True)