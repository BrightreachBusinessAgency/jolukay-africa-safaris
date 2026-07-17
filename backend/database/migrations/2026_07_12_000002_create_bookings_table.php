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
        Schema::create('bookings', function (Blueprint $table) {

            $table->id();

            $table->foreignId('package_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete();

            $table->string('full_name');
            $table->string('email');
            $table->string('phone', 30);
            $table->string('country')->nullable();

            $table->string('destination')->nullable();
            $table->string('package_name')->nullable();

            $table->date('travel_date')->nullable();
            $table->boolean('flexible_dates')->default(false);

            $table->string('duration')->nullable();

            $table->unsignedInteger('adults')->default(1);
            $table->unsignedInteger('children')->default(0);

            $table->enum('accommodation', [
                'Budget',
                'Mid-range',
                'Luxury',
                'Ultra Luxury'
            ])->nullable();

            $table->enum('safari_type', [
                'Private Safari',
                'Shared Safari',
                'Group Safari'
            ])->nullable();

            $table->string('budget')->nullable();

            $table->longText('special_requests')->nullable();

            $table->enum('status', [
                'New',
                'Contacted',
                'Quoted',
                'Confirmed',
                'Completed',
                'Cancelled'
            ])->default('New');

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};