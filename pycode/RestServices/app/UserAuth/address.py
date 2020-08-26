from flask import Blueprint, request
from bson.json_util import dumps
import json
from DButils import DButils
mod_data = Blueprint('address', __name__,)


@mod_data.route('/helloworld')
def get_hello_word():
    return {"data": "Hello World"}, 200



@mod_data.route("/get-address")
def get_address():
    email = request.args.get("email")
    if email:
        address = DButils().get_collection("LOGIN", "address").find_one({
            "_id": email
        })
        if address:
            local_address_array = address["address"]
            return dumps({"data": local_address_array}), 200, {"Content Type": "application/json"}
        else:
            return dumps({"error": "No Address"}), 200, {"Content Type": "application/json"}
    else:
        return dumps({"error": "Email is a compulsory attribute"}), 200, {"Content Type": "application/json"}


@mod_data.route("/add-address", methods=['POST'])
def add_address():
    email = request.args.get("user-email")
    if email:
        data_received = request.get_data()
        record = json.loads(data_received)
        try:
            _id = DButils().get_collection("LOGIN", "orders").insert(record)
            return dumps({"data":{ "orderid": str(_id),"userid": email}}), 200, {"Content Type": "application/json"}
        except:
            return dumps({"error": "Issue with Database"}), 200, {"Content Type": "application/json"}
    else:
        return dumps({"error": "Email is required"}), 200, {"Content Type": "application/json"}