from flask import Flask, jsonify

app = Flask(__name__)

def generate_arrays():
    locations = []
    quality = []
    safety = []
    employability = []
    prices = []

    return prices, safety, employability, locations, quality


# API endpoint to get the arrays
@app.route("/area_data", methods=["GET"])
def get_school_data():
    locations, quality, safety, prices, employability = generate_arrays()
    data = {
        "locations": locations,
        "quality": quality,
        "safety": safety,
        "employability": employability,
        "prices": prices,
    }
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
