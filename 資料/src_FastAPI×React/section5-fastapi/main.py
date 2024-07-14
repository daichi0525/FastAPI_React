from fastapi import FastAPI
from pydantic import BaseModel
from typing import Union

app = FastAPI()

fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]


# パスパラメータ
@app.get("/items/{item_id}")
def read_item(item_id: int):
    return fake_items_db[item_id]


# クエリパラメータ
@app.get("/items/")
def read_item(item_id: int):
    return fake_items_db[item_id]


class Person(BaseModel):
    name: str
    age: int
    gender: Union[str, None] = None


@app.post("/person")
def create_person(person: Person):
    return person
