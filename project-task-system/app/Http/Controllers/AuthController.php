<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signupView() {
        return inertia('auth/signup');
    }

    public function signup(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user = User::create($validated);
        Auth::login($user);

        return response()->json([
            'message' => 'Account created successfully!',
            'user' => $user,
        ]);
    }
}
