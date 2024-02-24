from flask import Flask, jsonify, request
import csv
app = Flask(__name__)

cities = []
qualityNormalized = []
safetyNormalized = []
employabilityNormalized = []
prices = []


# API endpoint to get the arrays
@app.route("/area_data", methods=["GET"])

def read_csv(file_path):
    with open(file_path, mode='r') as file:
        csv_reader = csv.DictReader(file)
        next(csv_reader)
        for column in csv_reader:
            cities.append(column[0])
            qualityNormalized.append(column[3])
            safetyNormalized.append(column[4])
            employabilityNormalized.append(column[5])
            prices.append(column[6])


    return cities, qualityNormalized, safetyNormalized, employabilityNormalized, prices

def get_rating():
    global employabilityRate, qualityRate, safetyRate
    data = request.json
    employabilityRate = data.get("employabilityRate")
    qualityRate = data.get("qualityRate")
    safetyRate = data.get("safetyRate")



def filter():
    if (employabilityRate == 3)

    if (qualityRate == 3)

    if (safetyRate == 3) o

def handle_budget():
    budget = request.args.get('budget', type=int)
    budget_prices = [price for price in prices if price <= budget]

    return jsonify(budget_prices)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
