<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inquiry;
use Exception;

class InquiriesController extends Controller
{
    // Store new inquiry
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string',
                'email' => 'required|email',
                'business' => 'nullable|string',
                'phone' => 'nullable|string',
                'message' => 'nullable|string',
                'file' => 'nullable|file|mimes:jpg,jpeg,png,pdf,doc,docx|max:2048',
            ]);

            $inquiry = new Inquiry();
            $inquiry->name = $request->name;
            $inquiry->business = $request->business;
            $inquiry->email = $request->email;
            $inquiry->phone = $request->phone;
            $inquiry->message = $request->message;

            if ($request->hasFile('file')) {
                $path = $request->file('file')->store('inquiries', 'public');
                $inquiry->file = $path;
            }

            $inquiry->save();

            return response()->json([
                'success' => true,
                'message' => 'Inquiry sent successfully',
                'data' => $inquiry
            ], 201);

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to store inquiry',
                'error' => $e->getMessage()
            ], 422);
        }
    }

    // Get single inquiry
    public function getInquiry($id)
    {
        try {
            $inquiry = Inquiry::find($id);

            if (!$inquiry) {
                return response()->json([
                    'success' => false,
                    'message' => 'Inquiry not found'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'message' => 'Fetched data successfully',
                'data' => $inquiry
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch inquiry',
                'error' => $e->getMessage()
            ], 422);
        }
    }

    // Update inquiry
    public function updateInquiry(Request $request, $id)
    {
        try {
            $inquiry = Inquiry::find($id);

            if (!$inquiry) {
                return response()->json([
                    'success' => false,
                    'message' => 'Inquiry not found'
                ], 404);
            }

            $request->validate([
                'name' => 'nullable|string',
                'email' => 'nullable|email',
                'business' => 'nullable|string',
                'phone' => 'nullable|string',
                'message' => 'nullable|string',
                'file' => 'nullable|file|mimes:jpg,jpeg,png,pdf,doc,docx|max:2048',
            ]);

            $inquiry->name = $request->name ?? $inquiry->name;
            $inquiry->email = $request->email ?? $inquiry->email;
            $inquiry->business = $request->business ?? $inquiry->business;
            $inquiry->phone = $request->phone ?? $inquiry->phone;
            $inquiry->message = $request->message ?? $inquiry->message;

            if ($request->hasFile('file')) {
                $path = $request->file('file')->store('inquiries', 'public');
                $inquiry->file = $path;
            }

            $inquiry->save();

            return response()->json([
                'success' => true,
                'message' => 'Inquiry updated successfully',
                'data' => $inquiry
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update inquiry',
                'error' => $e->getMessage()
            ], 422);
        }
    }

    // Delete inquiry
    public function deleteInquiry($id)
    {
        try {
            $inquiry = Inquiry::find($id);

            if (!$inquiry) {
                return response()->json([
                    'success' => false,
                    'message' => 'Inquiry not found'
                ], 404);
            }

            $inquiry->delete();

            return response()->json([
                'success' => true,
                'message' => 'Inquiry deleted successfully'
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete inquiry',
                'error' => $e->getMessage()
            ], 422);
        }
    }

    // Get all inquiries
    public function getAll()
    {
        try {
            $inquiries = Inquiry::all();

            return response()->json([
                'success' => true,
                'message' => 'All inquiry data fetched successfully',
                'data' => $inquiries
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch inquiries',
                'error' => $e->getMessage()
            ], 422);
        }
    }
}
