from flask import Flask, jsonify

app = Flask(__name__)


def generate_arrays():
    quality = []
    safety = []
    employability = []
    return quality, safety, employability


# API endpoint to get the arrays
@app.route("/area_data", methods=["GET"])
def get_school_data():
    quality, safety, employability = generate_arrays()
    data = {
        "quality": quality,
        "safety": safety,
        "employability": employability
    }
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
