from flask import Flask, request
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///databse.db' 
#config and name of the db
db = SQLAlchemy(app)

class VideoModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    views = db.Column(db.Integer, nullable=False)
    likes = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"video(name= {name}, views= {views}, likes= {likes})"

# db.create_all() #only run first time to create db

video_put_args = reqparse.RequestParser() #creates object that parses the request to validate request and make sure it fits our guidelines to later get the data
video_put_args.add_argument("name", type=str, help="Name of the video", required=True) #help = error message
video_put_args.add_argument("views", type=int, help="views of the video", required=True) #help = error message
video_put_args.add_argument("likes", type=int, help="likes of the video", required=True) #help = error message

video_update_args = reqparse.RequestParser() 
video_update_args.add_argument("name", type=str, help="Name of the video") 
video_update_args.add_argument("views", type=int, help="views of the video") 
video_update_args.add_argument("likes", type=int, help="likes of the video")

'''
videos = {}

def abort_if_video_id_doesnt_exist(video_id):
    if video_id not in videos:
        abort(404, message="Video id is not valid")

def abort_if_video_id_exists(video_id):
    if video_id in videos:
        abort(409, message="Video already exists with that id")


class Video(Resource):
    def get(self, video_id):
        return videos[video_id]
    
    def put(self, video_id): #create method
       # abort_if_video_id_exists(video_id)
        args = video_put_args.parse_args()
        videos[video_id] = args
        return videos[video_id], 201 # 201 error code

    def delete(self, video_id):
        abort_if_video_id_doesnt_exist(video_id)
        del videos[video_id]
        return '', 204 #204 = deleted successfully


api.add_resource(Video, "/video/<int:video_id>")
'''
resource_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'views': fields.Integer,
    'likes': fields.Integer
}

class Video(Resource):
    @marshal_with(resource_fields) #object serializing into json format, according to resource_fields dict
    def get(self, video_id):
        result = VideoModel.query.filter_by(id=video_id).first()
        if not result:
            abort(404, message='could not find')
        return result
    
    @marshal_with(resource_fields)
    def put(self, video_id): #create method
        args= video_put_args.parse_args()
        result = VideoModel.query.filter_by(id=video_id).first()
        if result:
            abort(409, message='video id taken')
        video = VideoModel( id=video_id, name=args['name'], views=args['views'], likes=args['likes'] )
        db.session.add(video) # add object db session
        db.session.commit() #perm save
        return video, 201

    @marshal_with(resource_fields)
    def patch(sef, video_id):
        args = video_update_args.parse_args()
        result = VideoModel.query.filter_by(id=video_id).first()
        if not result:
            abort(404, message="video doesn´t exist, cannot update")
        if args['name']:
            result.name = args['name']
        if args['views']:
            result.views = args['views']
        if args['likes']:
            result.likes = args['likes']
        db.session.commit()
        return result




if __name__ == "__main__":
    app.run(debug=True) # production mode should = False