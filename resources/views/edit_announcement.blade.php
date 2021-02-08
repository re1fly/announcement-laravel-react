<html>
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{asset('css/app.css')}}" rel="stylesheet"><link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <script src="https://cdn.tiny.cloud/1/ot65hmw48i01kedcx33fd4nmbqssc98qb9tzj7gnmwszjo2a/tinymce/4/tinymce.min.js" referrerpolicy="origin"></script>
    <script src="https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js"></script>
    <title>Announcement Dashboard</title>
</head>
<body>
<div id ="app"></div>
<script src ="{{ asset('js/app.js') }}" ></script>
</body>
</html>
