<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('social_settings', function (Blueprint $table) {

            $table->id();

            $table->string('facebook')->nullable();

            $table->string('instagram')->nullable();

            $table->string('tiktok')->nullable();

            $table->string('youtube')->nullable();

            $table->text('copyright_text')->nullable();

            $table->timestamps();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('social_settings');
    }
};