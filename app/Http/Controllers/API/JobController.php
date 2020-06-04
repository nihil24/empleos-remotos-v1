<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Empleo;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $empleos = Empleo::all();

        if (!$empleos) {
            response()->json([
                'message' => 'Page Not Found'
            ]);
        } 
        response()->json([
            'success'=>true,
            'status'=>200,
            'data'=> $empleos
        ]);

        return $empleos;
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $empleo = Empleo::find($id);
        

        if (!$id) {
            response()->json([
                'message' => 'Not Found',
                'status'=>404
            ]);
        } 

        response()->json([
            'success'=>true,
            'message'=>'string',
            'data'=>Empleo::find($id)
        ]);
        
        return $empleo;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
