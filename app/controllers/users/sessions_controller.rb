# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    response = { errors: "incorrect email or password" }
    # If authentication fails - returns a 401 (Unauthorized) Error and the front end displays an error message
    # Nothing below authentication will happen
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)
    response = { user: {
      firstName: current_user.first_name,
      lastName: current_user.last_name,
      admin: current_user.admin,
      email: current_user.email
    }}
  
    render json: response
  end

  # DELETE /resource/sign_out
  def destroy
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    render json: {}
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
