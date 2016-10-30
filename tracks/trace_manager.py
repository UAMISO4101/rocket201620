from pymongo import MongoClient
from django.contrib.gis.geoip2 import GeoIP2
import time
import os
import json


class TraceManager:
    mongo_host = os.environ['MONGO_HOST']
    mongo_port = int(os.environ['MONGO_PORT'])
    client = MongoClient(mongo_host, mongo_port)
    db = client['freeven']

    def top10(self):
        top = self.db.events.aggregate([
            {
                "$group": {
                    "_id": {
                        "track": "$track",
                        "action": "$action",
                    },
                    "count": {"$sum": 1}
                }
            },
            {
                "$sort": {
                    "count": -1
                }
            },
            {
                "$limit": 10
            }
        ])
        return list(top)

    def insert(self, user, track, action, ip):
        g = GeoIP2()

        if ip == '127.0.0.1':
            ip = '72.14.207.99'

        geolocation = g.city(ip)
        self.db.events.insert_one({
            "user": user,
            "track": track,
            "action": action,
            "date": time.strftime("%Y-%m-%d %H:%M"),
            "ip": ip,
            "geolocation": geolocation
        })
