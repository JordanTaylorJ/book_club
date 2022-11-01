class ReviewsController < ApplicationController

    def create
        review = Review.create(review_params)
        if review.valid?
            render json: review, status: :created 
        else 
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    private 

    def review_params
        params.permit(:user_id, :game_id, :comment, :favorite)
    end

end
