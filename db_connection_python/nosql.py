from pymongo import MongoClient
import datetime


client = MongoClient("mongodb://localhost:27017/")

db = client["test-database"]

post = {
    "author": "Mike",
    "text": "My first blog post!",
    "tags": ["mongodb", "python", "pymongo"],
    "date": datetime.datetime.now(tz=datetime.timezone.utc),
}


posts = db.posts
post_id = posts.insert_one(post).inserted_id
