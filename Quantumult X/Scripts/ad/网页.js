var url=$request.url;
var body=$response.body;

switch(true)
{
case url.includes("url"):
     body=body.relpace(//g,'');
}

$done(body);
