<html>
<head>

<title>Multiple Select</title>

<link href="https://unpkg.com/multiple-select@1.5.2/dist/multiple-select.min.css" rel="stylesheet">

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://unpkg.com/multiple-select@1.5.2/dist/multiple-select.js"></script>

<style>

</style>
</head>
<body>
비교결과(/d.s/CG/iconmng1ViewTEST.php)<br>
1. multipleselect : 레이퍼 팝오버 안되고 스크롤링 (스크롤생기고, 숨김영역이 원래 오브젝트 바로 하단에 생김)<BR>
2. select2 : 레이어 팝오버 잘됨 (스크롤 영향없음, 숨김영역이 body끝에 저장됨)<BR>
3. selectize : 레이어 팝오버 안되고 스크롤링 (스크롤생기고, 숨김영역이 원래 오브젝트 바로 하단에 생김)<BR>
<div>
      <button id="setSelectsBtn" class="btn btn-secondary">SetSelects</button>
      <button id="getSelectsBtn" class="btn btn-secondary">GetSelects</button>

      <select multiple="multiple" class="multiple-select">

      </select>

<script>
var data1 = [
    {
        text: 'January',
        value: 1
    },
    {
        text: 'February',
        value: 2
    },
    {
        text: 'March',
        value: 3
    },
    {
        text: 'April',
        value: 4
    },
    {
        text: 'May',
        value: 5
    },
    {
        text: 'June',
        value: 6
    },
    {
        text: 'July',
        value: 7
    },
    {
        text: 'August',
        value: 8
    },
    {
        text: 'September',
        value: 9
    },
    {
        text: 'October',
        value: 10
    },
    {
        text: 'November',
        value: 11
    },
    {
        text: 'December',
        value: 12
    }
    ];

$(document).ready(function() {
    var mulObj = $('.multiple-select');
    mulObj.multipleSelect({
        placeholder: 'Select options',
        minimumCountSelected: 3,
        width: 300,
        data: data1
    });

    $('#setSelectsBtn').click(function () {
        mulObj.multipleSelect('setSelects', [1, 3])
    });

    $('#getSelectsBtn').click(function () {
        alert('Selected values: ' + mulObj.multipleSelect('getSelects'));
        alert('Selected texts: ' + mulObj.multipleSelect('getSelects', 'text'));
    });


});

</script>
</body>
</html>