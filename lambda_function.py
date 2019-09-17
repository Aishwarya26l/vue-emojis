import json
"""
  This function assumes that index.html will try to load main.js
  from ?file=main.js. You can modify your index.html script tag to be: 
  <script src="?file=main.js"></script>
"""
def lambda_handler(event, context):
    file = ""
    qsp = event.get("queryStringParameters",{})
    if qsp: 
        file = qsp.get("file","")
    
    if file=="main.js":
        mainPage = None
        with open('main.js', 'r') as f:
            mainPage = f.read()  
        
        result = {
            "statusCode": 200,
            "headers": {
                'Content-Type': 'text/javascript;charset=UTF-8',
            },
            "body": mainPage
        }
    else:
        indexPage = None
        with open('index.html', 'r') as f:
            indexPage = f.read()   
        
        result = {
            "statusCode": 200,
            "headers": {
            'Content-Type': 'text/html',
            },
            "body": indexPage
        }
    return result
