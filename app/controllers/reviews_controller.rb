class ReviewsController < ApplicationController

    def create
        review = Review.create(review_params)
        if review.valid?
            render json: review, status: :created 
        else 
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    def destroy
        review = Review.find_by(params[:id])
        review.destroy 
        head :no_content 
    end

    private 

    def review_params
        params.permit(:user_id, :book_id, :comment, :favorite)
    end

end
