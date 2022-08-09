# CSV to JSON 
A lightweight, online CSV to JSON conversion tool

## Usage

Paste the CSV data into the textarea below and click the Convert button.
If the data has two columns, the first column will be used as the key and the second column as the value.
If the data has more than two columns, the first column will be used as the key and the rest of the columns as the value within an array.

### Example

```
key,value
key1,value1
key2,value2
```

Will produce the following JSON:

```
{
  "key1": "value1",
  "key2": "value2"
}
```

### Example with multiple columns

```
key,value1,value2
key1,value11,value12
key2,value21,value22
```

Will produce the following JSON:

```
{
  "key1": [
    "value11",
    "value12"
  ],
  "key2": [
    "value21",
    "value22"
  ]
}
```

A live demo is available [here](https://lewismunday.co.uk/csv2json).
