class BooksController < ApplicationController

    def create
        book = Book.create(book_params)
        if book.valid?
            render json: book, status: :created
        else 
            render json: {error: book.errors.full_messages}, status: :unprocessable_entity
        end
    end 

    private

    def book_params
        params.permit(:title, :author)
    end 

end
