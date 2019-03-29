(function(){    
        if(typeof require !== 'undefined') XLSX = require('xlsx');
        var workbook = XLSX.readFile('test.xlsx');   
        workbook.SheetNames.forEach(function(SheetName){

                var rowObject =XLSX.utils.sheet_to_row_object_array(workbook.Sheets[SheetName]);
                excelJsonObj=rowObject;
            });
            for(var i=0;i<excelJsonObj.length;i++)
            {
                var data=excelJsonObj[i];
                console.log(data)
//                document.getElementById('#myTable tbody:last-child').append("<tr><td>"+data.Donor+"</td><td>"+data.Personalization+"</td><td>"+data.Zone+"</td><tr>");
            }

    })();