import os
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://test-data-pm.preview.emergentagent.com").rstrip("/")


def test_root_hello_world():
    r = requests.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    data = r.json()
    assert data.get("message") == "Hello World"


def test_status_create_and_get():
    payload = {"client_name": "TEST_pytest_client"}
    r = requests.post(f"{BASE_URL}/api/status", json=payload)
    assert r.status_code == 200
    obj = r.json()
    assert obj["client_name"] == "TEST_pytest_client"
    assert "id" in obj and "timestamp" in obj

    g = requests.get(f"{BASE_URL}/api/status")
    assert g.status_code == 200
    assert any(c["client_name"] == "TEST_pytest_client" for c in g.json())
