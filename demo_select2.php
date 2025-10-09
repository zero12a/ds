<html>
<head>

<title>select2</title>
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet" />

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>


<style>


</style>

<script>
var data1 = [
    { id : 1 ,text : '수요계획'	},
    { id : 2 ,text : 'RTF'	},
    { id : 3 ,text : '과부족'	},
    { id : 4 ,text : '생산계획'	},
    { id : 5 ,text : '재고'	},
    { id : 6 ,text : '재고율'	},
    { id : 7 ,text : '생산요청량'	},
    { id : 11 ,text : '2수요계획'	},
    { id : 12 ,text : '2RTF'	},
    { id : 13 ,text : '2과부족'	},
    { id : 14 ,text : '2생산계획'	},
    { id : 15 ,text : '2재고'	},
    { id : 16 ,text : '2재고율'	},
    { id : 17 ,text : '2생산요청량'	},
    { id : 21 ,text : '3수요계획'	},
    { id : 22 ,text : '3RTF'	},
    { id : 23 ,text : '3과부족'	},
    { id : 24 ,text : '3생산계획'	},
    { id : 25 ,text : '3재고'	},
    { id : 26 ,text : '3재고율'	},
    { id : 27 ,text : '3생산요청량'	}
];

var mulObj = null;
$(document).ready(function() {
    mulObj = $('.js-example-basic-single').select2({
        placeholder: "Select an option",
        closeOnSelect: false,
        width: 300,
        data: data1,
        allowClear: true,
        tags: true,//문자열 트루?
    });

    $('#setSelectsBtn').click(function () {
        mulObj.val([1, 3]).trigger("change");
    });

    $('#getSelectsBtn').click(function () {
        //alert(1);
        //alog(mulObj.select2('data')); //full selected data [{id,text},{}]
        alog(mulObj.val());
    });
    $('#clearAll').click(function () {
        //alert(1);
        mulObj.val([]).trigger('change');
    });


});
function alog(t){
    if(console)console.log(t);
}
</script>
</head>
<body>
<div>
    비교결과(/d.s/CG/iconmng1ViewTEST.php)<br>
    1. multipleselect : 레이퍼 팝오버 안되고 스크롤링 (스크롤생기고, 숨김영역이 원래 오브젝트 바로 하단에 생김)<BR>
    2. select2 : 레이어 팝오버 잘됨 (스크롤 영향없음, 숨김영역이 body끝에 저장됨)<BR>
    3. selectize : 레이어 팝오버 안되고 스크롤링 (스크롤생기고, 숨김영역이 원래 오브젝트 바로 하단에 생김)<BR>
    <button id="setSelectsBtn" class="btn btn-secondary">SetSelects</button>
    <button id="getSelectsBtn" class="btn btn-secondary">GetSelects</button>
    <button id="clearAll" class="btn btn-secondary">clearAll</button>

    <select id="mySelect2" class="js-example-basic-single" name="state" multiple="multiple">
    </select>
</div>
</body>
</html>