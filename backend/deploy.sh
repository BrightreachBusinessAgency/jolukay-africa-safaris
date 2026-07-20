#!/bin/bash
set -e

echo "Running database migrations..."
php artisan migrate --force

echo "Seeding database..."
php artisan db:seed --force

echo "Deployment complete!"

