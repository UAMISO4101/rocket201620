from pymongo import MongoClient
from django.contrib.gis.geoip2 import GeoIP2
import time
import os


class TraceManager:
    client = MongoClient(os.environ['MONGO_CONFIG'])
    db = client[os.environ['MONGO_DATABASE']]

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

    def insert(self, user, track, artist, action, ip):
        g = GeoIP2()

        if ip == '127.0.0.1':
            ip = '72.14.207.99'

        geolocation = g.city(ip)
        self.db.events.insert_one({
            "user": user,
            "track": track,
            "artist": artist,
            "action": action,
            "date": time.strftime("%Y-%m-%d %H:%M"),
            "ip": ip,
            "geolocation": geolocation
        })

    def top_artist_played(self):
        top = self.db.events.aggregate([
            {"$match": {"action": "play"}},
            {
                "$group": {
                    "_id": {
                        "artist": "$artist"
                    },
                    "count": {"$sum": 1}
                }
            },
            {
                "$sort": {
                    "count": -1
                }
            }
        ])
        return list(top)
