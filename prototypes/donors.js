(function(){
    var app=angular.module('myapp',[]);
    app.controller('mycontroller',['$scope',mycontroller]);
    var excelJsonObj=[];
    function mycontroller($scope)
    {
        $scope.uploadExcl=function(){
        var  myFile=document.getElementById('file');
        var input=myFile;
        var reader=new FileReader();
        reader.onload=(){
                
            var fileData=reader.result;
            var workbook=XLSX.read(fileData,{type:'binary'});
            workbook.SheetNames.forEach(function(SheetName){
function
                var rowObject =XLSX.utils.sheet_to_row_object_array(workbook.Sheets[SheetName]);
                excelJsonObj=rowObject;
            });

            for(var i=0;i<excelJsonObj.length;i++)
            {
                var data=excelJsonObj[i];
                $('#myTable tbody:last-child').append("<tr><td>"+data.Donor+"</td><td>"+data.Personalization+"</td><td>"+data.Zone+"</td><tr>");
            }
        };
        reader.readAsBinaryString(input.files[0]);
        }; 
    }

})();