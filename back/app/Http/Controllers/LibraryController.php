<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Library;

class LibraryController extends Controller
{
    //
    public function create_library(Request $request)
    {
        $library = new Library();
        $library->name = $request->name;
        $library->save();
        return response()->json($library);
    }
}
