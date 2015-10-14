# Park_Fileupload

AngularJS 설치<br><br>
1.자신의 프로젝트 폴더 Public 에 들어간다.<br>
2. cmd 실행후 명령어 -> bower install (Y) 설치한다.<br>
   angular.js에 10628 line 에 가서<br> 
   startsymbol = '<%'<br>
   endsymbol = '%>'<br>
   변경한다. <br>
이유: laravel 과 겹치기때문에.<br>
3. bower install bootstrap 설치한다.<br>

설치 후 public 에 bower_components가 설치된 것을 확인할 수 있다. <br><br>


FileuploadJS 를 설치 <br><br>
public angular-file-upload 설치하기.<br>
1.자신의 프로젝트 폴더 Public 에 들어간다.<br>
2. cmd 실행후 명령어 -> bower install ng-file-upload --save 설치한다. <br>  

설치 후 public 에 bower_components가 설치된 것을 확인할 수 있다. <br>

다운로드를 완료하였다면 다음과 같이 스크립트 태그를 적용할 HTML 파일을 추가한다.<br>
참고 사이트:<br> 
http://webframeworks.kr/tutorials/angularjs/angularjs_fileupload/ <br>
https://github.com/danialfarid/ng-file-upload#install <br><br>



Contracts 와 Service 구현 및 연결<br>

Project->App->Contracts <br>
:IFile.php 생성 <br>

Project->App->Service<br>
:FileUploadService.php 생성 <br>

Project->App->Providers <br>
:AppServiceProvider.php  <br>
 public function register() <br>
 { <br>
  내용 추가. <br>
 } <br><br>


DB 테이블 생성<br><br>
Project->App->Models <br>
:fileupload.php 생성<br><br>


Controller 생성<br><br>
1. UploadController 와 ModuleController 생성.<br>
2. Route 연결 시켜줄것.<br><br>


VIEW 생성 <br><br>
1. resources->view->upload <br>
   fileupload.blade.php 생성 <br>


Route, Directvie  <br> <br>
public-> template-> directive <br>
:imgfileupload.html 생성 <br>

public-> route <br>
:route.js 생성<br> <br>


마지막으로 실행하기전에 자기프로젝트 이름에 맞게 설정해주어야한다. <br>
route.js 에 들어가서  <br>
testApp.constant("baseUrl", "/프로젝트이름/public/"); <br>
프로젝트이름을 변경한다.  <br> <br> 












