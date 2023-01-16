class BooksController < ApplicationController

    skip_before_action :authorized, only: [:show, :favorite]

    def show
        books = Book.all.order(:created_at).reverse
        render json: books, include: 'reviews.user', status: :ok
    end

    def create
        book = Book.create(book_params)
        if book.valid?
            render json: book, status: :created
        else 
            render json: {error: book.errors.full_messages}, status: :unprocessable_entity
        end
    end 

    def favorite
        top = 0
        favorite_book = ''
        books = Book.all
        books.each do |book|
            if book.favorite_book_count > top 
                top = book.favorite_book_count
                favorite_book = book
            end
        end
        render json: favorite_book, status: :ok 
    end 

    private

    def book_params
        params.permit(:title, :author, :image)
    end 

end
