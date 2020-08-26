import os
import sys
import logging
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))
from flask import Flask, render_template
from flask_compress import Compress
from flask_restplus import Api
from flask_cors import CORS, cross_origin

# app = Flask(__name__)
# app.config.from_object('config')

app = Flask(__name__)
api = Api(app, version='1.0', title='DrugsStore API', description='APIs for DRUG Store',)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
Compress(app)


@app.route("/")
@cross_origin()
def visualize():
   return render_template('index.html')


@app.errorhandler(404)
def not_found(error):
   return "TODO: 404 page", error



app.config.SWAGGER_UI_DOC_EXPANSION = 'list'
app.config.SWAGGER_UI_OPERATION_ID = True
app.config.SWAGGER_UI_REQUEST_DURATION = True

formatter = logging.Formatter('%(asctime)s %(levelname)s %(name)s : %(message)s')
logger = logging.getLogger('')
logger.setLevel(logging.ERROR)

package_dir = os.path.dirname(os.path.abspath(__file__))

from app.UserAuth.login import mod_data as dataModule
app.register_blueprint(dataModule, url_prefix='/login')
from app.UserAuth.address import mod_data as dataModule
app.register_blueprint(dataModule, url_prefix='/address')
from app.MedicineData.medicineService import mod_data as dataModule
app.register_blueprint(dataModule, url_prefix='/drugs')



