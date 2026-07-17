<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('social_settings', function (Blueprint $table) {

            $table->string('phone')->nullable()->after('id');
            $table->string('email')->nullable()->after('phone');

            $table->string('linkedin')->nullable()->after('instagram');
            $table->string('twitter')->nullable()->after('linkedin');
            $table->string('whatsapp')->nullable()->after('youtube');

            $table->string('seo_title')->nullable()->after('copyright_text');
            $table->text('seo_description')->nullable()->after('seo_title');
            $table->text('seo_keywords')->nullable()->after('seo_description');

        });
    }

    public function down(): void
    {
        Schema::table('social_settings', function (Blueprint $table) {

            $table->dropColumn([
                'phone',
                'email',
                'linkedin',
                'twitter',
                'whatsapp',
                'seo_title',
                'seo_description',
                'seo_keywords',
            ]);

        });
    }
};