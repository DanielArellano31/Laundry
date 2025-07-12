from app.database.db import db

class Garment(db.Model):
    __tablename__="garments"
    id= db.Column(db.Integer, primary_key=True)
    order_id=db.Column(db.Integer,db.Foreign_key("orders.id"), nullable=False)
    type=db.column(db.String(50),nullable=False)
    description=db.column(db.String(200))
    observations = db.Column(db.String(200))
    order_detail =db.relationship("OrderDetail", backref= "garment", lazy=True)