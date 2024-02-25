from flask import Flask, jsonify, request
import csv

app = Flask(__name__)

# total set
cities = []
populations = []
prices = []

qualityNormalized = []
safetyNormalized = []
employabilityNormalized = []

# modified set
modifiedSafety = []
modifiedQuality = []
modifiedEmployability = []

rating = []

file_path = "./city_education_crime_employment_homeprice.csv"

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

# API endpoint to get the arrays
@app.route("/area_data", methods=["GET"])
def get_area_data():
    data = {
        "cities": cities,
        "populations": populations,
        "qualityNormalized": qualityNormalized,
        "safetyNormalized": safetyNormalized,
        "employabilityNormalized": employabilityNormalized,
        "prices": prices
    }
    return jsonify(data)


@app.route("/filter_data", methods=["POST"])
def filter():
    global modifiedQuality, modifiedSafety, modifiedEmployability
    user_ratings = request.json
    user_employability = user_ratings.get("user_employability")
    user_safety = user_ratings.get("user_safety")
    user_quality = user_ratings.get("user_quality")
    # 3 rating values

    if user_quality == 4:
        modifiedQuality = [element * 1 for element in qualityNormalized]
    elif user_quality == 3:
        modifiedQuality = [element * 0.75 for element in qualityNormalized]
    elif user_quality == 2:
        modifiedQuality = [element * 0.50 for element in qualityNormalized]
    elif user_quality == 1:
        modifiedQuality = [element * 0.25 for element in qualityNormalized]

    if user_quality == 4:
        modifiedSafety = [element * 1 for element in safetyNormalized]
    elif user_safety == 3:
        modifiedSafety = [element * 0.75 for element in safetyNormalized]
    elif user_safety == 2:
        modifiedSafety = [element * 0.5 for element in safetyNormalized]
    elif user_safety == 1:
        modifiedSafety = [element * 0.25 for element in safetyNormalized]

    if user_employability == 4:
        modifiedEmployability = [element * 1 for element in employabilityNormalized]
    elif user_employability == 3:
        modifiedEmployability = [element * 0.75 for element in employabilityNormalized]
    elif user_employability == 2:
        modifiedEmployability = [element * 0.5 for element in employabilityNormalized]
    elif user_employability == 1:
        modifiedEmployability = [element * 0.25 for element in employabilityNormalized]

    # these ratings are in correct indices
    added_rating = modifiedQuality + modifiedSafety + modifiedEmployability

    sorted_data = sorted(added_rating, reverse=True)

    return jsonify(sorted_data)

@app.route("/handle_budget", methods=["GET"])
def handle_budget():
    budget = request.args.get('budget', type=int)
    filtered_cities = [cities[i] for i in range(len(prices)) if prices[i] <= budget]

    return jsonify({"filtered_cities": filtered_cities})


if __name__ == "__main__":
    read_csv(file_path)
    app.run(debug=True, port=5000)
