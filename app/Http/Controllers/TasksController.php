<?php

namespace App\Http\Controllers;

use App\Models\tasks as Tasks;
use Illuminate\Http\Request;
use App\Http\Resources\TaskResources;

class TasksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $tasks = Tasks::with('categories')->get();
        return TaskResources::collection($tasks);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $task = tasks::create($request->toArray());
        return response()->json([
            'success' => $task ? true : false,
            'data' => $task
        ], 200);
    }

    

  

    public function update(Request $request, $id)
    { 

        $task = tasks::findorfail($id);
        $task->update($request->all());
        return response()->json([
            'success' => $task ? true : false,
            'data' => $task
        ], 200);
    }

    public function destroy(tasks $tasks)
    {
        //
    }
}
