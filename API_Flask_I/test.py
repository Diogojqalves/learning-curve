from urllib import request
import requests

BASE = "http://127.0.0.1:5000/" #base url, API server location
'''
data = [{"likes": 10, "name": "jose", "views": 1000}, 
{"likes": 80, "name": "alves", "views": 10}, 
{"likes": 100, "name": "how to make rest api", "views": 10000},
{"likes": 1000, "name": "flask", "views": 1000000}]

for i in range(len(data)):
    response = requests.put(BASE + "video/" + str(i), data[i]) #create
    print(response.json())

response= requests.get(BASE + "video/2") #delete
print(response)
'''
response = requests.patch(BASE + "video/2", {"views": 10000}) #update
print(response.json())

'''
response= requests.delete(BASE + "video/0") #delete
print(response)

response = requests.put(BASE + "video/1", {"likes": 10, "name": "diogo", "views": 100}) #create
print(response.json())
input()

response = requests.get(BASE + "video/1") #access
print(response.json())
'''