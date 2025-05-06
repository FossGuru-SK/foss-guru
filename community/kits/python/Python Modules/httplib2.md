---
id: httplib2
title: Python Httplib2
description: 'Python httplib2 module provides methods for accessing Web resources via HTTP GET and POST requests, authentication, caching, redirects, and compression.'
sidebar_position: 3
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🛸 The Hitchhiker's Guide to `httplib2` in Python 🐍🌐

Welcome, fellow Earthling developer, to the whimsical world of `httplib2` – your trusty HTTP sidekick in Python. Whether you're shaking hands with servers, poking around web pages, or charming APIs with POST requests, `httplib2` is here to help (with fewer explosions than intergalactic travel)!

---

## 🚦 A Quick Nginx Status Check

Before we dive in, let’s make sure our local web spaceship (aka `nginx`) is up and flying:

```bash
$ service nginx status
 * nginx is running
```

Awesome! Nginx is alive. Some of our demos will talk to PHP scripts running on this local server. It's like chatting with your neighbor through tin cans (but techier).

---

## 📚 Table of Awesomeness

1. Check `httplib2` Library Version
2. Read a Web Page like a Pro
3. Fire a HEAD Request 🔫
4. GET Some Data
5. POST Like a Rockstar
6. Customize User Agent (Tell 'em who you are!)
7. Credentials? We've got you covered.

---

## 1. 🕵️ Check `httplib2` Version – AKA, Know Thy Tools

```python
#!/usr/bin/python3

import httplib2

print(httplib2.__version__)
print(httplib2.__copyright__)
print(httplib2.__doc__)
```

🖨️ Output:

```python
0.8
Copyright 2006, Joe Gregorio

httplib2

A caching http interface that supports ETags and gzip
to conserve bandwidth.
```

So clean. So meta. So… HTTP.

---

## 2. 📰 Read a Web Page (Like It's 1999)

```python
#!/usr/bin/python3

import httplib2

http = httplib2.Http()
content = http.request("http://www.something.com")[1]

print(content.decode())
```

🖨️ Output:

```html
<html><head><title>Something.</title></head>
<body>Something.</body>
</html>
```

Yes, the HTML is basic, but it works! Baby steps, young padawan.

---

## 3. ✂️ Strip Those HTML Tags

```python
#!/usr/bin/python3

import httplib2
import re

http = httplib2.Http()
content = http.request("http://www.something.com")[1]

stripped = re.sub('<[^<]+?>', '', content.decode())
print(stripped)
```

🖨️ Output:

```python
Something.
Something.
```

No tags, no worries. This is the minimalist lifestyle your content dreams of.

---

## 4. ✅ Check HTTP Status Like a Bouncer at a Nightclub

```python
#!/usr/bin/python3

import httplib2

http = httplib2.Http()

resp = http.request("http://www.something.com")[0]
print(resp.status)

resp = http.request("http://www.something.com/news/")[0]
print(resp.status)
```

🖨️ Output:

```python
200
404
```

One's good, one’s bad. 200 means “All good here,” 404 means “That page left the party.”

---

## 5. 🧠 Use HEAD Method – Just the Headers, Please

```python
#!/usr/bin/python3

import httplib2

http = httplib2.Http()

resp = http.request("http://www.something.com", "HEAD")[0]

print("Server: " + resp['server'])
print("Last modified: " + resp['last-modified'])
print("Content type: " + resp['content-type'])
print("Content length: " + resp['content-length'])
```

🖨️ Output:

```python
Server: Apache/2.4.12
Last modified: Mon, 25 Oct 1999
Content type: text/html
Content length: 72
```

It’s like checking a book’s back cover before reading it. Smart move.

---

## 6. 🧃 GET That Data (Literally)

`greet.php` on server:

```php
<?php
echo "Hello " . htmlspecialchars($_GET['name']);
?>
```

Python GET request:

```python
#!/usr/bin/python3

import httplib2

http = httplib2.Http()
content = http.request("http://localhost/greet.php?name=Peter", method="GET")[1]

print(content.decode())
```

🖨️ Output:

```python
Hello Peter
```

✅ This is how you charm your server with a GET. Smooth!

---

## 7. 📦 POST Like a Boss

`target.php`:

```php
<?php
echo "Hello " . htmlspecialchars($_POST['name']);
?>
```

Python POST request:

```python
#!/usr/bin/python3

import httplib2
import urllib

http = httplib2.Http()

body = {'name': 'Peter'}

content = http.request("http://localhost/target.php", 
                       method="POST", 
                       headers={'Content-type': 'application/x-www-form-urlencoded'},
                       body=urllib.parse.urlencode(body))[1]

print(content.decode())
```

🖨️ Output:

```python
Hello Peter
```

👏 POST – for when GET just won’t cut it.

---

## 8. 🕵️‍♂️ Who Are You? Set the User Agent

`agent.php`:

```php
<?php 
echo $_SERVER['HTTP_USER_AGENT'];
?>
```

Python script:

```python
#!/usr/bin/python3

import httplib2

http = httplib2.Http()
content = http.request("http://localhost/agent.php", method="GET", 
                       headers={'user-agent': 'Python script'})[1]

print(content.decode())
```

🖨️ Output:

```python
Python script
```

🕶️ Identify yourself with pride!

---

## 9. 🔐 Basic Authentication – Password, Please

### Step 1: Create a user

```bash
sudo htpasswd -c /etc/nginx/.htpasswd user7
```

### Step 2: Configure nginx

```nginx
location /secure {
    auth_basic "Restricted Area";
    auth_basic_user_file /etc/nginx/.htpasswd;
}
```

### Step 3: Python script with creds

```python
#!/usr/bin/python3

import httplib2

user = 'user7'
passwd = '7user'

http = httplib2.Http()
http.add_credentials(user, passwd)
content = http.request("http://localhost/secure/")[1]

print(content.decode())
```

🖨️ Output:

```html
<p>
This is a secure page.
</p>
```

✅ Access granted! You may now view the secret scrolls (or pages).

---

## 🎉 Wrapping Up

We’ve learned how to:

- Whisper sweet GETs to a server
- Sling headers like a boss
- Post data like a caffeinated intern
- Pass through security with credentials

All thanks to the mighty `httplib2`.

Crafted with bytes & love by **Jan Bodnar** (via ZetCode.com) and sprinkled with fun by ChatGPT 🤖✨

---

Now go forth and HTTP like a hero! 🚀
