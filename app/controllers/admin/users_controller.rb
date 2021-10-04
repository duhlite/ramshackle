class Admin::UsersController < Admin::AdminController
  def index
    @users = User.all
    @guests = Guest.all
  end

  def show
    @resource = User.find(params[:id])
    @addresses = @resource.addresses
  end

end