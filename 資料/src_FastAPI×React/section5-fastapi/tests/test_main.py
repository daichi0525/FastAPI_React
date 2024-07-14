from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_items():
    item_id = 1
    response = client.get("/items/" + str(item_id))
    assert response.status_code == 200
    assert response.json() == {"item_name": "Bar"}


def test_items_2():
    item_id = 1
    response = client.get("/items/?item_id=" + str(item_id))
    assert response.status_code == 200
    assert response.json() == {"item_name": "Bar"}


def test_create_person():
    body = {"name": "Mike", "age": 30, "gender": "male"}
    response = client.post("/person", json=body)
    assert response.status_code == 200
    assert response.json() == body
