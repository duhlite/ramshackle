class UsersController < ApplicationController
  # user to fetch info about the user - kept seperate from signin and registration controllers
  def index
    user = nil
    if user_signed_in?
      user = {
        firstName: current_user.first_name,
        lastName: current_user.last_name,
        email: current_user.email,
        admin: current_user.admin
      }
    end
    render json: user
  end
end