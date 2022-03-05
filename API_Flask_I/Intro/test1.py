import requests

BASE = "http://127.0.0.1:5000/" #base url, API server location

'''
response = requests.get(BASE + "helloworld")
print(response.json())

response = requests.post(BASE + "helloworld")
print(response.json())

response = requests.get(BASE + "helloworld/diogo/25")
print(response.json())
'''

response = requests.get(BASE + "helloworld/diogo")
print(response.json())