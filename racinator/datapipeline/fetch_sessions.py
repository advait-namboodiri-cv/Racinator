import json
import urllib.request

URL = "https://api.openf1.org/v1/sessions?year=2025"
def fetch_data(url: str):
    with urllib.request.urlopen(url) as response:
        data = json.loads(response.read().decode("utf-8"))
    return data

