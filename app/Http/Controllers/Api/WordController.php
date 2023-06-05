<?php

namespace App\Http\Controllers\Api;

use App\Models\Word;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;



class WordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $words1 = Word::select("id","word AS Word","meaning AS Correct_Answer","answer1 AS Answer_1","answer2 AS Answer_2")
                        // ->where('id_user',Auth::id())
                        ->get();

        for($i = 0 ; $i <= Word::count();$i++){
            foreach($words1 as $words)
            {
                $CorrectAnswer = $words->Correct_Answer;
                //Random Value from DataBase And Checked If The Correct Answer Exist Between Them 
                do{
                    //Get Random Value Limited In Three Value
                    $answers = Word::select("meaning")
                    ->inRandomOrder()
                    ->limit(3)
                    ->get();

                    //method to convert a model instance or a collection of model instances returned from the database to an array
                    $answersTable = $answers->toArray();

                }while(in_array($CorrectAnswer, $answersTable));

                //The Answers

                for($x = 0; $x < 3; $x++){
                    $words->{'Answer_'.$x+1} = $answers[$x]->meaning;
                }
               
                // $words->Answer_1 = $answers[0]->meaning;
                // $words->Answer_2 = $answers[1]->meaning;
                // $words->Answer_3 = $answers[2]->meaning;
                // $words->id_user = Auth::id();

                $exist = false;
                foreach($answers as $answers){
                    if($answers->meaning === $CorrectAnswer){
                        $exist =true;
                    }
                }
              
                if(!$exist){
                    $k = rand(0,2);

                    $words->{'Answer_'.$k+1} = $CorrectAnswer;
                }    


                
            }
        }
        
        if($words1->count() > 0 ){    
            return response()->json([
                'words'  =>  $words1,
            ],200);
        }
        else{
            return response()->json([
                'Status' => 404 ,
                 'Message' => 'No Records Found',
                //  'id_user' => Auth::id()
                ], 
            404);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'word' => 'required|string|max:190',
            'meaning' =>'required|string|max:190'
        ]) ;
        if($validator->fails())
        {
            return response()->json([
                'Status' => 422,
                'Message' => $validator->messages()
            ], 422);
        }
        else
        {
            $word = Word::create([
                'word' => $request->word,
                'meaning' => $request->meaning,
                'id_user' => 2
                //'id_user' => Auth::id()
            ]);
            if($word)
            {
                return response()->json([
                    'Status' => 200,
                    'Message' => 'Your Word has been saved With Successfully!'
                ], 200);
            }
            else
            {
                return response()->json([
                    'Status' => 500,
                    'Message' => 'Something Went Wrong!'
                ], 500);

            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $word = Word::find($id);//where('id_user',Auth::id())->
        if($word) 
        {
            return response([
                'Status' => 200,
                'Wors' => $word,
                //'id_user' => Auth::id()
            ],200);
        }
        else
        {
            return response([
                'Status' => 404,
                'Message' => 'No such Word Found!',
                'id_user' => Auth::id()
            ], 404);
        }
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $word = Word::find($id);//where('id_user',Auth::id())->
        if($word)
        {
            return response()->json([
                'Status' => 200,
                'Word' => $word
            ], 200);
        }
        else
        {
            return response()->json([
                'Status' => 404,
                'Message' => 'No such Word Found!'
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(),[
            'word' => 'required|string|max:190',
            'meaning' => 'required|string|max:190'
        ]);

        if($validator->fails())
        {
            return response()->json([
                'Status' => 422 ,
                'Errors' => $validator->messages()
            ]);           
        }
        else
        {
            $word = Word::find($id);//where('id_user',Auth::id())->
           
           if($word)
           {
                $word_up = $word->update([
                    'word' => $request->word,
                    'meaning' => $request->meaning
                ]); 
                if($word_up)
                {
                    return response()->json([
                        'Status' => 200,
                        'Message' => 'The Word Updated Successfully!'
                    ], 200);
                }
                else
                {
                    return response()->json([
                        'Status' => 500,
                        'Message' => 'Something Went Wrong!'
                    ], 500);
                }
            }
            else
            {
                return response()->json([
                    'Status' => 404,
                    'Message' => 'No Such Word Found!'
                ], 404);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $word = Word::find($id);//where('id_user',Auth::id())->
        if($word)
        {
            $word_del = $word->delete();
            if($word_del)
            {
                return response([
                    'status' => 200,
                    'Message' => 'The Word deleted Successfully!'
                ], 200);
            }
            else
            {
                return response([
                    'status' => 500,
                    'Message' => 'Something went Wrong!'
                ], 500);
            }
        }
        else
        {
            return response([
                'Status' => 404,
                'Message' => 'No Such Word Found!'
            ], 404);
        }
    }
}




/**
 
        // $words = $words1->map(function ($item) {
        //$meaning = Word::select("meaning")->first();
        // $answer_1 = Word::select("meaning")->Limit(1)
        // ->select("meaning")
        // ->inRandomOrder()
        // ->limit(1)
        // ->whereNotIn("meaning" , $meaning)
        // ->get();
        // $answer_2 = Word::select("meaning")
        //                 ->inRandomOrder()
        //                 ->limit(1)
        //                 ->whereNotIn("meaning" , $answer_1)
        //                 ->whereNotIn("meaning" , $meaning)
        //                 ->get();
        //     $item->Answer_1 = $answer_1;
        //     $item->Answer_2 = $answer_2;
        //     return $item;
        // });
 */