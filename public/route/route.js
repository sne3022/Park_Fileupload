var testApp = angular.module("MemberApp", ["ngRoute", "moduleDirective", "AdminService", "ui.bootstrap"]);

testApp.constant("baseUrl", "/Park_Fileupload/public/");

/*angular.modle -> 모듈을 생성. 
testApp -> 앞으로 만들 모듈명.
[등록된 다른 목록을 끌어오는것.]
*/

/* config -> 환경설정. routeProvide */
testApp.config(['$routeProvider', "baseUrl", routeProvide]);

function routeProvide($routeProvider, baseUrl)
{
    
}

/* service.js start*/

var adminService = angular.module("AdminService", ["ngResource"]);
/* 모듈명은 fileService 를 사용할수 있는 이유는 서비스에 등록 되어있어서.*/
/* 통합 서비스로 가능 */

adminService.constant('baseUrl','/Park_Fileupload/public/');

adminService.$inject=["$resource","baseUrl"];

adminService.factory('uploadfactory', function($resource, baseUrl){
    var resource = $resource(baseUrl+'upload/:id', {id:'@id'}, 
        {update : {method:'PUT'}
        }
    );
    return resource;  //module/:id 에서 id 의 값에 따라  @id의 값이 결정된다.
});

/* service.js end*/




/* directive start */

/*파일 업로드 */
/* controller.controller 선택적 */
/* link 디렉티브 내부에서 사용 */
/* transclude 내부의 영향을 받지 않음, 오로지 외부 에서 */
/* baseUrl : 외부 url 참조 */
/* 디렉티브 이벤트 추가 예제 */
/* restrict: 'E' only matches element name */
/*View 에서 변화에 의한 반응이 아닐때 apply를 적용한다. (ex 텍스트는 키에 의한 변화이므로 apply가 자동 적용된다.)*/
var moduleDirective = angular.module("moduleDirective", ['ngFileUpload']);
moduleDirective.$inject = ["$element", "baseUrl", "Upload", "$document", "uploadfactory"];
moduleDirective.$inject = ["member"];

moduleDirective.directive('imgFileupload', function(Upload, baseUrl, uploadfactory, $document){
    return{
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: baseUrl+'template/directive/imgfileupload.html',
        link: function(scope, element, attr){  //공유 불가능
            scope.imgArrayList = [];
            scope.selectiveImg = [];
            scope.filesavePath = attr.src;
            var choiceMode = false; 
            
            $('.ui.accordion').accordion();

            scope.fileselect = function(file)
            {
                
                if(file && !file.$error)
                {
                    
                    file.upload = Upload.upload({
                        url: baseUrl+"test/upload",
                        method: 'POST',
                        file:file,
                        fileFormDataName:"fileName",
                        fields: {
                            'filepath':scope.filesavePath
                        }
                    }).
                    then(function(response) {
                        response
                        $(".progress").css("display","block");
                        $(".bar").animate({width: "100%"},1000, function(){
                                $(".bar").css("width", "1%");
                                 $(".progress").css("display","none");
                        });
                        setTimeout(function(){
                            var newfile = {};
                            var path = response.data.file_path+"/"+response.data.file_name; 
                            newfile.src=baseUrl+"../"+path;
                            newfile.number=response.data.file_idx;

                            scope.imgArrayList.push(newfile);
                            scope.$apply();

                        },1000);
                       
                    });
                } 
            }

            scope.checkedmodule =function(img)
            {
                if(choiceMode) //타이틀 이미지 클릭했을때
                {
                    for(index in scope.imgArrayList)
                    {
                        scope.imgArrayList[index].titleImage = false;
                    }
                    img.titleImage=true;
                    choiceModeEnd();
                }
                else //타이틀 이미지 클릭 안했을때
                {
                    if(img.checkValue ==true) //체크 안되어있을때
                    {   
                        img.delete = true;
                    }
                    else
                    {   
                        img.delete = false;
                    }   
                }

           

            }

            scope.delete = function(){ //삭제 함수
                alert("삭제");
                scope.imgArrayList = $.grep(scope.imgArrayList, function(value){
                    if(value.delete)
                    {
                        uploadfactory.delete({id:value.number});

                    }else
                    {
                        return true;
                    }
                })
            }

            scope.checkedImage = function(img, event){ //이미지 클릭 ->체크박스 클릭
                setTimeout(function(){ 
                    $(event.currentTarget).parent().find("input[type=checkbox]").trigger("click"); //강제로 이벤트 클릭
                },100);
            }

            scope.titleImage = function(){ //타이틀 이미지 클릭
                choiceMode = true; 
                $(".contentImg").popup({
                    on: "manuel"
                });
                $(".contentImg").popup("show");

                $document.on("mousedown",function(event){
                    setTimeout(function(){
                        choiceModeEnd();    
                    },5000); //5초후
                });
            }

            function choiceModeEnd() 
            {
                $document.off("mousedown"); //document.off 는 문서에 마우스다운 이벤트를 제거.
                choiceMode=false; //선택모드 false
                $(".contentImg").popup("hide"); //팝업 숨김
            }
            
            scope.hoverImage = function(event){ 
                if(choiceMode){ //선택모드 일때
                $(event.currentTarget).addClass("bordered");
                }
            }

            scope.outImage = function(event){
             $(event.currentTarget).removeClass("bordered");
            }

        }//link end
    }//return end
})//directive end



/* directive end */

