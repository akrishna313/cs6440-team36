# Commands

### Login to Application

```json
POST /api/login
```

Body:

```json
{
  "username": "clerk",
  "password": "pass2"
}
```

### Create Vehicle

```json
POST /api/vehicles
```

Body:

```json
{
  "vin": "9999G35765A484905",
  "model_name": "Pilot",
  "manufacturer": "Honda",
  "model_year": 2000,
  "fuel_type": "Gas",
  "mileage": 400000,
  "color": ["Orange", "Black"],
  "description": "Used",
  "condition": "Excellent",
  "type": "SUV"
}
```

### Update Vehicle

```json
PUT /api/vehicle/<VIN>
```

Body:

```json
{
  "vin": "9999G35765A484905",
  "model_name": "Pilot",
  "manufacturer": "Honda",
  "model_year": 2000,
  "fuel_type": "Gas",
  "mileage": 400000,
  "color": ["Red", "Pink"],
  "description": "Used",
  "condition": "Excellent",
  "type": "SUV"
}
```

### Create Vendor

```json
POST /api/vendors
```

Body:

```json
{
  "vendor_name": "Costco",
  "phone_number": 1234567890,
  "street": "1000 E. Main St.",
  "city": "Phoenix",
  "state": "AZ",
  "postal_code": 90000
}
```

### Update Vendor

```json
PUT /api/vendors/<vendor_name>
```

Body:

```json
{
  "vendor_name": "Costco",
  "phone_number": 1234567890,
  "street": "1200 E. Main St.",
  "city": "Phoenix",
  "state": "AZ",
  "postal_code": 90000
}
```

### Create Part

```json
POST /api/part
```

Body:

```json
{
  "vin": "EUNRBUAUCXQ934676",
  "part_number": "B12345",
  "ordinal": "EUNRBUAUCXQ934676-006",
  "quantity": 12,
  "status": "installed",
  "cost": 34.55,
  "description": "Nice ZYZ Product"
}
```

### Update Part Status

```json
PATCH /api/part/status
```

Body:

```js
{
  "vin": "036EG6XGHFJ822528",
  "ordinal": "001",
  "part_number": "BG-BAE0009",
  "quantity": 1,
  "status": "installed", // the new status
  "cost": 1.99,
  "description": "this is a nice part"
}
```

### Create PartOrder

```json
POST /api/partsorder
```

Body:

```json
{
  "vin": "EUNRBUAUCXQ934676",
  "order_number": "006",
  "ordinal": "EUNRBUAUCXQ934676-006",
  "vendor_name": "Donware"
}
```

### Create Customer

```json
POST /api/customer
```

Body:

Individual

```json
{
  "customerid": null,
  "email": "john.doe@example.com",
  "phone_number": "123-456-7890",
  "street": "123 Elm Street",
  "city": "Springfield",
  "state": "Illinois",
  "postal_code": "62704",
  "driver_license_number": "D12345678901234",
  "first_name": "John",
  "last_name": "Doe",
  "tax_id_number": null,
  "business_name": null,
  "title": null
}
```

Business

```json
{
  "customerid": null,
  "email": "contact@businesscorp.com",
  "phone_number": "987-654-3210",
  "street": "456 Oak Avenue",
  "city": "Metropolis",
  "state": "New York",
  "postal_code": "10001",
  "driver_license_number": null,
  "first_name": "Jane",
  "last_name": "Smith",
  "tax_id_number": "T987654321",
  "business_name": "Business Corp",
  "title": "CEO"
}
```

# Queries

### View Vehicle

```json
GET /api/vehicles/<VIN>
```

### View All Vehicles

```json
GET /api/vehicles
```

### View Vehicle Type

```json
GET /api/vehicles/type
```

### View Vehicle Manufacturer

```json
GET /api/vehicles/manufacturer
```

### Get ALL Vendors

```json
GET /api/vendors
```

### Get Vendor by Name

```json
GET /api/vendors/<name>
```

- Note: this endpoint support lower case and matches all names that is in `%name%` format. Useful for typeaheads.

### View Vehicle Details by VIN

```json
GET /api/vehicles/details/<VIN>
```

### Get Parts By VIN

```json
GET /api/part/<VIN>
```

### Get All Parts

```json
GET /api/part
```

### Get PartsOrder by VIN

```json
GET /api/partsorder/<VIN>
```

### Get All PartsOrder

```json
GET /api/partsorder
```

### View Vehicle Search Filters

```json
GET /api/vehicles/searchFilters
```

### Get Inventory Search Query

```json
GET /api/inventory-query/query-results
```
