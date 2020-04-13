<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactEmailRequest;
use App\Mail\ContactEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class PublicController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        //..
    }

    public function contactEmail(ContactEmailRequest $request)
    {
        $postData = $request->validated();
        Mail::to(config('app.myEmail'))->send(new ContactEmail($postData));
    }
}
