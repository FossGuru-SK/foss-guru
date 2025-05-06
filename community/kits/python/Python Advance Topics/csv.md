---
id: csv
title: Python CSV Module
description: 'Learn to work with CSV files in Python. Python language contains the csv module which has classes to read and write data in the CSV format.'
sidebar_position: 1
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🐍 CSV Shenanigans in Python: A Fun-Filled Dive Into Data

The CSV (Comma Separated Values) format is like the fast food of data storage—simple, cheap, and almost everywhere! Used by spreadsheets, databases, and your nosy co-worker who insists on using Excel for *everything*, CSVs are a go-to format.

Python, our trusty data-slinging sidekick, comes equipped with the `csv` module to make our CSV-crunching adventures a breeze.

In this magical rollercoaster, we’ll explore:

- `csv.reader()` (the eavesdropper of CSV rows)
- `csv.writer()` (the gossip writer)
- `csv.DictReader()` (the nosy neighbor who knows all the names)
- `csv.DictWriter()` (the formal correspondent)

We'll also jazz things up with custom delimiters and dialects. So, grab a cup of coffee (or tea or Red Bull), and let’s CSV like pros!

---

## 👩‍👩‍👧‍👦 Our Guinea Pig: person.csv

Behold! A humble CSV containing details of four fabulous humans:

```python
Name,Age,City,Occupation,Email
Alice,29,New York,Engineer,alice@example.com
Bob,35,Los Angeles,Doctor,bob@example.com
Charlie,45,Chicago,Teacher,charlie@example.com
Diana,32,Miami,Artist,diana@example.com
```

---

## 🧐 1. Reading a CSV File

### 1.1. Using `csv.reader()` – The “Just Read It!” Method

Let’s read the file row by row like a digital archaeologist uncovering ancient secrets (but with less sand).

```python
import csv

file_path = 'person.csv'

with open(file_path, mode='r', newline='', encoding='utf-8') as file:
  reader = csv.reader(file)
  for row in reader:
    print(row)
```

**Output:**

```python
['Name', 'Age', 'City', 'Occupation', 'Email']
['Alice', '29', 'New York', 'Engineer', 'alice@example.com']
['Bob', '35', 'Los Angeles', 'Doctor', 'bob@example.com']
['Charlie', '45', 'Chicago', 'Teacher', 'charlie@example.com']
['Diana', '32', 'Miami', 'Artist', 'diana@example.com']
```

---

### 1.2. Using `csv.DictReader()` – For Those Who Love Labels

Why settle for anonymous lists when you can have glorious **dictionaries**?

```python
import csv

file_path = 'person.csv'

data_dict_read = []
with open(file_path, mode='r', newline='', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    for row in reader:
        data_dict_read.append(row)
        print(row)
```

**Output (now with 100% more keys!):**

```python
{'Name': 'Alice', 'Age': '29', 'City': 'New York', 'Occupation': 'Engineer', 'Email': 'alice@example.com'}
{'Name': 'Bob', 'Age': '35', 'City': 'Los Angeles', 'Occupation': 'Doctor', 'Email': 'bob@example.com'}
{'Name': 'Charlie', 'Age': '45', 'City': 'Chicago', 'Occupation': 'Teacher', 'Email': 'charlie@example.com'}
{'Name': 'Diana', 'Age': '32', 'City': 'Miami', 'Occupation': 'Artist', 'Email': 'diana@example.com'}
```

---

## ✍️ 2. Writing a CSV File

### 2.1. Using `csv.writer()` – CSV Matchmaker

Let’s write data like we’re sending a letter to a pen pal who only speaks Excel.

```python
import csv

data = [
  ['Name', 'Age', 'City', 'Occupation', 'Email'],
  ['Alice', 29, 'New York', 'Engineer', 'alice@example.com'],
  ['Bob', 35, 'Los Angeles', 'Doctor', 'bob@example.com'],
  ['Charlie', 45, 'Chicago', 'Teacher', 'charlie@example.com'],
  ['Diana', 32, 'Miami', 'Artist', 'diana@example.com']
]

file_path = 'person_new.csv'

with open(file_path, mode='w', newline='', encoding='utf-8') as file:
  writer = csv.writer(file)
  writer.writerows(data)
```

