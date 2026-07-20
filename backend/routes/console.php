<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

// Automatically run pending migrations on first boot (safe way)
Artisan::command('app:init-db', function () {
    $this->info('Initializing database...');
    try {
        $this->call('migrate', ['--force' => true]);
        $this->call('db:seed', ['--force' => true]);
        $this->info('Database initialized successfully!');
    } catch (\Exception $e) {
        $this->error('Database initialization failed: ' . $e->getMessage());
    }
})->purpose('Initialize database with migrations and seeds');

