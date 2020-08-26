from Utils.DButils import DButils
import pandas as pd
from bs4 import BeautifulSoup
dbutils = DButils()
import urllib.request


_search_params = {
    'q': 'puppies',
    'num': 2,
    'safe': 'high|medium|off',
    'fileType': 'jpg|gif|png',
    'imgType': 'clipart|face|lineart|news|photo',
    'imgSize': 'huge|icon|large|medium|small|xlarge|xxlarge',
    'imgDominantColor': 'black|blue|brown|gray|green|pink|purple|teal|white|yellow',
    'usageRights': 'cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial|cc_nonderived'
}

def transfer_data():
    path = "/Users/likhithaalle/Desktop/DATA/title.akas.tsv"
    data_info = pd.read_csv(path, delimiter="\t")
    data_local = data_info.to_dict(orient='records')
    for d in data_local:
        print(d)
        print("=--==--=")




def crawler():
    base_url = "https://www.webmd.com/drugs/2/alpha/a/"
    # request = urllib.request.Request(base_url)
    contents = urllib.request.urlopen(base_url).read()
    souper = BeautifulSoup(contents)
    souper.prettify()



def copyBaseDataToMongo():
    path = "temp.csv"
    Category = "CORONAVIRUS"
    df = pd.read_csv(path)
    records = df.to_dict(orient='records')
    for r in records:
        r["Category"] = Category
        print(r)
    DButils().get_collection("LOGIN", "drugs").insert_many(records)



def test():
    array = [    "104.5",
    "112",
    "132",
    "136",
    "1648",
    "2.38",
    "292.5",
    "295",
    "30.6",
    "300",
    "359.4",
    "51",
    "7.2",
    "8",
    "823.35"]
    for d in list(dbutils.get_collection("LOGIN", "drugs").find({"Price": {"$in": array}})):
        print(d)
        dbutils.get_collection("LOGIN", "drugs").update_one({"_id": d["_id"]},{"$set": {"Price": float(d["Price"])}})




if __name__ == '__main__':
    test()

