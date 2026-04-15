import urllib.request
import json

url= "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json

with urlib.request.urlopen(url) as resp:
  trades = json.loads(resp.read())

#gades is now a list of every house member's stock trade
# Each trade has: representative, ticker, type (purchase/sale), amount, transaction_date
