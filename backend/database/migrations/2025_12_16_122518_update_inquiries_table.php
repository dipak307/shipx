<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('inquiries', function (Blueprint $table) {
            $table->dropColumn('country');

            $table->string('business')->nullable();
            $table->string('phone')->nullable();
            $table->text('message')->nullable();
            $table->string('file')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('inquiries', function (Blueprint $table) {
            $table->string('country')->nullable();
            $table->dropColumn(['business', 'phone', 'message', 'file']);
        });
    }
};
