from app.database.db import db

class OrderDetail(db.Model):
    __tablename__ = "order_detail"

    id = db.column(db.Integer, primary_key = True)
    garment_id = db.Column(db.Integer, db.Foreign_key("gargments.id"), nullable=False)
    service_id = db.Column(db.Integer, db.Foreign_key("services.id"), nullable=False)
    quantity = db.Column(db.Integer,nullable= False)
    