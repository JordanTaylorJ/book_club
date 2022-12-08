class ReviewsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        review = Review.create(review_params)
        if review.valid?
            render json: review, status: :created 
        else 
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    def update 
        review = find_review
        review.update(review_params)
        render json: review, status: :accepted 
    end

    def destroy
        review = find_review
        review.destroy 
        head :no_content 
    end

    private 

    def review_params
        params.permit(:id, :user_id, :book_id, :comment, :favorite)
    end

    def find_review
        review = Review.find(params[:id])
    end 

    def render_not_found_response
        render json: {error: "review not found"}, status: :not_found
    end 

end