**Creates: `person_new.csv`**

---

### 2.2. Using `csv.DictWriter()` – A Letter from One Dict to Another

Feeling fancy? Write your dictionaries directly and keep those column headers intact!

```python
import csv

data_dicts = [
  {'Name': 'Alice', 'Age': 29, 'City': 'New York', 'Occupation': 'Engineer', 'Email': 'alice@example.com'},
  {'Name': 'Bob', 'Age': 35, 'City': 'Los Angeles', 'Occupation': 'Doctor', 'Email': 'bob@example.com'},
  {'Name': 'Charlie', 'Age': 45, 'City': 'Chicago', 'Occupation': 'Teacher', 'Email': 'charlie@example.com'},
  {'Name': 'Diana', 'Age': 32, 'City': 'Miami', 'Occupation': 'Artist', 'Email': 'diana@example.com'}
]

file_path_dict_writer = 'person_dict_written.csv'

with open(file_path_dict_writer, mode='w', newline='', encoding='utf-8') as file:
  fieldnames = ['Name', 'Age', 'City', 'Occupation', 'Email']
  writer = csv.DictWriter(file, fieldnames=fieldnames)

  writer.writeheader()
  for row in data_dicts:
    writer.writerow(row)
```

---

## 🔧 3. Custom Delimiters and Quote Characters

Some CSVs are extra. Like using `|` for quotes and `\t` for tabs.

Here’s one:

```python
|Name| |Age| |City| |Occupation| |Email|
|Alice| |29| |New York| |Engineer| |alice@example.com|
```

Read it like a boss:

```python
import csv

with open('example.tsv', mode='r') as file:
    reader = csv.reader(file, delimiter='\t', quotechar='|')
    for row in reader:
        print(row)
```

---

### 🎯 Quoting Modes

Four flavors of quoting:

- `QUOTE_ALL`: Quote everything! (very dramatic)
- `QUOTE_MINIMAL`: Only quote the spicy bits (default)
- `QUOTE_NONNUMERIC`: Keep numbers naked
- `QUOTE_NONE`: Raw and unfiltered

```python
import csv

f = open('person_data_new.tsv', 'w')

with f:
    writer = csv.writer(f, quoting=csv.QUOTE_NONNUMERIC)
    writer.writerows((["coins", 3], ["pens", 2], ["bottles", 7]))
```

Output:

```python
"coins",3
"pens",2
"bottles",7
```

---

## 🌍 4. CSV Dialects – Different Accents for the Same Language

Let’s list CSV dialects like a linguist at a data convention:

```python
import csv

names = csv.list_dialects()

for name in names:
    print(name)
    dialect = csv.get_dialect(name)
    print(repr(dialect.delimiter), end=" ")
    print(dialect.doublequote, end=" ")
    print(dialect.escapechar, end=" ")
    print(repr(dialect.lineterminator), end=" ")
    print(dialect.quotechar, end=" ")
    print(dialect.quoting, end=" ")
    print(dialect.skipinitialspace, end=" ")
    print(dialect.strict)
```

Output:

```python
excel
',' True None '\r\n' " 0 False False
excel-tab
'\t' True None '\r\n' " 0 False False
unix
',' True None '\n' " 1 False False
```

---

## 🛠️ 5. Creating Your Own CSV Dialect

Because sometimes… you just want a `#` instead of a `,`.

```python
import csv

csv.register_dialect("hashes", delimiter="#")

f = open('items3.csv', 'w')

with f:
    writer = csv.writer(f, dialect="hashes")
    writer.writerow(("pencils", 2))
    writer.writerow(("plates", 1))
    writer.writerow(("books", 4))
```

Output:

```python
pencils#2
plates#1
books#4
```

---

## 🎉 6. Conclusion

We’ve adventured through the mystical lands of `csv.reader()`, `DictReader()`, `writer()`, `DictWriter()`, and even played with weird quote characters and dialects.

CSV may seem like a humble format, but in the right hands (like yours!), it’s a powerful tool.

Now go forth and tame those spreadsheets like the Pythonic warrior you are.

**Happy CSV-ing!** 🐍📄
