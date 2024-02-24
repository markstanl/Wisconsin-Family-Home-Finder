from flask import Flask, jsonify, request
import csv
app = Flask(__name__)

cities = []
populations = []
qualityNormalized = []
safetyNormalized = []
employabilityNormalized = []
prices = []

file_path = "./city_education_crime_employment_homeprice.csv"
# API endpoint to get the arrays
@app.route("/area_data", methods=["GET"])
def read_csv(file_path):
    with open(file_path, mode='r') as file:
        csv_reader = csv.DictReader(file)
        next(csv_reader)
        for column in csv_reader:
            cities.append(column[0])
            populations.append(column[1])
            qualityNormalized.append(column[2])
            safetyNormalized.append(column[3])
            employabilityNormalized.append(column[4])
            prices.append(column[5])

    return cities, populations, qualityNormalized, safetyNormalized, employabilityNormalized, prices

def index():


def get_rating():
    global employabilityRate, qualityRate, safetyRate
    data = request.json
    employabilityRate = data.get("employabilityRate")
    qualityRate = data.get("qualityRate")
    safetyRate = data.get("safetyRate")



def filter():
    if (employabilityRate == 3)

    if (qualityRate == 3)

    if (safetyRate == 3)


def handle_budget():
    budget = request.args.get('budget', type=int)
    budget_prices = [price for price in prices if price <= budget]

    return jsonify(budget_prices)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
