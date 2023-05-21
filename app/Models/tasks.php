<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\category;

class tasks extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function categories(){
        return $this->belongsTo(category::class,'category_id','id');
    }
}
