FROM ubuntu:20.04

# Instala las dependencias necesarias
RUN apt-get update && apt-get install -y \
    php \
    php-mysql \
    php-xml \
    php-mbstring \
    php-curl \
    php-zip \
    php-bcmath \
    curl \
    git \
    unzip \
    && apt-get clean

# Instala Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Establece el directorio de trabajo
WORKDIR /var/www/html

# Copia el archivo composer.json y composer.lock
COPY composer.json composer.lock ./

# Instala las dependencias de Composer
RUN composer install --no-scripts --no-autoloader

# Copia el resto del código de la aplicación
COPY . .

# Compila la aplicación
RUN composer dump-autoload --optimize

# Exponer el puerto de la aplicación
EXPOSE 8000

# Comando de inicio
CMD php artisan serve --host=0.0.0.0 --port=8000
