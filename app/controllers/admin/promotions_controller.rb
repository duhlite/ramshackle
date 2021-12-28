class Admin::PromotionsController < Admin::AdminController
  def index
    @promotions = Promotion.all
  end

  def new
    @promotion = Promotion.new
  end

  def create
    @promotion = Promotion.new(promotions_params)

    if @promotion.save
      redirect_to admin_promotions_path
    else
      @error = @promotion.errors.full_messages.to_sentence
      render :new
    end
  end

  def edit
    @promotion = Promotion.find(params[:id])
    render :new
  end

  def update
    @promotion = Promotion.find(params[:id])

    if @promotion.update(promotions_params)
      redirect_to admin_promotions_path
    else
      @error = @promotion.errors.full_messages.to_sentence
      render :new
    end
  end

  def destroy
    @promotion = Promotion.find(params[:id])
    @promotion.destroy
    redirect_to admin_promotions_path
  end

  private
  def promotions_params
    params.require(:promotion).permit(:name, :url, :description, :active)
  end
end