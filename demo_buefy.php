<!DOCTYPE html>
<html>
<head>
    <title>buefy</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">

    <link rel="stylesheet" href="https://unpkg.com/buefy/dist/buefy.min.css">
    <style>
    .table > thead > tr{
        height: 30px;
        line-height: 30px;
        overflow: hidden;
    }

    .table > thead > tr > th{
        height: 30px;
        line-height: 30px;
        overflow: hidden;
    }

    .headerClass{
        height: 30px;
        overflow: hidden;
    }

    </style>
</head>

<body>1
<div id="app" class="container">
    
    <b-table
    height="300px"
    :data="data"
    :columns="columns"
    :checked-rows.sync="checkedRows"
    :is-row-checkable="(row) => row.id !== 3 && row.id !== 4"
    checkable
    :narrowed="isNarrowed"
    hoverable
    :bordered="isBordered"
    :selected.sync="selected"
    :striped="isStriped"
    :sticky-header="stickyHeaders"
    :checkbox-position="checkboxPosition">
    <template slot="bottom-left">
    <b>Total checked</b>: {{ checkedRows.length }}
    </template>
    </b-table>

</div>
    
    
    2
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js"></script>
    <!-- Full bundle -->
    <script src="https://unpkg.com/buefy/dist/buefy.min.js"></script>


    <script>
    const example = {
    data() {
        const data = [
            { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
            { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
            { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
            { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
            { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' },
            { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
            { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
            { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
            { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
            { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
        ]

        return {
            data,
            checkboxPosition: 'left',
            checkedRows: [data[1], data[3]],
            stickyHeaders: true,
            isNarrowed: true,
            isBordered: false,
            isStriped: true,
            selected: null,
            columns: [
                {
                    field: 'id',
                    label: 'ID',
                    width: '140',
                    numeric: true,
                    sticky: true,
                    sortable: true,
                },
                {
                    field: 'first_name',
                    label: 'First Name',
                    width: '140',
                    sortable: true
                },
                {
                    field: 'last_name',
                    label: 'Last Name',
                    width: '140',
                    sortable: true
                },
                {
                    field: 'date',
                    label: 'Date',
                    centered: true,
                    sortable: true
                },
                {
                    field: 'gender',
                    label: 'Gender',
                    sortable: true
                },
                {
                    field: 'gender2',
                    label: 'Gender2',
                    sortable: true
                },
                {
                    field: 'gender3',
                    label: 'Gender3',
                    sortable: true
                },
                {
                    field: 'gender4',
                    label: 'Gender4',
                    sortable: true
                },
                {
                    field: 'gender5',
                    label: 'Gender5',
                    sortable: true
                },
                {
                    field: 'gender6',
                    label: 'Gender6',
                    sortable: true
                },
                {
                    field: 'gender7',
                    label: 'Gender8',
                    sortable: true
                },
                {
                    field: 'gender8',
                    label: 'Gender8',
                    sortable: true
                }
            ]
        }
    }
}

            const app = new Vue(example)
            app.$mount('#app')
        
        
    </script>
</body>
</html>