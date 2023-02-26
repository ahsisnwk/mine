var body=$response.body;

body=body.replace(/<!-- adb -->[\s\S]*(?=<script>[\s\S]*?var _hmt)/g,'');

$done(body);
