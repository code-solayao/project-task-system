<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/laravel', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('laravel');

Route::get('/laravel-dashboard', function () {
    return Inertia::render('laravel-dashboard');
})->middleware(['auth', 'verified'])->name('laravel_dashboard');

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::controller(AuthController::class)->group(function () {
    Route::get('/signup', 'signupView')->name('signup.view');
    Route::post('/signup', 'signup')->name('signup');
});

Route::controller(HomeController::class)->middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', 'dashboard')->name('dashboard');
});

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::inertia('dashboard', 'dashboard')->name('dashboard');
// });

require __DIR__.'/settings.php';
