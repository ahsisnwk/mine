let url=$request.url;
let body=$response.body;

switch(true)
{
case url.includes("zxcs.me/post"):
     body=body.replace(/<div id="vote"[\s\S]*?<\/div>/g,'');
     body=body.replace(/<p class="yinyong".*?<\/p>/g,'');
     break;

case url.includes("zxcs.me/download"):
     body=body.replace(/<div class="(diybanner|banner)".*?<\/div>/g,'');
     break;
}
$done(body);
