<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Empleo;

class EmpleoController extends Controller
{
    public function mostrar(Request $request)
    {
        if($request->ajax()){
            return Empleo::all();
        }else{
            return view('welcome');
        }
    }

    public function listarId($id)
    {
        return response()->json([
            'success'=>true,
            'message'=>'string',
            'data'=>Empleo::find($id)
          ]);
    }
}
