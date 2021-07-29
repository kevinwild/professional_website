<?php

namespace App\Http\Controllers;

use PDF;
use Illuminate\Http\Request;

class PdfController extends Controller
{
    public function downloadResume()
    {
        $pdf = PDF::loadView('pdfs.resume');
        return $pdf->download('Kevin-Wildermuth-Resume.pdf');
    }
}
