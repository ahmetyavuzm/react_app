from flask import Flask, request, jsonify
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/get_links", methods = ["GET"])
def get():
    return jsonify({"links": ["https://www.google.com", "https://www.facebook.com"]})

if __name__ == '__main__':
    app.run(debug=True)
