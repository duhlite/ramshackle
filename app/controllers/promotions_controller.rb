class PromotionsController < ApplicationController
  # returns the active promotion
  def index
    @promotion = Promotion.find_by(active: true)
    promo_info = nil
    if @promotion
      promo_info = {
        name: @promotion.name,
        url: @promotion.url,
        description: @promotion.description
      }
    end

    render json: promo_info
  end
end