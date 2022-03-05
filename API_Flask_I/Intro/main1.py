'''from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)


names = {"diogo": {"age": 25, "gender": "male"}, 
            "ana": {"age": 24, "gender": "female"} 
            }

class HelloWorld(Resource):
    #def get(self): #get request
       # return {"data": "Hello World"} #dict
    
    #def get(self, name, test): #get request
        #return {"name": name, "test": test} #dict
    
    def get(self, name): #get request
        return names[name] #dict
    
    def post(self):
        return {"data": "Posted"}

# api.add_resource(HelloWorld, "/helloworld/<string:name>") #register class as resource with a url
#api.add_resource(HelloWorld, "/helloworld/<string:name>/<int:test>") #<string> to define parameter dataType

api.add_resource(HelloWorld, "/helloworld/<string:name>") #<string> to define parameter dataType


if __name__ == "__main__":
    app.run(debug=True) # production mode should = False

'''