from app.database.db import db
from datetime import datetime

class Client(db.Model):
    __tablename__="clients"

    id=db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable=False)
    phone_number =db.Column(db.String(15), nullable= False , unique = True)
    address = db.Column(db.String(225), nullable= False)
    created_at= db.Column(db.DateTime,default = datetime.now())
    #Relaciones Inversas
    orders = db.relationship("Order", backref="client", lazy = True)


    def to_dict(self, orders:bool=False):
        client ={
            "id":self.id,
            "name":self.name,
            "address":self.address,
            "created_at":self.created_at
        }
        if orders:
            client["orders"]=self.orders
        return client