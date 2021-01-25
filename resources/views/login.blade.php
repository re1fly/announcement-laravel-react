<html>
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" type="text/css" href={{ asset("css/atom.css") }}>
        <link rel="stylesheet" type="text/css" href={{ asset("css/loginAdmin.css") }}>
    </head>
    <body>
        <div id ="app"></div>
        <script src ="{{ asset('js/app.js') }}" ></script>
    </body>
</html>
