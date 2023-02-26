var body=$response.body;

body=body.replace(/<div class="card-body text-cool"[\s\S]*?<\/div>/g,'');

$done(body);