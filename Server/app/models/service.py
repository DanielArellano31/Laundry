from app.database.db import db

class Service(db.Model):
    __tablename__= "services"
    id = db.Column(db.Integer, primary_key = True)
    name =db.Column(db.String, nullable = False)
    price = db.Column(db.Float, nullable= False)
    decription = db.Column(db.String(200))