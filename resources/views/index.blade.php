@extends('layouts.app')

@section('content')
    <div id="app">
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>

        <br>
        <router-view></router-view>

    </div>

@endsection
