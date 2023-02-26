var body=$response.body;

body=body.replace(/<div class="banners"[\s\S]*?<\/div>/g,'');

$done(body);
