<html ng-app="MemberApp">
<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="{{url('bower_components/bootstrap/dist/css/bootstrap.css')}}">
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">  
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<script src="http://code.jquery.com/jquery-latest.js"></script> 
<script type="text/javascript">

</script>
<script>
FileAPI ={
  jsUrl: "{{url('bower_components/ng-file-upload/FileAPI.min.js')}}",
  flashUrl: "{{url('bower-bower_components/ng-file-upload/FileAPI.flash.swf')}}"
}
</script>


<script src="{{url('bower_components/ng-file-upload/ng-file-upload-shim.min.js')}}"></script>
<script src="{{url('bower_components/angular/angular.js')}}"></script> 
<script src="{{url('bower_components/ng-file-upload/ng-file-upload.js')}}"></script>
<script src="{{url('semantic/dist/semantic.min.js')}}"></script>


<script src="{{url('bower_components/angular-route/angular-route.js')}}"></script>
<script src="{{url('bower_components/angular-resource/angular-resource.js')}}"></script>
<script src="{{url('bower_components/angular-animate/angular-animate.js')}}"></script>

<script src="{{url('bower_components/angular-bootstrap/ui-bootstrap-tpls.js')}}"></script>

<script src="{{url('route/route.js')}}"></script>

<style type="text/css">
.bordered{
border:3px solid red;

}

.item
{
  position:relative;
}
</style>

	<title>파일업로드</title>
</head>
<body>
	<img-fileupload src="/uploads/"></img-fileupload>
</body>
</html>