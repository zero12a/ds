<html>
<head>
    <title>multiselect bug</title>
    <link href="" rel="stylesheet" />
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@nobleclem/jquery-multiselect@2.4.19/jquery.multiselect.min.js"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nobleclem/jquery-multiselect@2.4.19/jquery.multiselect.css" type="text/css" charset="UTF-8">


    <script>
    
$(document).ready(function() {
    $('#tSelect').multiselect({
        columns: 1,
        maxWidth : 200
    });


    tarr = [
        {value:"cd1",name:"nm1"},
        {value:"cd2",name:"nm2"},
        {value:"cd3",name:"nm3"},
        {value:"cd4",name:"nm4"},
        {value:"cd5",name:"nm5"},
        {value:"cd6",name:"nm6"},
        {value:"cd7",name:"nm7"},
        {value:"cd8",name:"nm8"},
        {value:"cd9",name:"nm9"},
        {value:"cd10",name:"nm10"},
    ];

    $('#tSelect').multiselect( 'loadOptions', tarr);
});

</script>
</head>

<body>
<div style="position:relative;width:400px;height:200px;overflow:auto;background-color:silver;padding-left:30px;">
    <span style="float:left;background-color:yellow;">multiselect.js label : </span>
    <div style="position:absolute;float:left;width:200px;left:170px;"><select id="tSelect" multiple ></select></div>
</div>


</body>
</html>