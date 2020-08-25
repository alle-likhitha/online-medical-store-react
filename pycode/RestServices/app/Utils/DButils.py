import pymongo
from pymongo import MongoClient


class DButils:

  def __init__(self):
    # machine details => encoded text files
    #
    self.client = MongoClient('localhost', 27017)
  def get_machine(self, machinename):
      return MongoClient(machinename, 27017)

  def get_data_base(self, database_name):
    return self.client.get_database(database_name)

  def get_collection(self, database_name, collection_name):
    return self.client.get_database(database_name).get_collection(collection_name)

