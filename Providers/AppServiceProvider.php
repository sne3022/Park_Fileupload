<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
   
    public function boot()
    {
        //
    }

   
    public function register()
    {
        $this->app->bind(
            'App\Contracts\IFile',
            'App\Services\FileUploadService'
        );//FileUploadService        
    }
}
