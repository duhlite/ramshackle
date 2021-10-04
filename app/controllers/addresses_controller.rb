class AddressesController < ApplicationController
  # user to fetch info about the user - kept seperate from signin and registration controllers
  def create
    response = {}
    @address = Address.new(address_params)
    
    # If a user is signed in we just attempt to make an address object and then return success or errors
    if user_signed_in?
      @address.user = current_user
      if @address.save
        response = { success: true }
      else
        response = { errors: @address.errors.messages }
      end
    else
      # If no user is signed in we need a guest object to hold first/last name and email
      # We have to make sure both that and the address save, otherwise return errors for both
      @guest = Guest.new(guest_params)
      if @guest.save
        @address.guest = @guest
        if @address.save
          response = { success: true }
        else
          response = { errors: @address.errors.messages }
        end
      else
        @address.valid?
        response = { errors: @guest.errors.messages.merge(@address.errors.messages) }
      end
    end

    render json: response
  end

  private
  def handle_params
    params.require(:address).permit(:line_one, :line_two, :city, :state, :zip, :first_name, :last_name, :email)
  end

  def address_params
    values = handle_params
    [:first_name, :last_name, :email].each do |key|
      values.delete(key)
    end
    values
  end

  def guest_params
    values = handle_params
    [:line_one, :line_two, :city, :state, :zip].each do |key|
      values.delete(key)
    end
    values
  end
end