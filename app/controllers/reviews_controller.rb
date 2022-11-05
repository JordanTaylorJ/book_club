class ReviewsController < ApplicationController

    def create
        review = Review.create(review_params)
        if review.valid?
            render json: review, status: :created 
        else 
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    def update 
        review = Review.find_by(id: params[:id])
        if review 
            review.update(review_params)
            render json: review, status: :accepted 
        else 
            render json: {error: "review not found"}, status: :not_found
        end
    end

    def destroy
        review = Review.find_by(id: params[:id])
        if review 
            review.destroy 
            head :no_content 
        else 
            render json: {error: "review not found"}, status: :not_found
        end
    end

    private 

    def review_params
        params.permit(:id, :user_id, :book_id, :comment, :favorite)
    end

end
