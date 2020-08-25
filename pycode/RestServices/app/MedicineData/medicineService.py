from flask import Blueprint, request
from bson.json_util import dumps
from DButils import DButils
mod_data = Blueprint('DrugInfo', __name__,)


@mod_data.route("/get-all")
def get_all():
    try:
        data = list(DButils().get_collection("LOGIN", "drugs").find({}))
        for d in data:
            d["_id"] = str(d["_id"])
        return dumps({"data": data}), 200, {"Content Type": "application/json"}
    except:
        return dumps({"error": "Database ERROR"}), 500, {"Content Type": "application/json"}


@mod_data.route("/get-drug-category")
def get_drug_category():
    category = request.args.get("category")
    try:
        data = list(DButils().get_collection("LOGIN", "drugs").find({"Category": category}))
        for d in data:
            d["_id"] = str(d["_id"])

        return dumps({"data": data}), 200, {"Content Type": "application/json"}
    except:
        return dumps({"error": "Database ERROR"}), 500, {"Content Type": "application/json"}


@mod_data.route("/get-drugs-by-price")
def get_drug_by_price():
    start_price = float(request.args.get("start"))
    end_price = float(request.args.get("end"))
    try:
        data = list(DButils().get_collection("LOGIN", "drugs").find({"Price": {"$lte": end_price, "$gte": start_price}}))
        for d in data:
            d["_id"] = str(d["_id"])

        return dumps({"data": data}), 200, {"Content Type": "application/json"}
    except:
        return dumps({"error": "Database ERROR"}), 500, {"Content Type": "application/json"}