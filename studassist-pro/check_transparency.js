const fs = require('fs');
const http = require('http');

const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: red; }
    img { border: 1px solid black; background: blue; }
  </style>
</head>
<body>
  <img src="http://localhost:5173/hero-5-fixed.png" />
</body>
</html>
`;

fs.writeFileSync('test.html', html);
